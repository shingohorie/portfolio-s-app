import type { SkillType } from '@/types/about';

export function BarometerRegular({ name, annotation, percentage }: SkillType) {
  return (
    <li>
      <p>{name}</p>
      {annotation && (
        <p className="block mt-0.5 text-gray-dark text-xs leading-1.3 whitespace-pre-line">
          {annotation}
        </p>
      )}
      {percentage && (
        <div className="h-[8px] bg-gray-light rounded-[8px] mt-[8px] overflow-hidden">
          <div
            className="h-full rounded-[8px] bg-gradient-to-r from-[#4cd964] to-[#5ac8fa]"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      )}
    </li>
  );
}

export function BarometerIrregular({
  inexperienced
}: {
  inexperienced: string;
}) {
  return (
    <li className="bg-[#f2f2f2] mt-2 p-2 rounded-[8px]">
      <p>経験のないもの</p>
      <p className="block mt-0.5 text-gray-dark text-xs leading-1.3 whitespace-pre-line">
        {inexperienced}
      </p>
    </li>
  );
}
