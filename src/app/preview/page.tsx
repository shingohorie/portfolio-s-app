'use client';

import { Suspense } from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

import { EntryDetail } from '@/app/_components/detail/EntryDetail';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';

import type { MicroCMSQueries } from 'microcms-js-sdk';

import type { Work, Tool, Endpoint, AdjacentPosts } from '@/types/microcms';
import { fetchAdjacentPosts, fetchPosts, generateURL } from '@/lib/microcms';

function PreviewPageContent() {
  const searchParams = useSearchParams();
  const post_type = searchParams.get('post_type') as Endpoint | null;
  const content_id = searchParams.get('content_id');
  const draftKey = searchParams.get('draftKey');
  const [data, setData] = useState<Work | Tool | null>(null);
  const [dataPager, setDataPager] = useState<AdjacentPosts | null>(null);

  useEffect(() => {
    if (!content_id || !post_type) return;
    const getPreviewData = async () => {
      const query: MicroCMSQueries = {
        filters: `id[equals]${Number(content_id)}`
      };
      if (draftKey) query.draftKey = draftKey;
      const res = await fetchPosts(post_type, query);
      const res2 = await fetchAdjacentPosts(post_type, content_id);
      setData((res as Work[] | Tool[])[0]);
      setDataPager(res2 as AdjacentPosts);

      // タイトル更新はデータ取得後、ブラウザ環境でのみ実行
      if (data) {
        document.title = `${data.title} | ${
          post_type === 'works' ? 'Works' : 'Tools'
        } | PORTFOLIO-S`;
      }
    };

    getPreviewData();
  }, [content_id, post_type, draftKey]);

  if (!data || !dataPager) return null;

  return (
    <>
      {post_type === 'works' && (
        <Breadcrumbs
          directory={[
            { name: 'Works', href: '/works' },
            {
              name: `${data.title}`,
              href: `${generateURL('works', data.id)}`
            }
          ]}
        />
      )}
      {post_type === 'tools' && (
        <Breadcrumbs
          directory={[
            { name: 'Tools', href: '/tools' },
            {
              name: `${data.title}`,
              href: `${generateURL('tools', data.id)}`
            }
          ]}
        />
      )}

      <div className="bg-red text-white px-4 py-2">
        <div className="max-w-[1024px] m-auto">
          プレビューモードで表示中です
        </div>
      </div>

      <EntryDetail data={data} dataPager={dataPager} />
    </>
  );
}

function Loading() {
  return (
    <div className="flex items-center justify-center h-screen text-lg">
      Loading...
    </div>
  );
}

export default function PreviewPage() {
  return (
    <Suspense fallback={<Loading />}>
      <PreviewPageContent />
    </Suspense>
  );
}
