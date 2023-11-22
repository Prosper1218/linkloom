import React, {useContext, useState} from "react";
import smalldp from "../../../Images/DP.png";
import CoverPhoto from "./CoverPhoto";
import MainLayout, {DpContext} from "../../../LayoutFile/MainLayout";
import {HamburgerMenuIcon} from "@radix-ui/react-icons";
import user from "../../../Images/user.png";
import mail from "../../../Images/mail.png";
import phone from "../../../Images/phone.png";
import birthdaycake from "../../../Images/birthdaycake.png";
import location from "../../../Images/location.png";
import relationship from "../../../Images/relationship.png";
import suitcase from "../../../Images/suitcase.png";
import {online, ymk} from "../../../Data";
import Tablayout from "./ProfileLayout/TabLayout";
import {Route} from "react-router";
import VeiwDp from "./ProfileLayout/VeiwDp";

const Profile = () => {
   const {CurrentDp} = useContext(DpContext);
   const [ViewProfilepic, setViewProfilepic] = useState(false);

   return (
      <div className=" bg-[#F7F7F8]">
         {ViewProfilepic && <VeiwDp curr={CurrentDp} />}
         <div className="w-[100%] flex flex-row gap-3 pt-1 sm-pt-0">
            <form action="" className=" w-[100%] gap-3 flex">
               <input
                  type="text"
                  name="search"
                  id="search"
                  className="border flex-auto text-[60%] border-none font-serif outline-none pl-2 h-8 w-[90%] ml-10 sm:ml-0 shadow-xl"
                  placeholder="search"
               />
               <div className="flex-auto w-[3rem]">
                  <img src={CurrentDp ? CurrentDp : null} alt={smalldp} className="bg-[#fbb03b] rounded-full w-9 h-9 object-cover float-right" />
               </div>
            </form>
         </div>
         {/*  */}

         <CoverPhoto handleprofilepicclick={() => setViewProfilepic(true)} />

         <div className="flex flex-col-reverse md:flex-row gap-4 items-start mt-6">
            <div className="w-full md:w-[50%] grid grid-cols-2 gap-4 items-start">
               <div className="pt-4 bg-white rounded-[8px]">
                  <h3 className="text-[#A303A0]  text-sm font-bold pl-2 sm:pl-4 mb-3">About</h3>
                  <section className="flex flex-col space-y-2 mx-2 sm:mx-4 pb-4">
                     <div className="flex flex-row gap-2 border-gray border-solid border-b py-2">
                        <img src={user} alt="dp" className="w-4 h-4" /> <p className="text-[65%] text-[#A303A0]">Female</p>
                     </div>
                     <div className="flex flex-row gap-2 border-gray border-solid border-b py-2">
                        <img src={birthdaycake} alt="dp" className="w-4 h-4" /> <p className="text-[65%] text-[#A303A0]">14, Nov 2023</p>
                     </div>
                     <div className="flex flex-row gap-2 border-gray border-solid border-b py-2">
                        <img src={location} alt="dp" className="w-4 h-4" /> <p className="text-[65%] text-[#A303A0]">14, Uruan Street Uyo, Akwa Ibom</p>
                     </div>
                     <div className="flex flex-row gap-2 border-gray border-solid border-b py-2">
                        <img src={mail} alt="dp" className="w-4 h-4" /> <p className="text-[65%] text-[#A303A0] flex-wrap grow">wprosper92@gmail.com</p>
                     </div>
                     <div className="flex flex-row gap-2 border-gray border-solid border-b py-2">
                        <img src={relationship} alt="dp" className="w-4 h-4" /> <p className="text-[65%] text-[#A303A0]">In a relationship</p>
                     </div>
                     <div className="flex flex-row gap-2 border-gray border-solid border-b py-2">
                        <img src={suitcase} alt="dp" className="w-4 h-4" /> <p className="text-[65%] text-[#A303A0]">Student</p>
                     </div>
                     <div className="flex flex-row py-2 gap-2">
                        <img src={phone} alt="dp" className="w-4 h-4" /> <p className="text-[65%] text-[#A303A0]">08130013592</p>
                     </div>
                  </section>
               </div>
               <div className="space-y-4">
                  <div className=" bg-white rounded-[8px] overflow-auto h-[10.5rem] pt-4 pb-6">
                     <h3 className="text-[#A303A0]  text-xs font-bold  mb-3 border-gray border-solid border-b-[0.5px] mx-2 sm:mx-4 pb-2">You might know</h3>
                     <section className="mt-3 space-y-2 ml-2 sm:ml-4">
                        {ymk.map((pymk) => {
                           const {id, name, email, profile} = pymk;
                           return (
                              <div key={id} className="flex  gap-1 sm:gap-3 items-center  pb-2">
                                 <div className=" sm:w-10 sm:h-10  w-8 h-8 bg-[#fbb03b] rounded-full">
                                    <img src={profile} alt={name} className="w-full h-full object-cover" />
                                 </div>
                                 <div className="grow leading-4">
                                    <p className="text-[70%] text-[#A303A0] font-bold capitalize"> {name} </p>
                                    <p className="text-[65%] text-[#A303A0]"> {email}</p>
                                 </div>
                              </div>
                           );
                        })}
                     </section>
                  </div>
                  <div className="pt-4 bg-white rounded-[8px] overflow-auto h-[10.5rem] items-center pb-6">
                     <h3 className="text-[#A303A0]  text-xs font-bold mb-3 border-b-[0.5px] mx-2 sm:mx-4  border-gray border-solid pb-2">Active</h3>
                     <div className=" mt-4 space-y-2 mx-2 sm:mx-4">
                        {online.map((active) => {
                           const {id, name, status, when, profile} = active;
                           return (
                              <div key={id} className="flex  gap-1 sm:gap-3 items-center border-b-[0.5px]  border-gray border-solid pb-2">
                                 <div className=" sm:w-10 sm:h-10  w-8 h-8 bg-[#490057] rounded-full">
                                    <img src={profile} alt={name} className="w-full h-full object-cover" />
                                 </div>
                                 <div className="grow flex items-center justify-between">
                                    <div className="leading-4">
                                       <p className="text-[70%] text-[#A303A0] font-bold capitalize"> {name} </p>
                                       <p className="text-[65%] text-[#A303A0]"> {status || `last seen ${when}`}</p>
                                    </div>
                                    <div className="text-[55%] text-[#A303A0]  hidden xl:block  ">{when}</div>
                                 </div>
                              </div>
                           );
                        })}
                     </div>
                  </div>
               </div>
            </div>
            <div className="grow w-full md:w-auto bg-white rounded-[8px] h-[27rem] overflow-auto">
               <Tablayout />
             
            </div>
         </div>
         <br />
      </div>
   );
};

export default Profile;
