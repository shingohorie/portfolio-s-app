import { createClient } from "microcms-js-sdk";
import { getAPICacheKey, getAPICache, setAPICache, deleteAPICache, hasAPICacheKey } from "@/util/apiCacheController";

import type { Work, Tool, Era, Tag, Endpoint, AdjacentPosts } from "@/types/microcms";
import type { MicroCMSQueries } from "microcms-js-sdk";
import type { CachedContent } from "@/util/apiCacheController";


// 環境変数にMICROCMS_SERVICE_DOMAINが設定されていない場合はエラーを投げる
if (!process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

// 環境変数にMICROCMS_API_KEYが設定されていない場合はエラーを投げる
if (!process.env.NEXT_PUBLIC_MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

// ========================================
// Client SDKの初期化を行う
// ========================================
export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY,
});

// ========================================
// 投稿の一件取得
// ========================================
export async function fetchPosts(
  endpoint: Endpoint,
  queries?: MicroCMSQueries
): Promise<CachedContent> {
  const data = await client.get({
    endpoint: endpoint,
    queries: {
      ...queries,
    },
  });
  return data.contents;
}

// ========================================
// 全ての投稿を取得する（キャッシュがあればそれを返す）
// ========================================
async function getAllContents(endpoint: Endpoint, queriesStr: string) {
  const cacheKey = getAPICacheKey(endpoint, queriesStr);

  // キャッシュがあればそれを返す
  if (hasAPICacheKey(cacheKey)) {
    return getAPICache(cacheKey);
  }

  const queries = queriesStr ? JSON.parse(queriesStr) : {};

  // 新しいリクエストを作成してキャッシュに保存
  const promise = client
    .getAllContents({
      endpoint: endpoint,
      queries,
    })
    .then((res) => res)
    .catch((err) => {
      console.error(err);
      // エラー時はキャッシュから削除
      deleteAPICache(cacheKey);
      return [];
    });

  setAPICache(cacheKey, promise);
  return promise;
}

// ========================================
// 投稿の全件取得
// ========================================
export async function fetchAllPosts(
  endpoint: Endpoint,
  queries?: MicroCMSQueries
): Promise<(Work | Tool | Tag | Era)[]> {
  const queriesStr = queries ? JSON.stringify(queries) : "";
  const data = await getAllContents(endpoint, queriesStr);
  if (!data) return [];
  return data;
}

// ========================================
// URLの生成
// ========================================
export function generateURL(endpoint: Endpoint, id: string): string {
  return `/${endpoint}/${id}`;
}

// ========================================
// 前後の記事の取得
// ========================================
export async function fetchAdjacentPosts(
  endpoint: Endpoint,
  id: string
): Promise<AdjacentPosts> {
  // 全ての記事を取得してから、引数に渡されたIDをもとに前後の記事を特定する
  const ALL_DATA = await getAllContents(
    endpoint,
    JSON.stringify({ orders: "system:default" })
  );

  if (!ALL_DATA || ALL_DATA.length === 0)
    return {
      previous: null,
      next: null,
    };

  // 引数に渡されたIDをもとに前後の記事を特定
  const index = ALL_DATA.findIndex((item: Work | Tool) => item.id === id);
  const previous = index > 0 ? ALL_DATA[index - 1] : null;
  const next = index < ALL_DATA.length - 1 ? ALL_DATA[index + 1] : null;

  return {
    previous,
    next,
  };
}
