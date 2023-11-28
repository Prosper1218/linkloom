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
import ProfileSetUp from "./ProfileSetUp";

const SignIn = () => {
   const [ShowPassword, setShowPassword] = useState(true);
   const navigate = useNavigate();
   const passwordref = useRef();
   const [PasswordLength, setPasswordLength] = useState(true);
   const SignInFormref = useRef();
   const {SignInUser, User} = UseAuth();

   const togglepassword = () => {
      setShowPassword(!ShowPassword);
   };
   useEffect(() => {
      if (User) {
         navigate("/");
      }
      // console.log(User);
   }, []);

   const handlesubmit = (e) => {
      e.preventDefault();
      const Email = SignInFormref.current.Email.value;
      const Password = SignInFormref.current.Password.value;
      const UserData = {Email, Password};
      if (UserData) {
         SignInUser(UserData);
      } else {
         // return null
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
      <div className="min-h-[100vh] w-full pt-4">
         <div className=" flex row justify-start gap-1 items-center h-auto overflow-y-hidden pl-4">
            <img src={linkloomicon2} alt={logo} className="w-[4rem] h-[4rem] flex-none" />
            <img src={logo} alt="" className="w-32" />
         </div>
         <div className=" w-full flex flex-row justify-center text-center px-4 ">
            <div className=" w-full sm:w-[400px] h-[350px] text-white box mt-28 ">
               <h4 className=" [font-family:'Inter-Bold',Helvetica] font-semibold text-[#000000] text-[26px] tracking-[0] leading-[normal] whitespace-nowrap pb-6 mt-10">
                  Welcome Back !
               </h4>
               <form action="" className="px-4 relative" ref={SignInFormref} onSubmit={handlesubmit}>
                  <input
                     type="text"
                     name="Email"
                     id="Email"
                     className="w-full h-8 border-[0.5px] text-black border-black border-solid focus:outline-none rounded-md bg-transparent pl-4 text-xs mb-4"
                     placeholder="Email..."
                  />
                  <input
                     type={ShowPassword ? "password" : "text"}
                     name="Password"
                     id="Password"
                     className="w-full h-8 border-[0.5px] text-black border-black border-solid focus:outline-none rounded-md bg-transparent pl-4 text-xs relative"
                     placeholder="Password..."
                     ref={passwordref}
                     onChange={handlechange}
                  />
                  <div className=" text-left text-xs font-thin pl-2 text-black h-4">
                     {PasswordLength ? "" : <p className="text-red-600 text-[80%]">Password must be at least 6 characters!</p>}
                  </div>
                  <button type="button" className="absolute top-[3.4rem] right-8" onClick={togglepassword}>
                     {/* {ShowPassword ? <EyeNoneIcon /> : <EyeOpenIcon />} */}
                     <img src={ShowPassword ? Hidei : Seei} alt="hide/see icon" className="w-5" />
                  </button>
                  <button className="w-full h-8 rounded-md border-none text-[55%] items-center [font-family:'Inter-Bold',Helvetica] bg-[#490057] text-white">LOGIN</button>{" "}
                  <p className=" text-left text-xs font-thin mt-1 mb-4 pl-2 text-black">
                     don't have an account?{" "}
                     <Link to={"/SignUp"} className="underline">
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
