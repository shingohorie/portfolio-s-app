'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Siteroot } from '@/components/layout/Siteroot/';

import type { Work, Tool } from '@/types/microcms';
import { generateURL } from '@/lib/microcms';

interface FooterProps {
  works: Work[];
  tools: Tool[];
  managements: (Work | Tool)[];
}

export function Footer({ works, tools, managements }: FooterProps) {
  const pathname = usePathname();
  const isFrontPage = pathname === '/';

  return (
    <footer className="mt-8 px-4 bg-gradient-to-b from-white to-gray-light">
      <div className="max-w-[1024px] m-auto py-4">
        <div className="text-center py-2">
          <Siteroot isFrontPage={isFrontPage} />
        </div>
        <div className="mt-4">
          <nav>
            <ul className="flex justify-between gap-2">
              {works && (
                <li className="text-gray-darker text-small">
                  <Link
                    href="/works/"
                    className="hover:text-black custom-underlined-link"
                  >
                    Works
                  </Link>
                  <ul className="mt-1.5 text-[#777] text-2xs leading-none flex flex-col gap-1">
                    {works.map((work) => (
                      <li key={work.title}>
                        <Link
                          href={generateURL('works', work.id)}
                          className="hover:text-black transition-colors duration-300"
                        >
                          {work.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              )}
              {managements && (
                <li className="text-gray-darker text-small">
                  <Link
                    href="/managements/"
                    className="hover:text-black custom-underlined-link"
                  >
                    Managements
                  </Link>
                  <ul className="mt-1.5 text-[#777] text-2xs leading-none flex flex-col gap-1">
                    {managements.map((management) => (
                      <li key={management.title}>
                        <Link
                          href={generateURL(
                            'is_sticky' in management ? 'works' : 'tools',
                            management.id
                          )}
                          className="hover:text-black transition-colors duration-300"
                        >
                          {management.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              )}
              {tools && (
                <li className="text-gray-darker text-small">
                  <Link
                    href="/tools/"
                    className="hover:text-black custom-underlined-link"
                  >
                    Tools
                  </Link>

                  <ul className="mt-1.5 text-[#777] text-2xs leading-none flex flex-col gap-1">
                    {tools.map((tool) => (
                      <li key={tool.title}>
                        <Link
                          href={generateURL('tools', tool.id)}
                          className="hover:text-black transition-colors duration-300"
                        >
                          {tool.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              )}
              <li className="text-gray-darker text-small">
                <Link
                  href="/about/"
                  className="hover:text-black custom-underlined-link"
                >
                  About
                </Link>
              </li>
              <li className="text-gray-darker text-small">
                Feature
                <ul className="mt-1.5 text-[#777] text-2xs leading-none flex flex-col gap-1">
                  <li>
                    <Link
                      href="/feature/"
                      className="hover:text-black custom-underlined-link"
                    >
                      Jamstack リアーキテクチャ
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-4">
          <p className="text-center text-2xs text-gray-dark leading-none">
            <small>copyright 2025 Shingo Horie</small>
          </p>
        </div>
      </div>
    </footer>
  );
}
