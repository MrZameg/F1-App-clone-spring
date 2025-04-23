'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';
import { DriversHistoryStandings, TeamsHistoryStandings } from '../HistoryStandingsTables';
import SelectSeason from '../SelectSeason/SelectSeason';

export function HistoryTable() {
  const [season, setSeason] = useState('2024');

  return (
    <Tabs
      defaultValue="drivers"
      className="w-full max-w-4xl flex flex-col gap-4 items-center justify-center mx-auto"
    >
      <h1 className="text-2xl font-bold">Standings History {season}</h1>
      <TabsList className="w-full">
        <TabsTrigger className="cursor-pointer" value="drivers">
          Drivers
        </TabsTrigger>
        <TabsTrigger className="cursor-pointer" value="teams">
          Teams
        </TabsTrigger>
        <TabsTrigger className="pointer-events-none opacity-50" value="races">
          Races
        </TabsTrigger>
      </TabsList>

      <SelectSeason setSeason={setSeason} />

      <TabsContent value="drivers">
        <DriversHistoryStandings season={season} />
      </TabsContent>
      <TabsContent value="teams">
        <TeamsHistoryStandings season={season} />
      </TabsContent>
      <TabsContent value="races">Change your password</TabsContent>
    </Tabs>
  );
}
