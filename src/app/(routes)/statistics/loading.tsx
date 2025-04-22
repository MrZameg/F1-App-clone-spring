import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DriversStatisticsTableSkeleton } from './components/DriversStatisticsTable/DriversStatisticsTable.skeleton';
import { TeamsStatisticsTableSkeleton } from './components/TeamsStatisticsTable/TeamsStatisticsTable.skeleton';

export default function Loading() {
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
          <DriversStatisticsTableSkeleton />
        </TabsContent>
        <TabsContent value="teams">
          <TeamsStatisticsTableSkeleton />
        </TabsContent>
      </Tabs>
    </div>
  );
}
