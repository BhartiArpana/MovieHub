import React, { useContext } from "react";
import { DarkModeContext } from "../DarkModeContext.jsx";
import '../../shared/button.scss'
import { MdLightMode } from "react-icons/md";

import { MdDarkMode } from "react-icons/md";
import './style.scss'



const ThemeToggle = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="themebutton"
    >
      {darkMode ? <MdLightMode  className="icon" /> : <MdDarkMode className="icon" />}
    </button>
  );
};

export default ThemeToggle;