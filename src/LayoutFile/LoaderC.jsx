import React from "react";
import linkloomlogo from "../Images/linkloomlogosec.png";
import linkloomicon from "../Images/linkloomicon2.png";

const LoaderC = () => {
   return (
      <div className="flex justify-center items-center min-h-[100vh] m-0 p-0">
         <div className="flex justify-center gap-1 loading-logo">
            <img src={linkloomicon} alt="" className="  h-[3rem]" />
            <img src={linkloomlogo} alt="" className="w-[8rem] h-[3rem]" />
         </div>
      </div>
   );
};

export default LoaderC;
