import React from "react";
import {useContext, useState, createContext, useEffect} from "react";
import {account} from "../appwriteConfig";
import {ID} from "appwrite";
import LoaderC from "../LayoutFile/LoaderC";
import Alert from "../LayoutFile/Alert";
import {Navigate, useNavigate} from "react-router";
//
//
export const USERContext = createContext();
const AuthContext = ({children}) => {
   const [User, setUser] = useState(null);
   const [loading, setLoading] = useState(true);
   const [EditedDetails, setEditedDetails] = useState(null);
   const navigate = useNavigate();
   //
   //
   // check user status
   useEffect(() => {
      // checkUserStatus();
      setLoading(false);
      localStorage.removeItem("userdata")
   }, []);

   //
   //
   // TO SIGN OUR USER IN
   const SignInUser = async (UserData) => {
      setLoading(true);
      try {
         const response = await account.createEmailSession(UserData.Email, UserData.Password);
         const AccountData = await account.get();
         setUser(AccountData);
      } catch (error) {
         //     alert('account does not exist pls sign up')
         console.log("error");
      }
      setLoading(false);
   };
   //
   //
   //
   // Sign Up A User
   const SignUpUser = async (UserData) => {
      console.log(UserData.Name, UserData.Password, UserData.Email);
      setLoading(true);
      try {
         const response = await account.create(ID.unique(), UserData.Email, UserData.Password, UserData.Name);
         console.log(response);
         await account.createEmailSession(UserData.Email, UserData.Password);
         const AccountDetails = account.get();
         setUser(AccountDetails);
      } catch (error) {
         console.log(error, "check details and try again");
      }
      setLoading(false);
   };
   //
   //
   // Check uSer status
   const checkUserStatus = async () => {
      setLoading(true);
      try {
         let AccountData = account.get("current");
         setUser(AccountData);
      } catch (error) {
         console.log("error");
         setUser(null);
         navigate("/SignIn");
         return null
      }
      
      setLoading(false);
   };
   const SetUpEdit = async (editDetails) => {
      try {
         // const AccountData = account.get("current");
         // setEditedDetails(editDetails);
         navigate("/");
         localStorage.setItem('userinfo',JSON.stringify(editDetails))
         // const info = localStorage.getItem('userdata.Lastname')
         // setEditedDetails(info)

      } catch (error) {
         console.log("error");
      }
      // console.log(editDetails);
   };
   const Logout = async () => {
      await account.deleteSession("current");
      setUser(null);
      navigate("/Signin");
      console.log("signed out");
      localStorage.setItem("cookieFallback")
   };

   const ContextData = {
      User,
      SignInUser,
      SignUpUser,
      SetUpEdit,
      EditedDetails,
      Logout,
   };
   return (
      <>
         <USERContext.Provider value={ContextData}>{loading ? <LoaderC /> : children}</USERContext.Provider>
      </>
   );
};

export const UseAuth = () => {
   return useContext(USERContext);
};

export default AuthContext;
