import Image from 'next/image';
import { ScheduleInfoProps } from '../../ScheduleInfo.types';

export default function ScheduleInfoImage({ circuitInfo }: ScheduleInfoProps) {
  return (
    <div className="w-full md:w-1/2 flex flex-col gap-4">
      <Image
        src={circuitInfo?.circuitImageUrl || ''}
        alt={circuitInfo?.circuitName || ''}
        width={1000}
        height={1000}
        className="w-full h-auto object-cover rounded-lg bg-gray-100"
      />
      <span className="w-full flex items-center gap-2 mt-4">
        <h1 className="text-4xl font-bold">{circuitInfo?.circuitName}</h1>
        <Image
          src={circuitInfo?.fllagUrl || ''}
          alt={circuitInfo?.circuitName || ''}
          width={70}
          height={40}
        />
      </span>
    </div>
  );
}
