import React, {useContext} from "react";
import {DpContext} from "../../../LayoutFile/MainLayout";
import {UseTheme} from "../../../Utils/ThemeContext";


const Settings = () => {
   const {CurrentDp} = useContext(DpContext);
   const {DarkTheme} = UseTheme();
   //    {Math.random().toString().slice(3,7)}

   return (
      <div>
         <div className=" ml-[2.4rem] mt-1 sm:ml-0 flex justify-between items-start">
            <h1 className="font-sans font-bold text-[#A303A0] text-md sm:text-lg">Settings</h1>
            <div className="w-[2.5rem] h-[2.5rem] object-cover">
               <img src={CurrentDp} alt="" className="w-full h-full object-cover rounded-full" />
            </div>
         </div>
       
      </div>
   );
};

export default Settings;
