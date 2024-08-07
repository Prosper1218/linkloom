import React, {useEffect, useRef} from "react";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Hidei from "../../Images/Hidei.png";
import Seei from "../../Images/Seei.png";
import {UseAuth} from "../../Utils/AuthContext";
import LoaderC from "../../LayoutFile/LoaderC";
import logo from "../../Images/linkloomlogosec.png";
import linkloomicon2 from "../../Images/linkloomicon2.png";
import {UseTheme} from "../../Utils/ThemeContext";
import usericon from "../../Images/usericon.png";
import {alt} from "../../Data";
import "/index.css";
import Alertforsignup from "../../LayoutFile/Alertforsignup";

const SignUp = () => {
   const [seepass, setseepass] = useState(true);
   const [Disabled, setDisabled] = useState(true);
   const navigate = useNavigate();
   const Password1ref = useRef();
   const Password2ref = useRef();
   const [Password1length, setPassword1length] = useState(true);
   const [ThemPassMatch, setThemPassMatch] = useState(true);
   const SignUpRef = useRef();
   const {SignUpUser, User, signupModalActive, signuperrorModalActive, setsignuperrorModalActive} = UseAuth();
   const {theme} = UseTheme();

   // useEffect(() => {
   //    if (User) {
   //       setTimeout(() => {
   //          navigate("/setup/Names");
   //       }, 2000);
   //    }
   // }, [User]);

   const togglepassword2 = () => {
      setseepass(!seepass);
   };

   const handlesubmit = (e) => {
      e.preventDefault();
      const Name = SignUpRef.current.name.value;
      const Email = SignUpRef.current.email.value;
      const Password = SignUpRef.current.password.value;
      //

      let UserData = {Name, Email, Password};
      // console.log(UserData)
      SignUpUser(UserData);
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
      <div className="min-h-[100vh]" style={{backgroundColor: theme === "dark" ? "#222222" : "#F7F7F8"}}>
         {signupModalActive ? (
            <Alertforsignup er={true} extrastyling={"h-[110vh] sm:h-auto"} Act={"Successfully Signed Up"} linkto={"/setup/Names"} whereto={"Continue setting up your profile"} />
         ) : null}
         {signuperrorModalActive ? <Alertforsignup er={false} extrastyling={"h-[110vh] sm:h-auto"} Act={"Couldn't Sign Up email might already be in use"} /> : null}
         <div className="min-h-[100vh]">
            <div className="left-0 right-0 flex absolute sm:left-4 sm:top-4 top-[4rem]">
               <Link to={"/"} className=" justify-center flex w-full sm:w-auto">
                  <div className=" flex row justify-start gap-1 items-center h-auto overflow-y-hidden">
                     <img src={linkloomicon2} alt={logo} className="w-[2rem] h-[2rem] flex-none" />
                     <img src={logo} alt="" className="w-20" />
                  </div>
               </Link>
            </div>
            <div className=" w-full  flex flex-row justify-center text-center">
               <div className=" w-full sm:w-[450px] h-[100vh] text-white overflow-y-hidden px-3 sm:px-4">
                  <div className=" justify-left text-left mb-2">
                     <h4 className="sora font-bold text-xl tracking-[0] leading-[normal] whitespace-nowrap pb-2 mt-40" style={{color: theme === "dark" ? "#F7F7F8" : "#222222"}}>
                        Sign up
                     </h4>
                     <p className="leading-4 overflow-y-hidden text-sm sora pb-2" style={{color: theme === "dark" ? "#F7F7F8" : "#222222"}}>
                        Don't have an account ? create your account, It takes less <br /> than 5 minutes
                     </p>
                  </div>
                  <form action="" className=" relative" onSubmit={handlesubmit} ref={SignUpRef}>
                     <input
                        type="text"
                        name="name"
                        id="name"
                        className={` rounded-[3px] w-full h-[2.8rem] focus:outline-none bg-transparent pl-4 text-[65%] mb-4 `}
                        style={{color: theme === "dark" ? "#F7F7F8" : "#222222", border: theme === "dark" ? "0.5px solid #F7F7F8 " : "0.5px solid #222222 "}}
                        placeholder="Name..."
                        required
                     />
                     <input
                        type="email"
                        name="email"
                        id="email"
                        className=" rounded-[3px] w-full h-[2.8rem] focus:outline-none bg-transparent pl-4 text-[65%] "
                        style={{color: theme === "dark" ? "#F7F7F8" : "#222222", border: theme === "dark" ? "0.5px solid #F7F7F8 " : "0.5px solid #222222 "}}
                        placeholder="Email..."
                        required
                     />

                     <input
                        type={"password"}
                        name="password"
                        id="password"
                        className="mt-4 rounded-[3px] w-full h-[2.8rem] focus:outline-none bg-transparent pl-4 text-[65%] relative"
                        style={{color: theme === "dark" ? "#F7F7F8" : "#222222", border: theme === "dark" ? "0.5px solid #F7F7F8 " : "0.5px solid #222222 "}}
                        placeholder="Password..."
                        ref={Password1ref}
                        onChange={handlepassword1change}
                     />
                     <div className=" text-left text-xs font-thin pl-2 text-black h-[1.1rem]">
                        {Password1length ? "" : <p className="text-red-600 text-80%">Password must be at least 6 characters!</p>}
                     </div>
                     <input
                        type={seepass ? "password" : "text"}
                        name=" confirm Password"
                        id="confirm Password"
                        className=" rounded-[3px] w-full h-[2.8rem] focus:outline-none bg-transparent pl-4 text-[65%] relative"
                        style={{color: theme === "dark" ? "#F7F7F8" : "#222222", border: theme === "dark" ? "0.5px solid #F7F7F8 " : "0.5px solid #222222"}}
                        placeholder="Confirm Password..."
                        ref={Password2ref}
                        onChange={handlepassword2change}
                     />
                     <button type="button" className="hidden sm:block absolute top-[12.5rem] right-3 bg-white rounded-sm px-[1px]" onClick={togglepassword2}>
                        <img src={seepass ? Hidei : Seei} alt="hide/see icon" className="w-[0.9rem]" />
                     </button>
                     <div className=" text-left text-xs font-thin h-5 pl-2 ">{ThemPassMatch ? "" : <p className="text-red-600 text-[78%]">Passwords don't match!</p>}</div>

                     <button
                        disabled={Disabled}
                        type="submit"
                        style={{opacity: Disabled ? 0.7 : null}}
                        className="w-full h-[2.8rem] border-none rounded-[3px]  items-center [font-family:'Inter-Bold',Helvetica] bg-[#490057] flex justify-center gap-[1px]"
                     >
                        <span>
                           <img src={usericon} alt="signup icon" className="w-3 h-3" />
                        </span>
                        <p className="text-[50%]  text-white mt-[2px] "> Sign Up</p>
                     </button>
                     <p className=" text-left text-[80%] font-thin mt-4 mb-4 pl-2 sora " style={{color: theme === "dark" ? "#F7F7F8" : "black"}}>
                        have an account?
                        <Link to={"/SignIn"} className="underline ml-1">
                           Sign In
                        </Link>
                     </p>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SignUp;

// cloudinary
