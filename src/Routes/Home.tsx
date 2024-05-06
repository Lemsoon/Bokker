import { Carousel } from "@/components/Carousel";
import { useFetch } from "@/hooks/useFetch";
import { useEffect } from "react";

export const Home = () => {
  const getTrending = () => {
    return useFetch(`https://openlibrary.org/trending.json?limit=50`);
  };

  const trendingBooks: any = getTrending();
  console.log(trendingBooks);

  useEffect(() => {}, [trendingBooks]);
  return (
    <div className="h-[100%]">
      <div className=" h-[50%] tracking-wide">
        <h1 className="text-4xl ">Trending Books</h1>
        <div className="w-[100%] h-[90%] border-black border-2">
          <Carousel
            loadingText="Getting trending books..."
            inputArray={trendingBooks}
            jumpAmount={1200}
            instantScroll={false}
          />
        </div>
      </div>
      <div className=" h-[50%] ">
        <h1 className="text-4xl tracking-wide">Classic Books</h1>
        <div className="w-[100%] h-[90%] border-black border-2"></div>
      </div>
    </div>
  );
};
