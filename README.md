# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh















import {Cross1Icon, ExitIcon, HamburgerMenuIcon} from "@radix-ui/react-icons";
import React, {useContext, useState} from "react";
import {Link, NavLink, redirect, useNavigate} from "react-router-dom";
import logo from "../Images/subtract.png";
import {Links} from "../Data";
import {DpContext} from "./MainLayout";

const Nav = () => {
   const [NavActive, setNavActive] = useState(false);
   const {CurrentDp} = useContext(DpContext);
   const navigate = useNavigate();
   const handlelinkclick = () => {
      {
         NavActive ? setNavActive(false) : null;
      }
   };

   return (
      <div>
         {/* <button
            onClick={() => setNavActive(true)}
            data-drawer-target="default-sidebar"
            data-drawer-toggle="default-sidebar"
            aria-controls="default-sidebar"
            type="button"
            className="inline-flex items-center p-2 text-sm rounded-sm sm:hidden focus:outline-none bg-[#490057]"
         >
            <HamburgerMenuIcon color="white" />
         </button> */}
         <Hamburgericon setNav={setNavActive} />

         <aside
            id="default-sidebar"
            className={`fixed top-0 left-0 z-40 w-[10rem] sm:w-[8rem] h-screen translate-x-[-13rem] sm:translate-x-0 transition ease-in-out delay-150 bg-[#490057]
         ${NavActive ? "translate-x-[0px]" : ""}`}
            aria-label="Sidebar"
            style={{border:"1px solid blue"}}
         >
            <div className="h-full overflow-y-auto bg-rgba(73, 0, 87, 1)-800 " style={{border:"1px solid red"}}>
               <div className=" flex justify-end w-full">
                  <button className="inline-flex items-center p-2 ms-3 text-sm sm:hidden focus:outline-none rounded-sm" type="button">
                     <Cross1Icon className="float-right" onClick={() => setNavActive(false)} color="white" />
                  </button>
               </div>
               <ul className="font-medium mt-8 space-y-20">
                  <div className=" flex row justify-center gap-1 mt-0 items-center h-auto overflow-y-hidden ">
                     <img src={logo} alt={logo} className="w-[1.15rem] h-[1.1rem] flex-none" />{" "}
                     <p className="text-white font-thin font-nunito leading-none text-sm overflow-y-hidden">3MM</p>
                  </div>
                  <div className="text-center flex flex-col mt-40 items-center space-y-5">
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
                              <img src={icon} alt={name} className="w-4 h-4 " /> {name}
                           </NavLink>
                        );
                     })}

                     <div className="absolute bottom-0 h-32 w-full">
                        <button onClick={() => navigate("/Profile")} className="w-[1.7rem] h-[1.7rem] object-cover">
                           <img src={CurrentDp} alt="profile-picture" className="w-full h-full object-cover rounded-full" />
                        </button>
                        <div className="">
                           <button className=" rotate-180 h-6 overflow-hidden" type="button">
                              <ExitIcon color="white" className=" scale-110 "/>
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

const Hamburgericon = ({setNav}) => {
   return (
      <div>
         <button
            onClick={() => setNav(true)}
            data-drawer-target="default-sidebar"
            data-drawer-toggle="default-sidebar"
            aria-controls="default-sidebar"
            type="button"
            className=" items-center p-1 text-sm rounded-sm sm:hidden focus:outline-none bg-[#490057] absolute top-1 ml-2"
         >
            <HamburgerMenuIcon color="white" />
         </button>
      </div>
   );
};

export default Nav;
