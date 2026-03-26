// libs/microcms.ts
import { createClient } from "microcms-js-sdk";
import { unstable_cache } from "next/cache";

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
// 実績一覧の取得（キャッシュ付き）
// ========================================
const getCachedAllContents = unstable_cache(
  async (endpoint: Endpoint, queriesStr: string) => {
    const queries = queriesStr ? JSON.parse(queriesStr) : {};
    return await client
      .getAllContents({
        endpoint: endpoint,
        queries,
      })
      .then((res) => res)
      .catch((err) => {
        console.error(err);
        return [];
      });
  },
  ["microcms-all-contents"],
  { tags: ["microcms"], revalidate: 3600 }
);

export async function fetchPosts(
  endpoint: Endpoint,
  queries?: MicroCMSQueries
): Promise<(Work | Tool | Era | Tag)[]> {
  const data = await client.get({
    endpoint: endpoint,
    queries: {
      ...queries,
    },
  });
  return data.contents;
}

// ========================================
// 実績一覧の取得（100件以上）
// ========================================
export async function fetchAllPosts(
  endpoint: Endpoint,
  queries?: MicroCMSQueries
): Promise<(Work | Tool | Tag)[]> {
  const queriesStr = queries ? JSON.stringify(queries) : "";
  const data = await getCachedAllContents(endpoint, queriesStr);
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
  const ALL_DATA = await getCachedAllContents(
    endpoint,
    JSON.stringify({ orders: "system:default" })
  );

  if (!ALL_DATA || ALL_DATA.length === 0)
    return {
      previous: null,
      next: null,
    };

  // 引数に渡されたIDをもとに前後の記事を特定
  const index = ALL_DATA.findIndex((item) => item.id === id);
  const previous = index > 0 ? ALL_DATA[index - 1] : null;
  const next = index < ALL_DATA.length - 1 ? ALL_DATA[index + 1] : null;

  return {
    previous,
    next,
  };
}
