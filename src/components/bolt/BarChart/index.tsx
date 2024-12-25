import React, { useState } from 'react';
import { UseCase } from '../../types/useCase';
import { Bar } from './Bar';
import { ChartAxis } from './ChartAxis';
import { ChartHeader } from './ChartHeader';
import { ChartLegend } from './ChartLegend';
import { scrollToElement } from '../../utils/scroll';

interface BarChartProps {
  data: UseCase[];
}

export function BarChart({ data }: BarChartProps) {
  const [activeBar, setActiveBar] = useState<string | null>(null);
  const sortedData = [...data].sort((a, b) => b.adoptionRate - a.adoptionRate);
  const xAxisTicks = [0, 25, 50, 75, 100];

  const handleBarClick = (id: string) => {
    setActiveBar(id);
    scrollToElement(`useCase-${id}`);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8 transition-colors duration-300">
      <ChartHeader />

      <div className="relative mt-8 mb-16">
        <div className="space-y-4">
          {sortedData.map(useCase => (
            <Bar
              key={useCase.id}
              useCase={useCase}
              isActive={activeBar === useCase.id}
              onBarClick={handleBarClick}
            />
          ))}
        </div>

        <ChartAxis ticks={xAxisTicks} />
      </div>

      <ChartLegend />
    </div>
  );
}