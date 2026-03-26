import { Endpoint, Era, Tag, Tool, Work } from "@/types/microcms";

// ========================================
// メモリキャッシュ（エンドポイントごとの問い合わせ結果を格納し、ビルド時のAPI呼び出し削減する）
// ========================================
type CacheKey = string;

export type CachedContent = (Work | Tool | Tag | Era)[];
export const responseCache = new Map<CacheKey, Promise<CachedContent>>();

export function getAPICacheKey(endpoint: Endpoint, queriesStr: string): CacheKey {
    return `${endpoint}::${queriesStr}`;
}

export function setAPICache(key: CacheKey, data: Promise<CachedContent>): void {
    responseCache.set(key, data);
}

export function getAPICache(key: CacheKey): Promise<CachedContent> | undefined {
    return responseCache.get(key);
}

export function deleteAPICache(key: CacheKey): void {
    responseCache.delete(key);
}

export function hasAPICacheKey(key: CacheKey): boolean {
    return responseCache.has(key);
}
