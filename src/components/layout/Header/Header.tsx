"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Siteroot } from "@/components/layout/Siteroot/";

interface GnavLinkProps {
  title: string;
  href: string;
  pathname: string;
}

function GnavLink({ title, href, pathname }: GnavLinkProps) {
  return (
    <Link
      href={href}
      className={`
        text-gray-darker hover:text-black transition-colors duration-300 custom-underlined-link ${pathname.startsWith(href) && "custom-is-current"}`}
    >
      <span className="flex items-center h-9">{title}</span>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const isFrontPage = pathname === "/";
  const tagName = isFrontPage ? "h1" : "p";

  return (
    <header className={`px-4 ${!isFrontPage && "border-b border-gray-light"}`}>
      <div className="relative flex items-center justify-between max-w-[1024px] m-auto">
        <div className="order-2 absolute top-0 left-0 right-0 bottom-0 m-auto py-2 text-center">
          <Siteroot isFrontPage={isFrontPage} tagName={tagName} />
        </div>
        <div className="order-1 relative">
          <nav>
            <ul className="flex items-center gap-15 text-small">
              <li>
                <GnavLink title="Works" href="/works" pathname={pathname} />
              </li>
              <li>
                <GnavLink
                  title="Managements"
                  href="/managements"
                  pathname={pathname}
                />
              </li>
            </ul>
          </nav>
        </div>
        <div className="order-3 relative">
          <nav>
            <ul className="flex items-center gap-15 text-small">
              <li>
                <GnavLink title="Tools" href="/tools" pathname={pathname} />
              </li>
              <li>
                <GnavLink title="About" href="/about" pathname={pathname} />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
