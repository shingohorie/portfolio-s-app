import Link from "next/link";

interface BreadcrumbProps {
  directory: { name: string; href: string }[];
}

export function Breadcrumbs({ directory }: BreadcrumbProps) {
  const ancestors = directory.slice(0, -1);
  const current = directory[directory.length - 1];
  return (
    <nav className="px-4">
      <div className="py-2 max-w-[1024px] m-auto">
        <ol className="flex flex-wrap text-gray-dark text-xs leading-[1.3]">
          <li>
            <Link
              href="/"
              className="hover:text-black transition-colors duration-300"
            >
              Home
            </Link>
            <span className="inline-block mx-[0.5em]">›</span>
          </li>
          {ancestors.map((dir, index) => (
            <li key={index}>
              <Link
                href={dir.href}
                className="hover:text-black transition-colors duration-300"
              >
                {dir.name}
              </Link>
              <span className="inline-block mx-[0.5em]">›</span>
            </li>
          ))}
          <li>
            <span className="text-black">{current.name}</span>
          </li>
        </ol>
      </div>
    </nav>
  );
}
