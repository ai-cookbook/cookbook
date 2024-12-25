import React from 'react';
import Layout from '@theme/Layout';
import { RadialChart } from '@site/src/components/bolt/RadialChart';
import { UseCaseCard } from '@site/src/components/bolt/UseCaseCard';
import type { UseCase } from '@site/src/types/useCase';

const useCaseData: UseCase[] = [
  {
    id: '1',
    title: 'Помощники программиста',
    adoptionRate: 51,
    yearOverYearGrowth: 125,
    description: 'ИИ-помощники, которые помогают разработчикам писать, проверять и оптимизировать код',
    category: 'development',
    trend: 'rising',
    marketPlayers: [
      { name: 'GitHub', product: 'Copilot', description: 'ИИ-напарник на базе OpenAI Codex' },
      { name: 'Amazon', product: 'CodeWhisperer', description: 'ML-подсказки кода' },
      { name: 'Tabnine', product: '', description: 'ИИ-автодополнение кода' }
    ]
  },
  {
    id: '2',
    title: 'Чат-боты поддержки',
    adoptionRate: 31,
    yearOverYearGrowth: 82,
    description: 'ИИ чат-боты, обеспечивающие круглосуточную поддержку клиентов с мгновенными ответами',
    category: 'customer-service',
    trend: 'rising',
    marketPlayers: [
      { name: 'Intercom', product: '', description: 'Клиентские сообщения с ИИ-поддержкой' },
      { name: 'ChatGPT', product: 'Enterprise', description: 'Корпоративное решение OpenAI' },
      { name: 'Claude', product: '', description: 'ИИ-ассистент Anthropic' }
    ]
  },
  {
    id: '3',
    title: 'Корпоративный поиск',
    adoptionRate: 28,
    yearOverYearGrowth: 65,
    description: 'ИИ-системы поиска для нахождения и извлечения внутренней информации компании',
    category: 'enterprise-search',
    trend: 'rising',
    marketPlayers: [
      { name: 'Elastic', product: 'AI Search', description: 'Корпоративный поиск с ИИ' },
      { name: 'Algolia', product: '', description: 'API поиска на базе ИИ' }
    ]
  },
  {
    id: '4',
    title: 'Извлечение данных',
    adoptionRate: 27,
    yearOverYearGrowth: 58,
    description: 'ИИ-инструменты для автоматизации извлечения и обработки данных из различных источников',
    category: 'data-extraction',
    trend: 'rising',
    marketPlayers: [
      { name: 'UiPath', product: '', description: 'Платформа автоматизации с ИИ' },
      { name: 'Automation Anywhere', product: '', description: 'Комплекс интеллектуальной автоматизации' }
    ]
  },
  {
    id: '5',
    title: 'Итоги встреч',
    adoptionRate: 24,
    yearOverYearGrowth: 45,
    description: 'ИИ-инструменты, автоматически создающие итоги и задачи по результатам встреч',
    category: 'meeting-summary',
    trend: 'rising',
    marketPlayers: [
      { name: 'Otter.ai', product: '', description: 'ИИ-ассистент для встреч' },
      { name: 'Fireflies.ai', product: '', description: 'ИИ-конспектирование встреч' }
    ]
  },
  {
    id: '6',
    title: 'Копирайтинг',
    adoptionRate: 21,
    yearOverYearGrowth: 40,
    description: 'Генерация контента с помощью ИИ для маркетинга и коммуникаций',
    category: 'copywriting',
    trend: 'stable',
    marketPlayers: [
      { name: 'Copy.ai', product: '', description: 'ИИ-генерация контента' },
      { name: 'Jasper', product: '', description: 'ИИ-помощник для написания' }
    ]
  },
  {
    id: '7',
    title: 'Генерация изображений',
    adoptionRate: 20,
    yearOverYearGrowth: 35,
    description: 'ИИ-системы, создающие изображения по текстовому описанию',
    category: 'image-generation',
    trend: 'rising',
    marketPlayers: [
      { name: 'DALL-E', product: '', description: 'Генерация изображений OpenAI' },
      { name: 'Midjourney', product: '', description: 'ИИ-генерация искусства' }
    ]
  }
];

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Генеративный ИИ в Бизнесе"
      description="Исследование внедрения генеративного ИИ в бизнесе в 2024 году"
    >
      <main className="container mx-auto px-4 py-8">
        <RadialChart data={useCaseData} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {useCaseData.map((useCase) => (
            <UseCaseCard key={useCase.id} useCase={useCase} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
