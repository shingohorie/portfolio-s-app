// libs/microcms.ts
import { createClient } from "microcms-js-sdk";

import type { Work, Tool, Era, Tag, Endpoint, AdjacentPosts } from "@/types/microcms";
import type { MicroCMSQueries } from "microcms-js-sdk";

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
// メモリキャッシュ（ビルド時のAPI呼び出し削減）
// ========================================
type CacheKey = string;
type CachedContent = (Work | Tool | Tag | Era)[];
const responseCache = new Map<CacheKey, Promise<CachedContent>>();

function getCacheKey(endpoint: Endpoint, queriesStr: string): CacheKey {
  return `${endpoint}::${queriesStr}`;
}

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
// 実績一覧の取得（100件以上）- キャッシュ付き
// ========================================
async function getAllContents(endpoint: Endpoint, queriesStr: string) {
  const cacheKey = getCacheKey(endpoint, queriesStr);

  // キャッシュがあればそれを返す
  if (responseCache.has(cacheKey)) {
    return responseCache.get(cacheKey);
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
      responseCache.delete(cacheKey);
      return [];
    });

  responseCache.set(cacheKey, promise);
  return promise;
}

export async function fetchAllPosts(
  endpoint: Endpoint,
  queries?: MicroCMSQueries
): Promise<(Work | Tool | Tag)[]> {
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
