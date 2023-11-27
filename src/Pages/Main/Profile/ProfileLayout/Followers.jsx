import React, {useState} from "react";
import {followers, followin} from "../../../../Data";
import Message2 from "../../../../Images/Message2.png";

const Followers = () => {
   const [List, setList] = useState(followers);
   const removeperson = (id) => {
      console.log(id);
      const newlist = List.filter((peeps) => peeps.id !== id);
      setList(newlist);
   };

   const handleFollow = () => {
      alert("Followed");
   };
   return (
      <div>
         <div className="space-y-3 mt-3">
            {List.length > 0 ? (
               <>
                  {List.map((person) => {
                     // const {id, name, status, when, profile, following} = person;
                     return (
                        <div key={person.id} className="flex gap-2 items-center">
                           <div className=" sm:w-9 sm:h-9  w-7 h-7 bg-[#480057] rounded-full">
                              <img src={person.profile} alt={person.name} className="w-full h-full object-cover" />
                           </div>
                           <div className="grow flex">
                              <div className="grow leading-3 overflow-y-hidden">
                                 <p className="text-[70%] text-[#A303A0] font-bold capitalize overflow-y-hidden">
                                    {person.name} .{" "}
                                    <span>
                                       {person.following ? (
                                          ""
                                       ) : (
                                          <button className=" text-[73%] text-[#fbb03b] capitalize " onClick={() => handleFollow(person.id)}>
                                             follow
                                          </button>
                                       )}
                                    </span>
                                 </p>
                                 <p className="text-[58%] text-[#A303A0] overflow-y-hidden"> {person.status ? person.status : `last seen ${person.when}`}</p>
                              </div>
                              <div className="flex justify-center items-center gap-2">
                                 <button className=" w-6 h-6 ">
                                    <img src={Message2} alt="messageicon" className="w-full h-full object-cover" />
                                 </button>
                                 <button
                                    onClick={() => removeperson(person.id)}
                                    className="text-[50%] bg-[#480057] text-white px-1 py-1 text-center capitalize focus:outline-none outline-none border-none rounded-sm mr-1"
                                 >
                                    remove
                                 </button>
                              </div>
                           </div>
                        </div>
                     );
                  })}
               </>
            ) : (
               <p className="text-center text-[#A303A0] font-bold text-sm"> nobody follows you</p>
            )}
         </div>
      </div>
   );
};

export default Followers;
