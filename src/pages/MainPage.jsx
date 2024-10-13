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
import FAverruzHeader from "../components/layout/FAverruzHeader.jsx";
import BgNavSmall from "../components/layout/BgNavSmall.jsx";
import NavBarMenu from "../components/common/NavBarMenu.jsx";

const MainPage = () => {
  const location = useLocation();
  const isAboutPage =
    location.pathname === "/about" || location.pathname === "/";
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

  // Reset scroll to top on specific routes
  useEffect(() => {
    const scrollableContainer = document.querySelector(".overflow-auto");

    if (scrollableContainer && isAboutPage) {
      scrollableContainer.scrollTo(0, 0);
    }
  }, [location.pathname, isAboutPage]); // Depend on location.pathname and isAboutPage to trigger on route change

  return (
    <div
      className="flex justify-center w-screen h-screen  text-light-txt dark:text-dark-txt bg-cover bg-center bg-no-repeat backdrop-blur"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/18419510/pexels-photo-18419510/free-photo-of-ligero-noche-espacio-oscuro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', // Cambia esto a la ruta de tu imagen
      }}
    >
       <div
    className="absolute inset-0 bg-light-background/40 dark:bg-dark-background/50 backdrop-blur-md" // Aplica el blur y ajusta los colores
  ></div>
        <div
        className={`overflow-auto relative grid grid-cols-1 w-full lg:grid-cols-4 lg:grid-rows-[auto_1fr] md:grid-rows-[auto_auto_1fr] gap-1 md:h-screen p-3 ${
          !isAboutPage
            ? "grid-rows-[1fr_auto] pt-14"
            : "grid-rows-[auto_auto_1fr]"
        } sm:pt-4 md:pt-3 mb-12 md:mb-0 lg:w-5/6`}
      >
        <aside
          className={`${
            !isAboutPage ? "hidden md:flex lg:hidden" : "flex opacity-100"
          } layout md:items-start md:justify-center col-span-1 row-span-1 lg:col-span-1 lg:row-span-1 lg:row-start-2 rounded-tl-2xl rounded-tr-2xl lg:rounded-bl-2xl lg:rounded-tr-none lg:rounded-tl-none relative h-full`}
        >
          {/* Div que contiene la imagen */}

          <div
            className="absolute top-0 left-0 w-full h-[30%] md:h-[40%] lg:h-[20%] bg-cover bg-center rounded-tl-2xl rounded-tr-2xl lg:rounded-tl-none lg:rounded-tr-none"
            style={{
              backgroundImage:
                'url("https://images.pexels.com/photos/18337644/pexels-photo-18337644/free-photo-of-ligero-creativo-espacio-oscuro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', // Cambia esto a la ruta de tu imagen
            }}
          >
            {/* Este div puede contener más información o estar vacío */} 
          </div>
          {/* md:grid-cols-[auto_1fr]  */}
          <div className="lg:relative grid grid-cols-1 w-full h-full pb-5 md:pb-0 justify-center">
            <div className="flex w-full lg:absolute pt-10 md:pt-8 lg:pt-7 justify-center md:justify-start lg:justify-center items-center py-5 md:py-3 z-10 md:px-5">
              <AnimatedAvatar />
            </div>
            <div className="grid grid-cols-1 w-full h-full z-10 md:flex-row-reverse ">
              <div className="flex justify-center pb-5 lg:pb-0 ">
                <SideBar />
              </div>
              <div className="md:absolute md:top-32 md:right-4 lg:top-auto lg:bottom-7 lg:left-0 lg:right-0 flex items-center justify-center z-50">
                <AnimatedMainContactBtn />
              </div>
            </div>
          </div>
        </aside>

        <header className="fixed layout md:relative lg:top-auto bottom-0 left-0 w-screen md:col-span-1 md:row-span-1 md:row-start-2 md:col-start-1 md:w-full md:h-auto lg:row-start-1 lg:col-start-1 lg:col-span-4 z-50 md:z-30">
          <div className="w-full h-full px-4 md:px-6 rounded-none lg:rounded-tr-xl lg:rounded-tl-xl">
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

        <main
          className={`layout col-span-1 ${
            !isAboutPage ? "lg:col-span-4" : "lg:col-span-3"
          } lg:row-span-1 lg:row-start-2 row-span-1 ${
            isAboutPage
              ? "rounded-bl-2xl rounded-br-2xl lg:rounded-bl-none"
              : "rounded-2xl md:rounded-none md:rounded-bl-2xl md:rounded-br-2xl"
          } lg:overflow-y-auto`}
        >
          <div className="relative h-full px-4 md:px-6 lg:px-10 py-5 z-10 mb-12 md:mb-0">
            <AnimatedOutlet />
          </div>
        </main>

        {/* DarkLang Button, cambiamos clases solo en scroll */}
        <div className="flex fixed top-0 left-0 w-full h-12 z-30 lg:hidden items-center justify-center">
          <BgNavSmall />
          <div className="pl-3 lg:hidden z-30 md:z-50 top-3 flex flex-row items-center gap-5">
            <FAverruzHeader />
            <span className="hidden md:block lg:hidden">
              <NavBarMenu />
            </span>
          </div>
          <div className="flex lg:block lg:top-1 left-1 z-30 md:z-50">
            <MainSocial />
          </div>

          <div className="lg:hidden z-30 md:z-50 fixed top-2 right-1 md:right-6">
            <ThLang />
          </div>
        </div>

        <ScrollToTopButton />
      </div>
    </div>
  );
};

export default MainPage;
