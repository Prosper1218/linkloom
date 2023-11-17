import React, { createContext, useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import {Outlet} from "react-router";
import dp from "../Images/biggerdp.png"

export const DpContext = createContext()

const MainLayout = () => {
  const [CurrentDp, setCurrentDp] = useState(dp)
   return (
      <DpContext.Provider value={{CurrentDp,setCurrentDp, dp}}>
        <div className="min-h-[100vh] flex flex-row max-w-[100%]">
           <div style={{border: "1px solid red"}}>
              {" "}
              <Nav />
           </div>
           <div className="px-1 sm:p-4 sm:ml-32 w-full bg-[#F7F7F8]" style={{border: "1px solid red"}}>
              <Outlet />
           </div>
        </div>
      </DpContext.Provider>
   );
};

export default MainLayout;
