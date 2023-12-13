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
import EditProfile from "./Pages/Forms/EditProfile.jsx";
import PrivateRoutesec from "./Utils/PrivateRoutesec.jsx";
import ThemeContext from "./Utils/ThemeContext.jsx";
import AccountS from "./Pages/Main/setings/SettingsLayout/AccountS.jsx";
import ThemeS from "./Pages/Main/setings/SettingsLayout/ThemeS.jsx";
import PassSecS from "./Pages/Main/setings/SettingsLayout/PassSecS.jsx";
import SettingsLayout from "./Pages/Main/setings/SettingsLayout/SettingsLayout.jsx";
import MessageS from "./Pages/Main/setings/SettingsLayout/MessageS.jsx";
import Notifications from "./Pages/Main/setings/SettingsLayout/Notifications.jsx";
import FormLayout from "./Pages/Forms/ProfileSetupForms/FormLayout.jsx";
import FNandLN from "./Pages/Forms/ProfileSetupForms/FNandLN.jsx";
import Gender from "./Pages/Forms/ProfileSetupForms/GenderF.jsx";
import Occupation from "./Pages/Forms/ProfileSetupForms/Occupation.jsx";
import Dob from "./Pages/Forms/ProfileSetupForms/Dob.jsx";
import Location from "./Pages/Forms/ProfileSetupForms/Location.jsx";
import RelationshipStat from "./Pages/Forms/ProfileSetupForms/RelationshipStat.jsx";
import Bio from "./Pages/Forms/ProfileSetupForms/Bio.jsx";
import NumberF from "./Pages/Forms/ProfileSetupForms/NumberF.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <BrowserRouter>
         <ThemeContext>
            <AuthContext>
               <Routes>
                  {/* FORMS ROUTE */}

                  <Route element={<FormLayout />}>
                     <Route path="/SignUp" element={<SignUp />} />
                     <Route path="/setup/Names" element={<FNandLN />} />
                     <Route path="/setup/YourGender" element={<Gender />} />
                     <Route path="/setup/Occupation" element={<Occupation />} />
                     <Route path="/setup/Dob" element={<Dob />} />
                     <Route path="/setup/Location" element={<Location />} />
                     <Route path="/setup/RelationshipStatus" element={<RelationshipStat />} />
                     <Route path="/setup/Number" element={<NumberF />} />
                     <Route path="/setup/Bio" element={<Bio />} />
                     <Route path="/SignIn" element={<SignIn />} />
                  </Route>


                  {/* ALL ROUTE */}
                  <Route element={<MainLayout />}>
                     <Route path="/" element={<Home />} />
                     {/* PRIVATE ROUTE 1 */}
                     <Route element={<PrivateRoute />}>
                        <Route path="/Profile" element={<Profile />} />
                        <Route path="/Gallery" element={<Gallery />} />
                        <Route path="/Activity" element={<Activity />} />
                        <Route path="/Messages" element={<Messages />} />

                        <Route element={<SettingsLayout />}>
                           {/* <Route path="/Settings" element={<Settings />} /> */}
                           <Route path="/Settings" element={<AccountS />} />
                           <Route path="/Settings/Appearance" element={<ThemeS />} />
                           <Route path="/Settings/Password&Security" element={<PassSecS />} />
                           <Route path="/Settings/Messages" element={<MessageS />} />
                           <Route path="/Settings/Notification" element={<Notifications />} />  
                        </Route>
                     </Route>
                  </Route>
                  {/* PRIVATE ROUTE 2 */}
                  <Route element={<PrivateRoutesec />}>
                     <Route path="/ProfileSetup" element={<ProfileSetUp />}></Route>
                     <Route path="/EditProfile" element={<EditProfile />} />
                  </Route>
               </Routes>
            </AuthContext>
         </ThemeContext>
      </BrowserRouter>
   </React.StrictMode>
);
