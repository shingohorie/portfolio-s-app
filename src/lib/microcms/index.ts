import { cache } from 'react';
import { createClient } from 'microcms-js-sdk';

import type {
  Work,
  Tool,
  Era,
  Tag,
  Endpoint,
  AdjacentPosts,
} from '@/types/microcms';
import type { MicroCMSQueries } from 'microcms-js-sdk';

// 環境変数にMICROCMS_SERVICE_DOMAINが設定されていない場合はエラーを投げる
if (!process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

// 環境変数にMICROCMS_API_KEYが設定されていない場合はエラーを投げる
if (!process.env.NEXT_PUBLIC_MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required');
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
/**
 * 指定したエンドポイントから1ページのコンテンツ一覧を取得する
 * @param endpoint microCMSのエンドポイント名
 * @param queries 取得オプション（limit, offset, ordersなど）
 * @returns 取得したコンテンツ配列
 */
export const fetchPosts = cache(
  async (
    endpoint: Endpoint,
    queries?: MicroCMSQueries,
  ): Promise<(Work | Tool | Tag | Era)[]> => {
    // 実際のリクエスト処理
    const data = await client.get({
      endpoint,
      queries,
    });
    return data.contents;
  },
);

// ========================================
// 投稿の全件取得
// ========================================
/**
 * 指定したエンドポイントの全件データを取得（キャッシュ付き）
 * @param endpoint microCMSのエンドポイント名
 * @param queries 取得オプション
 * @returns 取得した全件コンテンツ配列
 */
export const fetchAllPosts = cache(
  async (
    endpoint: Endpoint,
    queries?: MicroCMSQueries,
  ): Promise<(Work | Tool | Tag | Era)[]> => {
    // 実際のリクエスト処理
    const data = await client.getAllContents({
      endpoint,
      queries,
    });
    if (!data) return [];
    return data;
  },
);

// ========================================
// URLの生成
// ========================================
/**
 * 端末内のページURLを生成する
 * @param endpoint microCMSのエンドポイント名
 * @param id コンテンツID
 * @returns 生成したURL文字列
 */
export function generateURL(endpoint: Endpoint, id: string): string {
  return `/${endpoint}/${id}`;
}

// ========================================
// 前後の記事の取得
// ========================================
/**
 * 投稿一覧から指定IDの前後の投稿を探す
 * @param endpoint microCMSのエンドポイント名
 * @param id 検索対象コンテンツのID
 * @returns 前後の投稿情報（存在しない場合はnull）
 */
export async function fetchAdjacentPosts(
  endpoint: Endpoint,
  id: string,
): Promise<AdjacentPosts> {
  // 全ての記事を取得してから、引数に渡されたIDをもとに前後の記事を特定する
  const ALL_DATA = (await fetchAllPosts(endpoint, {
    orders: 'system:default',
  })) as (Work | Tool)[];

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
