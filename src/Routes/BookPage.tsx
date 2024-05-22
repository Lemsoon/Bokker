import { Review } from "@/components/CreateReview";
import { BookContext } from "@/context/BookContext";
import { useFetch } from "@/hooks/useFetch";
import { bookType } from "@/types/types";
import { LimitNumber } from "@/utils/LimitNumber";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const BookPage = () => {
  const { dispatch, state } = useContext(BookContext);

  const params = useParams();
  const bookId = params.bookId;

  const bookData: bookType = useFetch(`https://openlibrary.org/works/${bookId}.json`);

  const ratingData = useFetch(`https://openlibrary.org/works/${bookId}/ratings.json`);
  const authorKey = bookData && bookData.authors![0].author.key;
  const authorData = useFetch(`https://openlibrary.org${authorKey}.json`);

  const [isFav, setIsFav] = useState<boolean>();

  const favClicked = (favAction: string) => {
    setIsFav(!isFav);
    const favBookInfo = {
      title: bookData.title,
      cover: bookData.covers ? bookData.covers[0] : null,
      key: bookData.key,
      author: authorData.name,
      authorKey: authorKey,
    };
    dispatch({ type: favAction, payload: favBookInfo });
  };

  useEffect(() => {
    setIsFav(bookData && state.favoriteBooks && state.favoriteBooks.some((book) => book.key.includes(bookData.key)));
  }, [authorKey]);

  return (
    <div>
      {bookData && ratingData ? (
        <>
          <div className="flex">
            <img
              src={bookData.covers && `https://covers.openlibrary.org/b/id/${bookData.covers[0]}-M.jpg`}
              alt={`Cover image for: ${bookData.title} is missing`}
              className="min-w-72 max-w-72 h-full border-2 border-black"
            />
            <div className="ml-6 flex flex-col gap-5 border-2 border-black p-2 w-full">
              <div>
                <h1 className="font-bold text-3xl">
                  {bookData.title}
                  {bookData.subtitle && ": " + bookData.subtitle}
                </h1>
                <Link to={`${authorKey}`}>
                  <h2>
                    <strong>Written by:</strong>{" "}
                    {authorData ? <div className="underline inline">{authorData.name}</div> : <>Missing Author</>}
                  </h2>
                </Link>

                <h3 className="text-xs">
                  <strong>Average Rating:</strong>
                  {ratingData.summary.average ? (
                    LimitNumber(ratingData.summary.average, 1)
                  ) : (
                    <>No rating data to show</>
                  )}
                </h3>
              </div>
              <div>
                <h1 className="font-bold text-2xl m-0 underline">About this book</h1>
                {bookData.description ? (
                  typeof bookData.description === "string" ? (
                    bookData.description
                  ) : (
                    bookData.description.value
                  )
                ) : (
                  <>There is no description for this book</>
                )}
              </div>

              <div>
                <h1 className="font-bold text-2xl m-0 underline">Excerpts</h1>
                <div className="m-0">
                  {bookData.excerpts && (
                    <ul>
                      {bookData.excerpts.map((e: any, i: number) => (
                        <li key={i} className="mb-2">
                          {e.comment && (
                            <div id="excerpt-type" className=" font-bold">
                              {e.comment.charAt(0).toUpperCase() + e.comment.slice(1)}
                            </div>
                          )}
                          <p>{e.excerpt}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              <div>
                {isFav ? (
                  <button
                    className="border-2 border-black bg-red-200 hover:bg-red-500"
                    onClick={() => {
                      favClicked(isFav ? "removeFromFav" : "addToFav");
                    }}
                  >
                    Remove from favorites
                  </button>
                ) : (
                  <button
                    className="border-2 border-black bg-red-200 hover:bg-red-500"
                    onClick={() => {
                      favClicked(isFav ? "removeFromFav" : "addToFav");
                    }}
                  >
                    Add to favorites
                  </button>
                )}
              </div>
              {state.favoriteBooks.some((book) => book.key === bookData.key && book.read == true) && (
                <Review data={bookData} />
              )}
            </div>
          </div>
        </>
      ) : (
        "Data loading..."
      )}
    </div>
  );
};
