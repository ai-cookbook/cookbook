import React, { useState } from 'react';
import { UseCase } from '../types/useCase';
import { BarChartIcon, ExternalLink } from 'lucide-react';

interface BarChartProps {
  data: UseCase[];
}

export function BarChart({ data }: BarChartProps) {
  const [hoveredBar, setHoveredBar] = useState<string | null>(null);
  const sortedData = [...data].sort((a, b) => b.adoptionRate - a.adoptionRate);
  
  const maxRate = Math.max(...data.map(d => d.adoptionRate));
  const chartHeight = 400;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <BarChartIcon className="w-5 h-5 text-blue-600" />
          <h2 className="text-xl font-bold text-gray-900">Enterprise GenAI Adoption Rates</h2>
        </div>
        <a
          href="https://menlovc.com/2024-the-state-of-generative-ai-in-the-enterprise/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700"
        >
          Source: Menlo Ventures <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      <div className="relative" style={{ height: `${chartHeight}px` }}>
        <div className="absolute inset-y-0 left-0 flex flex-col justify-between text-sm text-gray-600">
          {[100, 75, 50, 25, 0].map(tick => (
            <span key={tick} style={{ transform: 'translateY(50%)' }}>
              {tick}%
            </span>
          ))}
        </div>

        <div className="ml-12 h-full flex items-end gap-4">
          {sortedData.map(useCase => {
            const height = (useCase.adoptionRate / 100) * chartHeight;
            const isHovered = hoveredBar === useCase.id;

            return (
              <div
                key={useCase.id}
                className="relative flex-1 group"
                onMouseEnter={() => setHoveredBar(useCase.id)}
                onMouseLeave={() => setHoveredBar(null)}
              >
                <div
                  className={`
                    w-full transition-all duration-300
                    ${isHovered ? 'bg-blue-600' : 'bg-blue-500'}
                    hover:bg-blue-600
                  `}
                  style={{ height: `${height}px` }}
                />
                
                <div className="absolute bottom-0 left-0 right-0 -mb-6 pt-2">
                  <p className="text-sm text-gray-600 transform -rotate-45 origin-top-left truncate">
                    {useCase.title}
                  </p>
                </div>

                {isHovered && (
                  <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-2 rounded shadow-lg text-sm whitespace-nowrap z-10">
                    <p className="font-medium">{useCase.title}</p>
                    <p>{useCase.adoptionRate}% Adoption</p>
                    {useCase.yearOverYearGrowth && (
                      <p className="text-green-400">+{useCase.yearOverYearGrowth}% YoY</p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-16 text-sm text-gray-500">
        <p>Data from Menlo Ventures' "2024 State of Generative AI in the Enterprise" report</p>
        <div className="mt-2 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-500 rounded" />
            <span>Current Adoption Rate</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded" />
            <span>Year-over-Year Growth</span>
          </div>
        </div>
      </div>
    </div>
  );
}