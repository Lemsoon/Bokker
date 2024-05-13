import { BookType } from "@/context/BookContext";
import { Link } from "react-router-dom";
import { NotRead, Read } from "./ReadToggle";

type prop = {
  book: BookType;
  i: number;
  toggleReadStatus: (book: BookType) => void;
};

export const ShowFavorites: React.FC<prop> = ({ i, book, toggleReadStatus }) => {
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

      <button onClick={() => toggleReadStatus(book)}>{book.read ? <Read /> : <NotRead />}</button>
    </div>
  );
};

export const ShowRead: React.FC<prop> = ({ i, book, toggleReadStatus }) => {
  return book.read === true ? (
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

      <button onClick={() => toggleReadStatus(book)}>{book.read ? <Read /> : <NotRead />}</button>
    </div>
  ) : null;
};
