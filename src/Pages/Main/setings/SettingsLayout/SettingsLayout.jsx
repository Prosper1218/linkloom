import React from "react";
import Settings from "../Settings";
import {Outlet} from "react-router";
import SNav from "./SNav";
import { UseTheme } from "../../../../Utils/ThemeContext";

const SettingsLayout = () => {
   const{theme}= UseTheme()
   return (
      <div  style={{backgroundColor: theme=== 'dark' ? "#222222" : "#F7F7F8", color: theme === "dark" ? "#F7F7F8" : "#2222"}}>
         <Settings />
         <div className="w-full flex flex-col sm:flex-row justify-center min-h-[100vh]">
            <div className="">
               <SNav />
            </div>
            <div className="grow px-2">
               <Outlet />
            </div>
         </div>
      </div>
   );
};

export default SettingsLayout;
