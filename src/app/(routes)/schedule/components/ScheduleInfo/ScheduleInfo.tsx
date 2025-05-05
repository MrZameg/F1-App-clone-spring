import { ScheduleInfoProps } from './ScheduleInfo.types';
import ScheduleInfoImage from './components/ScheduleInfoImage/ScheduleInfoImage';
import ScheduleInfoTable from './components/ScheduleInfoTable/ScheduleInfoTable';

export default function ScheduleInfo({ circuitInfo }: ScheduleInfoProps) {
  return (
    <div className="w-full flex gap-4 flex-col md:flex-row">
      <ScheduleInfoImage circuitInfo={circuitInfo} />
      <ScheduleInfoTable circuitInfo={circuitInfo} />
    </div>
  );
}
