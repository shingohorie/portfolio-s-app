type AllowedTagName = "h1" | "h2" | "h3";

interface PrimaryHeaderProps {
  text_ja: string;
  text_en: string;
  size?: "" | "medium";
  level?: 1 | 2 | 3;
  className?: string;
}

export function PrimaryHeader({
  text_ja,
  text_en,
  level = 1,
  size = "",
  className,
}: PrimaryHeaderProps) {
  // "h" + 数字 でタグ名を作成し、大文字変数に入れる
  // TypeScriptに「これはHTMLタグだよ」と教えるために `as ElementType（ElementTypeはReactよりインポート）` を付けるが、今回のようにタグ名を限定した型を指定しても可
  const Tag = `h${level}` as AllowedTagName;

  return (
    <Tag
      className={`flex flex-wrap items-center gap-3 text-small leading-[1.2] ${className && className}`}
    >
      <span
        className={`inline-block leading-[1.5] ${size === "medium" ? "text-xl" : "text-5xl"}`}
      >
        {text_en}
      </span>
      <span>{text_ja}</span>
    </Tag>
  );
}
