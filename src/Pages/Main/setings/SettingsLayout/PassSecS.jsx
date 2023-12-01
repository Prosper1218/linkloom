import React from "react";
import { UseTheme } from "../../../../Utils/ThemeContext";

const PassSecS = () => {
   const {theme} = UseTheme();
   return <div style={{color: theme === "dark" ? "white" : "black"}}>Security settings</div>;
};

export default PassSecS;
