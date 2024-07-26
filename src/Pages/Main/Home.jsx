import React, {useContext, useEffect} from "react";
import {DpContext} from "../../LayoutFile/MainLayout";
import {UseTheme} from "../../Utils/ThemeContext";
import {UseAuth} from "../../Utils/AuthContext";
useContext;

const Home = () => {
   const {CurrentDp} = useContext(DpContext);
   const {theme} = UseTheme();
   const {User} = UseAuth();
   //    {Math.random().toString().slice(3,7)}
   useEffect(() => {
      
   }, [User]);

   return (
      <div className="min-h-[90vh]" style={{backgroundColor: theme ? "#2222" : "#F7F7F8", color: theme === "dark" ? "#F7F7F8" : "#2222"}}>
         <div className=" ml-[2.4rem] mt-1 sm:ml-0 flex justify-between items-start">
            <h1 className="font-sans font-bold text-[#A303A0] text-md sm:text-lg">Home</h1>
            <div className="w-[2.5rem] h-[2.5rem] object-cover ">
               <img src={CurrentDp} alt="" className="w-full h-full object-cover rounded-full" />
            </div>
         </div>

         <p className="text-3xl">please navigate to the profile page !!</p>
      </div>
   );
};

export default Home;
