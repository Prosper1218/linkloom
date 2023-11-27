import React, {useEffect, useRef} from "react";
import {Link, redirect} from "react-router-dom";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Hidei from "../../Images/Hidei.png";
import Seei from "../../Images/Seei.png";
import { UseAuth } from "../../Utils/AuthContext";

const SignIn = () => {
   const [ShowPassword, setShowPassword] = useState(true);
   const navigate = useNavigate();
   const passwordref = useRef();
   const [PasswordLength, setPasswordLength] = useState(true);
   const SignInFormref = useRef()
   const {SignInUser,User,setUser} = UseAuth()

   const togglepassword = () => {
      setShowPassword(!ShowPassword);
   };

   const handlesubmit = (e) => {
      e.preventDefault();
      const UserEmail = SignInFormref.current.Email.value
      const UserPassword = SignInFormref.current.Password.value
      const UserData = {UserEmail,UserPassword}
      SignInUser(UserData)

   };
   const handlechange = () => {
      // console.log(passwordref.current.value)
      if (passwordref.current.value.length < 5) {
         setPasswordLength(false)
      } else {
         setPasswordLength(true)
      }
   };
   useEffect(() => {
   if (User) {
      navigate("/")
   }
   console.log(User)
   }, [])
   

   return (
      <div className=" w-full min-h-[100vh] flex flex-row justify-center text-center px-4 ">
         <div className=" w-full sm:w-[380px] h-[350px] text-white box mt-52 ">
            <h4 className=" [font-family:'Inter-Bold',Helvetica] font-semibold text-[#000000] text-[26px] tracking-[0] leading-[normal] whitespace-nowrap pb-6 mt-10">
               Welcome Back !
            </h4>
            <form action="" className="px-4 relative" ref={SignInFormref} onSubmit={handlesubmit}>
               <input
                  type="text"
                  name="Email"
                  id="Email"
                  className="w-full h-8 border-[0.5px] text-black border-black border-solid focus:outline-none rounded-md bg-transparent pl-4 text-xs mb-6"
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
               <div className=" text-left text-xs font-thin pl-2 text-black h-5">
                  {PasswordLength ? "" : <p className="text-red-600">Password must be at least 6 characters!</p>}
               </div>
               <button type="button" className="absolute top-[3.9rem] right-8" onClick={togglepassword}>
                  {/* {ShowPassword ? <EyeNoneIcon /> : <EyeOpenIcon />} */}
                  <img src={ShowPassword ? Hidei : Seei} alt="hide/see icon" className="w-5" />
               </button>
               <button className="w-full h-8 rounded-md border-none text-[55%] items-center [font-family:'Inter-Bold',Helvetica] bg-[#490057] text-white">
                  LOGIN
               </button>{" "}
               <p className=" text-left text-xs font-thin mt-1 mb-4 pl-2 text-black">
                  don't have an account? <Link to={"/SignUp"}>Sign up</Link>
               </p>
            </form>
         </div>
      </div>
   );
};

export default SignIn;
