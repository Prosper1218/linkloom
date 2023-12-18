import React from "react";
import {UseTheme} from "../../../../Utils/ThemeContext";
import {Link, NavLink} from "react-router-dom";
import skills from "../../../../Images/skills.png";
import themes from "../../../../Images/themes.png";
import shield from "../../../../Images/shield.png";
import mailing from "../../../../Images/mailing.png";
import notification from "../../../../Images/notification.png";

const SNav = () => {
   const {theme} = UseTheme();
   const links = [
      // {id: 6, name: "Settings", to: "/Settings"},
      {id: 1, name: "account", to: "/Settings/", icon: skills},
      {id: 2, name: "appearance", to: "/Settings/Appearance", icon: themes},
      {id: 3, name: "Security", to: "/Settings/Password&Security", icon: shield},
      {id: 4, name: "messages", to: "/Settings/Messages", icon: mailing},
      {id: 5, name: "notification", to: "/Settings/Notification", icon: notification},
   ];
   return (
      <div className="w-full sm:w-48 h-10 item-center sm:min-h-[100vh] flex justify-center ">
         <div
            className=" h-full sm:h-auto flex flex-row gap-2 justify-center sm:justify-normal sm:flex-col items-center text-[60%] sm:text-xs w-full sm:space-y-2 sm:pt-2 overflow-y-hidden sm:pr-4"
            style={{color: theme === "dark" ? "white" : "black", backgroundColor: theme === "dark" ? "" : "#e0e0e0"}}
         >
            {links.map((items) => {
               const {id, name, to, icon} = items;
               return (
                  <NavLink key={id} to={to || null} className={({isActive, isPending}) => (isActive ? "activeSettings-link" : null)} id="slinks">
                     {/* <span className=" hidden sm:block"> */}
                        <img src={icon} alt={icon} className="  w-4 h-4" />
                     {/* </span> */}
                    <span className="hidden sm:block"> {name}</span>
                  </NavLink>
               );
            })}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
         </div>
      </div>
   );
};

export default SNav;
