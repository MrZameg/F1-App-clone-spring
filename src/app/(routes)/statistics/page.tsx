import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DriversStatisticsTable } from './components/DriversStatisticsTable';
import { TeamsStatisticsTable } from './components/TeamsStatisticsTable';
export default function StatisticsPage() {
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
          <DriversStatisticsTable />
        </TabsContent>
        <TabsContent value="teams">
          <TeamsStatisticsTable />
        </TabsContent>
      </Tabs>
    </div>
  );
}
