import type { MicroCMSListContent } from 'microcms-js-sdk';

// ========================================
// S3から取得している画像フィールドの型
// ========================================
// SDK標準の MicroCMSImage は { url, height, width } なので、
// カスタムフィールド（S3）の実態に合わせて独自定義のままとする
type S3Image = {
  url: string | null;
  id: string;
};

// ========================================
// 参照コンテンツの型
// ========================================
// MicroCMSListContent を継承するだけで、id や日付型が自動付与される
export type Tag = MicroCMSListContent & {
  name: string;
};

export type Era = MicroCMSListContent & {
  name: string;
};

// ========================================
// 繰り返しフィールドの型
// ========================================
// 繰り返しフィールド自体には id/createdAt 等がつかないため、ListContentは継承しない
export type URL = {
  fieldId: 'url';
  url: string;
};

export type Feature = {
  fieldId: 'feature';
  detail: string;
};

export type Figure = {
  fieldId: 'figure';
  media: S3Image | null;
  caption: string;
};

// ========================================
// 実績APIの型定義
// ========================================
export type Work = MicroCMSListContent & {
  is_sticky: boolean;
  title: string;
  copy: string;
  eyecatch: S3Image;
  thumbnail: S3Image;
  client: string;
  released: string;

  // 配列・参照フィールド
  position: string[];
  target: string[];
  tags: Tag[];
  era: Era;

  // HTMLエディタ
  contents: {
    code: string;
  };

  // 繰り返しフィールド
  urls: URL[];
  features: Feature[];
  figures: Figure[];
};

// ========================================
// 実績（ツール）APIの型定義
// ========================================
export type Tool = Omit<Work, 'is_sticky' | 'copy' | 'client' | 'urls'>;

// ========================================
// エンドポイント名の型定義
// ========================================
export type Endpoint = 'works' | 'tools' | 'tags' | 'eras';

// ========================================
// 前後の記事取得用の型定義
// ========================================
export type AdjacentPosts = {
  previous: Work | Tool | Tag | null;
  next: Work | Tool | Tag | null;
};
