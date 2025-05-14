import { getCircuitInfo } from '@/lib/getCircuits';
import ScheduleResultsTable from '../components/ScheduleResultsTable/ScheduleResultsTable';
import ScheduleInfo from '../components/ScheduleInfo/ScheduleInfo';
import ScheduleDescription from '../components/ScheduleDescription/ScheduleDescription';
import GoBackPage from '@/components/shared/GoBackPage/GoBackPage';
export default async function SchedulePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const circuitInfo = await getCircuitInfo(id);

  if (!circuitInfo) {
    return <div>Circuit not found</div>;
  }

  return (
    <div className="w-full flex flex-col items-start gap-5 pt-12">
      <GoBackPage href="/schedule" text="Back to schedule" />
      <ScheduleInfo circuitInfo={circuitInfo} />
      <ScheduleResultsTable circuitInfo={circuitInfo} />
      <ScheduleDescription description={circuitInfo.description} />
    </div>
  );
}
