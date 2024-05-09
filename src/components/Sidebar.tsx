import { BookContext } from "@/context/BookContext";
import { useContext } from "react";

export const Sidebar = () => {
  const { favoriteBooksInfo } = useContext(BookContext);

  return (
    <div className="h-[51rem]">
      <h1 className="text-4xl underline text-center tracking-[.3rem]">Your Favorites</h1>
      {favoriteBooksInfo.length > 0 ? (
        <ul>
          {favoriteBooksInfo.map((book, i) => {
            return <li key={i}>{book.title}</li>;
          })}
        </ul>
      ) : (
        <p className="font-l italic tracking-widest text-center pt-3">
          You have not put any books in your favorites yet...
        </p>
      )}
    </div>
  );
};
