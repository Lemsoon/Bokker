import { favoriteBooksType } from "@/types/types";
import { createContext } from "react";

export const BookContext = createContext<{
  setSearchTerm: (value: string) => void;
  setTrendingBooks: (value: []) => void;
  setClassicBooks: (value: []) => void;
  dispatch: (value: any) => void;
  searchTerm: string;
  trendingBooks: [];
  classicBooks: [];
  state: favoriteBooksType;
}>({
  setSearchTerm: () => {},
  setClassicBooks: () => {},
  setTrendingBooks: () => {},
  dispatch: () => {},
  searchTerm: "",
  trendingBooks: [],
  classicBooks: [],
  state: {
    favoriteBooks: [],
    favoriteAuthors: [],
  },
});
