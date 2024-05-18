import React from "react";
import { Link } from "react-router-dom";

type prop = {
  searchResult: {
    docs: [];
  };
};

export const SearchResultsPage: React.FC<prop> = ({ searchResult }) => {
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
              <div className="ml-2">
                <h1 className="font-bold text-3xl  mt-2">{book.title}</h1>
                <h2 className="text-l  mt-2">
                  Written by:
                  <Link to={`/authors/${book.author_key}`} className="font-bold hover:text-blue-300">
                    {book.author_name}
                  </Link>
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
