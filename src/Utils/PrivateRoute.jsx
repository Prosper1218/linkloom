import React from "react";
import {Navigate, Outlet} from "react-router";
import {UseAuth} from "./AuthContext";

const PrivateRoute = (children) => {
   const {User} = UseAuth();
   return <div>{User ? <Outlet /> : <Navigate to={"SignIn"} />}</div>;
};

export default PrivateRoute;
