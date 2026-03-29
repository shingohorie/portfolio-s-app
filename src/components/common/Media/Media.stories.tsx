import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Media } from './';

const meta = {
  component: Media,
  decorators: [
    (Story) => (
      <div className="w-[500px]">
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof Media>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'テストタイトル',
    image: 'https://placehold.jp/500x500.png',
    tags: [
      {
        name: 'テストタグ１',
        id: 'test-1',
        createdAt: '2025-01-01 00:00:00',
        updatedAt: '2025-01-01 00:00:00'
      },
      {
        name: 'テストタグ２',
        id: 'test-2',
        createdAt: '2025-01-01 00:00:00',
        updatedAt: '2025-01-01 00:00:00'
      }
    ],
    date: '2025-01-01 00:00:00',
    href: '/works/1234/',
    client: 'テストクライアント株式会社'
  }
};

/**
 * `direction = reverse` を明示すると、小さめのサイズで描画される
 */
export const Inverted: Story = {
  name: '左右反転',
  args: {
    title: 'テストタイトル',
    image: 'https://placehold.jp/500x500.png',
    tags: [
      {
        name: 'テストタグ１',
        id: 'test-1',
        createdAt: '2025-01-01 00:00:00',
        updatedAt: '2025-01-01 00:00:00'
      },
      {
        name: 'テストタグ２',
        id: 'test-2',
        createdAt: '2025-01-01 00:00:00',
        updatedAt: '2025-01-01 00:00:00'
      }
    ],
    date: '2025-01-01 00:00:00',
    href: '/works/1234/',
    client: 'テストクライアント株式会社',
    direction: 'reverse'
  }
};

export const NoLink: Story = {
  name: 'リンクなし',
  args: {
    title: 'テストタイトル',
    image: 'https://placehold.jp/500x500.png',
    tags: [
      {
        name: 'テストタグ１',
        id: 'test-1',
        createdAt: '2025-01-01 00:00:00',
        updatedAt: '2025-01-01 00:00:00'
      },
      {
        name: 'テストタグ２',
        id: 'test-2',
        createdAt: '2025-01-01 00:00:00',
        updatedAt: '2025-01-01 00:00:00'
      }
    ],
    date: '2025-01-01 00:00:00',
    client: 'テストクライアント株式会社'
  }
};

export const NoTag: Story = {
  name: 'タグなし',
  args: {
    title: 'テストタイトル',
    image: 'https://placehold.jp/500x500.png',
    date: '2025-01-01 00:00:00',
    href: '/works/1234/',
    client: 'テストクライアント株式会社'
  }
};

export const NoDate: Story = {
  name: '日付なし',
  args: {
    title: 'テストタイトル',
    image: 'https://placehold.jp/500x500.png',
    tags: [
      {
        name: 'テストタグ１',
        id: 'test-1',
        createdAt: '2025-01-01 00:00:00',
        updatedAt: '2025-01-01 00:00:00'
      },
      {
        name: 'テストタグ２',
        id: 'test-2',
        createdAt: '2025-01-01 00:00:00',
        updatedAt: '2025-01-01 00:00:00'
      }
    ],
    href: '/works/1234/',
    client: 'テストクライアント株式会社'
  }
};

export const NoClient: Story = {
  name: 'クライアントなし',
  args: {
    title: 'テストタイトル',
    image: 'https://placehold.jp/500x500.png',
    tags: [
      {
        name: 'テストタグ１',
        id: 'test-1',
        createdAt: '2025-01-01 00:00:00',
        updatedAt: '2025-01-01 00:00:00'
      },
      {
        name: 'テストタグ２',
        id: 'test-2',
        createdAt: '2025-01-01 00:00:00',
        updatedAt: '2025-01-01 00:00:00'
      }
    ],
    href: '/works/1234/'
  }
};

export const OnlyEssentials: Story = {
  name: '必須要素のみ',
  args: {
    title: 'テストタイトル',
    image: 'https://placehold.jp/500x500.png'
  }
};
