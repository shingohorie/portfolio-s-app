import Link from "next/link";

import { Media } from "@/components/common/Media";
import { PrimaryHeader } from "@/components/common/PrimaryHeader";

import type { Work, Tool } from "@/types/microcms";

import { generateURL } from "@/lib/microcms";

interface RecentsProps {
  title_ja: string;
  title_en: string;
  detail_title: string;
  detail_href: string;
  data: (Work | Tool)[];
  className?: string;
}

export function Recents({
  title_ja,
  title_en,
  detail_title,
  detail_href,
  data,
  className,
}: RecentsProps) {
  return (
    <div className={className ?? className}>
      <PrimaryHeader
        text_ja={title_ja}
        text_en={title_en}
        level={2}
        size="medium"
      />
      {data.map((d, i) => (
        <div className="py-4 border-b border-gray-light" key={i}>
          {"is_sticky" in d ? (
            <Media
              title={d.title}
              image={d.thumbnail.url ?? ""}
              tags={d.tags}
              date={d.released}
              client={d.client}
              href={generateURL("works", d.id)}
            />
          ) : (
            <Media
              title={d.title}
              image={d.thumbnail.url ?? ""}
              tags={d.tags}
              date={d.released}
              href={generateURL("tools", d.id)}
            />
          )}
        </div>
      ))}
      <p className="mt-4 text-right text-small">
        <Link
          href={detail_href}
          className="group hover:opacity-70 transition-opacity duration-300"
        >
          {detail_title}
          <i className="inline-block ml-[0.5em] not-italic group-hover:translate-x-[2px] transition-transform">
            ›
          </i>
        </Link>
      </p>
    </div>
  );
}
