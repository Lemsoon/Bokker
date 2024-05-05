import { useState } from "react";
import { Input } from "./Input";

export const Search = () => {
  const [activeSearchMode, setActiveSearchMode] = useState<boolean>(false);

  const toggleSearchMode = (searchMode: boolean) => setActiveSearchMode(searchMode);

  const doSearch = () => {};

  return (
    <div className="w-60 mr-16">
      <button
        onClick={() => toggleSearchMode(true)}
        className={activeSearchMode ? "border-black border-2 w-16" : " border-none w-16"}
      >
        Book
      </button>
      <button
        onClick={() => toggleSearchMode(false)}
        className={activeSearchMode ? "border-none w-16 " : "border-black border-2 w-16"}
      >
        Author
      </button>
      <div className="flex ">
        <Input
          className=" h-12 border-black border-[.1rem] rounded-full bg-white text-[16px]"
          placeholder="Search for a book..."
        />
        <button className="border-2 border-black" onClick={() => doSearch()}>
          search
        </button>
      </div>
    </div>
  );
};
