import { SecondaryHeader } from "@/components/common/SecondaryHeader";
import { Card } from "@/components/common/Card";

import type { Work, Tool } from "@/types/microcms";
import { generateURL } from "@/lib/microcms";

interface EntryListProps {
  heading?: string;
  annotation?: string;
  data: (Work | Tool)[];
}

export function EntryList({ heading, annotation, data }: EntryListProps) {
  return (
    <>
      {heading && <SecondaryHeader text={heading} />}
      {annotation && (
        <p className="mt-3 mb-4 text-xs leading-1.7 text-gray-dark whitespace-pre-line">
          {annotation}
        </p>
      )}
      <div className="grid grid-cols-3 gap-x-3 gap-y-7">
        {data.map((d, i) => (
          <div key={i}>
            {"is_sticky" in d ? (
              <Card
                key={i}
                title={d.title}
                image={d.thumbnail.url ?? ""}
                tags={d.tags}
                date={d.released}
                href={generateURL("works", d.id)}
                client={d.client}
              />
            ) : (
              <Card
                key={i}
                title={d.title}
                image={d.thumbnail.url ?? ""}
                tags={d.tags}
                date={d.released}
                href={generateURL("tools", d.id)}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
}
