import { BookContext } from "@/context/BookContext";
import { useFetch } from "@/hooks/useFetch";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const AuthorSearchPage = () => {
  const { searchTerm } = useContext(BookContext);
  const searchResult = useFetch(`https://openlibrary.org/search/authors.json?q=${searchTerm}`);
  console.log(searchTerm);
  console.log(searchResult);

  return (
    <div className="border-2 border-black w-[100%]">
      {searchResult ? (
        searchResult.docs.map((author: any) => (
          <Link key={author.key} to={`/authors/${author.key}`}>
            <div className="p-1 text-xl border border-black m-3 hover:scale-[101%] duration-300">
              <div>{author.name}</div>
              <div className="text-sm font-bold">
                Top work: <span className="font-normal">{author.top_work}</span>
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
