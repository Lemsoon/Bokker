import { ReactNode, useEffect, useReducer, useState } from "react";
import { BookContext } from "./BookContext";

type ContextProps = {
  children: ReactNode;
};

type Action = {
  type: string;
  payload: { key: string };
};

const reducer = (state: any, action: Action) => {
  switch (action.type) {
    case "addToFav":
      console.log("Adding fav.");
      return {
        favoriteBooks: [...state.favoriteBooks, action.payload],
      };
    case "removeFromFav":
      console.log("Removing fav: ", action.payload.key);
      return {
        favoriteBooks: state.favoriteBooks.filter((book: any) => book.key !== action.payload.key),
      };
    default:
      return state;
  }
};

export const BookProvider = ({ children }: ContextProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentBook, setCurrentBook] = useState<string>("");
  const [trendingBooks, setTrendingBooks] = useState<[]>([]);
  const [classicBooks, setClassicBooks] = useState<[]>([]);

  const [state, dispatch] = useReducer(reducer, { favoriteBooks: [] });

  useEffect(() => {
    console.log("Favorites: ", state.favoriteBooks);
  }, [state.favoriteBooks]);

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
        state,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
