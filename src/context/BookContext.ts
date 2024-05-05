import { createContext } from "react";

export const BookContext = createContext<{
  setSearchTerm: (value: string) => void;
}>({
  setSearchTerm: () => {},
});
