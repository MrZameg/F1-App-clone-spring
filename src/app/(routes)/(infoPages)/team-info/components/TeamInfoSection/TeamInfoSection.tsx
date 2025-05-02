import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { TeamInfoSectionProps } from './TeamInfoSection.types';

export default function TeamInfoSection({ teamInfo }: TeamInfoSectionProps) {
  return (
    <div className="w-full flex flex-col gap-5">
      <Table>
        <TableBody className="cursor-pointer">
          <TableRow>
            <TableCell className="font-bold text-lg py-4">Full Team Name</TableCell>
            <TableCell className="text-base">{teamInfo?.details.fullTeamName}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold text-lg py-4">Base</TableCell>
            <TableCell className="text-base">{teamInfo?.details.base}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold text-lg py-4">Team Chief</TableCell>
            <TableCell className="text-base">{teamInfo?.details.teamChief}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold text-lg py-4">Technical Chief</TableCell>
            <TableCell className="text-base">{teamInfo?.details.technicalChief}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold text-lg py-4">Chassis</TableCell>
            <TableCell className="text-base">{teamInfo?.details.chassis}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold text-lg py-4">Power Unit</TableCell>
            <TableCell className="text-base">{teamInfo?.details.powerUnit}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold text-lg py-4">First Team Entry</TableCell>
            <TableCell className="text-base">{teamInfo?.details.firstTeamEntry}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold text-lg py-4">World Championships</TableCell>
            <TableCell className="text-base">{teamInfo?.details.worldChampionships}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold text-lg py-4">Highest Race Finish</TableCell>
            <TableCell className="text-base">{teamInfo?.details.highestRaceFinish}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold text-lg py-4">Pole Positions</TableCell>
            <TableCell className="text-base">{teamInfo?.details.polePositions}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold text-lg py-4">Fastest Laps</TableCell>
            <TableCell className="text-base">{teamInfo?.details.fastestLaps}</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <article>
        <h2 className="text-2xl font-bold">Description</h2>
        <p className="text-base">{teamInfo?.description}</p>
      </article>
    </div>
  );
}
