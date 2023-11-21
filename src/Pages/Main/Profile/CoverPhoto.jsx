import React, {useEffect, useRef} from "react";
import CoverPh from "../../../Images/CoverPhoto.png";
import {useState} from "react";

import ProfilePicture from "./ProfilePicture";

const CoverPhoto = () => {
   const [CoverP, setCoverP] = useState(CoverPh);
   const fileinput = useRef(null);

   const handleFileChange = (event) => {
      const imgfile = event.target.files[0];
      if (imgfile) {
         const imageSrc = URL.createObjectURL(imgfile);
         //     console.log(imageSrc) here  i can perform actions with this, like uploading to a server
         setTimeout(() => {
            setCoverP(imageSrc);
         }, 1500);
      } else {
         setCoverP(CoverPh);
      }
   };

   const handlechoosep = () => {
      fileinput.current.click();
   };
   return (
      <div className="relative z-10 mt-4 bg-white pb-5 rounded-[8px]">
         <div className=" h-[12rem] sm:h-[14rem] w-full object-cover rounded-[8px]">
            <img src={CoverP} alt="coverphoto" className="w-full h-full object-cover z-10" />
         </div>
         <button
            className=" z-20 text-[#A303A0] w-[6rem] h-[1.7rem] sm:w-[7rem] sm:h-[2rem] text-[60%] rounded-md bg-white top-[10rem] sm:top-[11rem] right-[1rem] sm:right-[1.9rem] font-semibold  absolute font-sans"
            onClick={handlechoosep}
         >
            Edit Cover Photo
         </button>
         <input type="file" name="Cphoto" id="cphoto" accept="image/*" onChange={handleFileChange} className="hidden " ref={fileinput} />

         <div className="">
            <div>
               <div className="object-cover w-[6rem] sm:w-[8rem] h-[6rem] sm:h-[8rem] absolute z-20 top-[7rem] sm:top-[8rem]  ml-3 sm:ml-12">
                  <ProfilePicture />
               </div>
            </div>
            <br />

            <div className="relative flex flex-row justify-between  px-[1rem] sm:px-[1.9rem]">
               <div className="ml:0 sm:ml-3 pr-6 leading-3 pt-2">
                  <p className="font-sans font-bold text-[#A303A0] text-lg">User Name</p>
                  <p className=" font-sans  text-[#A303A0] text-[65%] overflow-y-hidden">Bio</p>
               </div>
               <div>
                  <button className="text-[#A303A0] border-[1px] border-[#A303A0] border-solid w-[5rem] h-[1.7rem] sm:w-[7rem] sm:h-[2rem] text-[60%] rounded-md bg-transparent font-semiboldfont-sans">
                     Edit profile
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CoverPhoto;
