import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { SecondaryHeader } from './';

const meta = {
  component: SecondaryHeader
} satisfies Meta<typeof SecondaryHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'テスト第２レベル見出し'
  }
};

/**
 * 第2レベルの見出しだが、`h3` ~ `h5` までタグ名を明示的に指定することも可能。
 * 今回は `level={5}` を指定したため `h5` で描画される
 */
export const LevelSpecified: Story = {
  name: '指定したタグ名で描画',
  args: {
    text: 'テスト第２レベル見出し',
    level: 5
  }
};
