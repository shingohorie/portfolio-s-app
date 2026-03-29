import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Header } from './Header';

const meta = {
  component: Header,
  parameters: {
    nextjs: {
      appDirectory: true
    }
  }
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * - pathnameが `/` の場合
 * - サイトロゴがh1タグになり、リンクは設定されない
 * - 下線がなくなる
 */
export const FrontPage: Story = {
  name: 'トップページ用',
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/' // usePathnameをモック
      }
    }
  }
};

/**
 * - pathnameが `/works/` の場合
 * - サイトロゴがpタグになり、リンクが設定される
 * - 下線が引かれる
 * - 該当するリンクがカレント表示になる
 */
export const LowerPage: Story = {
  name: '下層ページ用',
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/works/' // usePathnameをモック
      }
    }
  }
};
