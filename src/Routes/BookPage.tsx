import { useFetch } from "@/hooks/useFetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const BookPage = () => {
  const params = useParams();
  const bookId = params.bookId;
  const [bookData, setBookData] = useState<any>();

  const moreData = useFetch(`https://openlibrary.org/works/${bookId}.json`);

  return (
    <div>
      <p>Book URL: {bookId}</p>
      {moreData ? (
        <img src={`https://covers.openlibrary.org/b/id/${moreData.covers}-M.jpg`} alt="Image" />
      ) : (
        <>Data loading...</>
      )}
    </div>
  );
};
