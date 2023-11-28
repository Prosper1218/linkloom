import React from "react";
import {Navigate, Outlet} from "react-router";
import {UseAuth} from "./AuthContext";

const PrivateRoutesec = () => {
   const {User} = UseAuth();
   return <div>{User ? <Outlet /> : <Navigate to={"SignUp"} />}</div>;
};

export default PrivateRoutesec;
