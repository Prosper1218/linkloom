import React from "react";
import {UseTheme} from "../../../../Utils/ThemeContext";
import {UseAuth} from "../../../../Utils/AuthContext";

const AccountS = () => {
   const {theme} = UseTheme();
   const {Logout} = UseAuth();
   return (
      <div style={{color: theme === "dark" ? "white" : "black"}}>
         <p>other account settings</p>
         <button onClick={() => Logout()} className="text-red-600 text-[55%]">
            Logout
         </button>
      </div>
   );
};

export default AccountS;
