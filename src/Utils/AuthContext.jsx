import React from "react";
import {useContext, useState, createContext, useEffect} from "react";
import {account} from "../appwriteConfig";
import {ID} from "appwrite";
import LoaderC from "../LayoutFile/LoaderC";
import {Navigate, useNavigate} from "react-router";
import localforage from "localforage";
//
//
export const USERContext = createContext();
export const ThemeContext = createContext();
//
const AuthContext = ({children}) => {
   const [User, setUser] = useState(null);
   const [loading, setLoading] = useState(true);
   const [EditedDetails, setEditedDetails] = useState(null);
   const navigate = useNavigate();
   //
   //
   // USEEFFECT
   useEffect(() => {
      // checkUserStatus();
      setLoading(false);
     
   }, []);

   //SIGN IN A USER
   //SIGN IN A USER
   //SIGN IN A USER
   const SignInUser = async (UserData) => {
      setLoading(true);
      try {
         const response = await account.createEmailSession(UserData.Email, UserData.Password);
         const AccountData = await account.get();
         setUser(AccountData);
      } catch (error) {
         //     alert('account does not exist pls sign up')
         alert(error);
      }
      setLoading(false);
   };
   // SignUP A USER
   // SignUP A USER
   // SignUP A USER
   const SignUpUser = async (UserData) => {
      setLoading(true);
      try {
         const response = await account.create(ID.unique(), UserData.Email, UserData.Password, UserData.Name);
         console.log(response);
         await account.createEmailSession(UserData.Email, UserData.Password);
         const AccountDetails = account.get();
         setUser(AccountDetails);
      } catch (error) {
         alert(error, "check details and try again");
      }
      setLoading(false);
   };
   // Check uSer status
   // Check uSer status
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
         return null;
      }

      setLoading(false);
   };

   // LOGOUT USER
   // LOGOUT USER
   // LOGOUT USER

   const Logout = async () => {
      await account.deleteSession("current");
      setUser(null);
      navigate("/Signin");
      console.log("signed out");
      localforage.removeItem("Details");
   };

   // CONTEXT DATA/VALUE
   // CONTEXT DATA/VALUE
   // CONTEXT DATA/VALUE

   const ContextData = {
      User,
      SignInUser,
      SignUpUser,
      EditedDetails,
      Logout,
   };

   // RETURN
   // RETURN
   // RETURN
   return (
      <>
         <USERContext.Provider value={ContextData}>{loading ? <LoaderC /> : children}</USERContext.Provider>
      </>
   );
};
// CUSTOM HOOK TO PASS THE CONTEXT
// CUSTOM HOOK TO PASS THE CONTEXT
// CUSTOM HOOK TO PASS THE CONTEXT

export const UseAuth = () => {
   return useContext(USERContext);
};

export default AuthContext;
