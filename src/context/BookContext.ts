import { createContext } from "react";

export const BookContext = createContext<{
  setSearchTerm: (value: string) => void;
  searchTerm: string;
}>({
  setSearchTerm: () => {},
  searchTerm: "",
});
