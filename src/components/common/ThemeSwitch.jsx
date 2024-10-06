/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import "../../App.css";

const ThemeSwitch = () => {

    const [isDarkMode, setIsDarkMode] = useState(() => {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        return savedTheme === "dark";
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

  const handleToggle = () => {
    const newMode = !isDarkMode ? "dark" : "light";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newMode);
    // Emit a custom event when the theme changes
    window.dispatchEvent(new CustomEvent('themeChange', { detail: newMode }));
  };

    useEffect(() => {
      document.querySelector("html").classList.toggle("dark", isDarkMode);
    }, [isDarkMode]);

  return (
    <div className="flex items-center justify-center">
      <label htmlFor="toggle" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            id="toggle"
            className="sr-only"
            checked={isDarkMode}
            onChange={handleToggle}
          />
          <div className="block bg-white bk w-14 h-8 rounded-full shadow-md hover:border hover:border-light-accent"></div>
          <div className="dot absolute left-1 top-1 bg-amber-400 w-6 h-6 rounded-full transition flex items-center justify-center text-white font-bold shadow-inner">
            {isDarkMode ? (
              <MdDarkMode className="drop-shadow-lg" />
            ) : (
              <MdLightMode className="drop-shadow-lg" />
            )}
          </div>
        </div>
      </label>
    </div>
  );
};

export default ThemeSwitch;
