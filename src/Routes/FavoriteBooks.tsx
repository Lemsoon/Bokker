import { BookContext } from "@/context/BookContext";
import { useContext, useEffect, useState } from "react";
import { ToggleFavCategory } from "@/components/ToggleFavCategory";
import { ShowFavorites, ShowRead } from "@/components/FavPageFilterToggle";
import { BookType } from "@/types/types";
import { stat } from "fs";

export const FavoriteBooks = () => {
  const { state, dispatch } = useContext(BookContext);
  const [showFav, setShowFav] = useState<boolean>(true);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [totalRead, setTotalRead] = useState<number>(0);

  const toggleReadStatus = (book: BookType) => {
    dispatch({
      type: book.read ? "setNotRead" : "setRead",
      payload: { key: book.key },
    });
  };

  useEffect(() => {
    let totalPageCount = 0;
    const readBooks = state.favoriteBooks.filter((book) => {
      return book.read;
    });
    readBooks.forEach((book) => {
      totalPageCount += book.pages ? +book.pages : 0;
    });
    setTotalPages(totalPageCount);
    setTotalRead(readBooks.length);
  }, [state.favoriteBooks]);

  return (
    <div className="w-full h-full border-2 border-black overflow-y-scroll overflow-hidden">
      <div className="border-b-2 border-black bg-black bg-opacity-10">
        <div className="flex gap-56">
          <div onClick={() => setShowFav(!showFav)}>
            <ToggleFavCategory fav={showFav} />
          </div>
        </div>

        <div className="ml-2 mt-2 grid grid-cols-3 w-1/3">
          <div>
            <h2>{state.favoriteBooks && state.favoriteBooks.length} Favorite(s)</h2>
            <p>{totalPages} Pages read</p>
          </div>
          <div className="w-96">
            <h2>
              Your books are <strong>{totalPages ? (totalPages / state.favoriteBooks.length).toFixed(2) : "0"}</strong>{" "}
              pages long on average
            </h2>
            <p>
              You have read {(totalRead / 129864880).toFixed(10)}% of <span className="italic font-bold">ALL</span>{" "}
              books
            </p>
            {/* https://searchengineland.com/how-many-books-are-there-google-knows-48244#:~:text=in%20the%20world%3F-,The%20answer%3A%20129%2C864%2C880%20books.,settlement%20in%20a%20separate%20lawsuit. */}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        {state.favoriteBooks &&
          state.favoriteBooks.map((book: BookType, i: number) =>
            showFav ? (
              <ShowFavorites key={i} book={book} i={i} toggleReadStatus={toggleReadStatus} />
            ) : (
              <ShowRead key={i} book={book} i={i} toggleReadStatus={toggleReadStatus} />
            )
          )}
      </div>
    </div>
  );
};
