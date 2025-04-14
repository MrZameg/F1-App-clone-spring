import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getTeams } from '@/lib/getTeams';
import Image from 'next/image';

export async function TeamTable() {
  const teams = await getTeams();

  return (
    <div className="border rounded-2xl w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="px-4"> </TableHead>
            <TableHead className="font-bold px-4">Position</TableHead>
            <TableHead className="font-bold px-4">Team</TableHead>
            <TableHead className="text-right font-bold px-4">Points</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teams ? (
            teams.map((team) => (
              <TableRow key={team.id}>
                <TableCell className="px-4">
                  <div className="flex justify-center items-center">
                    <Image
                      alt={`Logo of ${team.name}`}
                      src={team.logoUrl}
                      width={32}
                      height={32}
                      priority
                    />
                  </div>
                </TableCell>
                <TableCell>
                  <span className="flex items-center justify-center font-bold">
                    {team.position}
                  </span>
                </TableCell>
                <TableCell className="px-4">{team.name}</TableCell>
                <TableCell className="text-right font-bold px-4">{team.points} pts</TableCell>
                <TableCell className="px-4">
                  <Image
                    alt={`${team.name}'s car`}
                    src={team.carUrl}
                    width={70}
                    height={40}
                    priority
                  />
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell className="px-4">
                <div className="flex justify-center items-center">
                  <Image
                    alt="testing"
                    src={
                      'https://media.formula1.com/content/dam/fom-website/teams/2025/mclaren-logo.png'
                    }
                    width={32}
                    height={32}
                    priority
                  />
                </div>
              </TableCell>
              <TableCell>
                <span className="flex items-center justify-center font-bold">1</span>
              </TableCell>
              <TableCell className="px-4">Mclaren</TableCell>
              <TableCell className="text-right font-bold px-4">100</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
