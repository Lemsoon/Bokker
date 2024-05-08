import { useFetch } from "@/hooks/useFetch";
import { useParams } from "react-router-dom";

export const BookPage = () => {
  const params = useParams();
  const bookId = params.bookId;

  const bookData = useFetch(`https://openlibrary.org/works/${bookId}.json`);
  const ratingData = useFetch(`https://openlibrary.org/works/${bookId}/ratings.json`);
  const authorKey = bookData && bookData.authors[0].author.key;
  const authorData = useFetch(`https://openlibrary.org${authorKey}.json`);
  console.log("Book Data: ", bookData);

  return (
    <div>
      {bookData ? (
        <div className="flex">
          <img
            src={bookData.covers ? `https://covers.openlibrary.org/b/id/${bookData.covers[0]}-M.jpg` : ""}
            alt={`Cover image for: ${bookData.title} is missing`}
            className="min-w-72 max-w-72 h-full border-2 border-black"
          />
          <div id="left-side" className="ml-6 flex flex-col gap-5 border-2 border-black p-2 w-full">
            <div id="title_&_author">
              <h1 className="font-bold text-3xl">
                {bookData.title}
                {bookData.subtitle ? ": " + bookData.subtitle : ""}
              </h1>
              <h2>
                <strong>Written by:</strong> {authorData ? authorData.name : <>Missing Author</>}
              </h2>
            </div>
            <div>
              <h1 className="font-bold text-2xl m-0 underline">About this book</h1>
              {bookData.description ? (
                bookData.description.value ? (
                  bookData.description.value
                ) : (
                  bookData.description
                )
              ) : (
                <>This book has no description</>
              )}
            </div>

            <div>
              <h1 className="font-bold text-2xl m-0 underline">Excerpts</h1>
              <div className="m-0">
                {bookData.excerpts ? (
                  <ul>
                    {bookData.excerpts.map((e: any, i: number) => (
                      <li key={i} className="mb-2">
                        {e.comment ? (
                          <div id="excerpt-type" className=" font-bold">
                            {e.comment.charAt(0).toUpperCase() + e.comment.slice(1)}
                          </div>
                        ) : (
                          <></>
                        )}
                        <p>{e.excerpt}</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <>No excerpts</>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        "Data loading..."
      )}
    </div>
  );
};
