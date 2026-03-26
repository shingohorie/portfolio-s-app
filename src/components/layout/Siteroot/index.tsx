import Link from "next/link";

type AllowedTagName = "h1" | "p" | "div";

interface SiterootProps {
  isFrontPage: boolean;
  tagName?: AllowedTagName;
}

function Logo() {
  return (
    <>
      <span className="block text-center text-3xl font-bold font-lato">
        PORTFOLIO-S
      </span>
      <span className="block text-center text-2xs font-normal font-noto text-gray-dark leading-none">
        Just Another Portfolio Site
      </span>
    </>
  );
}

export function Siteroot({ isFrontPage, tagName = "p" }: SiterootProps) {
  const Tag = tagName;

  return isFrontPage ? (
    <Tag className="inline-block">
      <Logo />
    </Tag>
  ) : (
    <Link href="/" className="inline-block hover:opacity-70">
      <Tag className="inline-block">
        <Logo />
      </Tag>
    </Link>
  );
}
