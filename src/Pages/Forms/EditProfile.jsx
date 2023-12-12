import React, {useEffect} from "react";
import {useNavigate} from "react-router";
import {useRef, useContext, useState} from "react";
import {UseAuth} from "../../Utils/AuthContext";
import logo from "../../Images/linkloomlogosec.png";
import linkloomicon2 from "../../Images/linkloomicon2.png";
import {UseTheme} from "../../Utils/ThemeContext";
import {auth, store} from "../../firebase";
import {doc, updateDoc} from "firebase/firestore";
import {onAuthStateChanged} from "firebase/auth";

const EditProfile = () => {
   const editref = useRef();
   const navigate = useNavigate();
   const {theme} = UseTheme();
   const {User} = UseAuth();
   const [Currentuser, setCurrentuser] = useState(null);
   //
   //
   useEffect(() => {
      onAuthStateChanged(auth, (currentu) => {
         // console.log(currentu.uid);
         setCurrentuser(currentu.uid);
      });
   }, []);

   const handlesubmit = async (e) => {
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

      const ref = doc(store, "users", `${Currentuser}`);

      await updateDoc(ref, {
         Firstname: name,
         Lastname: Lastname,
         Gender: gender,
         Occupation: occupation,
         Date: date,
         Location: location,
         Relationship: relationship,
         Number: number,
         Bio: bio,
      })
         .then(() => {
            // console.log("the work is done");
            alert("profileUpdated, Now redirecting you!");
            setTimeout(() => {
               navigate("/Profile");
            }, 1500);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const handleDiscard = () => {
      navigate(-1);
   };
   //
   //
   //
   return (
      <div className="min-h-[100vh] pt-4" style={{backgroundColor: theme === "dark" ? "#222222" : "F7F7F8"}}>
         <div className=" flex row justify-start gap-1 items-center h-auto overflow-y-hidden pl-4">
            <img src={linkloomicon2} alt={logo} className="w-[4rem] h-[4rem] flex-none" />
            <img src={logo} alt="" className="w-32" />
         </div>

         <div className=" w-full  flex flex-row justify-center text-center px-4 ">
            <div className=" w-full sm:w-[600px] h-[80vh] text-white box ">
               <h4
                  className=" [font-family:'Inter-Bold',Helvetica] font-semibold text-[26px] tracking-[0] leading-[normal] whitespace-nowrap pb-6 mt-10 text-left pl-4"
                  style={{color: theme === "dark" ? "#F7F7F8" : "#222222"}}
               >
                  Edit Profile
               </h4>
               <form action="" className=" relative" onSubmit={handlesubmit} ref={editref}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4">
                     <input
                        type="text"
                        name="name"
                        id="name"
                        className="w-full h-8 focus:outline-none bg-transparent pl-4 text-xs mb-3"
                        style={{color: theme === "dark" ? "#F7F7F8" : "#222222", border: theme === "dark" ? "0.5px solid #F7F7F8 " : "0.5px solid #222222 "}}
                        placeholder="Firstname..."
                        required
                     />
                     <input
                        type="text"
                        name="Lastname"
                        id="Lastname"
                        className="w-full h-8 focus:outline-none bg-transparent pl-4 text-xs mb-3"
                        style={{color: theme === "dark" ? "#F7F7F8" : "#222222", border: theme === "dark" ? "0.5px solid #F7F7F8 " : "0.5px solid #222222 "}}
                        placeholder="Lastname..."
                        required
                     />
                  </div>

                  <textarea
                     name="bio"
                     id="bio"
                     cols="20"
                     rows="15"
                     className="w-full h-12 focus:outline-none bg-transparent pl-4 text-xs mb-3 p-2"
                     style={{color: theme === "dark" ? "#F7F7F8" : "#222222", border: theme === "dark" ? "0.5px solid #F7F7F8 " : "0.5px solid #222222 "}}
                     placeholder="Bio..."
                     required
                  ></textarea>
                  <input
                     type="text"
                     name="occupation"
                     id="occupation"
                     className="w-full h-8 focus:outline-none bg-transparent pl-4 text-xs mb-3"
                     style={{color: theme === "dark" ? "#F7F7F8" : "#222222", border: theme === "dark" ? "0.5px solid #F7F7F8 " : "0.5px solid #222222 "}}
                     placeholder="Occupation..."
                     required
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4">
                     <select
                        name="gender"
                        required
                        id="gender"
                        className=" h-8 mb-3 text-xs pl-3 focus:outline-none outline-none"
                        style={{
                           color: theme === "dark" ? "#F7F7F8" : "#222222",
                           border: theme === "dark" ? "0.5px solid #F7F7F8 " : "0.5px solid #222222 ",
                           backgroundColor: theme === "dark" ? "#222222" : "#F7F7F8",
                        }}
                     >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                     </select>
                     <input
                        type="date"
                        name="date"
                        id="date"
                        className="w-full h-8 focus:outline-none bg-transparent pl-4 text-xs mb-3 utline-none pr-4"
                        style={{color: theme === "dark" ? "#F7F7F8" : "#222222", border: theme === "dark" ? "0.5px solid #F7F7F8 " : "0.5px solid #222222 "}}
                        placeholder="date..."
                        required
                     />
                  </div>
                  <input
                     type="text"
                     name="location"
                     id="location"
                     className="w-full h-8 focus:outline-none bg-transparent pl-4 text-xs mb-3"
                     style={{color: theme === "dark" ? "#F7F7F8" : "#222222", border: theme === "dark" ? "0.5px solid #F7F7F8 " : "0.5px solid #222222 "}}
                     placeholder="Location..."
                     required
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4">
                     <select
                        name="relationship"
                        required
                        id="relationship"
                        className=" h-8 mb-5 text-xs pl-3 outline-none focus:outline-none "
                        style={{
                           color: theme === "dark" ? "#F7F7F8" : "#222222",
                           border: theme === "dark" ? "0.5px solid #F7F7F8 " : "0.5px solid #222222 ",
                           backgroundColor: theme === "dark" ? "#222222" : "#F7F7F8",
                        }}
                     >
                        <option value="Married">Married</option>
                        <option value="In a relationship">In a relationship</option>
                        <option value="Single">Single</option>
                     </select>
                     <input
                        type="number"
                        name="number"
                        id="number"
                        className="w-full h-8 border-[0.5px] text-black border-black border-solid focus:outline-none bg-transparent pl-4 text-xs mb-3"
                        style={{color: theme === "dark" ? "#F7F7F8" : "#222222", border: theme === "dark" ? "0.5px solid #F7F7F8 " : "0.5px solid #222222 "}}
                        placeholder="Number..."
                        required
                     />
                  </div>
                  <div className="flex justify-left gap-3 font-sans">
                     <button type="submit" className="w-[8rem] h-8 border-none text-[55%] items-center [font-family:'Inter-Bold',Helvetica] bg-[#490057] text-white">
                        Update Profile
                     </button>
                     <button
                        type="button"
                        className="w-[8rem] h-8 text-[55%] items-center [font-family:'Inter-Bold',Helvetica] border-[#490057] border-[1px] border-solid"
                        style={{color: theme === "dark" ? "#F7F7F8" : "#490057"}}
                        onClick={handleDiscard}
                     >
                        Discard
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};
export default EditProfile;
