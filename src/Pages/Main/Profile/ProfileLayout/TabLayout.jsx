import React, {useState} from "react";
import Posts from "../ProfileLayout/Posts";
import Followers from "../ProfileLayout/Followers";
import Following from "../ProfileLayout/Following";
import {NavLink} from "react-router-dom";
import {followin} from "../../../../Data";
import {followers} from "../../../../Data";
import {UserPosts} from "../../../../Data";

const TabLayout = () => {
   const [ActiveTab, setActiveTab] = useState(<Posts />);

   const Links = [
      {
         id: 1,
         name: "Posts",
         setto: <Posts />,
         len: UserPosts.length,
      },
      {
         id: 2,
         name: "Followers",
         setto: <Followers />,
         len: followers.length,
      },
      {
         id: 3,
         name: "Following",
         setto: <Following />,
         len: followin.length,
      },
   ];
   return (
      <div className="mx-1 pb-6 pt-2">
         <div className="flex w-[100%] gap-4 justify-start py-2 border-b-[0.5px] mx-4  border-gray border-solid " id="tabnav">
            {Links.map((items) => {
               const {id, name, setto, to, len} = items;
               return (
                  <NavLink key={id} onClick={() => setActiveTab(setto)} className="overflow-y-hidden flex gap-1">
                     {name} <span className="bg-red-600 rounded-full text-white w-4 h-4 items-center text-center justify-center flex text-[60%]">{len}</span>
                  </NavLink>
               );
            })}
         </div>
         <section >{ActiveTab}</section>
      </div>
   );
};

export default TabLayout;
