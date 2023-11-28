import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignIn from "./Pages/Forms/SignIn.jsx";
import MainLayout from "./LayoutFile/MainLayout.jsx";
import Home from "./Pages/Main/Home.jsx";
import Profile from "./Pages/Main/Profile/Profile.jsx";
import Gallery from "./Pages/Main/Gallery.jsx";
import Settings from "./Pages/Main/Settings.jsx";
import SignUp from "./Pages/Forms/SignUp.jsx";
import Activity from "./Pages/Main/Activity.jsx";
import Messages from "./Pages/Main/Messages.jsx";
import PrivateRoute from "./Utils/PrivateRoute.jsx";
import AuthContext from "./Utils/AuthContext.jsx";
import ProfileSetUp from "./Pages/Forms/ProfileSetUp.jsx";
import PrivateRoutesec from "./Utils/PrivateRoutesec.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <BrowserRouter>
         <AuthContext>
            <Routes>
               <Route path="/SignIn" element={<SignIn />} />
               <Route path="/SignUp" element={<SignUp />} />

               <Route element={<MainLayout />}>
                  <Route path="/" element={<Home />} />
                  <Route element={<PrivateRoute />}>
                     <Route path="/Profile" element={<Profile />} />
                     <Route path="/Gallery" element={<Gallery />} />
                     <Route path="/Settings" element={<Settings />} />
                     <Route path="/Activity" element={<Activity />} />
                     <Route path="/Messages" element={<Messages />} />
                  </Route>
               </Route>
               <Route element={<PrivateRoutesec />}>
                  <Route path="/EditProfile" element={<ProfileSetUp />} />
               </Route>
            </Routes>
         </AuthContext>
      </BrowserRouter>
   </React.StrictMode>
);
