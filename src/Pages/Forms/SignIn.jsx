import React, {useEffect, useRef} from "react";
import {Link, redirect} from "react-router-dom";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Hidei from "../../Images/Hidei.png";
import Seei from "../../Images/Seei.png";
import {UseAuth} from "../../Utils/AuthContext";
import Alert from "../../LayoutFile/Alert";
import logo from "../../Images/linkloomlogosec.png";
import linkloomicon2 from "../../Images/linkloomicon2.png";
import {UseTheme} from "../../Utils/ThemeContext";
import Settings from "../Main/setings/Settings";

const SignIn = () => {
   const [ShowPassword, setShowPassword] = useState(true);
   const navigate = useNavigate();
   const passwordref = useRef();
   const [PasswordLength, setPasswordLength] = useState(true);
   const SignInFormref = useRef();
   const {SignInUser, User} = UseAuth();
   const {theme} = UseTheme();
   const togglepassword = () => {
      setShowPassword(!ShowPassword);
   };
   useEffect(() => {
      if (User) {
         navigate("/");
      }
      // console.log(User);
   }, [User]);

   const handlesubmit = (e) => {
      e.preventDefault();
      const Email = SignInFormref.current.Email.value;
      const Password = SignInFormref.current.Password.value;
      const UserData = {Email, Password};
      if (UserData) {
         SignInUser(UserData);
      } else {
         return null;
      }
   };
   const handlechange = () => {
      // console.log(passwordref.current.value)
      if (passwordref.current.value.length < 5) {
         setPasswordLength(false);
      } else {
         setPasswordLength(true);
      }
   };

   return (
      <div className="min-h-[100vh] w-full" style={{backgroundColor: theme === "dark" ? "#222222" : "#F7F7F8"}}>
         <div className=" w-full h-screen flex py-8 flex-row justify-center text-center ">
            <div
               className=" w-full sm:w-[400px] h-[90vh] box sm:px-6 px-5 pt-3"
               style={{backgroundColor: theme === "dark" ? "rgba(255, 255, 255, 0.03)" : "white", boxShadow: "rgba(255, 255, 255, 0.1) 0px 1px 6px"}}
            >
               <Link to={"/"}>
                  <div className=" flex row justify-start items-center h-auto overflow-y-hidden">
                     <img src={linkloomicon2} alt={logo} className="w-[3rem] h-[3rem] flex-none" />
                     <img src={logo} alt="" className="w-28" />
                  </div>
               </Link>
               <h4
                  className=" [font-family:'Inter-Bold',Helvetica] font-semibold text-[26px] tracking-[0] leading-[normal] whitespace-nowrap pb-6 mt-40"
                  style={{color: theme === "dark" ? "#F7F7F8" : "#222222"}}
               >
                  Welcome Back !
               </h4>
               <form action="" className=" relative" ref={SignInFormref} onSubmit={handlesubmit}>
                  <input
                     type="text"
                     name="Email"
                     id="Email"
                     className={`w-full h-8 border-[0.5px] focus:outline-none rounded-md bg-transparent pl-4 text-xs mb-4`}
                     style={{color: theme === "dark" ? "#F7F7F8" : "#222222", border: theme === "dark" ? "0.5px solid #F7F7F8 " : "0.5px solid #222222 "}}
                     placeholder="Email..."
                  />
                  <input
                     type={ShowPassword ? "password" : "text"}
                     name="Password"
                     id="Password"
                     className={`w-full h-8 border-[0.5px] border-${theme ? "#F7F7F8" : "#222222"} border-solid focus:outline-none rounded-md bg-transparent pl-4 text-xs`}
                     style={{color: theme === "dark" ? "#F7F7F8" : "#222222", border: theme === "dark" ? "0.5px solid #F7F7F8 " : "0.5px solid #222222 "}}
                     placeholder="Password..."
                     ref={passwordref}
                     onChange={handlechange}
                  />
                  <div className=" text-left text-xs font-thin pl-2 text-black h-4">
                     {PasswordLength ? "" : <p className="text-red-600 text-[80%]">Password must be at least 6 characters!</p>}
                  </div>
                  <button type="button" className="absolute top-[3.37rem] right-3 hidden sm:block px-[1px] bg-white rounded-sm" onClick={togglepassword}>
                     <img src={ShowPassword ? Hidei : Seei} alt="hide/see icon" className="w-5" />
                  </button>
                  <button className="w-full h-8 rounded-md border-none text-[55%] items-center [font-family:'Inter-Bold',Helvetica] bg-[#490057] text-white">LOGIN</button>{" "}
                  <p className=" text-left text-xs font-thin mt-1 mb-4 pl-2" style={{color: theme === "dark" ? "#F7F7F8" : "#222222"}}>
                     don't have an account?
                     <Link to={"/SignUp"} className="underline ml-1">
                        Sign up
                     </Link>
                  </p>
               </form>
            </div>
         </div>
      </div>
   );
};

export default SignIn;
