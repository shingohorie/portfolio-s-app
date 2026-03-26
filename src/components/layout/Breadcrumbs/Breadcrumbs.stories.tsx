import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Breadcrumbs } from "./";

const meta = {
  component: Breadcrumbs,
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockData = [
  { name: "Works", href: "/works" },
  { name: "Work Sample 1", href: "/works/1/" },
  { name: "Work Sample 1-a", href: "/works/1/a/" },
];

export const Default: Story = {
  args: {
    directory: mockData,
  },
};
