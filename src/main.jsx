import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignIn from "./Pages/Forms/SignIn.jsx";
import MainLayout from "./LayoutFile/MainLayout.jsx";
import Home from "./Pages/Main/Home.jsx";
import Profile from "./Pages/Main/Profile/Profile.jsx";
import Gallery from "./Pages/Main/Gallery.jsx";
import Settings from "./Pages/Main/setings/Settings.jsx";
import SignUp from "./Pages/Forms/SignUp.jsx";
import Activity from "./Pages/Main/Activity.jsx";
import Messages from "./Pages/Main/Messages.jsx";
import PrivateRoute from "./Utils/PrivateRoute.jsx";
import AuthContext from "./Utils/AuthContext.jsx";
import ProfileSetUp from "./Pages/Forms/ProfileSetUp.jsx";
import PrivateRoutesec from "./Utils/PrivateRoutesec.jsx";
import ThemeContext from "./Utils/ThemeContext.jsx";
import AccountS from "./Pages/Main/setings/SettingsLayout/AccountS.jsx";
import ThemeS from "./Pages/Main/setings/SettingsLayout/ThemeS.jsx";
import PassSecS from "./Pages/Main/setings/SettingsLayout/PassSecS.jsx";
import SettingsLayout from "./Pages/Main/setings/SettingsLayout/SettingsLayout.jsx";
import MessageS from "./Pages/Main/setings/SettingsLayout/MessageS.jsx";
import Notifications from "./Pages/Main/setings/SettingsLayout/Notifications.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <BrowserRouter>
         <ThemeContext>
            <AuthContext>
               <Routes>
                  {/* FORMS ROUTE */}
                  <Route path="/SignIn" element={<SignIn />} />
                  <Route path="/SignUp" element={<SignUp />} />
                  {/* ALL ROUTE */}
                  <Route element={<MainLayout />}>
                     <Route path="/" element={<Home />} />
                     {/* PRIVATE ROUTE 1 */}
                     <Route element={<PrivateRoute />}>
                        <Route path="/Profile" element={<Profile />} />
                        <Route path="/Gallery" element={<Gallery />} />
                        <Route path="/Activity" element={<Activity />} />
                        <Route path="/Messages" element={<Messages />} />
                        <Route path="/Settings" element={<SettingsLayout />}>
                           {/* <Route path="/Settings" element={<Settings />} /> */}
                           <Route path="/Settings/AccountSettings" element={<AccountS />} />
                           <Route path="/Settings/Appearance" element={<ThemeS />} />
                           <Route path="/Settings/Password&Security" element={<PassSecS />} />
                           <Route path="/Settings/Messages" element={<MessageS />} />
                           <Route path="/Settings/Notification" element={<Notifications />} />
                        </Route>
                     </Route>
                  </Route>
                  {/* PRIVATE ROUTE 2 */}
                  <Route element={<PrivateRoutesec />}>
                     <Route path="/EditProfile" element={<ProfileSetUp />} />
                  </Route>
               </Routes>
            </AuthContext>
         </ThemeContext>
      </BrowserRouter>
   </React.StrictMode>
);
