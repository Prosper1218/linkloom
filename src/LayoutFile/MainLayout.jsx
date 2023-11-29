import React, {createContext, useState} from "react";
import Nav from "./Nav";
import {Outlet} from "react-router";
import dp from "../Images/crush.png";
import { UseTheme} from "../Utils/ThemeContext";

export const DpContext = createContext();

const MainLayout = () => {
   const [CurrentDp, setCurrentDp] = useState(dp);
   const {DarkTheme} = UseTheme()
   return (
      <DpContext.Provider value={{CurrentDp, setCurrentDp, dp}}>
         <div className="min-h-[100vh] flex flex-row max-w-[100%]">
            <div>
               <Nav />
            </div>
            <div className=" sm:p-4 sm:ml-32 w-full min-h-[100vh]" style={{border: "1px solid blue", backgroundColor:DarkTheme?"#222222":"#F7F7F8"}}>
               <Outlet />
            </div>
         </div>
      </DpContext.Provider>
   );
};

export default MainLayout;
