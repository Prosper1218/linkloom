import {ExitIcon, HamburgerMenuIcon} from "@radix-ui/react-icons";
import React, {useContext, useState} from "react";
import {NavLink, redirect, useNavigate} from "react-router-dom";
import logo from "../Images/linkloomicon.png";
import linkloomlogo from "../Images/linkloomlogo.png";
import linkloomicon2 from "../Images/linkloomicon2.png";
import {Links} from "../Data";
import {DpContext} from "./MainLayout";
import {UseAuth} from "../Utils/AuthContext";

const Nav = () => {
   const [NavActive, setNavActive] = useState(false);
   const {CurrentDp} = useContext(DpContext);
   const navigate = useNavigate();
   const {Logout} = UseAuth();


const handlelogout=()=>{
   Logout()
}

   const handlelinkclick = () => {
      {
         NavActive ? setNavActive(false) : null;
      }
   };

   return (
      <div>
         <div className="w-[2.4rem] h-[2.4rem] absolute top-[2px] ">
            <img src={linkloomicon2} alt="" />
         </div>
         <aside
            id="default-sidebar"
            className={`fixed bottom-0 sm:top-0 sm:left-0 z-40 w-full sm:w-[8rem] h-12 sm:h-screen translate-x-0 transition ease-in-out delay-150 bg-[#480057] overflow-y-hidden`}
            aria-label="Sidebar"
         >
            <div className="h-full overflow-y-hidden bg-rgba(73, 0, 87, 1)-800 ">
               <ul className="font-medium space-y-20">
                  <div className=" hidden sm:flex row justify-center gap-1 items-center h-auto overflow-y-hidden mt-6">
                     <img src={logo} alt={logo} className="w-[1.5rem] h-[1.5rem] flex-none" />
                     <img src={linkloomlogo} alt="" className="w-16" />
                  </div>
                  <div className=" overflow-y-hidden text-center justify-normal sm:gap-0 absolute sm:static bottom-0 sm:bottom-auto w-full sm:w-auto flex flex-row sm:flex-col sm:mt-40 items-center sm:space-y-5 h-12 sm:h-auto gap-0 border-t-[1px] border-white border-solid sm:border-none">
                     {Links.map((items) => {
                        const {id, name, icon, to} = items;
                        return (
                           <NavLink
                              className={({isActive, isPending}) => (isActive ? "active-link" : null)}
                              onClick={handlelinkclick}
                              // className="flex flex-row gap-2 w-full pl-4 text-xs text-white "
                              key={id}
                              to={to}
                           >
                              <div className="w-full sm:w-auto  h-full sm:h-auto flex justify-center items-center">
                                 {icon ? <img src={icon} alt={name} className="w-7 sm:w-5 h-7 sm:h-5 object-cover" /> : ""}
                              </div>
                              <span className="hidden sm:block text-white font-sans"> {name}</span>
                           </NavLink>
                        );
                     })}

                     <div className="absolute bottom-0 h-36 w-full hidden sm:block">
                        <button onClick={() => navigate("/Profile")} className="w-[1.7rem] h-[1.7rem] object-cover">
                           <img src={CurrentDp} alt="profile-picture" className="w-full h-full object-cover rounded-full" />
                        </button>
                        <div className="">
                           <button className=" rotate-180 h-6 overflow-hidden" type="button" onClick={handlelogout}>
                              <ExitIcon color="white" className=" scale-110 " />
                           </button>
                        </div>
                     </div>
                  </div>
               </ul>
            </div>
         </aside>
      </div>
   );
};

export default Nav;
