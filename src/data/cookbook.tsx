import {sortBy} from '@site/src/utils/jsUtils';

export type Author = {
  name: string;
  image: string;
  title?: string;
  profileUrl?: string;
};

export type DifficultyType = 'beginner' | 'intermediate' | 'advanced';

export type Recipe = {
  title: string;
  description: string;
  preview: string;
  website: string;
  source?: string;
  tags: TagType[];
  difficulty: DifficultyType;
  author?: Author;
  publishDate: string;
};

export type TagType =
  | 'telegram'
  | 'yandexgpt'
  | 'searchapi'
  | 'langgraph'
  | 'adapter'
  | 'fomo'
  | 'favorite';

export const Tags = {
  telegram: {
    label: 'Telegram',
    description: 'Guides related to Telegram bot development',
    color: '#0088cc',
  },
  yandexgpt: {
    label: 'YandexGPT',
    description: 'Guides for working with YandexGPT API',
    color: '#ff0000',
  },
  searchapi: {
    label: 'Search API',
    description: 'Guides for Yandex Search API integration',
    color: '#ffcc00',
  },
  langgraph: {
    label: 'LangGraph',
    description: 'Guides for working with LangGraph',
    color: '#00ff00',
  },
  adapter: {
    label: 'Adapter',
    description: 'Guides for adapter implementation',
    color: '#9933cc',
  },
  fomo: {
    label: 'FOMO',
    description: 'FOMO-related guides',
    color: '#ff6600',
  },
  favorite: {
    label: 'Favorite',
    description: 'Featured guides',
    color: '#ff3366',
  },
};

export const TagList = Object.keys(Tags) as TagType[];

const defaultAuthor: Author = {
  name: "David Merkulov",
  image: '/img/authors/dmerkulov.jpg',
  title: "AI Engineer in Yandex",
  profileUrl: "https://merkulov.ai"
};

export const CookbookList: Recipe[] = [
  {
    title: 'Building a Telegram Bot Demo',
    description: 'Step-by-step guide on creating a Telegram bot with advanced features',
    preview: '/img/cookbook/tgbot-demo.jpg',
    website: '/docs/guides/tgbot_demo',
    tags: ['telegram', 'favorite'],
    difficulty: 'beginner',
    author: defaultAuthor,
    publishDate: '2024-11-20'
  },
  {
    title: 'SERP FOMO Collaboration',
    description: 'Guide on implementing SERP FOMO collaboration features',
    preview: '/img/cookbook/serp-fomo.jpg',
    website: '/docs/guides/serp_fomo_collab',
    tags: ['searchapi', 'fomo'],
    difficulty: 'intermediate',
    author: defaultAuthor,
    publishDate: '2024-11-25'
  },
  {
    title: 'Search API with FOMO',
    description: 'Integration guide for Search API with FOMO functionality',
    preview: '/img/cookbook/searchapi-fomo.jpg',
    website: '/docs/guides/searchapi_fomo',
    tags: ['searchapi', 'fomo'],
    difficulty: 'intermediate',
    author: defaultAuthor,
    publishDate: '2024-11-30'
  },
  {
    title: 'YandexGPT Tools',
    description: 'Collection of tools and utilities for YandexGPT',
    preview: '/img/cookbook/tools-yc.jpg',
    website: '/docs/guides/tools_yc',
    tags: ['yandexgpt'],
    difficulty: 'intermediate',
    author: defaultAuthor,
    publishDate: '2024-12-05'
  },
  {
    title: 'Adapter Implementation',
    description: 'Comprehensive guide on implementing adapters',
    preview: '/img/cookbook/adapter.jpg',
    website: '/docs/adapter/',
    tags: ['adapter'],
    difficulty: 'advanced',
    author: defaultAuthor,
    publishDate: '2024-12-08'
  },
  {
    title: 'Getting Started with LangGraph',
    description: 'Introduction to LangGraph and its core concepts',
    preview: '/img/cookbook/langgraph.jpg',
    website: '/docs/advanced/langgraph-start',
    tags: ['langgraph'],
    difficulty: 'advanced',
    author: defaultAuthor,
    publishDate: '2024-12-12'
  },
];

export const sortedCookbook = sortBy(CookbookList, (guide) => guide.title.toLowerCase()); 