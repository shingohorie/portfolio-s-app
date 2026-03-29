import Link from 'next/link';

import type { AdjacentPosts } from '@/types/microcms';
import { generateURL } from '@/lib/microcms';

export function Pager({ data }: { data: AdjacentPosts }) {
  return (
    <div className="relative flex items-center justify-center py-2 gap-6">
      {data.previous && (
        <p className="order-1 flex-1 max-w-[40%] mr-auto">
          <Link
            href={generateURL(
              'is_sticky' in data.previous ? 'works' : 'tools',
              data.previous.id
            )}
            className="group block h-full py-2 hover:opacity-70 transition-opacity duration-300"
          >
            <span className="flex flex-col items-start font-medium text-small">
              <span className="block mb-1 text-xs leading-none whitespace-nowrap text-gray-dark">
                <i className="inline-block mr-[0.5em] not-italic group-hover:-translate-x-[2px] transition-transform">
                  ‹
                </i>
                Next Works
              </span>
              {data.previous.title}
            </span>
          </Link>
        </p>
      )}
      {data.next && (
        <p className="order-3 flex-1 text-right max-w-[40%] ml-auto">
          <Link
            href={generateURL(
              'is_sticky' in data.next ? 'works' : 'tools',
              data.next.id
            )}
            className="group block h-full py-2 hover:opacity-70 transition-opacity duration-300"
          >
            <span className="flex flex-col items-end font-medium text-small">
              <span className="block mb-1 text-xs leading-none whitespace-nowrap text-gray-dark">
                Previous Works
                <i className="inline-block ml-[0.5em] not-italic group-hover:translate-x-[2px] transition-transform">
                  ›
                </i>
              </span>
              {data.next.title}
            </span>
          </Link>
        </p>
      )}
      <p className="order-2 absolute top-0 left-0 right-0 bottom-0 z-10 w-[38px] h-[38px] m-auto ">
        <Link
          href={
            (data.next && 'is_sticky' in data.next) ||
            (data.previous && 'is_sticky' in data.previous)
              ? '/works'
              : '/tools'
          }
          className="block w-full h-full hover:opacity-70 transition-opacity duration-300"
        >
          <span className="block w-full h-full custom-pager-archive"></span>
        </Link>
      </p>
    </div>
  );
}
