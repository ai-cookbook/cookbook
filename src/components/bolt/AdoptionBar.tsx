import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface AdoptionBarProps {
  adoptionRate: number;
  yearOverYearGrowth?: number;
  trend: 'rising' | 'declining' | 'stable';
}

export function AdoptionBar({ adoptionRate, yearOverYearGrowth, trend }: AdoptionBarProps) {
  const getTrendIcon = () => {
    switch (trend) {
      case 'rising':
        return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'declining':
        return <TrendingDown className="w-4 h-4 text-red-500" />;
      default:
        return <Minus className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Уровень внедрения
        </span>
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-gray-900 dark:text-white">
            {adoptionRate}%
          </span>
          {getTrendIcon()}
        </div>
      </div>
      <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className="absolute h-full bg-blue-500 dark:bg-blue-600 rounded-full transition-all duration-300"
          style={{ width: `${adoptionRate}%` }}
        />
      </div>
      {yearOverYearGrowth && (
        <div className="text-xs text-green-500 font-medium">
          +{yearOverYearGrowth}% за год
        </div>
      )}
    </div>
  );
}