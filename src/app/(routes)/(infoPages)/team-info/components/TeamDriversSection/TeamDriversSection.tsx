import Image from 'next/image';
import Link from 'next/link';
import { unstable_ViewTransition as ViewTransition } from 'react';
import { TeamDriversSectionProps } from './TeamDriversSection.types';

export default function TeamDriversSection({ teamInfo }: TeamDriversSectionProps) {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-2xl font-bold">Drivers:</h2>
      <div className="flex gap-2">
        {teamInfo?.drivers.map((driver) => (
          <div
            key={driver.id}
            className="flex flex-col gap-2 w-1/2 hover:scale-105 transition-all duration-300"
          >
            <Link href={`/driver-info/${driver.id}`}>
              <ViewTransition name={`driver-image-${driver.id}`}>
                <Image
                  src={driver.imageUrl || ''}
                  alt={driver.name || ''}
                  width={1000}
                  height={1000}
                  className="rounded-md"
                />
              </ViewTransition>
            </Link>
            <div className="flex gap-2 items-center">
              <p className="text-lg font-bold">{driver.name}</p>
              <p className="text-2xl font-bold">{driver.number}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
