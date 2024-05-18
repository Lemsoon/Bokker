import { BookType } from "@/types/types";
import FavpageBookCard from "./FavPageBookCard";

export type favPageProp = {
  book: BookType;
  i: number;
  toggleReadStatus: (book: BookType) => void;
};

export const ShowFavorites: React.FC<favPageProp> = ({ i, book, toggleReadStatus }) => {
  return <FavpageBookCard i={i} book={book} toggleReadStatus={toggleReadStatus} />;
};

export const ShowRead: React.FC<favPageProp> = ({ i, book, toggleReadStatus }) => {
  return book.read === true ? <FavpageBookCard i={i} book={book} toggleReadStatus={toggleReadStatus} /> : null;
};
