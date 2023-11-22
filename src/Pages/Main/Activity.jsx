import React, {useContext, useState} from "react";
import {DpContext} from "../../LayoutFile/MainLayout";

const Activity = () => {
   const {CurrentDp} = useContext(DpContext);
   const [Dpchange, setDpchange] = useState(false);
   const [Getactivity, setGetactivity] = useState("");
   const [Addactivity, setAddactivity] = useState({});

   const handleadd = () => {
     //  console.log(Getactivity);
      setAddactivity(Getactivity)
      console.log(Addactivity)
   };
   return (
      <div>
         <div className="border ml-[2.1rem] mt-1 sm:ml-0 flex justify-between items-center bg-[#F7F7F8]">
            <h1 className="font-sans font-bold text-[#A303A0] text-lg">Activity</h1>
            <div className="w-[2.5rem] h-[2.5rem] object-cover" style={{border: "1px solid red"}}>
               <img src={CurrentDp} alt="" className="w-full h-full object-cover rounded-full" />
            </div>
         </div>
         <input type="text" name="input" id="todo" value={Getactivity} onChange={(e) => setGetactivity(e.target.value)} /> <button onClick={handleadd}>add</button> <br />
      
      </div>
   );
};

export default Activity;
