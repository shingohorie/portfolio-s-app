import type { Feature as FeatureType } from '@/types/microcms';

interface EntryInfoFeaturesProps {
  features?: FeatureType[];
  className?: string;
}

export function EntryInfoFeatures({
  features,
  className
}: EntryInfoFeaturesProps) {
  return (
    features &&
    features.length > 0 && (
      <div className={className ?? className}>
        <p className="mb-1 text-basic">特徴</p>
        <ul>
          {features.map((feature, i) => (
            <li className="flex items-start mb-[5px]" key={i}>
              <span>・</span>
              {feature.detail}
            </li>
          ))}
        </ul>
      </div>
    )
  );
}
