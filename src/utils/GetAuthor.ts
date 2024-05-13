import axios from "axios";

export const GetAuthor = (authorURL: string) => {
  try {
    const authorData = axios.get(`https://openlibrary.org/authors${authorURL}`);
    return authorData;
  } catch {
    console.error("Could not get author");
  }
};
