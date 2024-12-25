import React from 'react';
import { BarChart as BarChartIcon, ExternalLink, Info } from 'lucide-react';

export function ChartHeader() {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BarChartIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Внедрение Генеративного ИИ в Бизнесе 2024
          </h2>
        </div>
      </div>
      
      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-700/50 p-2 rounded-lg">
        <Info className="w-4 h-4 flex-shrink-0" />
        <p>
          По данным исследования{' '}
          <a
            href="https://menlovc.com/2024-the-state-of-generative-ai-in-the-enterprise/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 
              inline-flex items-center gap-1 font-medium"
          >
            "State of Generative AI in the Enterprise 2024" от Menlo Ventures
            <ExternalLink className="w-3 h-3" />
          </a>
        </p>
      </div>
    </div>
  );
}