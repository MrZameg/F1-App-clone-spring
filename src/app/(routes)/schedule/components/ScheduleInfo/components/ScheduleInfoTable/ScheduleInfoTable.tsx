import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { ScheduleInfoProps } from '../../../ScheduleInfo.types';

export default function ScheduleInfoTable({ circuitInfo }: ScheduleInfoProps) {
  return (
    <div className="w-full md:w-1/2">
      <div className="w-full rounded-lg">
        <Table className="w-full max-w-[100%]">
          <TableBody className="cursor-pointer">
            <TableRow>
              <TableCell className="font-bold text-lg py-4">First Grand Prix:</TableCell>
              <TableCell className="text-base">{circuitInfo?.circuitInfo.firstGrandPrix}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-bold text-lg py-4">Number of Laps:</TableCell>
              <TableCell className="text-base">{circuitInfo?.circuitInfo.numberOfLaps}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-bold text-lg py-4">Circuit Length:</TableCell>
              <TableCell className="text-base">{circuitInfo?.circuitInfo.circuitLength}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-bold text-lg py-4">Race Distance:</TableCell>
              <TableCell className="text-base">{circuitInfo?.circuitInfo.raceDistance}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-bold text-lg py-4">Lap Record:</TableCell>
              <TableCell className="text-base">{circuitInfo?.circuitInfo.lapRecord.time}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-bold text-lg py-4">Lap Record Driver:</TableCell>
              <TableCell className="text-base">
                {circuitInfo?.circuitInfo.lapRecord.diver}
              </TableCell>
            </TableRow>
            {/*                 <TableRow>
          <TableCell colSpan={2} className="text-base whitespace-normal break-words">
            <p className="font-bold">Description:</p>
            {circuitInfo?.description}
          </TableCell>
        </TableRow> */}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
