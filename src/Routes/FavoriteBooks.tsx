import { BookContext, BookType } from "@/context/BookContext";
import { useContext, useState } from "react";
import { ToggleFavCategory } from "@/components/ToggleFavCategory";
import { ShowFavorites, ShowRead } from "@/components/FavPageFilterToggle";

export const FavoriteBooks = () => {
  const { state, dispatch } = useContext(BookContext);
  const [showFav, setShowFav] = useState<boolean>(true);

  const toggleReadStatus = (book: BookType) => {
    dispatch({
      type: book.read ? "setNotRead" : "setRead",
      payload: { key: book.key },
    });
  };

  return (
    <div className="w-full h-full border-2 border-black overflow-y-scroll overflow-hidden">
      <div className="border-b-2 border-black bg-black bg-opacity-10">
        <div className="flex gap-56">
          <button onClick={() => setShowFav(!showFav)}>
            <ToggleFavCategory fav={showFav} />
          </button>
        </div>

        <h2 className="ml-2 mt-2 ">{state.favoriteBooks.length} Favorite(s)</h2>
      </div>
      <div className="flex flex-wrap">
        {state.favoriteBooks.map((book: BookType, i: number) =>
          showFav ? (
            <ShowFavorites book={book} i={i} toggleReadStatus={toggleReadStatus} />
          ) : (
            <ShowRead book={book} i={i} toggleReadStatus={toggleReadStatus} />
          )
        )}
      </div>
    </div>
  );
};
