import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Tag } from "./";

const meta = {
  component: Tag,
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "テストタグ",
    id: "test",
  },
};

/**
 * `id` がpropsになければリンクを生成しなくなる
 */
export const NoLink: Story = {
  name: "リンクなし",
  args: {
    text: "テストタグ",
  },
};
