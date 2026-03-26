
import { Endpoint, Era, Tag, Tool, Work } from "@/types/microcms";

// ========================================
// メモリキャッシュ（エンドポイントごとの問い合わせ結果を格納し、ビルド時のAPI呼び出し削減する）
// ========================================
type CacheKey = string;

export type CachedContent = (Work | Tool | Tag | Era)[];
export const responseCache = new Map<CacheKey, Promise<CachedContent>>();

export function getCacheKey(endpoint: Endpoint, queriesStr: string): CacheKey {
    return `${endpoint}::${queriesStr}`;
}