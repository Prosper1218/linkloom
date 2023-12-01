import React, {useEffect, useRef} from "react";
import CoverPh from "../../../Images/CoverPhoto.png";
import {useState} from "react";
import ProfilePicture from "./ProfilePicture";
import {UseAuth} from "../../../Utils/AuthContext";
import {Navigate, useNavigate} from "react-router";
import localforage from "localforage";
import {UseTheme} from "../../../Utils/ThemeContext";

const CoverPhoto = ({handlecoverphotoclick, handleprofilepicclick}) => {
   const [CoverP, setCoverP] = useState(CoverPh);
   const fileinput = useRef(null);
   const navigate = useNavigate();
   const [SavedData, setSavedData] = useState([]);
   const {theme} = UseTheme();

   //
   localforage
      .getItem("Details")
      .then((FedData) => {
         if (FedData) {
            setSavedData(FedData);
         } else {
            console.error("error, no data found");
         }
      })
      .catch((error) => {
         console.log(error);
      });

   const handleFileChange = (event) => {
      const imgfile = event.target.files[0];
      if (imgfile) {
         const imageSrc = URL.createObjectURL(imgfile);
         //     console.log(imageSrc) here  i can perform actions with this, like uploading to a server
         setTimeout(() => {
            setCoverP(imageSrc);
            console.log("you changed your cover photo to", imageSrc);
         }, 1500);
      } else {
         setCoverP(CoverPh);
         console.log("you removed your cover photo");
      }
   };

   const handlechoosep = () => {
      fileinput.current.click();
   };
   return (
      <div
         style={{
            backgroundColor: theme === "dark" ? "#2222" : "white",
            color: theme === "dark" ? "#F7F7F8" : "#2222",
            boxShadow: theme === "dark" ? "rgba(255, 255, 255, 0.1) 0px 1px 6px" : "rgba(0, 0, 0, 0.1) 0px 2px 4px",
         }}
         className="relative z-10 mt-4 pb-5 rounded-[8px]"
      >
         <div className=" h-[12rem] sm:h-[14rem] w-full object-cover rounded-[8px]">
            <img src={CoverP} alt="coverphoto" className="w-full h-full object-cover z-10" onClick={handlecoverphotoclick} />
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
                  <ProfilePicture handleprofilepicC={handleprofilepicclick} />
               </div>
            </div>
            <br />

            <div className="relative flex flex-row justify-between  px-[1rem] sm:px-[1.9rem]">
               <div className="ml:0 sm:ml-3 pr-6 leading-3 pt-2">
                  <p className="font-sans font-bold text-lg" style={{color: theme === "dark" ? "white" : "#A303A0"}}>
                     {SavedData.name} {SavedData.Lastname}
                  </p>
                  <p className=" font-sans text-[65%] overflow-y-hidden" style={{color: theme === "dark" ? "white" : "#A303A0"}}>{SavedData.bio}</p>
               </div>
               <div>
                  <button
                     className="text-[#A303A0] border-[1px] border-[#A303A0] border-solid w-[5rem] h-[1.7rem] sm:w-[7rem] sm:h-[2rem] text-[60%] rounded-md bg-transparent font-semiboldfont-sans"
                     onClick={() => navigate("/EditProfile")}
                  >
                     Edit profile
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CoverPhoto;
