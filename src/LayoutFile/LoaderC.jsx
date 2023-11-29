import React from "react";
import linkloomlogo from "../Images/linkloomlogosec.png";
import linkloomicon from "../Images/linkloomicon2.png";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {UseTheme} from "../Utils/ThemeContext";

const LoaderC = () => {
   const {DarkTheme} = UseTheme();
   return (
      <div className="flex justify-center items-center min-h-[100vh] m-0 p-0" style={{backgroundColor: DarkTheme ? "#222222" : "#F7F7F8"}}>
         <div className="flex justify-center gap-1 loading-logo">
            <LazyLoadImage src={linkloomicon} alt="" className="  h-[3rem]" />
            <LazyLoadImage src={linkloomlogo} alt="" className="w-[8rem] h-[3rem]" />
         </div>
      </div>
   );
};

export default LoaderC;
