import { useContext, useEffect, useRef, useState } from "react";
import { Input } from "./Input";
import { BookContext } from "../context/BookContext";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

export const Search = () => {
  const [bookSearch, setActiveSearchMode] = useState<boolean>(true);
  const toggleSearchMode = (searchMode: boolean) => setActiveSearchMode(searchMode);
  const { setSearchTerm } = useContext(BookContext);
  const searchTermRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log(bookSearch);
  }, [bookSearch]);

  const doSearch = () => {
    if (!searchTermRef) return;
    setSearchTerm(searchTermRef.current?.value!);
  };

  return (
    <div className="w-96 mr-16">
      <div className="flex gap-8 text-xl">
        <button
          onClick={() => toggleSearchMode(true)}
          className={`${bookSearch ? "text-black font-bold underline underline-offset-1" : "text-gray-400"}`}
        >
          Book
        </button>
        <button
          onClick={() => toggleSearchMode(false)}
          className={` ${bookSearch ? "text-gray-400" : "text-black font-bold underline underline-offset-1"}`}
        >
          Author
        </button>
      </div>

      <div className="flex relative">
        <Input
          className=" h-12 border-black border-[.1rem] rounded-full bg-white text-[16px]"
          placeholder={bookSearch ? "Search for a book..." : "Search for an author..."}
          ref={searchTermRef}
        />
        <button className="scale-[200%] absolute right-4 top-4" onClick={() => doSearch()}>
          <Link to={`/search/${bookSearch ? "" : "author"}`}>
            <CiSearch />
          </Link>
        </button>
      </div>
    </div>
  );
};
