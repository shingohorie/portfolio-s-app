import { Footer } from "./Footer";

import type { Work, Tool } from "@/types/microcms";
import { fetchPosts } from "@/lib/microcms";

export async function FooterContainer() {
  // microCMSから実績を5件取得
  const DATA_WORKS = (await fetchPosts("works", {
    limit: 5,
    orders: "system:default",
  })) as Work[];

  // microCMSから実績（ツール）を5件取得
  const DATA_TOOLS = (await fetchPosts("tools", {
    limit: 5,
    orders: "system:default",
  })) as Tool[];

  // タグに「PL」を含む実績・ツールを5件ずつ取得し、合算して新しい順に5件取得
  // microCMSではAPIの仕様上、実績とツールをまとめて取得できないため、2回に分けて取得してから合算する
  const DATA_MANAGEMENTS_1 = (await fetchPosts("works", {
    limit: 5,
    orders: "system:default",
    filters: "tags[contains]pl",
  })) as Work[];

  const DATA_MANAGEMENTS_2 = (await fetchPosts("tools", {
    limit: 5,
    orders: "system:default",
    filters: "tags[contains]pl",
  })) as Tool[];

  const DATA_MANAGEMENTS = [...DATA_MANAGEMENTS_1, ...DATA_MANAGEMENTS_2]
    .sort((a, b) => (a.released < b.released ? 1 : -1)) // リリース日の新しい順にソート
    .slice(0, 5);

  return (
    <Footer
      works={DATA_WORKS}
      tools={DATA_TOOLS}
      managements={DATA_MANAGEMENTS}
    />
  );
}
