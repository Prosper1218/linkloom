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

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<SignIn />}></Route>
            <Route path="/SignUp" element={<SignUp />} />
            <Route element={<MainLayout />}>
               <Route path="/Home" element={<Home />} />
               <Route path="/Profile" element={<Profile />} />
               <Route path="/Gallery" element={<Gallery />} />
               <Route path="/Settings" element={<Settings />} />
            </Route>
         </Routes>
      </BrowserRouter>
   </React.StrictMode>
);
