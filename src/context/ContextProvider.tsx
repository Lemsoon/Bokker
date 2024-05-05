import { ReactNode, useState } from "react";
import { BookContext } from "./BookContext";

type ContextProps = {
  children: ReactNode;
};

export const BookProvider = ({ children }: ContextProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return <BookContext.Provider value={{ setSearchTerm, searchTerm }}>{children}</BookContext.Provider>;
};
