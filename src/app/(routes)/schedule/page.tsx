import { RaceCard } from '@/components/shared/RaceCard';
import { getCircuits } from '@/lib/getCircuits';
import Link from 'next/link';

export default async function SchedulePage() {
  const circuits = await getCircuits();

  return (
    <div className="w-full flex flex-col gap-4 pt-12">
      <h1 className="text-5xl font-bold text-center pb-7"> Schedule </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {circuits &&
          circuits.length > 0 &&
          circuits.map((circuit) => (
            <Link href={`/schedule/${circuit.id}`} key={circuit.id}>
              <RaceCard key={circuit.id} round={circuit} />
            </Link>
          ))}
      </div>
    </div>
  );
}
