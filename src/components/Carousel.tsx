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

          {inputArray.works.map((book: any, i: number) => {
            return (
              <img
                key={i}
                src={`https://covers.openlibrary.org/b/olid/${book.cover_edition_key}.jpg`}
                alt="Trending Book Cover"
                className="max-h-[22rem] border-2 border-black "
              />
            );
          })}
        </div>
      ) : (
        `${loadingText}`
      )}
    </div>
  );
};
