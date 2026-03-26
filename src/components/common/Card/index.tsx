import Link from "next/link";
import { formatInTimeZone } from "date-fns-tz";

import { Tag } from "@/components/common/Tag";

import type { Tag as TagType } from "@/types/microcms";

interface CardProps {
  title: string;
  image: string;
  tags?: TagType[];
  date?: string;
  href?: string;
  client?: string;
}

export function Card({ title, image, tags, date, href, client }: CardProps) {
  const vis = (
    <img
      width="770"
      height="770"
      src={image}
      className="w-full h-auto max-w-full align-bottom"
      alt=""
    />
  );
  return (
    <>
      <div className="relative h-full">
        <figure className="border border-gray-light">
          {href ? (
            <Link
              href={href}
              className="block hover:opacity-70 transition-opacity duration-300"
            >
              {vis}
            </Link>
          ) : (
            vis
          )}
        </figure>
        <p className="mt-2 text-large leading-2.7">{title}</p>
        {client && (
          <p className="mt-1 text-xs leading-none text-gray-dark">{client}</p>
        )}
        {tags && (
          <ul className="flex flex-wrap gap-x-1 gap-y-[5px] mt-3 pl-2 border-l border-gray-medium">
            {tags.map((tag) => (
              <Tag
                key={tag.id}
                text={tag.name ?? ""}
                id={tag.id ?? undefined}
              />
            ))}
          </ul>
        )}
        {date && (
          <p className="mt-2 text-xs leading-none text-gray-dark">
            {formatInTimeZone(date, "Asia/Tokyo", "yyyy/MM")}
          </p>
        )}
      </div>
    </>
  );
}
