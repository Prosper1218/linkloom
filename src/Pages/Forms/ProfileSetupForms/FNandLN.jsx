import React, {useRef} from "react";
import {UseTheme} from "../../../Utils/ThemeContext";
import linkloomicon2 from "../../../Images/linkloomicon2.png";
import logo from "../../../Images/linkloomlogosec.png";
import {Link, useNavigate, useOutletContext} from "react-router-dom";

const FNandLN = () => {
   const {theme} = UseTheme();
   const navigate = useNavigate();
   const namesref = useRef();
   const {setfirstname, setlastname} = useOutletContext();

   const handlesubmit = (e) => {
      e.preventDefault();
      // const fname = namesref.current.Firstname.value;
      // const lname = namesref.current.LastName.value;
      const name = namesref.current.Firstname.value;
      setlastname(namesref.current.LastName.value);
      setfirstname(name);
      if (name) {
         setTimeout(() => {
            navigate("/setup/YourGender");
         }, 1300);
      } else {
         alert("pls fill out the fields");
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
            style={{color: theme === "dark" ? "#F7F7F8" : "#480057"}}
         >
            let's setup your profile together!
            <p className="text-xs pt-2" style={{color: theme === "dark" ? "#F7F7F8" : "#222222"}}>
               tell us your names
            </p>
         </h4>
         <div className="flex justify-center px-5">
            <div className=" w-[500px]">
               <form className="grid gap-0 sm:gap-3 grid-cols-1 sm:grid-cols-2" ref={namesref}>
                  <input
                     type="text"
                     name="Firstname"
                     id="Firstname"
                     className={`w-full h-9 focus:outline-none bg-transparent pl-4 text-xs mb-3`}
                     style={{color: theme === "dark" ? "#F7F7F8" : "#222222", border: theme === "dark" ? "0.5px solid #F7F7F8 " : "0.5px solid #222222 "}}
                     placeholder="FirstName..."
                     required
                  />
                  <input
                     type="text"
                     name="LastName"
                     id="LastName"
                     className="w-full h-9 focus:outline-none bg-transparent pl-4 text-xs mb-3"
                     style={{color: theme === "dark" ? "#F7F7F8" : "#222222", border: theme === "dark" ? "0.5px solid #F7F7F8 " : "0.5px solid #222222 "}}
                     placeholder="LastName..."
                     required
                  />
               </form>
               <button type="submit" className="float-right h-8 w-24 bg-[#480057] capitalize text-white text-xs font-serif" onClick={handlesubmit}>
                  next
               </button>
            </div>
         </div>
      </div>
   );
};

export default FNandLN;
