import { useContext, useEffect, useState } from "react";
import { BookContext } from "@/context/BookContext";
import axios from "axios";

export const SearchPage = () => {
  const { searchTerm } = useContext(BookContext);
  // const [searchResult] = useFetch(`https://openlibrary.org/search.json?title=${searchTerm}`);
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    console.log(searchTerm);
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://openlibrary.org/search.json?title=${searchTerm}`);
        setResult(response.data);
      } catch (error) {
        console.error("Error with fetching...", error);
      }
    };

    fetchData();
  }, [searchTerm]);

  return (
    <div>
      {result ? (
        result.docs.map((book: any) => (
          <div key={book.key}>
            <h2>{book.title}</h2>
          </div>
        ))
      ) : (
        <p>Loading results...</p>
      )}
    </div>
  );
};
