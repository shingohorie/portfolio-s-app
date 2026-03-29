import Link from 'next/link';

interface TagProps {
  text: string;
  id?: string;
  className?: string;
}

export function Tag({ text, id, className }: TagProps) {
  return (
    <span
      className={`text-gray-dark text-xs leading-1.5 whitespace-nowrap ${
        className && className
      }`}
    >
      <span className="inline-block mr-[3px]">#</span>
      {id ? (
        <Link
          href={`/tags/${id}`}
          className="underline hover:text-gray-darker transition-color duration-300"
        >
          {text}
        </Link>
      ) : (
        text
      )}
    </span>
  );
}
