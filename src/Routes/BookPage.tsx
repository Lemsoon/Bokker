import { useParams } from "react-router-dom";

export const BookPage = () => {
  const params = useParams();
  const bookId = params.bookId;
  console.log(bookId);

  return (
    <div>
      {bookId}
      <img src={`https://covers.openlibrary.org/b/olid/${bookId}-M.jpg`} alt="" />
    </div>
  );
};
