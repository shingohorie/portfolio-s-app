type AllowedTagName = "h2" | "h3" | "h4" | "h5";

interface SecondaryHeaderProps {
  text: string;
  level?: 2 | 3 | 4 | 5;
  className?: string;
}

export function SecondaryHeader({
  text,
  level = 2,
  className,
}: SecondaryHeaderProps) {
  // "h" + 数字 でタグ名を作成し、大文字変数に入れる
  // TypeScriptに「これはHTMLタグだよ」と教えるために `as ElementType（ElementTypeはReactよりインポート）` を付けるが、今回のようにタグ名を限定した型を指定しても可
  const Tag = `h${level}` as AllowedTagName;

  return (
    <Tag
      className={`mt-3 mb-3 normal text-xl leading-none pb-2 bg-gradient-to-r from-black to-black bg-[length:1em_1px] bg-[position:0_100%] bg-no-repeat ${className && className}`}
    >
      <span>{text}</span>
    </Tag>
  );
}
