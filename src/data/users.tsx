/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import {translate} from '@docusaurus/Translate';
import {sortBy} from '@site/src/utils/jsUtils';

/*
 * ADD YOUR SITE TO THE DOCUSAURUS SHOWCASE
 *
 * Please don't submit a PR yourself: use the Github Discussion instead:
 * https://github.com/ai-cookbook/cookbook/discussions/7826
 *
 * Instructions for maintainers:
 * - Add the site in the json array below
 * - `title` is the project's name (no need for the "Docs" suffix)
 * - A short (≤120 characters) description of the project
 * - Use relevant tags to categorize the site (read the tag descriptions on the
 *   https://docusaurus.io/showcase page and some further clarifications below)
 * - Add a local image preview (decent screenshot of the Docusaurus site)
 * - The image MUST be added to the GitHub repository, and use `require("img")`
 * - The image has to have minimum width 640 and an aspect of no wider than 2:1
 * - If a website is open-source, add a source link. The link should open
 *   to a directory containing the `docusaurus.config.js` file
 * - Resize images: node admin/scripts/resizeImage.js
 * - Run optimizt manually (see resize image script comment)
 * - Open a PR and check for reported CI errors
 *
 * Example PR: https://github.com/ai-cookbook/cookbook/pull/7620
 */

// LIST OF AVAILABLE TAGS
// Available tags to assign to a showcase site
// Please choose all tags that you think might apply.
// We'll remove inappropriate tags, but it's less likely that we add tags.
export type TagType =
  | 'favorite'
  | 'opensource'
  | 'product'
  | 'design';

export type Author = {
  name: string;
  image: string;
  title?: string;
  profileUrl?: string;
};

export type User = {
  title: string;
  description: string;
  preview: string;
  website: string;
  source: string | null;
  tags: TagType[];
  author?: Author;
  publishDate: string;
};

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export const Tags = {
  favorite: {
    label: translate({message: 'Favorite'}),
    description: translate({
      message: 'Our favorite Docusaurus sites that you must absolutely check out!',
      id: 'showcase.tag.favorite.description',
    }),
    color: '#e9669e',
  },
  opensource: {
    label: translate({message: 'Open-Source'}),
    description: translate({
      message: 'Open source applications built with Yandex Foundation Models',
      id: 'showcase.tag.opensource.description',
    }),
    color: '#39ca30',
  },
  product: {
    label: translate({message: 'Product'}),
    description: translate({
      message: 'Applications built with Yandex Foundation Models',
      id: 'showcase.tag.product.description',
    }),
    color: '#127f82',
  },
  design: {
    label: translate({message: 'Design'}),
    description: translate({
      message: 'Beautiful applications with a unique design',
      id: 'showcase.tag.design.description',
    }),
    color: '#a44fb7',
  },
} as const;

export const TagList = Object.keys(Tags) as TagType[];

// Add sites to this list
// prettier-ignore
const Users: User[] = [
  {
    title: "Tokenizer YandexGPT",
    description: "YandexGPT-токенизатор текста бесконечного размера.",
    preview: '/img/showcase/yandexgpt-tokenizer.jpg',
    website: "http://tokenizer.llmplay.ru:8501/",
    source: null,
    tags: ['product', 'favorite'],
    publishDate: '2024-12-10',
    author: {
      name: "Dmitry Zhechkov",
      image: '/img/authors/dzhechkov.jpg',
      title: "AI Architect",
      profileUrl: "https://www.linkedin.com/in/dmitry-zhechkov-1037182/"
    }
  },
  {
    title: "LobeChat",
    description: "Современное многопользовательское приложение с чатом и плагинами. Работает с Yandex Foundation Models (YandexGPT и т.п.).",
    preview: '/img/showcase/lobechat.jpg',
    website: "https://lobe-chat-01-umber.vercel.app/chat",
    source: "/docs/apps/LobeChat",
    tags: ['product', 'opensource'],
    publishDate: '2024-12-05',
    author: {
      name: "Opensource",
      image: '/img/authors/opensource.jpg',
      title: "Community Project"
    }
  },
  {
    title: "RAGflow",
    description: "RAG-ориентированный опенсорсный no-code фреймворк с готовыми шаблонами для построения Advanced RAG и Agentic систем. Поддерживает Yandex Foundation Models (YandexGPT и др.).",
    preview: '/img/showcase/ragflow.jpg',
    website: "http://ragflow.llmplay.ru/",
    source: "/docs/apps/RAGflow/",
    tags: ['product', 'opensource'],
    publishDate: '2024-12-08',
    author: {
      name: "Opensource",
      image: '/img/authors/opensource.jpg',
      title: "Community Project"
    }
  },
  {
    title: "Flowise",
    description: "LLM-ориентированный опенсорсный no-code фреймворк с обширной библиотекой готовых шаблонов для решения задач с использованием LLM, включая Yandex Foundation Models (YandexGPT и др.).",
    preview: '/img/showcase/flowise.jpg',
    website: "http://flowise-vm.llmplay.ru:3000/",
    source: "https://github.com/FlowiseAI/Flowise",
    tags: ['product', 'opensource'],
    publishDate: '2024-12-08',
    author: {
      name: "Opensource",
      image: '/img/authors/opensource.jpg',
      title: "Community Project"
    }
  },
  {
    title: "YandexGPT чат-бот",
    description: "Чат-бот на базе YandexGPT с поддержкой истории общения и настройки системного промпта. Требует ввода своих credentials.",
    preview: '/img/showcase/yandexgpt-chatbot.jpg',
    website: "https://yagpt-chatbot-context.streamlit.app/",
    source: null,
    tags: ['product', 'favorite'],
    publishDate: '2024-12-15',
    author: {
      name: "Dmitry Zhechkov",
      image: '/img/authors/dzhechkov.jpg',
      title: "AI Architect",
      profileUrl: "https://www.linkedin.com/in/dmitry-zhechkov-1037182/"
    }
  },
  {
    title: "YandexGPT RAG-playground",
    description: "Playground по построению вопросно-ответной системы на базе YandexGPT. Можно загружать документы в pdf. MDB Opensearch уже создана. Необходимо указать название поискового индекса и все credentials для YandexGPT.",
    preview: '/img/showcase/yandexgpt-rag.jpg',
    website: "https://yagpt-rag-oob.streamlit.app/",
    source: null,
    tags: ['product', 'favorite'],
    publishDate: '2024-12-03',
    author: {
      name: "Dmitry Zhechkov",
      image: '/img/authors/dzhechkov.jpg',
      title: "AI Architect",
      profileUrl: "https://www.linkedin.com/in/dmitry-zhechkov-1037182/"
    }
  },
  {
    title: "YandexGPT суммаризатор",
    description: "Суммаризатор текста бесконечного размера на базе YandexGPT.",
    preview: '/img/showcase/yandexgpt-summarizer.jpg',
    website: "http://monbot.llmplay.ru:8504/",
    source: null,
    tags: ['product'],
    publishDate: '2024-12-17',
    author: {
      name: "Dmitry Zhechkov",
      image: '/img/authors/dzhechkov.jpg',
      title: "AI Architect",
      profileUrl: "https://www.linkedin.com/in/dmitry-zhechkov-1037182/"
    }
  },
  {
    title: "HR-bot по вакансии",
    description: "Помощник рекрутера, отвечает на вопросы по определенной вакансии (Архитектор в 'Яндекс Облако').",
    preview: '/img/showcase/hr-bot-vacancy.jpg',
    website: "http://monbot.llmplay.ru:8501/",
    source: null,
    tags: ['product', 'favorite'],
    publishDate: '2024-12-14',
    author: {
      name: "Dmitry Zhechkov",
      image: '/img/authors/dzhechkov.jpg',
      title: "AI Architect",
      profileUrl: "https://www.linkedin.com/in/dmitry-zhechkov-1037182/"
    }
  },
  {
    title: "HR-bot для онбоардинга",
    description: "Помощник кадровика для онбоардинга новых сотрудников. Отвечает на вопросы по кодексу корпоративной этики ПАО Газпром.",
    preview: '/img/showcase/hr-bot-onboarding.jpg',
    website: "http://monbot.llmplay.ru:8502/",
    source: null,
    tags: ['product'],
    publishDate: '2024-12-06',
    author: {
      name: "Dmitry Zhechkov",
      image: '/img/authors/dzhechkov.jpg',
      title: "AI Architect",
      profileUrl: "https://www.linkedin.com/in/dmitry-zhechkov-1037182/"
    }
  },
  {
    title: "MosRu-bot",
    description: "Помощник по 10-ти документам сайта mos.ru 'Как оформить быстро и правильно?'",
    preview: '/img/showcase/mosru-bot.jpg',
    website: "http://monbot.llmplay.ru:8503/",
    source: null,
    tags: ['product'],
    publishDate: '2024-12-18',
    author: {
      name: "Dmitry Zhechkov",
      image: '/img/authors/dzhechkov.jpg',
      title: "AI Architect",
      profileUrl: "https://www.linkedin.com/in/dmitry-zhechkov-1037182/"
    }
  },
  {
    title: "AI-флорист",
    description: "Флорист, который помогает подобрать букет цветов для любого случая.",
    preview: '/img/showcase/ai-florist.jpg',
    website: "http://ai-buket.llmplay.ru:5000/",
    source: null,
    tags: ['product', 'design'],
    publishDate: '2024-12-02',
    author: {
      name: "Dmitry Zhechkov",
      image: '/img/authors/dzhechkov.jpg',
      title: "AI Architect",
      profileUrl: "https://www.linkedin.com/in/dmitry-zhechkov-1037182/"
    }
  },
   
];

function sortUsers() {
  let result = Users;
  // Sort by site name
  result = sortBy(result, (user) => user.title.toLowerCase());
  // Sort by favorite tag, favorites first
  result = sortBy(result, (user) => !user.tags.includes('favorite'));
  return result;
}

export const sortedUsers: User[] = sortUsers();