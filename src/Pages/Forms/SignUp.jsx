import {EyeClosedIcon, EyeOpenIcon} from "@radix-ui/react-icons";
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

const SignUp = () => {
   const [seepass, setseepass] = useState(true);
   const [Disabled, setDisabled] = useState(true);
   const navigate = useNavigate();
   const Password1ref = useRef();
   const Password2ref = useRef();
   const [Password1length, setPassword1length] = useState(true);
   const [ThemPassMatch, setThemPassMatch] = useState(true);
   const SignUpRef = useRef();
   const {SignUpUser, User} = UseAuth();
   const {DarkTheme} = UseTheme();
   useEffect(() => {
      if (User) {
         navigate("/ProfileSetup");
      }
   }, []);


   const togglepassword2 = () => {
      setseepass(!seepass);
   };

   const handlesubmit = (e) => {
      e.preventDefault();
      const Name = SignUpRef.current.name.value;
      const Email = SignUpRef.current.email.value;
      const Password = SignUpRef.current.password.value;
      let UserData = {Name, Email, Password};
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
      <div className="min-h-[100vh] pt-4" style={{backgroundColor: DarkTheme ? "#222222" : "F7F7F8"}}>
         <Link to={"/"}>
            <div className=" flex row justify-start gap-1 items-center h-auto overflow-y-hidden pl-4">
               <img src={linkloomicon2} alt={logo} className="w-[4rem] h-[4rem] flex-none" />
               <img src={logo} alt="" className="w-32" />
            </div>
         </Link>
         <div className=" w-full  flex flex-row justify-center text-center px-4 ">
            <div className=" w-full sm:w-[450px] h-[370px] text-white box mt-28 overflow-y-hidden ">
               <h4
                  className=" [font-family:'Inter-Bold',Helvetica] font-semibold text-[26px] tracking-[0] leading-[normal] whitespace-nowrap pb-6 mt-10"
                  style={{color: DarkTheme ? "#F7F7F8" : "#222222"}}
               >
                  Sign Up!
               </h4>
               <form action="" className="px-4 relative" onSubmit={handlesubmit} ref={SignUpRef}>
                  <div className="grid gap-0 sm:gap-3 grid-cols-1 sm:grid-cols-2">
                     <input
                        type="text"
                        name="name"
                        id="name"
                        className={`w-full h-8 focus:outline-none rounded-md bg-transparent pl-4 text-xs mb-3`}
                        style={{color: DarkTheme ? "#F7F7F8" : "#222222", border: DarkTheme ? "0.5px solid #F7F7F8 " : "0.5px solid #222222 "}}
                        placeholder="Username..."
                        required
                     />
                     <input
                        type="text"
                        name="email"
                        id="email"
                        className="w-full h-8 focus:outline-none rounded-md bg-transparent pl-4 text-xs mb-3"
                        style={{color: DarkTheme ? "#F7F7F8" : "#222222", border: DarkTheme ? "0.5px solid #F7F7F8 " : "0.5px solid #222222 "}}
                        placeholder="Email..."
                        required
                     />
                  </div>
                  <input
                     type={ "password"}
                     name="password"
                     id="password"
                     className="w-full h-8 focus:outline-none rounded-md bg-transparent pl-4 text-xs relative"
                     style={{color: DarkTheme ? "#F7F7F8" : "#222222", border: DarkTheme ? "0.5px solid #F7F7F8 " : "0.5px solid #222222 "}}
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
                     className="w-full h-8 focus:outline-none rounded-md bg-transparent pl-4 text-xs relative"
                     style={{color: DarkTheme ? "#F7F7F8" : "#222222", border: DarkTheme ? "0.5px solid #F7F7F8 " : "0.5px solid #222222"}}
                     placeholder="Confirm Password..."
                     ref={Password2ref}
                     onChange={handlepassword2change}
                  />
                  <button type="button" className="hidden sm:block absolute top-[6.3rem] right-8 bg-white rounded-sm px-[1px]" onClick={togglepassword2}>
                     <img src={seepass ? Hidei : Seei} alt="hide/see icon" className="w-[1.2rem]" />
                  </button>
                  <div className=" text-left text-xs font-thin h-5 pl-2 ">{ThemPassMatch ? "" : <p className="text-red-600 tex-[78%]">Passwords don't match!</p>}</div>
                  <button
                     disabled={Disabled}
                     type="submit"
                     style={{opacity: Disabled ? 0.7 : null}}
                     className="w-full h-8 rounded-md border-none text-[55%] items-center [font-family:'Inter-Bold',Helvetica] bg-[#490057] text-white"
                  >
                     SIGN UP
                  </button>

                  <p className=" text-left text-xs font-thin mt-1 mb-4 pl-2 " style={{color: DarkTheme ? "#F7F7F8" : "black"}}>
                     have an account?
                     <Link to={"/SignIn"} className="underline ml-1">
                        Sign In
                     </Link>
                  </p>
               </form>
            </div>
         </div>
      </div>
   );
};

export default SignUp;

// cloudinary
