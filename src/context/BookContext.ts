import { createContext } from "react";

export type BookType = {
  title: string;
  key: string[];
  cover?: string;
  author: string;
  read: boolean;
};

export type favoriteBooksType = {
  favoriteBooks: BookType[];
};

export const BookContext = createContext<{
  setSearchTerm: (value: string) => void;
  setCurrentBook: (value: string) => void;
  setTrendingBooks: (value: []) => void;
  setClassicBooks: (value: []) => void;
  dispatch: (value: any) => void;
  searchTerm: string;
  currentBook: string;
  trendingBooks: [];
  classicBooks: [];
  state: favoriteBooksType;
}>({
  setSearchTerm: () => {},
  setCurrentBook: () => {},
  setClassicBooks: () => {},
  setTrendingBooks: () => {},
  dispatch: () => {},
  searchTerm: "",
  currentBook: "",
  trendingBooks: [],
  classicBooks: [],
  state: {
    favoriteBooks: [],
  },
});
