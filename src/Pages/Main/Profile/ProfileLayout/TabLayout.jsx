import React, {useState} from "react";
import Posts from "../ProfileLayout/Posts";
import Followers from "../ProfileLayout/Followers";
import Following from "../ProfileLayout/Following";
import {NavLink} from "react-router-dom";

const TabLayout = () => {
   const [ActiveTab, setActiveTab] = useState(<Posts />);

   const Links = [
      {
         id: 1,
         name: "Posts",
         setto: <Posts />,
      },
      {
         id: 2,
         name: "Followers",
         setto: <Followers />,
      },
      {
         id: 3,
         name: "Following",
         setto: <Following />,
      },
   ];
   return (
      <div className="mx-2 sm:mx-4 pb-6 pt-2">
         <div className="flex w-[100%] gap-4 justify-start py-2 border-b-[0.5px] ml-4  border-gray border-solid " id="tabnav">
            {Links.map((items) => {
               const {id, name, setto, to} = items;
               return (
                  <NavLink key={id} onClick={() => setActiveTab(setto)} className=''>
                     {name}
                  </NavLink>
               );
            })}
         </div>
         <section>{ActiveTab}</section>
      </div>
   );
};

export default TabLayout;
