import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { PrimaryHeader } from "./";

const meta = {
  component: PrimaryHeader,
} satisfies Meta<typeof PrimaryHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text_ja: "テスト第1レベル見出し",
    text_en: "Level 1 Heading",
  },
};

/**
 * 第1レベルの見出しだが、`h1` ~ `h3` までタグ名を明示的に指定することも可能。
 * 今回は `level={3}` を指定したため `h3` で描画される
 */
export const LevelSpecified: Story = {
  name: "指定したタグ名で描画",
  args: {
    text_ja: "テスト第1レベル見出し",
    text_en: "Level 1 Heading",
    level: 3,
  },
};

/**
 * `size="medium"` を明示的に指定すると、小さめのサイズで描画される
 */
export const MediumSize: Story = {
  name: "指定したタグ名で描画",
  args: {
    text_ja: "テスト第1レベル見出し",
    text_en: "Level 1 Heading",
    size: "medium",
  },
};
