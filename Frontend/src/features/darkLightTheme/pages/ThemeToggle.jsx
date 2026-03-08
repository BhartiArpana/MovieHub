import React, { useContext } from "react";
import { DarkModeContext } from "../DarkModeContext.jsx";
import '../../shared/button.scss'

const ThemeToggle = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="button"
    >
      {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
};

export default ThemeToggle;