import { useContext, useEffect } from "react";
import { BookContext } from "@/context/BookContext";

export const SearchPage = () => {
  const { searchTerm } = useContext(BookContext);

  useEffect(() => {
    console.log(searchTerm);
  }, []);

  return <h1>{searchTerm}</h1>;
};
