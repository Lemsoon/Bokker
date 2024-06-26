import { BookContext } from "@/context/BookContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const FavoriteAuthors = () => {
  const { state } = useContext(BookContext);
  let authorNameWords = [];
  {
    state.favoriteAuthors &&
      (authorNameWords = state.favoriteAuthors.flatMap((author) => {
        return author.name.split(/[,. ]+/);
      }));
  }

  return state.favoriteAuthors && state.favoriteAuthors.length > 0 ? (
    <div className="w-full h-full border-2 border-black overflow-y-scroll overflow-hidden">
      <header className="border-b-2 border-black bg-black bg-opacity-10 h-24">
        <div className="ml-2">
          <h1 className="text-3xl">Favorite Authors</h1>
          <div className="mt-2">
            <h2>{state.favoriteAuthors.length} Favorite Authors</h2>
            <h3>
              On average, your favorite authors have {authorNameWords.length / state.favoriteAuthors.length} words in
              their names
            </h3>
          </div>
        </div>
      </header>
      <div className="flex flex-wrap">
        {state.favoriteAuthors.map((author) => (
          <Link to={`/authors/${author.key}`} key={author.key}>
            <div className="m-2 p-2 border border-gray-500 w-56 min-h-72 h-auto text-center flex flex-col">
              <h3 className="text-xl">{author.name}</h3>
              <p className="text-gray-600 text-xs">{author.key}</p>
              <img src={`https://covers.openlibrary.org/a/olid/${author.key}-L.jpg`} alt="" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  ) : (
    <>You dont have any favorite authors yet...</>
  );
};
