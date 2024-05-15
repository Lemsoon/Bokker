import { BookContext } from "@/context/BookContext";
import React, { useContext, useEffect, useRef } from "react";

type reviewProp = {
  data: {
    key: string;
  };
};

export const Review: React.FC<reviewProp> = ({ data }) => {
  const { dispatch, state } = useContext(BookContext);
  const reviewRef = useRef<HTMLTextAreaElement>(null);
  const ratingRef = useRef<HTMLInputElement>(null);

  const submitReview = () => {
    if (reviewRef.current && ratingRef.current) {
      dispatch({
        type: "addReview",
        payload: { givenReview: reviewRef.current.value, givenRating: ratingRef.current.value, key: data.key },
      });
    }
  };

  useEffect(() => {
    console.log(state.favoriteBooks);
  }, [state.favoriteBooks]);

  const thisBook = state.favoriteBooks.find((key) => key.key === data.key);
  console.log(thisBook?.givenReview);

  return (
    <div className="w-full h-96 border-2 border-black mt-4 flex">
      <div className="flex-1 border-[1px] border-black flex flex-col">
        <h1 className="font-bold text-4xl pl-3">Leave a review!</h1>

        <p className="px-6">
          What would you rate this book?
          <span className="ml-2">
            <input
              type="number"
              name="rating-input"
              id="rating-input"
              min={1}
              max={5}
              maxLength={5}
              className="border-[1px] border-black"
              placeholder="0"
              onChange={() => {
                if (ratingRef.current && parseInt(ratingRef.current.value) > 5) {
                  ratingRef.current.value = "5";
                }
              }}
              ref={ratingRef}
            />
          </span>
        </p>

        <textarea
          name="review-input"
          id="review-input"
          placeholder="What did you think of this book?"
          className="w-7/10 h-full bg-black bg-opacity-20 m-6 placeholder-gray-500 p-2 mb-0"
          ref={reviewRef}
        />

        <button
          className="border-2 border-black w-7/10 h-12 mx-6 hover:bg-red-200 font-bold"
          onClick={() => submitReview()}
        >
          Submit
        </button>
      </div>
      <div className="flex-1 border-[1px] border-black flex">
        {thisBook?.givenReview ? (
          <div className="flex flex-col">
            <div className="text-2xl">{thisBook?.givenReview}</div>
            <div className="text-l font-bold">You rated this book: {thisBook.givenRating}</div>
          </div>
        ) : (
          <p className="w-full flex justify-center items-center text-3xl underline">
            You have not given a review yet...
          </p>
        )}
      </div>
    </div>
  );
};
