import React, { useContext } from "react";
import { DpContext } from "../../LayoutFile/MainLayout";



const Settings = () => {
   const {CurrentDp} = useContext(DpContext);
   //    {Math.random().toString().slice(3,7)}

   return (
      <div>
         <div className="border ml-[2.1rem] mt-1 sm:ml-0 flex justify-between items-center bg-[#F7F7F8]">
            <h1 className="font-sans font-bold text-[#A303A0] text-md sm:text-lg">Settings</h1>
            <div className="w-[2.5rem] h-[2.5rem] object-cover" style={{border: "1px solid red"}}>
               <img src={CurrentDp} alt="" className="w-full h-full object-cover rounded-full" />
            </div>
         </div>
      </div>
   );
};

export default Settings;
