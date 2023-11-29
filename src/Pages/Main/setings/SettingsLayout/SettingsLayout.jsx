import React from "react";
import Settings from "../Settings";
import {Outlet} from "react-router";
import SNav from "./SNav";

const SettingsLayout = () => {
   return (
      <div>
         <Settings />
         <div className="w-full flex flex-col sm:flex-row justify-center min-h-[100vh]">
            <div className="">
               <SNav />
            </div>
            <div className="grow " style={{border:"1px solid black"}}>
               <Outlet />
            </div>
         </div>
      </div>
   );
};

export default SettingsLayout;
