import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Siteroot } from './';

const meta = {
  component: Siteroot
} satisfies Meta<typeof Siteroot>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * - pathnameが `/` の場合
 * - リンクは設定されない
 */
export const FrontPage: Story = {
  name: 'トップページ用',
  args: {
    isFrontPage: true
  }
};

/**
 * - pathnameが `/works/` の場合
 * - リンクが設定される
 */
export const LowerPage: Story = {
  name: '下層ページ用',
  args: {
    isFrontPage: false
  }
};

/**
 * - tagNameに指定したタグ名で描画される（トップページ用）
 * - `div` `p` `h1` のみ指定可能
 * - 今回は `div` で描画
 * - トップページ用のためリンクは設定されない
 */
export const TagNameSpecifiedForFrontPage: Story = {
  name: '指定したタグ名で描画（トップページ用）',
  args: {
    isFrontPage: true,
    tagName: 'div'
  }
};

/**
 * - tagNameに指定したタグ名で描画される（下層ページ用）
 * - `div` `p` `h1` のみ指定可能
 * - 今回は `div` で描画
 * - 下層ページ用のためリンクは設定される
 */
export const TagNameSpecifiedForLowerPage: Story = {
  name: '指定したタグ名で描画（下層ページ用）',
  args: {
    isFrontPage: false,
    tagName: 'div'
  }
};
