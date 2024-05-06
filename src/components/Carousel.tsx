import { useRef } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

type CarouselProps = {
  inputArray: any;
  loadingText: string;
  jumpAmount: number;
  instantScroll: boolean;
};

export const Carousel = ({ inputArray, loadingText, jumpAmount, instantScroll }: CarouselProps) => {
  const windowRef = useRef<HTMLDivElement>(null);

  return (
    <div className="h-full flex justify-center items-center relative">
      {inputArray ? (
        <div className="flex overflow-x-hidden gap-2 h-full items-center" ref={windowRef}>
          <button
            onClick={() => {
              windowRef.current!.scrollTo({
                left: windowRef.current!.scrollLeft - jumpAmount,
                behavior: instantScroll ? "instant" : "smooth",
              });
            }}
            className="bg-white w-8 h-8 flex items-center justify-center rounded-full text-black absolute left-0 top-0 bottom-0 mt-auto mb-auto ml-2"
          >
            <BiLeftArrow />
          </button>
          <button
            onClick={() => {
              windowRef.current!.scrollTo({
                left: windowRef.current!.scrollLeft + jumpAmount,
                behavior: instantScroll ? "instant" : "smooth",
              });
            }}
            className="bg-white w-8 h-8 flex items-center justify-center rounded-full text-black absolute right-0 top-0 bottom-0 mt-auto mb-auto mr-2"
          >
            <BiRightArrow />
          </button>

          {(inputArray.works || inputArray.docs).map((book: any, i: number) => {
            return (
              <div className="relative group">
                <img
                  key={i}
                  src={`https://covers.openlibrary.org/b/olid/${book.cover_edition_key}.jpg`}
                  alt={`${book.title} cover`}
                  className="max-h-[22rem] min-h-[22rem] min-w-56 border-2 border-black"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center duration-200">
                  <p className="text-white text-lg">{book.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        `${loadingText}`
      )}
    </div>
  );
};
