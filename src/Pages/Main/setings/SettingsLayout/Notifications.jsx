import React from "react";
import {UseTheme} from "../../../../Utils/ThemeContext";

const Notifications = () => {
   const {theme} = UseTheme();
   return <div style={{color: theme === "dark" ? "white" : "black"}}>Notification settings</div>;
};

export default Notifications;
