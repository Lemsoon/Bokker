import { createContext } from "react";

export type FavoriteBookType = {
  covers: string[];
  title: string;
  avgRating: number;
  key: string;
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
  state: { favoriteBooks: [] };
  favoriteBooksInfo: FavoriteBookType[];
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
  state: { favoriteBooks: [] },
  favoriteBooksInfo: [],
});
