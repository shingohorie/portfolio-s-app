import { Tag } from "@/components/common/Tag";

import type { Work, Tool, Tag as TagType } from "@/types/microcms";
import { fetchAllPosts } from "@/lib/microcms";

export async function AllTags() {
  const DATA_TAGS = (await fetchAllPosts("tags")) as TagType[];

  const DATA_WORKS = (await fetchAllPosts("works")) as Work[];

  const DATA_TOOLS = (await fetchAllPosts("tools")) as Tool[];

  const DATA_ALL_POSTS = [...DATA_WORKS, ...DATA_TOOLS];

  // タグごとに使用されているコンテンツ数を集計
  const tagCounts = DATA_TAGS.map((tag) => ({
    ...tag,
    count: DATA_ALL_POSTS.filter((post) =>
      post.tags?.some((_tag) => _tag.id === tag.id),
    ).length,
  }));

  // コンテンツ数でソート（多い順）、同数の場合はタグ名で昇順
  const DATA_TAGS_SORTED = tagCounts
    .filter((tag) => tag.count > 0)
    .sort((a, b) => {
      if (b.count !== a.count) {
        return b.count - a.count;
      }
      return (a.name ?? "").localeCompare(b.name ?? "");
    });

  return (
    DATA_TAGS_SORTED && (
      <ul className="flex flex-wrap gap-x-1 gap-y-[5px] mt-2">
        {DATA_TAGS_SORTED.map((tag) => (
          <Tag key={tag.id} text={tag.name ?? ""} id={tag.id ?? undefined} />
        ))}
      </ul>
    )
  );
}
