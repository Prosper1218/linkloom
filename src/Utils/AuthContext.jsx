import React from "react";
import {useContext, useState, createContext, useEffect} from "react";
import LoaderC from "../LayoutFile/LoaderC";
import {Navigate, useNavigate} from "react-router";
import localforage from "localforage";
import {auth} from "../firebase";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
//
//
export const USERContext = createContext();
export const ThemeContext = createContext();
//
const AuthContext = ({children}) => {
   const [User, setUser] = useState(null);
   const [loading, setLoading] = useState(true);
   const navigate = useNavigate();
   const [ModalActive, setModalActive] = useState(false);
   //
   //
   // USEEFFECT
   useEffect(() => {
      const checkstatus = onAuthStateChanged(auth, (myuser) => {
         if (myuser) {
            setUser(myuser);
         } else {
            setUser(null);
         }
      });
      setLoading(false);
      return () => {
         checkstatus();
      };
   }, []);

   //SIGN IN A USER
   //SIGN IN A USER
   //SIGN IN A USER
   const SignInUser = (UserData) => {
      setLoading(true);
      signInWithEmailAndPassword(auth, UserData.Email, UserData.Password)
         .then((userCredentials) => {
            // console.log(userCredentials);
            // setUser(userCredentials.user);
            console.log(userCredentials);
         })
         .catch((error) => {
            console.log(error);
         });
      setLoading(false);
   };
   // SignUP A USER
   // SignUP A USER
   // SignUP A USER
   const SignUpUser = (UserData) => {
      setLoading(true);
      createUserWithEmailAndPassword(auth, UserData.Email, UserData.Password)
         .then((userinfo) => {
            // console.log(userinfo.user);
            setUser(userinfo);
            alert("account creation was successful, now redirecting u");
         })
         .catch((error) => {
            console.log(error);
         });

      setLoading(false);
   };

   // LOGOUT USER
   // LOGOUT USER
   // LOGOUT USER

   const Logout = async () => {
      signOut(auth)
         .then(() => {
            console.log("signed out");
         })
         .catch((error) => {
            console.log(error);
         });
   };

   // CONTEXT DATA/VALUE
   // CONTEXT DATA/VALUE
   // CONTEXT DATA/VALUE

   const ContextData = {
      User,
      SignInUser,
      SignUpUser,
      Logout,
      ModalActive,
      setModalActive,
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
