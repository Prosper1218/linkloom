import React, {createContext, useState} from "react";
import Nav from "./Nav";
import {Outlet} from "react-router";
import dp from "../Images/crush.png";

export const DpContext = createContext();

const MainLayout = () => {
   const [CurrentDp, setCurrentDp] = useState(dp);
   return (
      <DpContext.Provider value={{CurrentDp, setCurrentDp, dp}}>
         <div className="min-h-[100vh] flex flex-row max-w-[100%]">
            <div>
               <Nav />
            </div>
            <div className=" sm:p-4 sm:ml-32 w-full bg-[#F7F7F8] min-h-[100vh]" style={{border: "1px solid blue"}}>
               <Outlet />
            </div>
         </div>
      </DpContext.Provider>
   );
};

export default MainLayout;
