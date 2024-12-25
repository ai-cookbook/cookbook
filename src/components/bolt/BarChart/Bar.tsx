import React from 'react';
import { UseCase } from '../../types/useCase';
import { cn } from '../../utils/cn';

interface BarProps {
  useCase: UseCase;
  isActive: boolean;
  onBarClick: (id: string) => void;
}

export function Bar({ useCase, isActive, onBarClick }: BarProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      className={cn(
        'relative group cursor-pointer',
        'transition-transform duration-200 ease-out',
        'hover:translate-x-[4px]'
      )}
      onClick={() => onBarClick(useCase.id)}
      onKeyDown={(e) => e.key === 'Enter' && onBarClick(useCase.id)}
      aria-label={`${useCase.title}: ${useCase.adoptionRate}% adoption rate. Click to view details.`}
    >
      <div className="flex items-center h-12">
        <div className="w-[180px] pr-4">
          <p className="text-sm font-medium text-gray-800 dark:text-gray-200 text-right">
            {useCase.title}
          </p>
        </div>
        
        <div className="flex-1 relative">
          <div
            className={cn(
              'h-8 transition-all duration-300 rounded-r-lg',
              'group-hover:shadow-lg',
              isActive
                ? 'bg-blue-600 dark:bg-blue-500 shadow-lg'
                : 'bg-blue-500 dark:bg-blue-600 group-hover:bg-blue-600 dark:group-hover:bg-blue-500'
            )}
            style={{ width: `${useCase.adoptionRate}%` }}
          >
            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-sm font-medium text-white">
              {useCase.adoptionRate}%
            </span>
            
            {useCase.yearOverYearGrowth && (
              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-sm font-medium text-green-400">
                +{useCase.yearOverYearGrowth}% YoY
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}