import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Footer } from "./index";
import type { Work, Tool } from "@/types/microcms";

const meta = {
  component: Footer,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

// モックデータ
const mockWorks = [
  { id: "1", title: "Work Sample 1", released: "2023-01-01" },
  { id: "2", title: "Work Sample 2", released: "2023-02-01" },
];
const mockTools = [{ id: "1", title: "Tool Sample A", released: "2023-01-01" }];

/**
 * - pathnameが `/` の場合
 * - サイトロゴがh1タグになり、リンクは設定されない
 */
export const FrontPage: Story = {
  name: "トップページ用",
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/", // usePathnameをモック
      },
    },
  },
  args: {
    works: mockWorks as Work[],
    tools: mockTools as Tool[],
    managements: [...mockWorks, ...mockTools] as (Work | Tool)[],
  },
};

/**
 * - pathnameが `/works/` の場合
 * - サイトロゴがpタグになり、リンクが設定される
 */
export const LowerPage: Story = {
  name: "下層ページ用",
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/works/", // usePathnameをモック
      },
    },
  },
  args: {
    works: mockWorks as Work[],
    tools: mockTools as Tool[],
    managements: [...mockWorks, ...mockTools] as (Work | Tool)[],
  },
};
