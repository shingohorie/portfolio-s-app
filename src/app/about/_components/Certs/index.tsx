interface CertType {
  name: string;
  host: string;
  alias?: string;
  version?: string;
  class?: string;
  products?: string[];
}

export function Certs({ data }: { data: CertType[] }) {
  return (
    <ul className="flex flex-col gap-1">
      {data.map((cert, index) => (
        <li key={index}>
          {/* <span className="block text-xs text-gray-dark">{`${cert.host}主催`}</span> */}
          {cert.name}
          {cert.alias && <span className="ml-1">({cert.alias})</span>}
          {(cert.version || cert.class) && (
            <span className="text-xs ml-1">
              {`[ ${[cert.class, cert.products?.join(" / "), cert.version]
                .filter(Boolean)
                .join(" , ")} ]`}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
