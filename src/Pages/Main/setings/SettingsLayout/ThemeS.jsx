import React, {useEffect, useRef, useState} from "react";
import {UseTheme} from "../../../../Utils/ThemeContext";

const ThemeS = () => {
   const {theme, toggleTheme} = UseTheme();
   const handleclick1 = () => {
      toggleTheme();
   };

   return (
      <div style={{color: theme ==="dark" === 'dark' ? "white" : "black"}}>
         <h3 className="font-bold text-xl" style={{color: theme ==="dark" ? "white" : "black"}}>
            Theme
         </h3>
         <div>
            <p className="font-sans text-xs" style={{color: theme ==="dark" ? "white" : "black"}}>
               Choose a prefered theme for the app
            </p>
            <br />

            <form className="space-y-2 pr-8 sm:pr-0">
               <div className="flex w-full sm:w-80 h-10 items-center gap-1 pl-2 rounded-md " style={{backgroundColor: theme ==="dark" ? "rgba(255, 255, 255, 0.03)" : "#e2e2e0"}}>
                  <div className="w-4 h-4 border-black border-solid border-[1px] rounded-full" style={{backgroundColor: theme ==="dark" ? "#480057" : ""}}></div>

                  <button type="button" onClick={handleclick1} className="text-[65%]" style={{color: theme ==="dark" ? "white" : "black"}}>
                     Dark
                  </button>
               </div>
            </form>

         </div>
      </div>
   );
};

export default ThemeS;
