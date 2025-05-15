'use client';

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { TeamChartProps } from './TeamChart.types';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

export function TeamChart({ teamResults }: TeamChartProps) {
  const chartData = teamResults?.map((result) => ({
    x: result?.grandPrix?.name || '',
    y: result?.points || 0,
  }));

  const chartConfig = {
    x: {
      label: 'Grand Prix',
      color: 'green',
    },
    y: {
      label: 'Points',
      color: 'blue',
    },
  } satisfies ChartConfig;

  if (!teamResults) {
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
    </div>
  );
}
