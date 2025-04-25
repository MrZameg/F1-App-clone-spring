'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';
import { DriversHistoryStandings, TeamsHistoryStandings } from '../HistoryStandingsTables';
import SelectSeason from '../SelectSeason/SelectSeason';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
export function HistoryTable() {
  const [season, setSeason] = useState('2024');
  const [selectedTab, setSelectedTab] = useState('drivers');
  const [searchValue, setSearchValue] = useState('');

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
    if (tab !== 'drivers') {
      setSearchValue('');
    }
  };

  return (
    <Tabs
      defaultValue="drivers"
      className="w-full max-w-4xl flex flex-col gap-4 items-center justify-center mx-auto"
    >
      <h1 className="text-2xl font-bold">Standings History {season}</h1>
      <TabsList className="w-full">
        <TabsTrigger
          className="cursor-pointer"
          value="drivers"
          onClick={() => handleTabClick('drivers')}
        >
          Drivers
        </TabsTrigger>
        <TabsTrigger
          className="cursor-pointer"
          value="teams"
          onClick={() => handleTabClick('teams')}
        >
          Teams
        </TabsTrigger>
        <TabsTrigger
          className="pointer-events-none opacity-50"
          value="races"
          onClick={() => handleTabClick('races')}
        >
          Races (Coming Soon)
        </TabsTrigger>
      </TabsList>

      <div className="w-full max-w-xl flex gap-2 items-center justify-center">
        {selectedTab === 'drivers' && (
          <div className="w-full grow relative">
            <Input
              className="w-full"
              placeholder="Filter by driver name"
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <Search className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
          </div>
        )}
        <SelectSeason setSeason={setSeason} />
      </div>

      <TabsContent value="drivers">
        <DriversHistoryStandings season={season} searchValue={searchValue} />
      </TabsContent>
      <TabsContent value="teams">
        <TeamsHistoryStandings season={season} />
      </TabsContent>
      <TabsContent value="races">Change your password</TabsContent>
    </Tabs>
  );
}
