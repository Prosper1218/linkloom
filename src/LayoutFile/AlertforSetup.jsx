import React from "react";
import {Link} from "react-router-dom";
import {UseAuth} from "../Utils/AuthContext";

const AlertforSetup = ({Act, whereto, linkto, extrastyling, er, handlecontinue}) => {
   // const {signupModalActive, setsignupModalActive} = UseAuth();

   // const handlereload = () => {
   //    window.location.reload();
   // };
   return (
      <div className={`absolute bg-black/50 top-0 bottom-0 left-0 right-0 z-30 flex flex-col justify-center items-center ${extrastyling} `}>
         <div className="bg-white max-w-[19rem] w-[19rem] h-[12rem] rounded-[4px] flex flex-col justify-center items-center space-y-2">
            {/* <Image src={success} alt="successicon" className=" scale-50 " /> */}
            <p className="text-sm text-center sora px-4"> {Act}</p>
            {er ? (
               <Link to={linkto} className="text-[#490057] underline tracking-wide text-sm text-center montserrat">
                  {whereto}
               </Link>
            ) : (
               <button className="border rounded-md px-6 py-2 sora text-xs" onClick={handlecontinue}>
                  continue
               </button>
            )}
         </div>
      </div>
   );
};

export default AlertforSetup;
