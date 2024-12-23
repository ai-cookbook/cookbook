import React, {useState, useMemo} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import {
  Tags,
  TagList,
  type TagType,
  sortedCookbook,
} from '@site/src/data/cookbook';
import CookbookCard from './_components/CookbookCard';
import Heading from '@theme/Heading';

import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import styles from './styles.module.css';

const TITLE = 'AI Cookbook';
const DESCRIPTION = 'Collection of guides and tutorials for building AI applications with Yandex Foundation Models';

type CookbookFilters = {
  difficulty?: string;
  tags: TagType[];
};

function ShowcaseHeader() {
  return (
    <section className="margin-top--lg margin-bottom--lg text--center">
      <Heading as="h1">{TITLE}</Heading>
      <p>{DESCRIPTION}</p>
    </section>
  );
}

function ShowcaseFilters({
  selectedTags,
  toggleTag,
  selectedDifficulty,
  setDifficulty,
}: {
  selectedTags: TagType[];
  toggleTag: (tag: TagType) => void;
  selectedDifficulty: string;
  setDifficulty: (difficulty: string) => void;
}) {
  return (
    <div className={styles.filterCheckbox}>
      <div className={styles.filterButtons}>
        <span className={styles.filterLabel}>Difficulty:</span>
        <button
          className={clsx(styles.filterButton, selectedDifficulty === 'all' && styles.filterButtonSelected)}
          onClick={() => setDifficulty('all')}
        >
          All
        </button>
        <button
          className={clsx(styles.filterButton, selectedDifficulty === 'beginner' && styles.filterButtonSelected)}
          onClick={() => setDifficulty('beginner')}
        >
          Beginner
        </button>
        <button
          className={clsx(styles.filterButton, selectedDifficulty === 'intermediate' && styles.filterButtonSelected)}
          onClick={() => setDifficulty('intermediate')}
        >
          Intermediate
        </button>
        <button
          className={clsx(styles.filterButton, selectedDifficulty === 'advanced' && styles.filterButtonSelected)}
          onClick={() => setDifficulty('advanced')}
        >
          Advanced
        </button>
      </div>
      <div className={styles.filterButtons}>
        <span className={styles.filterLabel}>Topics:</span>
        {TagList.filter((tag) => tag !== 'favorite').map((tag) => {
          const {label, color} = Tags[tag];
          return (
            <button
              key={tag}
              className={clsx(
                styles.filterButton,
                selectedTags.includes(tag) && styles.filterButtonSelected,
              )}
              onClick={() => toggleTag(tag)}
            >
              <span
                className={styles.filterColor}
                style={{backgroundColor: color}}
              />
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ShowcaseCards({filteredGuides}) {
  return (
    <section className="margin-top--lg margin-bottom--xl">
      {filteredGuides.length === 0 ? (
        <div className={styles.showcaseEmpty}>
          <p>No guides found with the specified filters.</p>
        </div>
      ) : (
        <div className={styles.showcaseGrid}>
          {filteredGuides.map((guide) => (
            <CookbookCard key={guide.title} guide={guide} />
          ))}
        </div>
      )}
    </section>
  );
}

function Showcase(): JSX.Element {
  const [selectedTags, setSelectedTags] = useState<TagType[]>([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const filteredGuides = useMemo(() => {
    return sortedCookbook.filter((guide) => {
      if (selectedDifficulty !== 'all' && guide.difficulty !== selectedDifficulty) {
        return false;
      }
      if (selectedTags.length === 0) {
        return true;
      }
      return selectedTags.some((tag) => guide.tags.includes(tag));
    });
  }, [selectedTags, selectedDifficulty]);

  const toggleTag = (tag: TagType) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag],
    );
  };

  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <main className="margin-vert--lg">
        <ShowcaseHeader />
        <div className="container">
          <ShowcaseFilters
            selectedTags={selectedTags}
            toggleTag={toggleTag}
            selectedDifficulty={selectedDifficulty}
            setDifficulty={setSelectedDifficulty}
          />
          <ShowcaseCards filteredGuides={filteredGuides} />
        </div>
      </main>
    </Layout>
  );
}

export default Showcase; 