import { useContext, useEffect, useState } from "react";
import { BookContext } from "@/context/BookContext";
import { useFetch } from "@/hooks/useFetch";

export const SearchPage = () => {
  const { searchTerm } = useContext(BookContext);
  const searchResult = useFetch(`https://openlibrary.org/search.json?title=${searchTerm}&limit=10`);

  return (
    <div className="border-2 border-black w-[100%]">
      {searchResult ? (
        searchResult.docs.map((book: any, i: number) => (
          <div
            id="book-result-container"
            key={book.key}
            className=" border-2 border-black m-6 flex min-h-60 hover:scale-[1.01] duration-100 cursor-pointer"
          >
            <img
              src={book.oclc ? `https://covers.openlibrary.org/b/oclc/${book.oclc[0]}-M.jpg` : "Cover not found"}
              alt="Book cover"
              className="w-44 object-contain"
            />
            <div>
              <h1 className="font-bold text-3xl ml-2 mt-2">{book.title}</h1>
              <h2 className="text-l ml-2 mt-2">
                Written by: <span className="font-bold">{book.author_name}</span>
              </h2>
            </div>
          </div>
        ))
      ) : (
        <p>Loading results...</p>
      )}
    </div>
  );
};
