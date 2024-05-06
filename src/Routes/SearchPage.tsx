import { useContext, useEffect, useState } from "react";
import { BookContext } from "@/context/BookContext";
import axios from "axios";
import { useFetch } from "@/hooks/useFetch";

export const SearchPage = () => {
  const { searchTerm } = useContext(BookContext);
  const searchResult = useFetch(`https://openlibrary.org/search.json?title=${searchTerm}`);

  return (
    <div>
      {searchResult ? (
        searchResult.docs.map((book: any) => (
          <div key={book.key}>
            <h2>{book.oclc ? book.oclc[1] : "none"}</h2>
          </div>
        ))
      ) : (
        <p>Loading results...</p>
      )}
    </div>
  );
};
