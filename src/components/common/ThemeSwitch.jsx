/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTranslation } from "react-i18next";
import "@src/App.css";

const ThemeSwitch = () => {
  const { t } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const handleToggle = () => {
    const newMode = !isDarkMode ? "dark" : "light";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newMode);
    window.dispatchEvent(new CustomEvent('themeChange', { detail: newMode }));
  };

  useEffect(() => {
    document.querySelector("html").classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="flex items-center justify-center">
      {/* Toggle gor (lg)-screens  ******************************************************************** */}
      <label htmlFor="toggle-dark" className="hidden lg:flex items-center cursor-pointer">
        <input
          type="checkbox"
          id="toggle-dark"
          className="sr-only"
          checked={isDarkMode}
          onChange={handleToggle}
          aria-label="Toggle dark mode"
          role="switch"
          aria-checked={isDarkMode}
        />
        <div className="relative">
          <div className={`block ${isDarkMode ? 'bg-gray-800' : 'bg-white'} w-14 h-8 rounded-full shadow-md transition-colors duration-300`}></div>
          <div className={`dot absolute left-1 top-1 bg-amber-400 w-6 h-6 rounded-full flex items-center justify-center text-white font-bold shadow-inner transition-transform duration-100 ${isDarkMode ? "translate-x-full" : ""}`}>
            {isDarkMode ? (
              <MdLightMode className="drop-shadow-lg" />
            ) : (
              <MdDarkMode className="drop-shadow-lg" />
            )}
          </div>
        </div>
        <span className="sr-only">{isDarkMode ? t('srOnly.tLight') : t('srOnly.tDark')}</span>
      </label>

      {/* Toggle for smaller screens  ******************************************************************* */}
      <button
        className={`lg:hidden flex items-center justify-center w-14 h-8 rounded-full shadow-md cursor-pointer transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
        onClick={handleToggle}
        aria-label="Toggle dark mode"
        role="switch"
        aria-checked={isDarkMode}
      >
        <div className={`dot absolute bg-amber-400 w-6 h-6 rounded-full flex items-center justify-center text-white font-bold shadow-inner transition-transform duration-300 ${isDarkMode ? "translate-x-full" : ""} left-1`}>
          {isDarkMode ? (
            <MdLightMode className="drop-shadow-lg" />
          ) : (
            <MdDarkMode className="drop-shadow-lg" />
          )}
        </div>
        <span className="sr-only">{isDarkMode ? t('srOnly.tLight') : t('srOnly.tDark')}</span>
      </button>
    </div>
  );
};

export default ThemeSwitch;
