export const ToggleFavCategory = ({ fav }: any) => {
  const active = "underline text-5xl font-bold ml-2 text-black";
  const inactive = "text-5xl font-bold ml-2 text-gray-500 text-opacity-50";

  return (
    <div className="flex gap-32">
      <button className={fav ? active : inactive}>Favorite books</button>
      <button className={fav ? inactive : active}>Read books</button>
    </div>
  );
};
