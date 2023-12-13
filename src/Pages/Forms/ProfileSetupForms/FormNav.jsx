import React from "react";
import {UseTheme} from "../../../Utils/ThemeContext";
import linkloomicon2 from "../../../Images/linkloomicon.png";
import logo from "../../../Images/linkloomlogo.png";
import {Link} from "react-router-dom";
import ladytyping from "../../../Images/ladytyping.jpg";
const FormNav = () => {
   const {theme} = UseTheme();
   return (
      <div className=" min-h-[100vh]">
         {/* <div className="flex justify-center items-center pt-8">
              <Link to={"/"}>
                 <div className=" flex row justify-start gap-1 items-center h-auto overflow-y-hidden">
                    <img src={linkloomicon2} alt={logo} className="w-[2.4rem] h-[2.4rem] flex-none" />
                    <img src={logo} alt="" className="w-24" />
                 </div>
              </Link>
       </div> */}
         <img src={ladytyping} alt="" className="h-[100vh] w-full object-cover" />
         <div className="text-center flex justify-center" >
            {/* <h1 className="absolute bottom-10 z-40 w-full font-serif text-white text-3xl ">"Welcome"</h1> */}
         </div>
      </div>
   );
};

export default FormNav;
