import { ReactNode, useEffect, useReducer, useState } from "react";
import { BookContext, BookType } from "./BookContext";

type ContextProps = {
  children: ReactNode;
};

export type Action = {
  type: string;
  payload: {
    i: number;
    review?: string;
    rating?: number;
    key?: string;
    pages?: number;
  };
};

const reducer = (state: any, action: Action) => {
  switch (action.type) {
    case "addToFav":
      return {
        ...state,
        favoriteBooks: [...state.favoriteBooks, action.payload],
      };
    case "removeFromFav":
      return {
        ...state,
        favoriteBooks: state.favoriteBooks.filter((book: any) => book.key !== action.payload.key),
      };
    case "setRead":
      return {
        favoriteBooks: state.favoriteBooks.map((book: any) =>
          book.key === action.payload.key ? { ...book, read: true } : book
        ),
      };
    case "setNotRead":
      return {
        favoriteBooks: state.favoriteBooks.map((book: any) =>
          book.key === action.payload.key ? { ...book, read: false } : book
        ),
      };
    case "setReview":
      return {
        favoriteBooks: state.favoriteBooks.map((book: BookType) => ({
          ...book,
          givenReview: action.payload.review,
          givenRating: action.payload.rating,
        })),
      };
    case "addPages":
      console.log("adding pages");

      return {
        favoriteBooks: state.favoriteBooks.map((book: BookType) =>
          book.key === action.payload.key ? { ...book, pages: action.payload.pages } : book
        ),
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
