import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { DriverInfoTableProps } from './DriverInfoTable.types';

export default function DriverInfoTable({ driverInfo }: DriverInfoTableProps) {
  return (
    <Table>
      <TableBody className="cursor-pointer">
        <TableRow>
          <TableCell className="font-bold text-lg py-4">Name:</TableCell>
          <TableCell className="text-base">{driverInfo?.name}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-bold text-lg py-4">Number:</TableCell>
          <TableCell className="text-base">{driverInfo?.driverNumber}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-bold text-lg py-4">Team:</TableCell>
          <TableCell className="text-base">{driverInfo?.team}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-bold text-lg py-4">Country:</TableCell>
          <TableCell className="text-base">{driverInfo?.country}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-bold text-lg py-4">Points:</TableCell>
          <TableCell className="text-base">{driverInfo?.points}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-bold text-lg py-4">Podiums:</TableCell>
          <TableCell className="text-base">{driverInfo?.podiums}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-bold text-lg py-4">Grands Prix Entered:</TableCell>
          <TableCell className="text-base">{driverInfo?.grandsPrixEntered}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-bold text-lg py-4">World Championships:</TableCell>
          <TableCell className="text-base">{driverInfo?.worldChampionships}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-bold text-lg py-4">Highest Race Finish:</TableCell>
          <TableCell className="text-base">{driverInfo?.highestRaceFinish}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-bold text-lg py-4">Highest Grid Position:</TableCell>
          <TableCell className="text-base">{driverInfo?.highestGridPosition}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-bold text-lg py-4">Date of Birth:</TableCell>
          <TableCell className="text-base">{driverInfo?.dateOfBirth}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-bold text-lg py-4">Place of Birth:</TableCell>
          <TableCell className="text-base">{driverInfo?.placeOfBirth}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
