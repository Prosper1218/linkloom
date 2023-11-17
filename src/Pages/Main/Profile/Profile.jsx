import React, {useContext} from "react";
import smalldp from "../../../Images/DP.png";
import CoverPhoto from "./CoverPhoto";
import {DpContext} from "../../../LayoutFile/MainLayout";
import PLayout from "./ProfileLayout/PLayout";

const Profile = () => {
   const {CurrentDp} = useContext(DpContext);

   return (
      <div style={{border: "1px solid red"}} className=" min-h-[100vh] bg-[#F7F7F8]">
         <form action="" className="w-[100%] flex flex-row gap-3">
            <input
               type="text"
               name="search"
               id="search"
               className="border flex-auto h-6 text-[60%] border-none font-serif outline-none pl-2 sm:h-9 w-[90%] ml-1 shadow-xl"
               placeholder="search"
            />
            <div className="flex flex-row items-center justify-right sm:justify-center gap-1 flex-auto w-[4rem]">
               <img src={CurrentDp ? CurrentDp : null} alt={smalldp} className="bg-[#fbb03b] rounded-full w-9 h-9 " />
            </div>
         </form>
         {/*  */}

         <CoverPhoto />

         <div className="border mt-4 grid grid-cols-3 gap-4">
            <div style={{border: "1px solid red"}}></div>
            <div style={{border: "1px solid red"}}>
               
            </div>
            <div style={{border: "1px solid red"}}></div>
         </div>
      </div>
   );
};

export default Profile;
