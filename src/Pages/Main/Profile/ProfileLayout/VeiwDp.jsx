import {Cross1Icon} from "@radix-ui/react-icons";
import React from "react";

const VeiwDp = ({curr, Setvdp}) => {
   console.log(curr);
 
   return (
      <div className=" fixed overflow-y-hidden flex justify-center items-center z-50 top-0 bottom-0 left-0 right-0 bg-black/80 " style={{border:"1px solid green"}}>
         <div className="w-[90%] sm:w-[70%] h-[40%] sm:h-[60%] z-50 absolute overflow-y-hidden ">
            <button className="float-right  bg-[#480057] sm:bg-[#fbb03b]  w-9 h-9 focus:outline-none border-none outline-none items-center justify-center flex absolute right-0">
               <Cross1Icon onClick={() => Setvdp(false)} color="white" />
            </button>
            <img src={curr} alt="profilepicture" className="w-full h-full object-cover  sm:object-contain" />
         </div>
      </div>
   );
};

export default VeiwDp;
