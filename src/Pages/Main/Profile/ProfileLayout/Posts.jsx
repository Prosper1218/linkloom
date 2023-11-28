import React, {useContext} from "react";
import {UserPosts} from "../../../../Data";
import {DpContext} from "../../../../LayoutFile/MainLayout";
import {HamburgerMenuIcon} from "@radix-ui/react-icons";
import threedots from "../../../../Images/threedots.png";
import Loveicon from "../../../../Images/Loveicon.png";
import commenticon from "../../../../Images/commenticon.png";
import { UseAuth } from "../../../../Utils/AuthContext";

const Posts = () => {
   const {CurrentDp} = useContext(DpContext);
   const {User} = UseAuth()
   return (
      <div className="space-y-2 mx-2 sm:mx-4">
         {UserPosts.map((Pos) => {
            const {id, postimage, time, caption, likes, Comments, poster} = Pos;
            return (
               <div key={id} className=" border-b-[0.5px]  border-gray border-solid py-3">
                  <div className="flex gap-1 mb-1">
                     <div className="w-[2.5rem] h-[2.5rem] object-cover">
                        <img src={CurrentDp} alt="dp" className="w-full h-full object-cover rounded-full" />
                     </div>
                     <div className="flex justify-between grow items-center">
                        <div className="leading-4">
                           <p className="text-xs font-bold text-[#490057]">{User.name}</p>
                           <p className="text-[50%] text-[#A303A0] ">{time}</p>
                        </div>
                        <div>
                           <img src={threedots} alt="" className="w-4" />
                        </div>
                     </div>
                  </div>
                  <div className="h-[13rem] rounded-lg object-cover mb-1">
                     <img src={postimage} alt="postimg" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex gap-1 items-center justify-start mb-2">
                     <p className="text-xs font-bold text-[#490057]">{User.name}</p>
                     <p className="text-[55%] text-[#490057] pt-[0.21rem]">{caption}</p>
                  </div>
                  <div className="flex justify-start items-center gap-2">
                     <div className="flex justify-start gap-1 items-center">
                        <img src={Loveicon} alt="loveicon" className=" w-4 h-4" />
                        <p className="text-[50%] text-[#490057]">{likes}</p>
                     </div>
                     <div className="flex justify-start gap-1 items-center">
                        <img src={commenticon} alt="commenticon" className=" w-4 h-4" />
                        <p className="text-[50%] text-[#490057]">{Comments}</p>
                     </div>
                  </div>
               </div>
            );
         })}
      </div>
   );
};

export default Posts;
