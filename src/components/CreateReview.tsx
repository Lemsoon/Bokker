import { BookContext } from "@/context/BookContext";
import { Action } from "@/context/ContextProvider";
import { Dispatch, useContext, useRef } from "react";

type reviewProps = {
  data: any;
};

const submitReview = (dispatch: Dispatch<Action>, review: string, rating: number) =>
  dispatch({ type: "setReview", payload: { review, rating } });

export const Review: React.FC<reviewProps> = ({ data }) => {
  const userReview = useRef<HTMLTextAreaElement>(null);
  const userRating = useRef<HTMLSelectElement>(null);
  const { dispatch, state } = useContext(BookContext);

  const test = state.favoriteBooks.find((book) => book.key === data.key);

  return (
    <div>
      <h1 className="text-3xl font-bold ">Review this book</h1>
      <textarea
        name="review"
        id="review"
        maxLength={420}
        className=" w-1/3 max-h-48 min-h-48 bg-black bg-opacity-10 border-2 border-black px-2 placeholder-black placeholder-opacity-55"
        placeholder="Have you read this book? Leave a review!"
        ref={userReview}
      />
      <select name="rating" id="user-rating" className="w-8" ref={userRating}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button
        className="h-10 px-2 bg-red-200"
        onClick={() => submitReview(dispatch, userReview.current!.value, parseInt(userRating.current!?.value))}
      >
        submit review
      </button>
    </div>
  );
};
