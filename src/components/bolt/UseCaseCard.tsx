import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import { logger } from '@site/src/utils/logger';
import type { UseCase } from '@site/src/types/useCase';
import { TrendingUp, TrendingDown, Minus, Users } from 'lucide-react';

interface UseCaseCardProps {
  useCase: UseCase;
}

export function UseCaseCard({ useCase }: UseCaseCardProps) {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';

  const handleClick = () => {
    logger.log('info', {
      component: 'UseCaseCard',
      action: 'click',
      details: { useCaseId: useCase.id }
    });
  };

  return (
    <div
      id={`useCase-${useCase.id}`}
      className={`${
        isDarkMode ? 'bg-gray-800 hover:bg-gray-700/80' : 'bg-white hover:bg-gray-50'
      } rounded-lg shadow-lg p-6 transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:shadow-xl`}
      onClick={handleClick}
    >
      <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        {useCase.title}
      </h3>
      
      <p className={`text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-6`}>
        {useCase.description}
      </p>

      <div className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {useCase.adoptionRate}% Adoption
            </div>
            <div className="flex items-center gap-1 text-green-500 font-medium">
              <TrendingUp className="w-5 h-5" />
              +{useCase.yearOverYearGrowth}% YoY
            </div>
          </div>
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 rounded-full transition-all duration-300"
              style={{ width: `${useCase.adoptionRate}%` }}
            />
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-3">
            <Users className={`w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
            <h4 className={`text-base font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Ключевые игроки рынка
            </h4>
          </div>
          <div className="space-y-3">
            {useCase.marketPlayers.map((player) => (
              <div
                key={player.name}
                className={`${
                  isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50'
                } rounded-lg p-3 transition-colors duration-300`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {player.name} {player.product && `${player.product}`}
                  </span>
                </div>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {player.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}