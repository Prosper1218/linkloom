import React from "react";
import {UseTheme} from "../../../Utils/ThemeContext";
import linkloomicon2 from "../../../Images/linkloomicon2.png";
import logo from "../../../Images/linkloomlogosec.png";
import {Link, useNavigate, useOutletContext} from "react-router-dom";
import {useRef} from "react";
import {store} from "../../../firebase";
import {doc, setDoc} from "firebase/firestore";
import {UseAuth} from "../../../Utils/AuthContext";

const RelationshipStat = () => {
   const {theme} = UseTheme();
   const navigate = useNavigate();
   const bioref = useRef();
   const {firstname, lastname, gender, occupation, date, location, relationshipstatus, bio, setbio, number} = useOutletContext();
   const {User} = UseAuth();
   const handlesubmit = async (e) => {
      e.preventDefault();
      const BIO = bioref.current.Bio.value;
      setbio(BIO);
      console.log(BIO);
      if (BIO) {
         const ref = doc(store, "users", `${User.user.uid}`);

         await setDoc(ref, {
            Firstname: firstname,
            Lastname: lastname,
            Gender: gender,
            Occupation: occupation,
            Date: date,
            Location: location,
            Relationship: relationshipstatus,
            Number: number,
            Bio:BIO,
         })
            .then(() => {
               navigate("/");
               alert("profile setup was successful");
            })
            .catch((error) => {
               console.log(error);
            });
      } else {
         alert("please fill in a bio");
      }
   };

   return (
      <div className="min-h-[100vh]" style={{backgroundColor: theme === "dark" ? "#222222" : "#F7F7F8"}}>
         <div className="justify-between flex absolute">
            <Link to={"/"}>
               <div className=" flex row justify-start gap-1 items-center h-auto overflow-y-hidden pl-4 pt-4">
                  <img src={linkloomicon2} alt={logo} className="w-[2.5rem] h-[2.5rem] flex-none" />
                  <img src={logo} alt="" className="w-24" />
               </div>
            </Link>
         </div>
         <h4
            className=" [font-family:'Inter-Bold',Helvetica] font-semibold text-[17px] capitalize text-center tracking-[0] leading-[normal] whitespace-nowrap mt-[13rem] pb-4"
            style={{color: theme === "dark" ? "#F7F7F8" : "#222222"}}
         >
            let's setup your profile together!
            <p className="pt-2 text-xs" style={{color: theme === "dark" ? "#F7F7F8" : "#480057"}}>
               Bio
            </p>
         </h4>
         <div className="flex justify-center px-5">
            <div className=" w-[500px]">
               <form className="grid gap-0 sm:gap-3 grid-cols-1" ref={bioref}>
                  <input
                     type="Bio"
                     name="Bio"
                     id="Bio"
                     className={`w-full h-9 focus:outline-none bg-transparent pl-4 text-xs mb-3`}
                     style={{color: theme === "dark" ? "#F7F7F8" : "#222222", border: theme === "dark" ? "0.5px solid #F7F7F8 " : "0.5px solid #222222 "}}
                     placeholder="Write a short bio about your self..."
                     required
                  />
               </form>
               <button className="float-right h-8 w-24 bg-[#480057] capitalize text-xs font-serif text-white" onClick={handlesubmit}>
                  Submit
               </button>
            </div>
         </div>
      </div>
   );
};

export default RelationshipStat;
