import { DriverImageSectionSkeleton, DriverInfoTableSkeleton } from './components';

export default function Loading() {
  return (
    <div className="w-full pt-12 flex gap-5 items-start max-w-7xl mx-auto md:flex-row flex-col">
      <DriverImageSectionSkeleton />
      <div className="w-full md:w-1/2">
        <DriverInfoTableSkeleton />
      </div>
    </div>
  );
}
