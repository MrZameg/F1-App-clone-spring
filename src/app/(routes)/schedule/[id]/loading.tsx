import ScheduleInfoSkeleton from '../components/ScheduleInfo/ScheduleInfo.skeleton';
import ScheduleResultsTableSkeleton from '../components/ScheduleResultsTable/ScheduleResultsTable.skeleton';

export default function loading() {
  return (
    <div className="w-full flex flex-col items-start gap-5 pt-12">
      <ScheduleInfoSkeleton />
      <ScheduleResultsTableSkeleton />
    </div>
  );
}
