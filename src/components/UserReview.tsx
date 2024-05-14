import { BookContext } from "@/context/BookContext";
import { useContext, useState } from "react";

type UserReviewProp = {
  bookData: {
    key: string;
  };
};

export const UserReview: React.FC<UserReviewProp> = ({ bookData }) => {
  console.log(bookData.key);
  const { state } = useContext(BookContext);
  const [hasReview, setHasreview] = useState<boolean>(false);
  return <></>;
};
