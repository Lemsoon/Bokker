import { ReactNode, useReducer, useState } from "react";
import { BookContext } from "./BookContext";
import { Action, AuthorType, BookType } from "@/types/types";

type ContextProps = {
  children: ReactNode;
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
        favoriteBooks: state.favoriteBooks.filter((book: BookType) => book.key !== action.payload.key),
      };
    case "setRead":
      return {
        favoriteBooks: state.favoriteBooks.map((book: BookType) =>
          book.key === action.payload.key ? { ...book, read: true } : book
        ),
      };
    case "setNotRead":
      return {
        favoriteBooks: state.favoriteBooks.map((book: BookType) =>
          book.key === action.payload.key ? { ...book, read: false } : book
        ),
      };
    case "addPages":
      return {
        favoriteBooks: state.favoriteBooks.map((book: BookType) =>
          book.key === action.payload.key ? { ...book, pages: action.payload.pages } : book
        ),
      };
    case "addReview":
      return {
        favoriteBooks: state.favoriteBooks.map((book: BookType) =>
          book.key === action.payload.key && book.read === true
            ? { ...book, givenReview: action.payload.givenReview, givenRating: action.payload.givenRating }
            : book
        ),
      };
    case "addAuthorToFav":
      return {
        ...state,
        favoriteAuthors: [...state.favoriteAuthors, { key: action.payload.key, name: action.payload.name }],
      };
    case "removeAuthorFromFav":
      return {
        ...state,
        favoriteAuthors: state.favoriteAuthors.filter((author: AuthorType) => author.key !== action.payload.key),
      };
    default:
      return state;
  }
};

export const BookProvider = ({ children }: ContextProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [trendingBooks, setTrendingBooks] = useState<[]>([]);
  const [classicBooks, setClassicBooks] = useState<[]>([]);

  const [state, dispatch] = useReducer(reducer, { favoriteBooks: [], favoriteAuthors: [] });

  return (
    <BookContext.Provider
      value={{
        setSearchTerm,
        searchTerm,
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
