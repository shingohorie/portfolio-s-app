import 'photoswipe/style.css';

import { Pager } from '@/components/layout/Pager';

import { EntryEyecatch } from './EntryEyecatch';
import { EntryPosition } from './EntryPosition';
import { EntryWysiwyg } from './EntryWysiwyg';
import { EntryFigureList } from './EntryFigureList';
import { EntryInfo } from './EnrtyInfo';

import type { Work, Tool, AdjacentPosts } from '@/types/microcms';

interface EntryDetailProps {
  data: Work | Tool;
  dataPager?: AdjacentPosts;
}

// プレビュー画面（CSR）からも呼び出されるため、asyncにはしてはいけない
export function EntryDetail({ data, dataPager }: EntryDetailProps) {
  return (
    <div className="mt-4 px-4">
      <div className="flex flex-nowrap max-w-[1024px] mx-auto">
        <main className="basis-[670px] pb-8 pr-3">
          {data.eyecatch && (
            <EntryEyecatch image={data.eyecatch.url ?? ''} title={data.title} />
          )}

          {(data.position || data.target) &&
            ('is_sticky' in data ? (
              <EntryPosition
                position={data.position}
                env={data.target}
                client={data.client}
              />
            ) : (
              <EntryPosition position={data.position} env={data.target} />
            ))}

          {data.contents && data.contents.code && (
            <EntryWysiwyg html={data.contents.code} />
          )}

          {data.figures && data.figures.length > 0 && (
            <EntryFigureList data={data.figures} />
          )}
        </main>
        <aside className="flex-shrink-1 basis-[300px] ml-auto pl-3 pb-8 border-l border-gray-light">
          <div className="sticky top-0 left-0">
            {'is_sticky' in data ? (
              <EntryInfo
                urls={data.urls ?? []}
                loanched={data.released}
                features={data.features}
                tags={data.tags}
              />
            ) : (
              <EntryInfo
                loanched={data.released}
                features={data.features}
                tags={data.tags}
              />
            )}
          </div>
        </aside>
      </div>
      {dataPager && (
        <div className="max-w-[1024px] mx-auto border-t border-gray-light">
          <Pager data={dataPager} />
        </div>
      )}
    </div>
  );
}
