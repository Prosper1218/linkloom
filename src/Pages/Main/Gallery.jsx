import React, {useContext} from "react";
import {DpContext} from "../../LayoutFile/MainLayout";
import {UseTheme} from "../../Utils/ThemeContext";
import {account} from "../../appwriteConfig";

const Gallery = () => {
   const {CurrentDp} = useContext(DpContext);
   const {theme} = UseTheme();

   return (
      <div  style={{backgroundColor: theme=== "dark" ? "#2222" : "#F7F7F8", color: theme === "dark" ? "#F7F7F8" : "#2222"}} >
         <div className=" ml-[2.4rem] mt-1 sm:ml-0 flex justify-between items-start">
            <h1 className="font-sans font-bold text-[#A303A0] text-md sm:text-lg">Gallery</h1>
            <div className="w-[2.5rem] h-[2.5rem] object-cover">
               <img src={CurrentDp} alt="" className="w-full h-full object-cover rounded-full" />
            </div>
         </div>
         {/*  */}
         <div>
            <h3 className="float-left pl-2 text-1xl font-sans mb-1" style={{color: theme === "dark" ? "white" : "dark"}}>
               Profile Pictures
            </h3>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 ">
            <div style={{border:theme === "dark"? "1px solid white" :"1px solid black", height: "10rem"}}></div>
            <div style={{border:theme === "dark"? "1px solid white" :"1px solid black", height: "10rem"}}></div>
            <div style={{border:theme === "dark"? "1px solid white" :"1px solid black", height: "10rem"}}></div>
         </div>
         <br />
         <div>
            <h3 className="float-left pl-2 text-1xl font-sans mb-1" style={{color: theme === "dark" ? "white" : "dark"}}>
               Cover Photos
            </h3>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 ">
            <div style={{border:theme === "dark"? "1px solid white" :"1px solid black", height: "10rem"}}></div>
            <div style={{border:theme === "dark"? "1px solid white" :"1px solid black", height: "10rem"}}></div>
            <div style={{border:theme === "dark"? "1px solid white" :"1px solid black", height: "10rem"}}></div>
         </div>
         <br />
         <div>
            <h3 className="float-left pl-2 text-1xl font-sans mb-1" style={{color: theme === "dark" ? "white" : "dark"}}>
               Posts
            </h3>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 ">
            <div style={{border:theme === "dark"? "1px solid white" :"1px solid black", height: "10rem"}}></div>
            <div style={{border:theme === "dark"? "1px solid white" :"1px solid black", height: "10rem"}}></div>
            <div style={{border:theme === "dark"? "1px solid white" :"1px solid black", height: "10rem"}}></div>
         </div>
         <br />
         <div>
            <h3 className="float-left pl-2 text-1xl font-sans mb-1" style={{color: theme === "dark" ? "white" : "dark"}}>
            All
            </h3>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 ">
            <div style={{border:theme === "dark"? "1px solid white" :"1px solid black", height: "10rem"}}></div>
            <div style={{border:theme === "dark"? "1px solid white" :"1px solid black", height: "10rem"}}></div>
            <div style={{border:theme === "dark"? "1px solid white" :"1px solid black", height: "10rem"}}></div>
            <div style={{border:theme === "dark"? "1px solid white" :"1px solid black", height: "10rem"}}></div>
            <div style={{border:theme === "dark"? "1px solid white" :"1px solid black", height: "10rem"}}></div>
            <div style={{border:theme === "dark"? "1px solid white" :"1px solid black", height: "10rem"}}></div>
         </div>
      </div>
   );
};

export default Gallery;
