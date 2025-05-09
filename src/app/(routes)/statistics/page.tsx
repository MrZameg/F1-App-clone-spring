import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DriversStatisticsTable } from '../../../components/shared/DriversStatisticsTable';
import { TeamsStatisticsTable } from '../../../components/shared/TeamsStatisticsTable';
import { getDriversStatistics } from '@/lib/getDrivers';
import { getTeamsStatistics } from '@/lib/getTeams';

export default async function StatisticsPage() {
  const drivers = await getDriversStatistics(new Date().getFullYear().toString());
  const teams = await getTeamsStatistics(new Date().getFullYear().toString());

  return (
    <div className="w-full flex justify-center items-center">
      <Tabs defaultValue="drivers" className="w-full flex flex-col items-center justify-center">
        <TabsList className="w-full max-w-2xl mb-5">
          <TabsTrigger
            value="drivers"
            className="text-lg cursor-pointer data-[state=active]:font-bold"
          >
            Drivers
          </TabsTrigger>
          <TabsTrigger
            value="teams"
            className="text-lg cursor-pointer data-[state=active]:font-bold"
          >
            Teams
          </TabsTrigger>
        </TabsList>
        <TabsContent value="drivers">
          <DriversStatisticsTable drivers={drivers} season={new Date().getFullYear().toString()} />
        </TabsContent>
        <TabsContent value="teams">
          <TeamsStatisticsTable teams={teams} season={new Date().getFullYear().toString()} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
