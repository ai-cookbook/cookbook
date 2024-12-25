import React from 'react';

interface ChartAxisProps {
  ticks: number[];
}

export function ChartAxis({ ticks }: ChartAxisProps) {
  return (
    <div className="absolute -bottom-8 left-[180px] right-0 flex justify-between">
      {ticks.map(tick => (
        <span key={tick} className="text-sm font-medium text-gray-600 dark:text-gray-400">
          {tick}%
        </span>
      ))}
    </div>
  );
}