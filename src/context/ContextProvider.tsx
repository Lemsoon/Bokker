import { ReactNode, useEffect, useState } from "react";
import { BookContext } from "./BookContext";

type ContextProps = {
  children: ReactNode;
};

export const BookProvider = ({ children }: ContextProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentBook, setCurrentBook] = useState<string>("");

  return (
    <BookContext.Provider value={{ setSearchTerm, searchTerm, currentBook, setCurrentBook }}>
      {children}
    </BookContext.Provider>
  );
};
