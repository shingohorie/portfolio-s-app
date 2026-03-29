import { formatInTimeZone } from 'date-fns-tz';

interface EntryInfoLoanchedProps {
  loanched?: string;
  className?: string;
}

export function EntryInfoLoanched({
  loanched,
  className
}: EntryInfoLoanchedProps) {
  return (
    loanched && (
      <div className={className ?? className}>
        <p className="mb-1 text-basic">公開日</p>
        <p>{formatInTimeZone(loanched, 'Asia/Tokyo', 'yyyy/MM')}</p>
      </div>
    )
  );
}
