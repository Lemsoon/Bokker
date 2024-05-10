import { BookContext } from "@/context/BookContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const { state } = useContext(BookContext);

  return (
    <div className=" overflow-hidden h-[80vh]">
      <h1 className="text-4xl underline text-center tracking-[.3rem]">Your Favorites</h1>
      {state.favoriteBooks.length === 0 ? (
        <p className="font-l italic tracking-widest text-center pt-3">You have not added any favorite books yet</p>
      ) : (
        <ul className="text-center ">
          {state.favoriteBooks.map((book, i) => {
            return (
              <Link key={i} to={`/book${book.key}`}>
                <li className="bg-red-100 m-2">
                  <p>{book.title}</p>
                </li>
              </Link>
            );
          })}
        </ul>
      )}
    </div>
  );
};
