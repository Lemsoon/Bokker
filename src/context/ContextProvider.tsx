import { ReactNode, useEffect, useReducer, useState } from "react";
import { BookContext } from "./BookContext";

type ContextProps = {
  children: ReactNode;
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "addToFav":
      return { favoriteBooks: [...state.favoriteBooks, action.payload] };
    case "removeFromFav":
      return { favoriteBooks: [...state.favoriteBooks, action.payload] };
    default:
      return state;
  }
};

export const BookProvider = ({ children }: ContextProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentBook, setCurrentBook] = useState<string>("");
  const [trendingBooks, setTrendingBooks] = useState<[]>([]);
  const [classicBooks, setClassicBooks] = useState<[]>([]);

  const [books, dispatch] = useReducer(reducer, { favoriteBooks: [] });
  useEffect(() => {
    console.log(books);
  }, [books.favoriteBooks]);

  return (
    <BookContext.Provider
      value={{
        setSearchTerm,
        searchTerm,
        currentBook,
        setCurrentBook,
        trendingBooks,
        setTrendingBooks,
        classicBooks,
        setClassicBooks,
        dispatch,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
