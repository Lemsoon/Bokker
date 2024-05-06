import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div className="bg-gradient-to-r from-[#F5F5F5] to-[#FFFEE1] w-screen h-screen font-inria overflow-x-hidden">
      <Header />
      <div className="grid grid-cols-5 w-[99vw]">
        <div className="col-span-1 m-2 p-1 border-black border-2">
          <Sidebar />
        </div>
        <div className="col-span-4 m-2 p-1 mr-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
