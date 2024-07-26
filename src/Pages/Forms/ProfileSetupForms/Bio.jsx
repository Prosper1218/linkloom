import React, {useState} from "react";
import {UseTheme} from "../../../Utils/ThemeContext";
import linkloomicon2 from "../../../Images/linkloomicon2.png";
import logo from "../../../Images/linkloomlogosec.png";
import {Link, useNavigate, useOutletContext} from "react-router-dom";
import {useRef} from "react";
import {store} from "../../../firebase";
import {doc, setDoc} from "firebase/firestore";
import {UseAuth} from "../../../Utils/AuthContext";
import Alert from "../../../LayoutFile/Alert";
import AlertforSetup from "../../../LayoutFile/AlertforSetup";

const RelationshipStat = () => {
   const {theme} = UseTheme();
   const navigate = useNavigate();
   const [Alerttrue, setAlerttrue] = useState(false);
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
            Bio: BIO,
         })
            .then(() => {
               setAlerttrue(true);
            })
            .catch((error) => {
               console.log(error);
            });
      } else {
         alert("please fill the form");
      }
   };

   const handlecontinue = () => [navigate("/")];

   return (
      <div className="min-h-[100vh]" style={{backgroundColor: theme === "dark" ? "#222222" : "#F7F7F8"}}>
         {Alerttrue ? <AlertforSetup Act={"Profile setup successful!"} er={false} handlecontinue={handlecontinue} /> : null}
         <div className="justify-between flex absolute">
            <Link to={"/"}>
               <div className=" flex row justify-start gap-1 items-center h-auto overflow-y-hidden pl-4 pt-4">
                  <img src={linkloomicon2} alt={logo} className="w-[2.5rem] h-[2.5rem] flex-none" />
                  <img src={logo} alt="" className="w-24" />
               </div>
            </Link>
         </div>
         <h4
            className="motserrat font-semibold text-3xl capitalize text-center tracking-[0] leading-[normal] whitespace-nowrap mt-[13rem] pb-4"
            style={{color: theme === "dark" ? "#F7F7F8" : "#480057"}}
         >
            Generating your profile
            <p className="text-xs pt-2 sora" style={{color: theme === "dark" ? "#F7F7F8" : "#222222"}}>
               Short bio about yourself
            </p>
         </h4>
         <div className="flex justify-center px-3">
            <div className=" w-[500px]">
               <form className="grid gap-0 sm:gap-3 grid-cols-1 sora" ref={bioref}>
                  <input
                     type="Bio"
                     name="Bio"
                     id="Bio"
                     className={`w-full h-[2.8rem] rounded-[4px] focus:outline-none bg-transparent pl-4 text-xs mb-3`}
                     style={{color: theme === "dark" ? "#F7F7F8" : "#222222", border: theme === "dark" ? "0.5px solid #F7F7F8 " : "0.5px solid #222222 "}}
                     placeholder="Write a short bio about your self..."
                     required
                  />
               </form>
               <button className="float-right h-[2.8rem] rounded-[4px] montserrat w-24 bg-[#480057] capitalize text-xs font-serif text-white" onClick={handlesubmit}>
                  Submit
               </button>
            </div>
         </div>
      </div>
   );
};

export default RelationshipStat;
