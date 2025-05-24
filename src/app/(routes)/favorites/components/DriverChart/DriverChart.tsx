'use client';

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { DriverChartProps } from './DriverChart.types';
import { Bar, BarChart, CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';
import { ChartNoAxesColumn, Map } from 'lucide-react';

export function DriverChart({ driverResults }: DriverChartProps) {
  const chartData = driverResults?.map((result) => ({
    x: result.grandPrix.name,
    y: result.points,
    z: result.racePosition || 0,
  }));

  const chartConfig = {
    x: {
      label: 'Grand Prix',
      color: 'green',
      icon: Map,
    },
    y: {
      label: 'Points',
      color: 'blue',
      icon: ChartNoAxesColumn,
    },
    z: {
      label: 'Position',
      color: 'red',
    },
  } satisfies ChartConfig;

  if (!driverResults) {
    return <div>No data</div>;
  }

  return (
    <div className="w-full flex flex-col gap-4">
      <span className="text-sm text-muted-foreground">Points</span>
      <ChartContainer config={chartConfig} className="w-full h-[150px]">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="x"
            tickLine={false}
            tickMargin={5}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 4)}
          />

          <YAxis dataKey="y" tickLine={false} tickMargin={5} axisLine={false} />

          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="y" fill="var(--secondary-foreground)" radius={4} />
        </BarChart>
      </ChartContainer>

      <span className="text-sm text-muted-foreground">Position</span>
      <ChartContainer config={chartConfig} className="w-full h-[150px]">
        <LineChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="x"
            tickLine={false}
            tickMargin={5}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 4)}
          />

          <YAxis dataKey="z" tickLine={false} tickMargin={5} axisLine={false} />

          <ChartTooltip content={<ChartTooltipContent />} />
          <Line dataKey="z" stroke="var(--secondary-foreground)" radius={4} />
        </LineChart>
      </ChartContainer>
    </div>
  );
}
