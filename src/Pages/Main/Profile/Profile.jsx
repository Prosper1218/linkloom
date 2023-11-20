import React, {useContext} from "react";
import smalldp from "../../../Images/DP.png";
import CoverPhoto from "./CoverPhoto";
import {DpContext} from "../../../LayoutFile/MainLayout";

const Profile = () => {
   const {CurrentDp} = useContext(DpContext);

   return (
      <div style={{border: "1px solid orange"}} className=" bg-[#F7F7F8]">
         <form action="" className="w-[100%] flex flex-row gap-3">
            <input
               type="text"
               name="search"
               id="search"
               className="border flex-auto h-6 text-[60%] border-none font-serif outline-none pl-2 sm:h-9 w-[90%] ml-1 shadow-xl"
               placeholder="search"
            />
            <div className="flex flex-row items-center justify-right sm:justify-center gap-1 flex-auto w-[4rem]">
               <img src={CurrentDp ? CurrentDp : null} alt={smalldp} className="bg-[#fbb03b] rounded-full w-9 h-9 object-cover" />
            </div>
         </form>
         {/*  */}

         <CoverPhoto />

         <div className="flex flex-col md:flex-row gap-4 items-start mt-6">
            <div className="w-full md:w-[50%] grid grid-cols-2 gap-4 items-start">
               <div className="pt-4 bg-white rounded-[8px]">
                  <h3 className="text-[#A303A0]  text-sm font-bold pl-4">About</h3>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
               </div>
               <div className="space-y-4">
                  <div className="pt-4 bg-white rounded-[8px]">
                     <h3 className="text-[#A303A0]  text-xs font-bold pl-4">You Might Know</h3>
                     <br />
                     <br />
                     <br />
                     <br />
                  </div>
                  <div className="pt-4 bg-white rounded-[8px]">
                     <h3 className="text-[#A303A0]  text-xs font-bold pl-4">Active</h3>
                     <br />
                     <br />
                     <br />
                     <br />
                     <br />
                  </div>
               </div>
            </div>
            <div className="grow w-full md:w-auto bg-white rounded-[8px]">
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
            </div>
         </div>
      </div>
   );
};

export default Profile;

{
   /* <div className="border mt-4 gap-4 grid grid-cols-1 sm:grid-cols-2 md:flex items-start">
            <div className="w-[60%] sm:w-[100%] md:w-[25%] bg-white rounded-[8px] pt-6" style={{border: "1px solid red"}}>
               <h3 className="text-[#A303A0]  text-sm font-bold pl-4">About</h3>
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
            </div>
            <div className="grow  bg-white rounded-[8px] pt-6" style={{border: "1px solid red"}}>
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br /> <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
            </div>
            <div className="w-[60%] md:w-[25%] sm:w-[100%] rounded-[8px] space-y-4" style={{border: "1px solid red"}}>
               <div className="bg-white rounded-[8px]">
                  <h3 className="text-[#A303A0]  text-sm font-bold pl-4"></h3>
                  <br />
                  <br />
                  <br />
                  <br />
               </div>

               <div className="bg-white rounded-[8px]">
                  <h3 className="text-[#A303A0]  text-sm font-bold pl-4"></h3>
                  <br />
                  <br />
                  <br />
                  <br />
               </div>
            </div>
         </div> */
}
