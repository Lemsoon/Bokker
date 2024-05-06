import { Carousel } from "@/components/Carousel";
import { useFetch } from "@/hooks/useFetch";
import { useEffect } from "react";

export const Home = () => {
  const getTrending = () => {
    return useFetch(`https://openlibrary.org/trending.json?limit=50`);
  };
  const getClassic = () => {
    return useFetch(`https://openlibrary.org/search.json?q=subject:%22classic%22&limit=50`);
  };

  const trendingBooks: any = getTrending();
  const classicBooks: any = getClassic();
  console.log(trendingBooks);
  console.log(classicBooks);

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
        <div className="w-[100%] h-[90%] border-black border-2">
          <Carousel
            loadingText="Getting trending books..."
            inputArray={classicBooks}
            jumpAmount={1200}
            instantScroll={false}
          />
        </div>
      </div>
    </div>
  );
};
