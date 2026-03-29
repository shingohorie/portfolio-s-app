import { BarometerRegular, BarometerIrregular } from '../Barometer';

import type { SkillType } from '@/types/about';

interface BarometersProps {
  skills: SkillType[];
  inexperienced?: string;
}

export function Barometers({ skills, inexperienced }: BarometersProps) {
  return (
    <ul className="flex flex-col gap-1">
      {skills.map((skill, index) => (
        <BarometerRegular
          key={index}
          name={skill.name}
          annotation={skill.annotation}
          percentage={skill.percentage}
        ></BarometerRegular>
      ))}
      {inexperienced && <BarometerIrregular inexperienced={inexperienced} />}
    </ul>
  );
}
