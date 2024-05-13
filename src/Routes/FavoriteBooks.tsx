import { BookContext, BookType } from "@/context/BookContext";
import { Read, NotRead } from "../components/ReadToggle";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const FavoriteBooks = () => {
  const { state, dispatch } = useContext(BookContext);

  const toggleReadStatus = (index: number, book: BookType) => {
    // Dispatch action to toggle read status
    dispatch({
      type: book.read ? "setNotRead" : "setRead",
      payload: { key: book.key },
    });
  };

  return (
    <div className="w-full h-full border-2 border-black overflow-y-scroll overflow-hidden">
      <div className="border-b-2 border-black bg-black bg-opacity-10">
        <h1 className="ml-2 font-bold text-5xl ">Favorite books</h1>
        <h2 className="ml-2 mt-2 ">{state.favoriteBooks.length} Favorite(s)</h2>
      </div>
      <div className="flex flex-wrap">
        {state.favoriteBooks.map((book, i) => {
          return (
            <div key={i} id="book-container" className="w-[48%] h-auto border-2 border-black m-2 flex justify-between">
              <div className="flex">
                <img src={`https://covers.openlibrary.org/b/id/${book.cover}.jpg`} alt="cover image" className="w-10" />

                <div id="book-title-&-author" className="font-bold text-2xl ml-2">
                  <Link to={`/book${book.key}`}>
                    <h1>{book.title}</h1>
                  </Link>

                  <Link to="">
                    <h2 className="text-sm font-normal">
                      Written by: <span className="underline">{book.author}</span>
                    </h2>
                  </Link>
                </div>
              </div>

              <button onClick={() => toggleReadStatus(i, book)}>{book.read ? <Read /> : <NotRead />}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
