import React from "react";
import {useNavigate} from "react-router";
import {useRef, useContext, useState} from "react";
import {UseAuth} from "../../Utils/AuthContext";
import logo from "../../Images/linkloomlogosec.png";
import linkloomicon2 from "../../Images/linkloomicon2.png";
import localforage from "localforage";

const ProfileSetUp = () => {
   const editref = useRef();
   const {SetUpEdit} = UseAuth();
   const [Userinfo, setUserinfo] = useState(null);
   const navigate = useNavigate();

   //
   //

   const handlesubmit = (e) => {
      e.preventDefault();
      const name = editref.current.name.value;
      const Lastname = editref.current.Lastname.value;
      const bio = editref.current.bio.value;
      const occupation = editref.current.occupation.value;
      const gender = editref.current.gender.value;
      const date = editref.current.date.value;
      const location = editref.current.location.value;
      const number = editref.current.number.value;
      const relationship = editref.current.relationship.value;

      const editDetails = {name, Lastname, bio, occupation, gender, date, location, number, relationship};
      setUserinfo(editDetails);
      // console.log(editDetails);
      setTimeout(() => {
         navigate("/");
      }, 3000);
   };
   localforage
      .setItem("Details", Userinfo)
      .then(() => {
         console.log("saved data to localforage");
      })
      .catch((error) => {
         console.log("there was an error saving user's data");
      });
   //
   //
   //
   return (
      <div className="min-h-[100vh] pt-4">
         <div className=" flex row justify-start gap-1 items-center h-auto overflow-y-hidden pl-4">
            <img src={linkloomicon2} alt={logo} className="w-[4rem] h-[4rem] flex-none" />
            <img src={logo} alt="" className="w-32" />
         </div>

         <div className=" w-full  flex flex-row justify-center text-center px-4 ">
            <div className=" w-full sm:w-[600px] h-[80vh] text-white box ">
               <h4 className=" [font-family:'Inter-Bold',Helvetica] font-semibold text-[#000000] text-[26px] tracking-[0] leading-[normal] whitespace-nowrap pb-6 mt-10 text-left pl-4">
                  Edit Profile
               </h4>
               <form action="" className=" relative" onSubmit={handlesubmit} ref={editref}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4">
                     <input
                        type="text"
                        name="name"
                        id="name"
                        className="w-full h-8 border-[0.5px] text-black border-black border-solid focus:outline-none bg-transparent pl-4 text-xs mb-3"
                        placeholder="Firstname..."
                        required
                     />
                     <input
                        type="text"
                        name="Lastname"
                        id="Lastname"
                        className="w-full h-8 border-[0.5px] text-black border-black border-solid focus:outline-none bg-transparent pl-4 text-xs mb-3"
                        placeholder="Lastname..."
                        required
                     />
                  </div>

                  <textarea
                     name="bio"
                     id="bio"
                     cols="20"
                     rows="15"
                     className="w-full h-12 border-[0.5px] text-black border-black border-solid focus:outline-none bg-transparent pl-4 text-xs mb-3 p-2"
                     placeholder="Bio..."
                  ></textarea>
                  <input
                     type="text"
                     name="occupation"
                     id="occupation"
                     className="w-full h-8 border-[0.5px] text-black border-black border-solid focus:outline-none bg-transparent pl-4 text-xs mb-3"
                     placeholder="Occupation..."
                     required
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4">
                     <select name="gender" id="gender" className="border-[1px] border-solid border-black h-8 mb-3 text-xs pl-3 focus:outline-none outline-none">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                     </select>
                     <input
                        type="date"
                        name="date"
                        id="date"
                        className="w-full h-8 border-[0.5px] text-black border-black border-solid focus:outline-none bg-transparent pl-4 text-xs mb-3 utline-none"
                        placeholder="date..."
                        required
                     />
                  </div>
                  <input
                     type="text"
                     name="location"
                     id="location"
                     className="w-full h-8 border-[0.5px] text-black border-black border-solid focus:outline-none bg-transparent pl-4 text-xs mb-3"
                     placeholder="Location..."
                     required
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4">
                     <select name="relationship" id="relationship" className="border-[1px] border-solid border-black h-8 mb-5 text-xs pl-3 outline-none focus:outline-none ">
                        <option value="Married">Married</option>
                        <option value="In a relationship">In a relationship</option>
                        <option value="Single">Single</option>
                     </select>
                     <input
                        type="number"
                        name="number"
                        id="number"
                        className="w-full h-8 border-[0.5px] text-black border-black border-solid focus:outline-none bg-transparent pl-4 text-xs mb-3"
                        placeholder="Number..."
                        required
                     />
                  </div>
                  <div className="flex justify-left gap-3">
                     <button type="submit" className="w-[8rem] h-8 border-none text-[55%] items-center [font-family:'Inter-Bold',Helvetica] bg-[#490057] text-white">
                        Update Profile
                     </button>
                     <button type="button" className="w-[8rem] h-8 text-[55%] items-center [font-family:'Inter-Bold',Helvetica] border-[#490057] border-[1px] border-solid text-[#490057]" onClick={()=>navigate(-1)}>
                        Discard
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default ProfileSetUp;
//  <form action="" onSubmit={handlesubmit} ref={editref}>
//             <input type="text" name="name" id="name" style={{border: "1px solid red"}} />
//             <button type="submit">submit</button>
//          </form>
