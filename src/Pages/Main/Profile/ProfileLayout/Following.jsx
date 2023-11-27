import React, {useEffect, useRef, useState} from "react";
import {followin} from "../../../../Data";
import Message2 from "../../../../Images/Message2.png";

const Following = () => {
   const [List, setList] = useState(followin);

   //
   const removeperson = (id) => {
      console.log(id);
      const newlist = List.filter((peeps) => peeps.id !== id);
      setList(newlist);
   };

   // const handlechange = () => {
   //    const VAL = inputref.current.value;

   //    if (VAL < 1) {
   //       setList(List);
   //       console.log(List);
   //       console.log("hi");
   //    } else {
   //       const searchList = List.filter((people) => people.name.toLowerCase().includes(VAL.toLowerCase()));
   //       console.log(searchList);
   //       setList(searchList);
   //    }

   //    // const VAL = inputref.current.value;
   //    // const searchList = List.filter((people) => people.name.toLowerCase().includes(VAL.toLowerCase()));
   //    // if (searchList.length < 1) {
   //    //    setList(List);
   //    //    console.log("hi");
   //    // } else {
   //    //    setList(searchList);
   //    // }

   //    // console.log(searchList);
   //    // setList(searchList);
   // };

   return (
      <div className="">
         <div className="my-2 ml-4 ">
            <SearchF setList={setList} List={List} />
         </div>
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
                                 <p className="text-[70%] text-[#A303A0] font-bold capitalize overflow-y-hidden"> {person.name} </p>
                                 <p className="text-[58%] text-[#A303A0] overflow-y-hidden"> {person.status ? person.status : `last seen ${person.when}`}</p>
                              </div>
                              <div className="flex justify-center items-center gap-2 ">
                                 <button className=" w-6 h-6 ">
                                    <img src={Message2} alt="messageicon" className="w-full h-full object-cover" />
                                 </button>
                                 <button
                                    onClick={() => removeperson(person.id)}
                                    className="text-[50%] bg-[#480057] text-white px-1 py-1 text-center capitalize focus:outline-none outline-none border-none rounded-sm mr-1"
                                 >
                                    {person.following ? "unfollow" : null}
                                 </button>
                              </div>
                           </div>
                        </div>
                     );
                  })}
               </>
            ) : (
               <p className="text-center text-[#A303A0] font-bold text-sm"> You are currently following nobody</p>
            )}
         </div>
      </div>
   );
};

const SearchF = ({List, setList}) => {
   const inputref = useRef("");

   const handlechange = () => {
      const VAL = inputref.current.value;
      if (VAL.length === 0) {
         setList(List);
         console.log("empty so setlist to list");
      } else {
         const searchList = List.filter((people) => people.name.trim().toLowerCase().includes(VAL.trim().toLowerCase()));
         setList(searchList);
      }
   };

   return (
      <>
         <input
            type="text"
            name="Search"
            id="Search"
            ref={inputref}
            onChange={handlechange}
            placeholder="Search for a person"
            className=" bg-transparent border-l-0 border-r-0 border-t-0 w-[100%] outline-none p-1 text-[55%]  border-b-[#A303A0] border-[1px] border-solid"
         />
      </>
   );
};

export default Following;

// const searchList = List.filter((people) => people.name.toLowerCase().includes(Value.toLowerCase()));
