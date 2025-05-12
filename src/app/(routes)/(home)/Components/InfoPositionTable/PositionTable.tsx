import { AddRemoveFavorites } from '@/components/shared/AddRemoveFavorites';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getDrivers } from '@/lib/getDrivers';
import Image from 'next/image';
import Link from 'next/link';
import { unstable_ViewTransition as ViewTransition } from 'react';

export async function PositionTable() {
  const drivers = await getDrivers();

  return (
    <div className="border rounded-2xl grow">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead> </TableHead>
            <TableHead> </TableHead>
            <TableHead className="font-bold px-4">Position</TableHead>
            <TableHead className="font-bold px-4">Name</TableHead>
            <TableHead className="font-bold px-4">Team</TableHead>
            <TableHead className="font-bold px-4">Nationality</TableHead>
            <TableHead className="text-right font-bold px-4">Points</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {drivers ? (
            drivers.map((driver) => (
              <TableRow key={driver.id}>
                <TableCell>
                  <AddRemoveFavorites className="border-none" type="driver" id={driver.id} />
                </TableCell>
                <TableCell>
                  <div className="flex justify-center items-center">
                    <Link href={`/driver-info/${driver.id}`}>
                      <ViewTransition name={`driver-image-${driver.id}`}>
                        <Image
                          alt={`image of ${driver.name}`}
                          src={driver.imageUrl}
                          width={70}
                          height={70}
                          priority
                        />
                      </ViewTransition>
                    </Link>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="flex items-center justify-center font-bold">
                    {driver.position}
                  </span>
                </TableCell>
                <TableCell className="px-4">
                  <Link href={`/driver-info/${driver.id}`}>
                    {driver.name} {driver.surname}
                  </Link>
                </TableCell>
                <TableCell className="px-4">{driver.team}</TableCell>
                <TableCell className="px-4">{driver.country}</TableCell>
                <TableCell className="text-right font-bold px-4">{driver.points} pts</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell>
                <div className="flex justify-center items-center"></div>
              </TableCell>
              <TableCell>
                <span className="flex items-center justify-center font-bold">pos</span>
              </TableCell>
              <TableCell className="px-4">Driver name</TableCell>
              <TableCell className="px-4">Driver team</TableCell>
              <TableCell className="px-4">Driver country</TableCell>
              <TableCell className="text-right font-bold px-4">100</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
