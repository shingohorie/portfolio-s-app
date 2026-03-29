import { EntryInfoURL } from './EntryInfoURL';
import { EntryInfoLoanched } from './EntryInfoLoanched';
import { EntryInfoFeatures } from './EntryInfoFeatures';
import { EntryInfoTags } from './EntryInfoTags';

import type {
  Tag as TagType,
  URL as URLType,
  Feature as FeatureType
} from '@/types/microcms';

interface EntryInfoProps {
  title?: string;
  urls?: URLType[] | null;
  loanched?: string;
  features?: FeatureType[];
  tags?: TagType[];
}

export function EntryInfo({
  urls = null,
  loanched,
  features,
  tags
}: EntryInfoProps) {
  return (
    <div className="flex flex-col gap-y-4 pt-4 text-gray-darker text-xs leading-[1.5]">
      {urls && <EntryInfoURL urls={urls} />}
      <EntryInfoLoanched loanched={loanched} />
      <EntryInfoFeatures features={features} />
      <EntryInfoTags tags={tags} />
    </div>
  );
}
