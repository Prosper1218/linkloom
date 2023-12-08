import React, {createContext, useState} from "react";
import Nav from "./Nav";
import {Outlet} from "react-router";
import dp from "../Images/crush.png";
import { UseTheme} from "../Utils/ThemeContext";

export const DpContext = createContext();

const MainLayout = () => {
   const [CurrentDp, setCurrentDp] = useState(dp);
   const {theme} = UseTheme()
   return (
      <DpContext.Provider value={{CurrentDp, setCurrentDp, dp}}>
         <div className="min-h-[100vh] flex flex-row max-w-[100%] "  style={{ backgroundColor:theme === 'dark'?"#222222":"#F7F7F8"}} >
            <div>
               <Nav />
            </div>
            <div className=" sm:p-4 sm:ml-[10rem] w-full min-h-[100vh]" style={{ backgroundColor:theme === 'dark'?"#222222":"#F7F7F8"}}>
               <Outlet />
            </div>
         </div>
      </DpContext.Provider>
   );
};

export default MainLayout; 

// style={{backgroundColor: theme ? "#2222" : "", color: theme === "dark" ? "#F7F7F8" : "#2222"}} 