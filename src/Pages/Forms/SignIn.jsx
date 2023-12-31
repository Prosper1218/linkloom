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
import login from "../../Images/login.png";
import {alt} from '../../Data'

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
         <div className=" w-full h-screen flex flex-row justify-center text-center ">
            <div
               className=" w-full sm:w-[500px] h-[100vh] text-white overflow-y-hidden px-5 sm:px-6"
               // style={{backgroundColor: theme === "dark" ? "rgba(255, 255, 255, 0.03)" : "white", boxShadow: "rgba(255, 255, 255, 0.1) 0px 1px 6px"}}
            >
               <div className="left-0 right-0 flex absolute sm:left-4 sm:top-4 top-[4rem]">
                  <Link to={"/"} className="justify-center flex w-full sm:w-auto">
                     <div className=" flex row justify-start gap-1 items-center h-auto overflow-y-hidden">
                        <img src={linkloomicon2} alt={logo} className="w-[2rem] h-[2rem] flex-none" />
                        <img src={logo} alt="" className="w-20" />
                     </div>
                  </Link>
               </div>
               <div className=" justify-left text-left mb-2">
                  <h4
                     className=" [font-family:'Inter-Bold',Helvetica] font-bold text-[13px] tracking-[0] leading-[normal] whitespace-nowrap pb-2 mt-44"
                     style={{color: theme === "dark" ? "#F7F7F8" : "#222222"}}
                  >
                     Sign In
                  </h4>
                  <p className="leading-4 overflow-y-hidden text-[64%] font-serif pb-2" style={{color: theme === "dark" ? "#F7F7F8" : "#222222"}}>
                     Enter your Email and Password to Continue
                  </p>
               </div>
               <form action="" className=" relative" ref={SignInFormref} onSubmit={handlesubmit}>
                  <input
                     type="text"
                     name="Email"
                     id="Email"
                     className={`w-full h-7 border-[0.5px] focus:outline-none rounded-[3px] bg-transparent pl-4 text-[65%] mb-4`}
                     style={{color: theme === "dark" ? "#F7F7F8" : "#222222", border: theme === "dark" ? "0.5px solid #F7F7F8 " : "0.5px solid #222222 "}}
                     placeholder="Email..."
                  />
                  <input
                     type={ShowPassword ? "password" : "text"}
                     name="Password"
                     id="Password"
                     className={`w-full h-7 border-[0.5px] border-${theme ? "#F7F7F8" : "#222222"} border-solid focus:outline-none rounded-[3px] bg-transparent pl-4 text-[65%]`}
                     style={{color: theme === "dark" ? "#F7F7F8" : "#222222", border: theme === "dark" ? "0.5px solid #F7F7F8 " : "0.5px solid #222222 "}}
                     placeholder="Password..."
                     ref={passwordref}
                     onChange={handlechange}
                  />
                  <div className=" text-left text-xs font-thin pl-2 text-black h-4">
                     {PasswordLength ? "" : <p className="text-red-600 text-[80%]">Password must be at least 6 characters!</p>}
                  </div>
                  <button type="button" className="absolute top-[3.2rem] right-3 hidden sm:block px-[1px] bg-white rounded-[3px]" onClick={togglepassword}>
                     <img src={ShowPassword ? Hidei : Seei} alt="hide/see icon" className="w-[0.9rem]" />
                  </button>
                  <button className="w-full h-7 rounded-[4px] flex justify-center gap-1 border-none text-[55%] items-center [font-family:'Inter-Bold',Helvetica] bg-[#490057] text-white">
                     <span>
                        <img src={login} alt="login icon" className="w-3 h-3" />
                     </span>
                     <p className="text-white text-[55%]"> Login</p>
                  </button>{" "}
                  <p className=" text-left text-[60%] font-thin mt-1 mb-4 pl-2 font-serif" style={{color: theme === "dark" ? "#F7F7F8" : "#222222"}}>
                     don't have an account?
                     <Link to={"/SignUp"} className="underline ml-1">
                        Sign up
                     </Link>
                  </p>
               </form>
               <p className=" text-center text-[60%] font-thin mt-1 mb-4 pl-2 font-serif " style={{color: theme === "dark" ? "#F7F7F8" : "black"}}>
                  or <br />
                  Sign Up With
               </p>
               <br />
               <div className="justify-center flex gap-1 ">
                  {alt.map((items) => {
                     return (
                        <div className="border w-5 h-5 rounded-full overflow-y-hidden" key={items.id}>
                           {items.id}
                        </div>
                     );
                  })}
               </div>
            </div>
         </div>
      </div>
   );
};

export default SignIn;
