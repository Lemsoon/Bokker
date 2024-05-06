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
    <div className="h-full flex justify-center items-center">
      {inputArray ? (
        <div className="flex overflow-x-hidden gap-2" ref={windowRef}>
          <div className="fixed flex w-full gap-[75%]">
            <button
              onClick={() => {
                windowRef.current!.scrollTo({
                  left: windowRef.current!.scrollLeft - jumpAmount,
                  behavior: instantScroll ? "instant" : "smooth",
                });
              }}
              className="bg-white w-8 h-8 flex items-center justify-center rounded-full text-black"
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
              className="bg-white w-8 h-8 flex items-center justify-center rounded-full text-black"
            >
              <BiRightArrow />
            </button>
          </div>

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
