import React, {useContext, useState} from "react";
import {DpContext} from "../../LayoutFile/MainLayout";

const Activity = () => {
   const {CurrentDp} = useContext(DpContext);
//    {Math.random().toString().slice(3,7)}


   return (
      <div>
         <div className="border ml-[2.4rem] mt-1 sm:ml-0 flex justify-between items-start bg-[#F7F7F8]">
            <h1 className="font-sans font-bold text-[#A303A0] text-md sm:text-lg">Activity</h1>
            <div className="w-[2.5rem] h-[2.5rem] object-cover">
               <img src={CurrentDp} alt="" className="w-full h-full object-cover rounded-full" />
            </div>
         </div>
      </div>
   );
};

export default Activity;
