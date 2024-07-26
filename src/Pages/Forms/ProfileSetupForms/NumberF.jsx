import React, {useRef} from "react";
import {UseTheme} from "../../../Utils/ThemeContext";
import linkloomicon2 from "../../../Images/linkloomicon2.png";
import logo from "../../../Images/linkloomlogosec.png";
import {Link, useNavigate, useOutletContext} from "react-router-dom";

const NumberF = () => {
   const {theme} = UseTheme();
   const navigate = useNavigate();
   const numberref = useRef();
   const {setnumber} = useOutletContext();
   const handlesubmit = (e) => {
      e.preventDefault();
      const num = numberref.current.Number.value;
      setnumber(num);
      if (num) {
         setTimeout(() => {
            navigate("/setup/Bio");
         }, 1300);
      } else {
         alert("Please enter a valid number");
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
            className="motserrat font-semibold text-3xl capitalize text-center tracking-[0] leading-[normal] whitespace-nowrap mt-[13rem] pb-4"
            style={{color: theme === "dark" ? "#F7F7F8" : "#480057"}}
         >
            Generating your profile
            <p className="text-xs pt-2 sora" style={{color: theme === "dark" ? "#F7F7F8" : "#222222"}}>
               Phone Number
            </p>
         </h4>
         <div className="flex justify-center px-3">
            <div className=" w-[500px]">
               <form className="grid gap-0 sm:gap-3 grid-cols-1 sora" ref={numberref}>
                  <input
                     type="Number"
                     name="Number"
                     id="Number"
                     className={`w-full h-[2.8rem] rounded-[4px] focus:outline-none bg-transparent pl-4 text-xs mb-3`}
                     style={{color: theme === "dark" ? "#F7F7F8" : "#222222", border: theme === "dark" ? "0.5px solid #F7F7F8 " : "0.5px solid #222222 "}}
                     placeholder="Number..."
                     required
                  />
               </form>
               <button className="float-right h-[2.8rem] montserrat rounded-[4px] w-24 bg-[#480057] capitalize text-xs font-serif text-white" onClick={handlesubmit}>
                  Next
               </button>
            </div>
         </div>
      </div>
   );
};

export default NumberF;
