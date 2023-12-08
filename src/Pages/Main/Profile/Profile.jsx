import React, {useContext, useState} from "react";
import smalldp from "../../../Images/DP.png";
import CoverPhoto from "./CoverPhoto";
import MainLayout, {DpContext} from "../../../LayoutFile/MainLayout";
import user from "../../../Images/user.png";
import mail from "../../../Images/mail.png";
import phone from "../../../Images/phone.png";
import birthdaycake from "../../../Images/birthdaycake.png";
import location from "../../../Images/location.png";
import relationship from "../../../Images/relationship.png";
import suitcase from "../../../Images/suitcase.png";
import {online, ymk} from "../../../Data";
import Tablayout from "./ProfileLayout/TabLayout";
import VeiwDp from "./ProfileLayout/VeiwDp";
import {UseAuth} from "../../../Utils/AuthContext";
import {useEffect} from "react";
import {UseTheme} from "../../../Utils/ThemeContext";
import {onValue, ref} from "firebase/database";
import {db} from "../../../firebase";

const Profile = () => {
   const {CurrentDp} = useContext(DpContext);
   const [ViewProfilepic, setViewProfilepic] = useState(false);
   const {User} = UseAuth();
   const {theme} = UseTheme();
   const [DBDATA, setDBDATA] = useState([])

   useEffect(() => {
      setDBDATA([]);
      onValue(ref(db,`${User.uid}`), (snapshot) => {
         const data = snapshot.val();
         if (data !== null) {
         console.log(Object.values(data))
         }
      });
   }, []);
   // console.log(DBDATA)

   // let joinedD = new Date().toTimeString()
   let joinedD = new Date().toDateString();

   return (
      <div style={{backgroundColor: theme === "dark" ? "#222222" : "#F7F7F8", color: theme === "dark" ? "#F7F7F8" : "#2222"}}>
         {ViewProfilepic && <VeiwDp curr={CurrentDp} Setvdp={setViewProfilepic} />}
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
         <div className="flex flex-col-reverse lg:flex-row gap-4 items-start mt-6 pb-3">
            <div className="w-full lg:w-[50%] grid grid-cols-2 gap-4 items-start rounded-[8px] pb-3">
               <div
                  className="pt-4 rounded-[8px]"
                  style={{backgroundColor: theme === "dark" ? "rgba(255, 255, 255, 0.03)" : "white", boxShadow: "rgba(255, 255, 255, 0.1) 0px 1px 6px"}}
               >
                  <h3 className="text-[#A303A0]  text-sm font-bold pl-2 sm:pl-4 mb-3">About</h3>

                  <section className="flex flex-col space-y-2 mx-2 sm:mx-4 pb-4" style={{color: theme === "dark" ? "white" : "#A303A0"}}>
                     <div className="flex flex-row gap-2 border-gray border-solid border-b py-2">
                        <img src={user} alt="dp" className="w-4 h-4" />{" "}
                        <p className="text-[65%] " style={{color: theme === "dark" ? "white" : "#A303A0"}}>
                           gender
                        </p>
                     </div>
                     <div className="flex flex-row gap-2 border-gray border-solid border-b py-2">
                        <img src={birthdaycake} alt="dp" className="w-4 h-4" />{" "}
                        <p className="text-[65%]" style={{color: theme === "dark" ? "white" : "#A303A0"}}>
                           date
                        </p>
                     </div>
                     <div className="flex flex-row gap-2 border-gray border-solid border-b py-2">
                        <img src={location} alt="dp" className="w-4 h-4" />{" "}
                        <p className="text-[65%]" style={{color: theme === "dark" ? "white" : "#A303A0"}}>
                           location
                        </p>
                     </div>
                     <div className="flex flex-row gap-2 border-gray border-solid border-b py-2">
                        <img src={mail} alt="dp" className="w-4 h-4" />{" "}
                        <p className="text-[65%] flex-wrap grow" style={{color: theme === "dark" ? "white" : "#A303A0"}}>
                           {User ? User.email : "your email"}
                        </p>
                     </div>
                     <div className="flex flex-row gap-2 border-gray border-solid border-b py-2">
                        <img src={relationship} alt="dp" className="w-4 h-4" />{" "}
                        <p className="text-[65%]" style={{color: theme === "dark" ? "white" : "#A303A0"}}>
                           relationship status
                        </p>
                     </div>
                     <div className="flex flex-row gap-2 border-gray border-solid border-b py-2">
                        <img src={suitcase} alt="dp" className="w-4 h-4" />{" "}
                        <p className="text-[65%] " style={{color: theme === "dark" ? "white" : "#A303A0"}}>
                           occupation
                        </p>
                     </div>
                     <div className="flex flex-row py-2 gap-2">
                        <img src={phone} alt="dp" className="w-4 h-4" />{" "}
                        <p className="text-[65%]" style={{color: theme === "dark" ? "white" : "#A303A0"}}>
                           number
                        </p>
                     </div>
                     <div className="flex flex-row py-2 gap-2">
                        <img src={phone} alt="dp" className="w-4 h-4" />{" "}
                        <p className="text-[65%]" style={{color: theme === "dark" ? "white" : "#A303A0"}}>
                           Joined:{User.registration ? User.registration : joinedD}
                        </p>
                     </div>
                  </section>
               </div>
               <div className="space-y-4">
                  <div
                     className=" bg-white rounded-[8px] overflow-auto h-[10.5rem] pt-4 pb-6"
                     style={{backgroundColor: theme === "dark" ? "rgba(255, 255, 255, 0.03)" : "white", boxShadow: "rgba(255, 255, 255, 0.1) 0px 1px 6px"}}
                  >
                     <h3 className="text-[#A303A0]  text-xs font-bold  mb-3 border-gray border-solid border-b-[0.5px] mx-2 sm:mx-4 pb-2">You might know</h3>
                     <section className="mt-3 space-y-2 ml-2 sm:ml-4">
                        {ymk.map((pymk) => {
                           const {id, name, email, profile} = pymk;
                           return (
                              <div key={id} className="flex  gap-1 sm:gap-3 items-center  pb-2">
                                 <div className="sm:w-9 sm:h-9  w-7 h-7 bg-[#fbb03b] rounded-full">
                                    <img src={profile} alt={name} className="w-full h-full object-cover" />
                                 </div>
                                 <div className="grow leading-3">
                                    <p className="text-[70%] font-bold capitalize overflow-y-hidden" style={{color: theme === "dark" ? "white" : "#A303A0"}}>
                                       {" "}
                                       {name}{" "}
                                    </p>
                                    <p className="text-[58%] overflow-y-hidden" style={{color: theme === "dark" ? "white" : "#A303A0"}}>
                                       {" "}
                                       {email}
                                    </p>
                                 </div>
                              </div>
                           );
                        })}
                     </section>
                  </div>
                  <div
                     className="pt-4 rounded-[8px] overflow-auto h-[10.5rem] items-center pb-6"
                     style={{backgroundColor: theme === "dark" ? "rgba(255, 255, 255, 0.03)" : "white", boxShadow: "rgba(255, 255, 255, 0.1) 0px 1px 6px"}}
                  >
                     <h3 className="text-[#A303A0]  text-xs font-bold mb-3 border-b-[0.5px] mx-2 sm:mx-4  border-gray border-solid pb-2">Active</h3>
                     <div className=" mt-4 space-y-2 mx-2 sm:mx-4">
                        {online.map((active) => {
                           const {id, name, status, when, profile} = active;
                           return (
                              <div key={id} className="flex  gap-1 sm:gap-3 items-center border-b-[0.5px]  border-gray border-solid pb-1">
                                 <div className="sm:w-9 sm:h-9  w-7 h-7 bg-[#490057] rounded-full">
                                    <img src={profile} alt={name} className="w-full h-full object-cover" />
                                 </div>
                                 <div className="grow flex items-center justify-between">
                                    <div className="leading-3">
                                       <p className="text-[70%]  font-bold capitalize overflow-y-hidden" style={{color: theme === "dark" ? "white" : "#A303A0"}}>
                                          {" "}
                                          {name}{" "}
                                       </p>
                                       <p className="text-[58%]  overflow-y-hidden" style={{color: theme === "dark" ? "white" : "#A303A0"}}>
                                          {" "}
                                          {status || `last seen ${when}`}
                                       </p>
                                    </div>
                                    <div className="text-[55%]   hidden xl:block " style={{color: theme === "dark" ? "white" : "#A303A0"}}>
                                       {when}
                                    </div>
                                 </div>
                              </div>
                           );
                        })}
                     </div>
                  </div>
               </div>
            </div>
            <div
               className="grow w-full lg:w-auto bg-white rounded-[8px] h-[27rem] overflow-y-auto"
               style={{
                  backgroundColor: theme === "dark" ? "rgba(255, 255, 255, 0.03)" : "white",
                  boxShadow: "rgba(255, 255, 255, 0.1) 0px 1px 6px",
                  color: theme === "dark" ? "#f7f7f8" : "#A303A0",
                  // border: "0.3px solid #f7f7f8",
               }}
            >
               <Tablayout />
            </div>
         </div>
         <br />
      </div>
   );
};

export default Profile;
// S4E10
