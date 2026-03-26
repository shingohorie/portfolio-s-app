interface EntryPositionProps {
  position?: string[];
  env?: string[];
  client?: string;
}

export function EntryPosition({
  position = [],
  env = [],
  client,
}: EntryPositionProps) {
  return (
    (position || env) && (
      <dl className="grid grid-cols-[auto_1fr] text-xs text-gray-dark gap-x-2 gap-y-1 mb-3">
        {client && (
          <>
            <dt>クライアント</dt>
            <dd>{client}</dd>
          </>
        )}
        {position.length > 0 && (
          <>
            <dt>担当</dt>
            <dd>{position.join(" / ")}</dd>
          </>
        )}
        {env.length > 0 && (
          <>
            <dt>対応環境</dt>
            <dd>{env.join(" / ")}</dd>
          </>
        )}
      </dl>
    )
  );
}
