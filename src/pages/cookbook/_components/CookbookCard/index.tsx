import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import {Tags, TagList, type TagType, type Recipe} from '@site/src/data/cookbook';
import {sortBy} from '@site/src/utils/jsUtils';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

function TagItem({
  label,
  description,
  color,
}: {
  label: string;
  description: string;
  color: string;
}) {
  return (
    <li className={styles.tag} title={description}>
      <span className={styles.textLabel}>{label.toLowerCase()}</span>
      <span className={styles.colorLabel} style={{backgroundColor: color}} />
    </li>
  );
}

function CookbookCardTag({tags}: {tags: TagType[]}) {
  const tagObjects = tags.map((tag) => ({tag, ...Tags[tag]}));
  const tagObjectsSorted = sortBy(tagObjects, (tagObject) =>
    TagList.indexOf(tagObject.tag),
  );

  return (
    <>
      {tagObjectsSorted.map((tagObject, index) => {
        return <TagItem key={index} {...tagObject} />;
      })}
    </>
  );
}

function getDifficultyColor(difficulty: string): string {
  switch (difficulty) {
    case 'beginner':
      return '#4CAF50';
    case 'intermediate':
      return '#FF9800';
    case 'advanced':
      return '#F44336';
    default:
      return '#757575';
  }
}

function CookbookCard({guide}: {guide: Recipe}) {
  return (
    <li key={guide.title} className="card shadow--md">
      <div className="card__body">
        <div className={clsx(styles.cookbookCardHeader)}>
          <Heading as="h4" className={styles.cookbookCardTitle}>
            <Link href={guide.website} className={styles.cookbookCardLink}>
              {guide.title}
            </Link>
          </Heading>
          <span 
            className={styles.difficultyBadge}
            style={{backgroundColor: getDifficultyColor(guide.difficulty)}}
          >
            {guide.difficulty}
          </span>
        </div>
        <p className={styles.cookbookCardBody}>{guide.description}</p>
      </div>

      <div className={styles.cardFooter}>
        <div className={styles.tagsContainer}>
          <CookbookCardTag tags={guide.tags} />
        </div>
      </div>

      <div className={styles.cookbookCardFooter}>
        {guide.author && (
          <div 
            className={clsx(
              styles.cookbookCardAuthor,
              guide.author.profileUrl && styles.cookbookCardAuthorClickable
            )}
            onClick={() => {
              if (guide.author?.profileUrl) {
                window.open(guide.author.profileUrl, '_blank');
              }
            }}
            role={guide.author.profileUrl ? "link" : "presentation"}
            style={guide.author.profileUrl ? { cursor: 'pointer' } : undefined}
          >
            <img 
              src={guide.author.image} 
              alt={guide.author.name}
              className={styles.authorImage}
            />
            <div className={styles.authorInfo}>
              <div className={styles.authorName}>{guide.author.name}</div>
              {guide.author.title && (
                <div className={styles.authorTitle}>{guide.author.title}</div>
              )}
            </div>
              {guide.publishDate && (
          <div className={styles.publishDate}>
            {new Date(guide.publishDate).toLocaleDateString('ru-RU', {
              year: 'numeric',
              month: '2-digit',
              day: 'numeric'
            })}
          </div>
        )}
          </div>
        )}
      </div>
    </li>
  );
}

export default React.memo(CookbookCard); 