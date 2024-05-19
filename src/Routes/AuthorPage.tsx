import { useFetch } from "@/hooks/useFetch";
import { Work, authorType } from "@/types/types";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GrDocumentMissing } from "react-icons/gr";
import { IoIosStar } from "react-icons/io";
import { BookContext } from "@/context/BookContext";
import { stat } from "fs";

export const AuthorPage = () => {
  const params = useParams();
  const [works, setWorks] = useState<any>();
  const [isFav, setIsFav] = useState<boolean>(false);
  const { dispatch, state } = useContext(BookContext);
  const author: authorType = useFetch(`https://openlibrary.org/authors/${params.authorId}.json`);
  let ifFav: boolean;

  useEffect(() => {
    const fetchAuthorWorks = async () => {
      const data = await axios.get(`https://openlibrary.org/authors/${params.authorId}/works.json`);
      setWorks(data.data.entries);
    };
    fetchAuthorWorks();
  }, [params.authorId]);

  const toggleAuthorLike = () => {
    setIsFav(!isFav);
    dispatch({
      type: isFav ? "removeAuthorFromFav" : "addAuthorToFav",
      payload: { key: params.authorId, name: author.name },
    });
  };

  useEffect(() => {
    if (state.favoriteAuthors) {
      const ifFav = state.favoriteAuthors.some((author) => author.key === params.authorId);
      setIsFav(ifFav);
    }
  }, [state.favoriteAuthors, params.authorId]);

  return author ? (
    <div className="w-full h-full border-2 border-black p-4">
      <header>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <h1 className="text-3xl font-bold">{author.name}</h1>
            <h2
              id="test"
              className="text-xs font-thing mt-5 cursor-default italic"
              title={author.alternate_names ? author.alternate_names.join("\n") : undefined}
            >
              {author.alternate_names && `${author.alternate_names.length} more`}
            </h2>
          </div>
          <div
            className="mr-24 flex items-center"
            onClick={() => {
              toggleAuthorLike();
            }}
          >
            <IoIosStar className={`scale-[300%] ${isFav ? "fill-yellow-500" : "fill-gray-500"}`} />
          </div>
        </div>
        <h3>
          {author.birth_date} - {author.death_date && author.death_date}
        </h3>
      </header>
      <div>
        <div className="flex gap-5">
          <picture className="min-w-72">
            {author.photos ? (
              <img src={`https://covers.openlibrary.org/a/id/${author.photos}-M.jpg`} alt="" className="min-w-72" />
            ) : (
              <div className="w-full h-72 border-2 border-black flex justify-center items-center flex-col">
                <GrDocumentMissing />
                image missing
              </div>
            )}
          </picture>

          <p className="border-2 border-black p-2 w-[100rem] max-h-72">
            {author.bio ? (
              typeof author.bio === "string" ? (
                author.bio
              ) : (
                author.bio.value
              )
            ) : (
              <>This author has no biography</>
            )}
          </p>

          <div className="p-2 border-2 border-black min-w-96 h-auto flex flex-col items-center justify-center">
            <h1 className="text-center text-3xl font-bold">Books by {author.name}</h1>
            <div className="grid grid-cols-2 gap-2">
              {works &&
                works.map((work: Work) => {
                  return (
                    <Link to={`${work.key}`} key={work.key}>
                      <div className="relative group">
                        {work.covers ? (
                          <img
                            src={`https://covers.openlibrary.org/b/id/${work.covers}-M.jpg`}
                            alt={`${work.title} cover`}
                            className="object-cover w-full h-72 border-2 border-black"
                          />
                        ) : (
                          <div className="w-full h-72 border-2 border-black flex justify-center items-center flex-col">
                            <GrDocumentMissing />
                            image missing
                          </div>
                        )}

                        <div className="text-center cursor-pointer absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center duration-200">
                          <p className="text-white text-lg">{work.title}</p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <>Loading author...</>
  );
};
