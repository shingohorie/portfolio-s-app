import { Tag } from '@/components/common/Tag';

import type { Tag as TagType } from '@/types/microcms';

interface EntryInfoTagsProps {
  tags?: TagType[];
  className?: string;
}

export function EntryInfoTags({ tags, className }: EntryInfoTagsProps) {
  return (
    tags && (
      <div className={className ?? className}>
        <ul className="flex flex-wrap gap-x-1 gap-y-[5px]">
          {tags.map((tag) => (
            <li key={tag.id}>
              <Tag text={tag.name ?? ''} id={tag.id ?? undefined} />
            </li>
          ))}
        </ul>
      </div>
    )
  );
}
