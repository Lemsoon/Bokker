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
        <ul className="text-center duration-200">
          {state.favoriteBooks.map((book, i) => {
            return (
              <Link key={i} to={`/book${book.key}`}>
                <li className="h-6 pb-6 bg-red-100 m-2 border-2 border-black hover:scale-[104%] duration-75">
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
