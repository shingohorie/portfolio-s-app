import Link from "next/link";
import { formatInTimeZone } from "date-fns-tz";

import { Tag } from "@/components/common/Tag";

import type { Tag as TagType } from "@/types/microcms";

interface MediaProps {
  title: string;
  image: string;
  tags?: TagType[];
  date?: string;
  href?: string;
  client?: string;
  direction?: "" | "reverse";
}

function MediaBody({
  title,
  image,
  tags,
  date,
  href,
  client,
  direction,
}: MediaProps) {
  return (
    <div
      className={`flex items-center ${direction === "reverse" && "flex-row-reverse"}`}
    >
      <figure
        className={`w-18 border border-gray-light flex-shrink-0" ${direction === "reverse" ? "ml-3" : "mr-3"}`}
      >
        <img
          className="full h-auto max-w-full align-bottom"
          width="500"
          height="500"
          src={image}
          alt=""
        />
      </figure>
      <div className="flex-1">
        <p className="text-large leading-[1.5]">{title}</p>
        {client && (
          <p className="mt-1 text-xs leading-none text-gray-dark">{client}</p>
        )}
        {tags && (
          <ul className="mt-2 flex flex-wrap gap-x-1 gap-y-[5px] pl-2 border-l border-gray-medium">
            {tags.map((tag) =>
              href ? (
                <Tag key={tag.id} text={tag.name ?? ""} />
              ) : (
                <Tag
                  key={tag.id}
                  text={tag.name ?? ""}
                  id={tag.id ?? undefined}
                />
              ),
            )}
          </ul>
        )}
        {date && (
          <p className="mt-3 text-xs leading-none text-gray-dark">
            {formatInTimeZone(date, "Asia/Tokyo", "yyyy/MM")}
          </p>
        )}
      </div>
    </div>
  );
}

export function Media({
  title,
  image,
  tags,
  date,
  href = "",
  client = "",
  direction,
}: MediaProps) {
  const content = (
    <MediaBody
      title={title}
      image={image}
      tags={tags}
      date={date}
      href={href}
      client={client}
      direction={direction}
    />
  );
  return href ? (
    <Link
      href={href}
      className="block hover:opacity-70 transition-opacity duration-300"
    >
      {content}
    </Link>
  ) : (
    content
  );
}
