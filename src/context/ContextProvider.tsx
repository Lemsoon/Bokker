import { ReactNode, useEffect, useReducer, useState } from "react";
import { BookContext, FavoriteBookType } from "./BookContext";
import { AxiosHookLess } from "@/utils/AxiosHookLess";

type ContextProps = {
  children: ReactNode;
};

type Action = {
  type: string;
  payload: string;
};

const reducer = (state: any, action: Action) => {
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
  const [favoriteBooksInfo, setFavoriteBooksInfo] = useState<FavoriteBookType[]>([]);

  const [state, dispatch] = useReducer(reducer, { favoriteBooks: [] });

  useEffect(() => {
    const fetchData = async () => {
      const latestBookData = await AxiosHookLess(
        //Had to create a seperate api thing so that there are not too many nested hooks
        `https://openlibrary.org${state.favoriteBooks[state.favoriteBooks.length - 1]}.json`
      );
      setFavoriteBooksInfo([...favoriteBooksInfo, latestBookData.data]);
    };
    fetchData();
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
        favoriteBooksInfo,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
