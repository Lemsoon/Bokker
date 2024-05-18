export type authorType = {
  name: string;
  alternate_names: string[];
  bio:
    | {
        value: string;
      }
    | string;
  birth_date: string;
  death_date: string;
  photos: number[];
};

type Author = {
  author: {
    key: string;
  };
};

type BookDescription = string | { value: string };

type excerpts = {
  comment: string;
  excerpt: string;
};

export type bookType = {
  title: string;
  subtitle?: string;
  authors?: Author[];
  covers: string[];
  key: string;
  description?: BookDescription;
  excerpts: excerpts[];
};

export type BookType = {
  pages: number;
  title: string;
  key: string;
  cover?: string;
  author: string;
  read: boolean;
  givenReview?: string;
  givenRating?: number;
  authorKey: string;
};

export type AuthorType = {
  name: string;
  key: string;
};

export type favoriteBooksType = {
  favoriteAuthors: AuthorType[];
  favoriteBooks: BookType[];
};

export type Action = {
  type: string;
  payload: {
    name: any;
    i: number;
    givenReview?: string;
    givenRating?: number;
    key?: string;
    pages?: number;
  };
};

export type Work = {
  covers: number[];
  key: string;
  title: string;
};
