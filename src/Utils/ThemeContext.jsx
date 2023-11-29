import React from "react";
import {createContext, useContext, useState} from "react";

export const ThemeC = createContext();

const ThemeContext = ({children}) => {
     const [DarkTheme, setDarkTheme] = useState(true)
   return <ThemeC.Provider value={{DarkTheme,setDarkTheme}}>{children}</ThemeC.Provider>;
};

export const UseTheme = ()=>{return useContext(ThemeC)}

export default ThemeContext;
