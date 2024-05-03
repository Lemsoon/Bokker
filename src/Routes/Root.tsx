import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div className="bg-gradient-to-r from-[#F5F5F5] to-[#FFFEE1] w-screen h-screen font-inria">
      <Header />
      <div className="grid grid-cols-5">
        <div className="col-span-1 m-2 p-1 border-black border-2">
          <Sidebar />
        </div>
        <div className="col-span-4  m-2 p-1 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
