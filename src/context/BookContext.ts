import { createContext } from "react";

export const BookContext = createContext<{
  setSearchTerm: (value: string) => void;
  setCurrentBook: (value: string) => void;
  searchTerm: string;
  currentBook: string;
}>({
  setSearchTerm: () => {},
  setCurrentBook: () => {},
  searchTerm: "",
  currentBook: "",
});
