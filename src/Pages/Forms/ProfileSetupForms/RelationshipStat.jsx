import React from "react";
import {UseTheme} from "../../../Utils/ThemeContext";
import linkloomicon2 from "../../../Images/linkloomicon2.png";
import logo from "../../../Images/linkloomlogosec.png";
import {Link, useNavigate, useOutletContext} from "react-router-dom";
import {useRef} from "react";

const RelationshipStat = () => {
   const {theme} = UseTheme();
   const navigate = useNavigate();
   const {setrelationshipstatus} = useOutletContext();
   const relationshipref = useRef();

   const handlesubmit = (e) => {
      e.preventDefault();
      setrelationshipstatus(relationshipref.current.relationshipstatus.value);
      setTimeout(() => {
         navigate("/setup/Number");
      }, 1300);
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
            <p className="text-xs pt-2"     style={{color: theme === "dark" ? "#F7F7F8" : "#480057"}}>tell us your Relationship Status</p>
         </h4>
         <div className="flex justify-center px-5">
            <div className=" w-[500px]">
               <form className="grid gap-0 sm:gap-3 grid-cols-1" ref={relationshipref}>
                  <select
                     name="relationshipstatus"
                     id="relationshipstatus"
                     className={`w-full h-9 focus:outline-none bg-transparent pl-4 text-xs mb-3`}
                     style={{color: theme === "dark" ? "#F7F7F8" : "#222222", border: theme === "dark" ? "0.5px solid #F7F7F8 " : "0.5px solid #222222 "}}
                  >
                     <option value="Single">Single</option>
                     <option value=" in a relationship">in a relationship</option>
                     <option value="Married">Married</option>
                  </select>
               </form>
               <button className="float-right h-8 w-24 bg-[#480057] capitalize text-xs text-white font-serif" onClick={handlesubmit}>
                  next
               </button>
            </div>
         </div>
      </div>
   );
};

export default RelationshipStat;
