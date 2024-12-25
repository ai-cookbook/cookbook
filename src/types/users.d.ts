declare module '@site/src/data/users' {
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
    preview?: string;
    website: string;
    source?: string;
    tags: TagType[];
    publishDate?: string;
    author?: Author;
  };

  export type Tag = {
    label: string;
    description: string;
    color: string;
  };

  export const Tags: Record<TagType, Tag>;
  export const TagList: TagType[];
  export const Users: User[];
  export const sortedUsers: User[];
} 