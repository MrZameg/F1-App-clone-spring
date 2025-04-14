import { RaceCardSkeleton } from '@/components/shared/RaceCard';

export default function Loading() {
  return (
    <div className="w-full flex flex-col gap-4 pt-12">
      <h1 className="text-5xl font-bold text-center pb-7"> Schedule </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {Array.from({ length: 25 }).map((_, index) => (
          <RaceCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}
