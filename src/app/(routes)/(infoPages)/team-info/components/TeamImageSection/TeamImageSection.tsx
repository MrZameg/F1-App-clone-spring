import Image from 'next/image';
import { TeamImageSectionProps } from './TeamImageSection.types';

export default function TeamImageSection({ teamInfo }: TeamImageSectionProps) {
  return (
    <Image
      src={teamInfo?.logoUrl || ''}
      alt={teamInfo?.name || ''}
      width={1000}
      height={1000}
      className="rounded-md object-cover bg-gray-100"
    />
  );
}
