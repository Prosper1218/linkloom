import React from "react";
import SNav from "./SNav";
import {Outlet} from "react-router";

const Slayout = () => {
   return (
      <div>
         <div className="justify-center flex ">
            <div>
               <SNav />
            </div>
            <div>
               <Outlet />
            </div>
         </div>
      </div>
   );
};

export default Slayout;
