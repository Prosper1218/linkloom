import {EyeClosedIcon, EyeOpenIcon} from "@radix-ui/react-icons";
import React, {useEffect, useRef} from "react";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

const SignUp = () => {
   const [ShowPassword, setShowPassword] = useState(true);
   const [seepass, setseepass] = useState(true);
   const [Disabled, setDisabled] = useState(true);
   const navigate = useNavigate();
   const Password1ref = useRef();
   const Password2ref = useRef();
   const [Password1length, setPassword1length] = useState(true);
   const [ThemPassMatch, setThemPassMatch] = useState(true);

   const togglepassword = () => {
      setShowPassword(!ShowPassword);
   };

   const handlesubmit = (e) => {
      e.preventDefault();

      setTimeout(() => {
         navigate("/Home");
      }, 1500);
   };
   const handlepassword1change = () => {
      {
         Password1ref.current.value.length > 5 ? setPassword1length(true) : setPassword1length(false);
      }
   };
   const handlepassword2change = () => {
      if (Password2ref.current.value !== Password1ref.current.value) {
         setThemPassMatch(false);
         setDisabled(true);
      } else {
         setThemPassMatch(true);
         setDisabled(false);
      }
   };

   return (
      <div>
         <div className=" w-full min-h-[100vh] flex flex-row justify-center text-center px-4 ">
            <div className=" w-full sm:w-[400px] h-[350px] text-white box mt-52 ">
               <h4 className=" [font-family:'Inter-Bold',Helvetica] font-semibold text-[#000000] text-[26px] tracking-[0] leading-[normal] whitespace-nowrap pb-6 mt-10">
                  Sign Up !
               </h4>
               <form action="" className="px-4 relative">
                  <input
                     type="text"
                     name="Email"
                     id="Email"
                     className="w-full h-9 border-[0.5px] text-black border-black border-solid focus:outline-none rounded-md bg-transparent pl-4 text-xs mb-5"
                     placeholder="Email..."
                     required
                  />
                  <input
                     type={ShowPassword ? "password" : "text"}
                     name="Password"
                     id="Password"
                     className="w-full h-9 border-[0.5px] text-black border-black border-solid focus:outline-none rounded-md bg-transparent pl-4 text-xs relative"
                     placeholder="Password..."
                     ref={Password1ref}
                     onChange={handlepassword1change}
                  />
                  <button type="button" className="absolute top-[4.4rem] right-8" onClick={togglepassword}>
                     {ShowPassword ? <EyeClosedIcon /> : <EyeOpenIcon />}
                  </button>
                  <div className=" text-left text-xs font-thin pl-2 text-black h-5">{Password1length ? "" : <p className="text-red-600">Password must be at least 6 words!</p>}</div>
                  <input
                     type={seepass ? "password" : "text"}
                     name=" confirm Password"
                     id="confirm Password"
                     className="w-full h-9 border-[0.5px] text-black border-black border-solid focus:outline-none rounded-md bg-transparent pl-4 text-xs relative"
                     placeholder="Confirm Password..."
                     ref={Password2ref}
                     onChange={handlepassword2change}
                  />
                  <button type="button" className="absolute top-[8rem] right-8">
                     {ShowPassword ? <EyeClosedIcon /> : <EyeOpenIcon />}
                  </button>
                  <div className=" text-left text-xs font-thin h-5 pl-2 text-black">{ThemPassMatch ? "" : <p className="text-red-600">Passwords don't match!</p>}</div>
                  <button
                     disabled={Disabled}
                     type="submit"
                     className="w-full h-9 rounded-md border-none text-[55%] items-center [font-family:'Inter-Bold',Helvetica] bg-[#490057] text-white"
                     onClick={handlesubmit}
                  >
                     SIGN UP
                  </button>
               </form>
            </div>
         </div>
      </div>
   );
};

export default SignUp;
