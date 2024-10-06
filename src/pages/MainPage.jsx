/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import SideBar from "../components/layout/SideBar.jsx";
import NavBar from "../components/layout/NavBar.jsx";
import ThLang from "../components/layout/ThLang.jsx";
import AnimationPages from "../utils/AnimationPages.jsx";
import AnimationOpacity from "../utils/AnimationOpacity.jsx";
import MainContactBtn from "../components/sections/MainContactBtn.jsx";
import ScrollToTopButton from "../components/common/ScrollToTopButton.jsx";
import Avatar from "../components/common/Avatar.jsx";
import MainSocial from "../components/sections/MainSocial.jsx";

const MainPage = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about" || location.pathname === "/" ;
  const AnimatedOutlet = AnimationPages(Outlet);
  const AnimatedAvatar = AnimationOpacity(Avatar);
  const AnimatedMainContactBtn = AnimationOpacity(MainContactBtn);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const handleThemeChange = (e) => {
      const newTheme = e.detail;
      setTheme(newTheme);
    };

    window.addEventListener("themeChange", handleThemeChange);

    return () => {
      window.removeEventListener("themeChange", handleThemeChange);
    };
  }, []);

  // const backgroundOpacity = theme === "dark" ? 0.2 : 0.3;
  // console.log("backgroundOpacity", backgroundOpacity);

  return (
    <div className="flex justify-center w-screen h-screen bg-light-background dark:bg-dark-background text-light-txt dark:text-dark-txt overflow-auto">
      <div
        className={`relative grid grid-cols-1 w-full lg:grid-cols-4 lg:grid-rows-[auto_1fr] md:grid-rows-[auto_auto_1fr] gap-1 md:h-screen p-3 ${
          !isAboutPage ? "grid-rows-[1fr_auto]" : "grid-rows-[auto_auto_1fr]"
        } sm:pt-4 md:pt-3 mb-12 md:mb-0 lg:w-5/6`}
        // lg:w-4/5
      >
        {/* SideBar: Primera columna, ocupa ambas filas en lg (para pantallas grandes) */}
        <aside
          className={`${!isAboutPage ? "hidden md:flex lg:hidden" : "flex opacity-100"} md:items-start md:justify-center col-span-1 row-span-1 lg:col-span-1 lg:row-span-1 lg:row-start-2 rounded-tl-2xl rounded-tr-2xl lg:rounded-bl-2xl lg:rounded-tr-none lg:rounded-tl-none bg-white dark:grad-bg-dark border-2 dark:border-dark-background`}
        >
          <div className="lg:relative grid grid-cols-1 md:grid-cols-[auto_1fr] lg:grid-cols-1 w-full h-full pb-5 md:pb-0">
            <div className="lg:absolute lg:top-7 lg:left-0 lg:right-0 flex justify-center items-center py-5 md:py-3 z-10 md:px-5">
              <AnimatedAvatar />
            </div>
              <div className="grid grid-cols-1 w-full h-full z-10">
              <div className="flex justify-center pb-5 md:pb-0">
                <SideBar />
              </div>
              <div className="lg:absolute lg:bottom-7 lg:left-0 lg:right-0 flex items-center justify-center">
                <AnimatedMainContactBtn />
              </div>
            </div>
          </div>
        </aside>

        {/* NavBar: Segunda columna, primera fila, ocupa toda la fila en lg */}
        <header className="fixed md:relative lg:top-auto bottom-0 left-0 w-screen z-30 md:col-span-1 md:row-span-1 md:row-start-2 md:col-start-1 md:w-full md:h-auto lg:row-start-1 lg:col-start-1 lg:col-span-4 ">
          <div className="w-full h-full px-4 md:px-6 rounded-none lg:rounded-tr-xl lg:rounded-tl-xl bg-white dark:bg-dark-secondary border-2 dark:border-dark-background">
            <NavBar
                  socialButton={
                    <div className="hidden lg:block">
                      <MainSocial />
                    </div>
                  }
              darkLangButton={
                <div className="hidden lg:block">
                  <ThLang />
                </div>
              }
            />
          </div>
        </header>
        {/* Main content: Segunda fila, Outlet ocupa 3 columnas en lg */}
        <main
          className={`col-span-1 ${
            !isAboutPage ? "lg:col-span-4" : "lg:col-span-3"
          } lg:row-span-1 lg:row-start-2 row-span-1 ${
            isAboutPage
              ? "rounded-bl-2xl rounded-br-2xl lg:rounded-bl-none"
              : "rounded-2xl md:rounded-none md:rounded-bl-2xl md:rounded-br-2xl"
          } bg-white dark:grad-bg-dark lg:overflow-y-auto border-2 dark:border-dark-background`}
        >
          <div className="relative h-full px-4 md:px-6 lg:px-10 py-5 z-10 mb-12 md:mb-0">
            <AnimatedOutlet />
          </div>
        </main>

        {/* DarkLang Button: Posición fija en la pantalla para pantallas pequeñas */}
        <div className="lg:hidden z-10 fixed top-1 left-1 md:left-6">
          <MainSocial />
        </div>
        <div className="lg:hidden z-40 fixed top-1 right-1 md:right-6">
          <ThLang />
        </div>
        <ScrollToTopButton />
      </div>
    </div>
  );
};

export default MainPage;
