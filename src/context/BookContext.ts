import { createContext } from "react";

export const BookContext = createContext<{
  setSearchTerm: (value: string) => void;
  setCurrentBook: (value: string) => void;
  setTrendingBooks: (value: []) => void;
  setClassicBooks: (value: []) => void;
  searchTerm: string;
  currentBook: string;
  trendingBooks: [];
  classicBooks: [];
}>({
  setSearchTerm: () => {},
  setCurrentBook: () => {},
  setClassicBooks: () => {},
  setTrendingBooks: () => {},
  searchTerm: "",
  currentBook: "",
  trendingBooks: [],
  classicBooks: [],
});
