import React from 'react';

export function ChartLegend() {
  return (
    <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
      <p className="mb-2">
        Данные из отчета Menlo Ventures "Состояние Генеративного ИИ в Бизнесе 2024"
      </p>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-500 dark:bg-blue-600 rounded" />
          <span>Текущий уровень внедрения</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-500 dark:bg-green-600 rounded" />
          <span>Рост за год</span>
        </div>
      </div>
    </div>
  );
}