import React, { useState, useEffect } from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import type { UseCase } from '@site/src/types/useCase';
import { scrollToElement } from '@site/src/utils/scroll';
import { BarChart as BarChartIcon, ExternalLink, Info } from 'lucide-react';

interface RadialChartProps {
  data: UseCase[];
}

export function RadialChart({ data }: RadialChartProps) {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';
  
  const [activeSegment, setActiveSegment] = useState<string | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0, isMobile: false });
  const sortedData = [...data].sort((a, b) => b.adoptionRate - a.adoptionRate);
  const maxRate = Math.max(...data.map(d => d.adoptionRate));
  
  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      const isMobile = width < 768;
      const height = isMobile ? Math.min(width * 0.8, 420) : 320;
      
      setDimensions({
        width: width,
        height: height,
        isMobile: isMobile
      });
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const handleSegmentClick = (id: string) => {
    setActiveSegment(id);
    scrollToElement(`useCase-${id}`);
  };

  const getChartViewBox = () => {
    const baseWidth = dimensions.isMobile ? dimensions.width * 0.9 : 840;
    const baseHeight = dimensions.height;
    return `${-baseWidth/2} ${-baseHeight/2} ${baseWidth} ${baseHeight}`;
  };

  const getRadius = (adoptionRate: number) => {
    const baseRadius = dimensions.isMobile 
      ? Math.min(dimensions.width * 0.35, 180)
      : 144;
    return baseRadius * (adoptionRate / maxRate);
  };

  return (
    <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-4 mb-6 transition-colors duration-300 group`}>
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BarChartIcon className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Внедрение Генеративного ИИ в Бизнесе 2024
            </h2>
          </div>
        </div>
        
        <div className={`flex items-center gap-2 text-sm ${isDarkMode ? 'text-gray-400 bg-gray-700/50' : 'text-gray-600 bg-gray-50'} px-2 py-1 rounded-lg md:whitespace-nowrap`}>
          <Info className="w-4 h-4 flex-shrink-0" />
          <div className="flex flex-wrap md:flex-nowrap items-center gap-1">
            <span>По данным исследования</span>
            <a
              href="https://menlovc.com/2024-the-state-of-generative-ai-in-the-enterprise/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'} inline-flex items-center gap-1 font-medium`}
            >
              "State of Generative AI in the Enterprise 2024" от Menlo Ventures
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="relative flex justify-center items-center mt-4 overflow-visible">
        <div className="transform transition-transform duration-300 ease-in-out hover:[transform:scale(1.45)] origin-center cursor-zoom-in">
          <svg 
            width="100%" 
            height={dimensions.height}
            viewBox={getChartViewBox()}
            className="max-w-full transform scale-90 md:scale-100"
            preserveAspectRatio="xMidYMid meet"
          >
            {sortedData.map((useCase, index) => {
              const angle = (360 / sortedData.length) * index;
              const radius = getRadius(useCase.adoptionRate);
              const isActive = activeSegment === useCase.id;
              
              const startAngle = (angle - 25) * (Math.PI / 180);
              const endAngle = (angle + 25) * (Math.PI / 180);
              
              const x1 = Math.cos(startAngle) * radius;
              const y1 = Math.sin(startAngle) * radius;
              const x2 = Math.cos(endAngle) * radius;
              const y2 = Math.sin(endAngle) * radius;
              
              const path = `M 0 0 L ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2} Z`;

              const midAngle = (startAngle + endAngle) / 2;
              // Adjust label radius for better readability
              const getLabelRadiusMultiplier = () => {
                if (dimensions.isMobile) {
                  if (useCase.title === 'Помощники программиста') return 0.5;
                  if (useCase.title === 'Извлечение данных') return 0.7;
                  return 1.0;
                } else {
                  // Desktop-specific adjustments
                  switch (useCase.title) {
                    case 'Копирайтинг':
                      return 1.2; // Slightly further out
                    case 'Итоги встреч':
                      return 1.3; // Increased distance to prevent overlap with growth percentage
                    case 'Извлечение данных':
                      return 0.9; // Slightly closer
                    case 'Корпоративный поиск':
                      return 1.15; // Further out
                    case 'Чат-боты поддержки':
                      return 0.95; // Slightly closer
                    case 'Генерация изображений':
                      return 1.1; // Slightly further out
                    default:
                      return 1.0;
                  }
                }
              };

              const labelRadiusMultiplier = getLabelRadiusMultiplier();
              const labelRadius = (radius + (dimensions.isMobile ? 32 : 24)) * labelRadiusMultiplier;
              const lineEndX = Math.cos(midAngle) * labelRadius;
              const lineEndY = Math.sin(midAngle) * labelRadius;
              
              const textAnchor = Math.cos(midAngle) > 0 ? 'start' : 'end';
              const textOffset = Math.cos(midAngle) > 0 ? 8 : -8;
              const labelX = lineEndX + textOffset;
              
              const fontSize = dimensions.isMobile 
                ? Math.max(10, Math.min(12, dimensions.width / 40))
                : 14;

              // Split specific titles into two lines on mobile
              const splitTitle = (title: string) => {
                if (!dimensions.isMobile) return [title];
                switch (title) {
                  case 'Генерация изображений':
                    return ['Генерация', 'изображений'];
                  case 'Чат-боты поддержки':
                    return ['Чат-боты', 'поддержки'];
                  case 'Помощники программиста':
                    return ['Помощники', 'программиста'];
                  case 'Извлечение данных':
                    return ['Извлечение', 'данных'];
                  default:
                    return [title];
                }
              };
              
              const titleLines = splitTitle(useCase.title);
              
              return (
                <g key={useCase.id}>
                  <path
                    d={path}
                    className={`
                      transition-all duration-300 cursor-pointer
                      ${isActive 
                        ? isDarkMode ? 'fill-blue-500' : 'fill-blue-600'
                        : isDarkMode ? 'fill-blue-600 hover:fill-blue-500' : 'fill-blue-500 hover:fill-blue-600'
                      }
                    `}
                    stroke={isDarkMode ? '#1f2937' : 'white'}
                    strokeWidth="3"
                    onClick={() => handleSegmentClick(useCase.id)}
                  />
                  
                  <line
                    x1={lineEndX * 0.9}
                    y1={lineEndY * 0.9}
                    x2={lineEndX}
                    y2={lineEndY}
                    className={isDarkMode ? 'stroke-gray-500' : 'stroke-gray-400'}
                    strokeWidth="1"
                  />
                  
                  <g transform={`translate(${labelX}, ${lineEndY})`}>
                    {titleLines.map((line, i) => (
                      <text
                        key={i}
                        className={isDarkMode ? 'fill-gray-200' : 'fill-gray-800'}
                        textAnchor={textAnchor}
                        dy={`${-0.6 + (i * 1.2)}em`}
                        style={{ fontSize: `${fontSize}px` }}
                      >
                        {line}
                      </text>
                    ))}
                    <text
                      className={isDarkMode ? 'fill-gray-400' : 'fill-gray-600'}
                      textAnchor={textAnchor}
                      dy={`${titleLines.length * 1.2 + 0.6}em`}
                      style={{ fontSize: `${fontSize - 1}px` }}
                    >
                      {useCase.adoptionRate}%
                    </text>
                    {useCase.yearOverYearGrowth && (
                      <text
                        className={isDarkMode ? 'fill-green-400' : 'fill-green-500'}
                        textAnchor={textAnchor}
                        dy={`${titleLines.length * 1.2 + 1.8}em`}
                        style={{ fontSize: `${fontSize - 1}px` }}
                      >
                        +{useCase.yearOverYearGrowth}% за год
                      </text>
                    )}
                  </g>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
      
      <div className="mt-6 space-y-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className={`w-4 h-4 rounded ${isDarkMode ? 'bg-blue-600' : 'bg-blue-500'}`} />
            <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Текущий уровень внедрения
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className={`w-4 h-4 rounded ${isDarkMode ? 'bg-green-600' : 'bg-green-500'}`} />
            <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Рост за год
            </span>
          </div>
        </div>
        
        <div className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
          Данные из отчета Menlo Ventures "Состояние Генеративного ИИ в Бизнесе 2024"
        </div>
      </div>
    </div>
  );
}