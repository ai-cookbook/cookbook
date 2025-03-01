/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {useEffect, useMemo, useState, type ReactNode} from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import {sortedUsers, type User} from '@site/src/data/users';
import Heading from '@theme/Heading';
import FavoriteIcon from '../FavoriteIcon';
import ShowcaseCard from '../ShowcaseCard';
import {useFilteredUsers} from '../../_utils';

import styles from './styles.module.css';

function HeadingNoResult() {
  return (
    <Heading as="h2">
      <Translate id="showcase.usersList.noResult">No result</Translate>
    </Heading>
  );
}

function HeadingFavorites() {
  return (
    <Heading as="h2" className={styles.headingFavorites}>
      <Translate id="showcase.favoritesList.title">Our favorites</Translate>
      <FavoriteIcon size="large" style={{marginLeft: '1rem'}} />
    </Heading>
  );
}

function HeadingAllSites() {
  return (
    <Heading as="h2">
      <Translate id="showcase.usersList.allUsers">All sites</Translate>
    </Heading>
  );
}

function CardList({heading, items}: {heading?: ReactNode; items: User[]}) {
  return (
    <div className="container">
      {heading}
      <ul className={clsx('clean-list', styles.cardList)}>
        {items.map((item) => (
          <ShowcaseCard key={item.title} user={item} />
        ))}
      </ul>
    </div>
  );
}

function NoResultSection() {
  return (
    <section className="margin-top--lg margin-bottom--xl">
      <div className="container padding-vert--md text--center">
        <HeadingNoResult />
      </div>
    </section>
  );
}


const item =  {
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
  }

  const extraElem =    {
    title: "YandexGPT чат-бот",
    description: "Чат-бот на базе YandexGPT с поддержкой истории общения и настройки системного промпта. Требует ввода своих credentials.",
    preview: '/img/showcase/yandexgpt-chatbot.jpg',
    website: "https://yagpt-chatbot-context.streamlit.app/",
    source: null,
    tags: ['product', ],
    publishDate: '2024-12-15',
    author: {
      name: "Dmitry Zhechkov",
      image: '/img/authors/dzhechkov.jpg',
      title: "AI Architect",
      profileUrl: "https://www.linkedin.com/in/dmitry-zhechkov-1037182/"
    }
  }

export default function ShowcaseCards() {
  const [favoriteUsers, setFavoriteUsers] = useState<User[]>([]);

  const isBigScreen = useMemo(()=> {
return window.innerWidth > 1550
  }, [window.innerWidth])

  useEffect(() => {
    const updateFavoriteUsers = () => {
      const favoriteUsers = sortedUsers
        .filter((user) => user.tags.includes('favorite'))
        .slice(0, isBigScreen ? 4 : 3);
      setFavoriteUsers(favoriteUsers);
    };

    window.addEventListener('resize', updateFavoriteUsers);
    updateFavoriteUsers(); // Начальная установка

    return () => window.removeEventListener('resize', updateFavoriteUsers);
  }, []);

  const otherUsers = sortedUsers.filter(
      (user) => !user.tags.includes('favorite'),
  );

  

  const filteredUsers = useFilteredUsers();

  if (filteredUsers.length === 0) {
    return <NoResultSection />;
  }

  return (
    <section className="margin-top--lg margin-bottom--xl">
      {filteredUsers.length === sortedUsers.length ? (
        <>
          <div className={styles.showcaseFavorite}>
            <CardList heading={<HeadingFavorites />} items={favoriteUsers} />
          </div>
          <div className="margin-top--lg">
            <CardList heading={<HeadingAllSites />} items={isBigScreen ? otherUsers: [...otherUsers, extraElem ]} />
          </div>
        </>
      ) : (
        <CardList items={filteredUsers} />
      )}
    </section>
  );
}
