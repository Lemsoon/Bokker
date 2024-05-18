import { useContext, useEffect, useRef, useState } from "react";
import { Input } from "./Input";
import { BookContext } from "../context/BookContext";
import { Link, redirect } from "react-router-dom";

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
      <button
        onClick={() => toggleSearchMode(true)}
        className={bookSearch ? "border-black border-2 w-16" : " border-none w-16"}
      >
        Book
      </button>
      <button
        onClick={() => toggleSearchMode(false)}
        className={bookSearch ? "border-none w-16 " : "border-black border-2 w-16"}
      >
        Author
      </button>

      <div className="flex ">
        <Input
          className=" h-12 border-black border-[.1rem] rounded-full bg-white text-[16px]"
          placeholder="Search for a book..."
          ref={searchTermRef}
        />
        <button className="border-2 border-black" onClick={() => doSearch()}>
          <Link to={`/search/${bookSearch ? "" : "author"}`}>search</Link>
        </button>
      </div>
    </div>
  );
};
