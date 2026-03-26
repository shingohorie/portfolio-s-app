import Link from "next/link";

import type { URL as URLType } from "@/types/microcms";

interface EntryInfoURLProps {
  urls: URLType[];
  className?: string;
}

function URLs({ data }: { data: URLType[] }) {
  return (
    <div className="flex flex-col gap-y-[4px]">
      {data.map((d) => (
        <p className="w-full break-all" key={d.url}>
          <Link
            href={d.url}
            target="_blank"
            className="underline text-link hover:text-link-hover transition-colors duration-300"
          >
            {d.url}
          </Link>
        </p>
      ))}
    </div>
  );
}

export function EntryInfoURL({ urls, className }: EntryInfoURLProps) {
  return (
    <div className={className ?? className}>
      <p className="mb-1 text-basic">URL</p>
      {urls && urls.length > 0 ? (
        <URLs data={urls} />
      ) : (
        <p>
          本実績は非公開の実績であるか、クローズまたはリニューアルされました
        </p>
      )}
    </div>
  );
}
