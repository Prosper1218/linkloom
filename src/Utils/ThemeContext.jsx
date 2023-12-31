import React from "react";
import {createContext, useContext, useState} from "react";

export const ThemeC = createContext('light');

const ThemeContext = ({children}) => {
  const [theme, setTheme] = useState(getSavedTheme() || "light");

  const toggleTheme = () => {
     const newTheme = theme === "light" ? "dark" : "light";
     setTheme(newTheme);
     saveTheme(newTheme);
  };

   return <ThemeC.Provider value={{ theme, setTheme, toggleTheme}}>{children}</ThemeC.Provider>;
};

export const UseTheme = () => {
   return useContext(ThemeC);
};
const getSavedTheme = () => {
  return localStorage.getItem("theme");
};

const saveTheme = (theme) => {
  localStorage.setItem("theme", theme);
};
export default ThemeContext;
// srt