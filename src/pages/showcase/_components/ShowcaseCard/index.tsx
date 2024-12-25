/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import {Tags, TagList, type TagType, type User} from '@site/src/data/users';
import {sortBy} from '@site/src/utils/jsUtils';
import Heading from '@theme/Heading';
import FavoriteIcon from '../FavoriteIcon';
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

function ShowcaseCardTag({tags}: {tags: TagType[]}) {
  const tagObjects = tags.map((tag) => ({tag, ...Tags[tag]}));

  // Keep same order for all tags
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

function getCardImage(user: User): string {
  return (
    user.preview ??
    // TODO make it configurable
    `https://slorber-api-screenshot.netlify.app/${encodeURIComponent(
      user.website,
    )}/showcase`
  );
}

interface Props {
  user: User;
}

function ShowcaseCard({user}: Props) {
  const image = getCardImage(user);
  const [imageError, setImageError] = React.useState(false);

  console.log('ShowcaseCard user:', user);
  console.log('ShowcaseCard publishDate:', user.publishDate);

  return (
    <li key={user.title} className="card shadow--md">
      <div className={clsx('card__image', styles.showcaseCardImage)}>
        <img 
          src={imageError ? '/img/default-preview.jpg' : image} 
          alt={user.title} 
          className={styles.showcaseCardImage}
          loading="lazy"
          onError={() => setImageError(true)}
        />
      </div>
      <div className="card__body">
        <div className={clsx(styles.showcaseCardHeader)}>
          <Heading as="h4" className={styles.showcaseCardTitle}>
            <Link href={user.website} className={styles.showcaseCardLink}>
              {user.title}
            </Link>
          </Heading>
          {user.tags.includes('favorite') && (
            <FavoriteIcon size="medium" style={{marginRight: '0.25rem'}} />
          )}
          {user.source && (
            <Link
              href={user.source}
              className={clsx(
                'button button--secondary button--sm',
                styles.showcaseCardSrcBtn,
              )}>
              <Translate id="showcase.card.sourceLink">source</Translate>
            </Link>
          )}
        </div>
        <p className={styles.showcaseCardBody}>{user.description}</p>
        
        <div className={styles.tagsAndDateContainer}>
          <div className={styles.tagsContainer}>
            <ShowcaseCardTag tags={user.tags} />
          </div>
          {user.publishDate && (
            <div className={styles.publishDate}>
              {new Date(user.publishDate).toLocaleDateString('ru-RU', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          )}
        </div>

        {user.author && (
          <div 
            className={clsx(
              styles.showcaseCardAuthor,
              user.author.profileUrl && styles.showcaseCardAuthorClickable
            )}
            onClick={() => {
              if (user.author?.profileUrl) {
                window.open(user.author.profileUrl, '_blank');
              }
            }}
            role={user.author.profileUrl ? "link" : "presentation"}
            style={user.author.profileUrl ? { cursor: 'pointer' } : undefined}
          >
            <img 
              src={user.author.image} 
              alt={user.author.name}
              className={styles.authorImage}
            />
            <div className={styles.authorInfo}>
              <div className={styles.authorName}>{user.author.name}</div>
              {user.author.title && (
                <div className={styles.authorTitle}>{user.author.title}</div>
              )}
            </div>
          </div>
        )}
      </div>
    </li>
  );
}

export default React.memo(ShowcaseCard);
