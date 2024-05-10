import { BookContext } from "@/context/BookContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const { favoriteBooksInfo } = useContext(BookContext);
  console.log(favoriteBooksInfo);
  return (
    <div className=" overflow-hidden">
      <h1 className="text-4xl underline text-center tracking-[.3rem]">Your Favorites</h1>
      {favoriteBooksInfo.length > 0 ? (
        <ul className="overflow-y-scroll overflow-hidden max-h-[80vh]">
          {favoriteBooksInfo.map((book, i) => {
            return (
              <Link to={`/book${book.key}`}>
                <li
                  key={i}
                  className="text-center bg-red-100 mt-2 p-2 flex justify-center items-center border-black border-2 hover:scale-[1.01] duration-200"
                >
                  <img
                    src={book.covers ? `https://covers.openlibrary.org/b/id/${book.covers[0]}-M.jpg` : ""}
                    alt={`cover image`}
                    className=" max-w-12 h-full border-2 border-black"
                  />
                  <div>{book.title}</div>
                </li>
              </Link>
            );
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
