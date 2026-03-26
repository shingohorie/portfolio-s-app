import { Endpoint, Era, Tag, Tool, Work } from "@/types/microcms";

// ========================================
// メモリキャッシュ（エンドポイントごとの問い合わせ結果を格納し、ビルド時のAPI呼び出し削減する）
// ========================================
type CacheKey = string;

export type CachedContent = (Work | Tool | Tag | Era)[];
export const responseCache = new Map<CacheKey, Promise<CachedContent>>();

/**
 * APIのエンドポイントとクエリ文字列を組み合わせてキャッシュキーを生成する
 * @param endpoint microCMSのエンドポイント名
 * @param queriesStr クエリパラメータを文字列化したもの（ソート・フィルタなど）
 * @returns キャッシュ用の一意キー
 */
export function getApiCacheKey(endpoint: Endpoint, queriesStr: string): CacheKey {
    return `${endpoint}::${queriesStr}`;
}

/**
 * 生成済みのキャッシュを登録する
 * @param key キャッシュキー
 * @param data キャッシュ対象データ（Promiseラップ）
 */
export function setApiCache(key: CacheKey, data: Promise<CachedContent>): void {
    responseCache.set(key, data);
}

/**
 * キャッシュからデータを取得する
 * @param key キャッシュキー
 * @returns キャッシュにあればPromise<CachedContent>、なければundefined
 */
export function getApiCache(key: CacheKey): Promise<CachedContent> | undefined {
    return responseCache.get(key);
}

/**
 * キャッシュエントリを削除する
 * @param key キャッシュキー
 */
export function deleteApiCache(key: CacheKey): void {
    responseCache.delete(key);
}

/**
 * キャッシュに指定キーが存在するか判定する
 * @param key キャッシュキー
 * @returns 存在する場合はtrue
 */
export function hasApiCacheKey(key: CacheKey): boolean {
    return responseCache.has(key);
}
