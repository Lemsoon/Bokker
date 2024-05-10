import { createContext } from "react";

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
  state: { favoriteBooks: { title: string; cover?: string; key: string }[] };
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
});
