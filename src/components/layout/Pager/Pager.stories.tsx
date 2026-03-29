import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Pager } from './';
import type { AdjacentPosts } from '@/types/microcms';

const meta = {
  component: Pager
} satisfies Meta<typeof Pager>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockData = {
  previous: {
    id: '1',
    title: 'Work Sample 1',
    released: '2023-01-01',
    is_sticky: false
  },
  next: {
    id: '2',
    title: 'Work Sample 2',
    released: '2023-01-01',
    is_sticky: false
  }
};

const mockDataLatest = {
  previous: null,
  next: {
    id: '2',
    title: 'Work Sample 2',
    released: '2023-01-01',
    is_sticky: false
  }
};

const mockDataOldest = {
  previous: {
    id: '1',
    title: 'Work Sample 1',
    released: '2023-01-01',
    is_sticky: false
  },
  next: null
};

export const Default: Story = {
  args: {
    data: mockData as AdjacentPosts
  }
};

export const Latest: Story = {
  name: '前の記事のみ',
  args: {
    data: mockDataLatest as AdjacentPosts
  }
};

export const Oldest: Story = {
  name: '次の記事のみ',
  args: {
    data: mockDataOldest as AdjacentPosts
  }
};
