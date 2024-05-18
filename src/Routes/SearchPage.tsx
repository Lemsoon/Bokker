import { useContext, useEffect, useState } from "react";
import { BookContext } from "@/context/BookContext";
import { useFetch } from "@/hooks/useFetch";
import { Link } from "react-router-dom";

export const SearchPage = () => {
  const { searchTerm } = useContext(BookContext);
  const searchResult = useFetch(`https://openlibrary.org/search.json?title=${searchTerm}&limit=10`);

  return (
    <div className="border-2 border-black w-[100%]">
      {searchResult ? (
        searchResult.docs.map((book: any) => (
          <Link key={book.key} to={`${book.key}`}>
            <div
              id="book-result-container"
              className=" border-2 border-black m-6 flex min-h-60 hover:scale-[1.01] duration-100 cursor-pointer"
            >
              <img
                src={
                  book.cover_edition_key ? `https://covers.openlibrary.org/b/id/${book.cover_i}.jpg` : "Cover not found"
                }
                alt="Book cover"
                className="w-44 object-contain"
              />
              <div>
                <h1 className="font-bold text-3xl ml-2 mt-2">{book.title}</h1>
                <h2 className="text-l ml-2 mt-2">
                  Written by: <span className="font-bold">{book.author_name}</span>
                </h2>
                <p>{book.first_sentence ? book.first_sentence[0] : book.first_sentence}</p>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p>Loading results...</p>
      )}
    </div>
  );
};
