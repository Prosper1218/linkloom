import React from "react";
import {useContext, useState, createContext} from "react";
import {account} from "../appwriteConfig";
//
//
export const USERContext = createContext();
const AuthContext = ({children}) => {
   const [User, setUser] = useState(null);
   const [Loading, setLoading] = useState(false);
   //
   //
   // TO SIGN OUR USER IN
   const SignInUser = async (UserData) => {
      setLoading(true);
      try {
         const response = await account.createEmailSession(UserData.Email, UserData.Password);
         const AccountData = await account.get();
         setUser(true)
      } catch (error) {

         //     alert('account does not exist pls sign up')
         console.log("error");
      }
      setLoading(false);
   };

   const ContextData = {
      User,
      SignInUser,
      setUser
   };
   return (
      <>
         <USERContext.Provider value={ContextData}>{Loading ? <p>LOADING...</p> : children}</USERContext.Provider>
      </>
   );
};

export const UseAuth = () => {
   return useContext(USERContext);
};

export default AuthContext;
