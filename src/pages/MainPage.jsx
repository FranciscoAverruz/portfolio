/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import SideBar from "@layout/SideBar.jsx";
import NavBar from "@layout/NavBar.jsx";
import ThLang from "@layout/ThLang.jsx";
import AnimationPages from "@utils/AnimationPages.jsx";
import MainContactBtn from "@sections/MainContactBtn.jsx";
import ScrollToTopButton from "@common/ScrollToTopButton.jsx";
import Avatar from "@common/Avatar.jsx";
import MainSocial from "@sections/MainSocial.jsx";
import FAverruzHeader from "@layout/FAverruzHeader.jsx";
import BgNavSmall from "@common/BgNavSmall.jsx";
import NavBarMenu from "@common/NavBarMenu.jsx";
import Footer from "@sections/Footer.jsx";
import { useTranslation } from "react-i18next";

const MainPage = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about" || location.pathname === "/";
  const isProjectsPage = location.pathname === "/projects";
  const isContactPage = location.pathname === "/contact";
  const bgImg =
    "url('https://images.pexels.com/photos/18419510/pexels-photo-18419510/free-photo-of-ligero-noche-espacio-oscuro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
  const bgBanner =
    "url('https://images.pexels.com/photos/18337644/pexels-photo-18337644/free-photo-of-ligero-creativo-espacio-oscuro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
  const AnimatedOutlet = AnimationPages(Outlet);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const { t } = useTranslation();
  const [translation, setTranslation] = useState("");

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

  useEffect(() => {
    const scrollableContainer = document.querySelector(".overflow-auto");

    if (scrollableContainer && isAboutPage) {
      scrollableContainer.scrollTo(0, 0);
    }
  }, [location.pathname, isAboutPage]);

  useEffect(() => {
    setTranslation(t("aboutNav"));
  }, [t]);

  return (
    <div
      className="flex justify-center w-screen h-screen text-light-txt dark:text-dark-txt bg-cover bg-center bg-no-repeat backdrop-blur"
      style={{ backgroundImage: bgImg }}
    >
      <div className="absolute inset-0 bg-light-background/40 dark:bg-dark-background/40 backdrop-blur-md h-screen"></div>
      <div
        className={`overflow-auto relative grid grid-cols-1 w-full md:grid-rows-[auto_auto_1fr] lg:grid-cols-4 lg:grid-rows-[auto_1fr] 
           gap-1 md:h-screen p-3 lg:pt-3 ${
             !isAboutPage
               ? isContactPage
                 ? "pt-3 md:grid-rows-[auto_auto_1fr_auto] md:grid-cols-1 lg:grid-rows-[auto_1fr_auto] lg:grid-cols-4"
                 : "pt-14"
               : "grid-rows-[auto_auto_1fr]"
           } sm:pt-4 md:pt-3 mb-12 md:mb-0 xl:w-[90%] 2xl:w-5/6`}
      >
        {/*  Header  **************************************************************************************** */}
        <header className="fixed md:relative lg:top-auto bottom-0 left-0 w-screen md:col-span-1 md:row-span-1 md:row-start-2 md:col-start-1 md:w-full md:h-auto lg:row-start-1 lg:col-start-1 lg:col-span-4 z-50 md:z-30">
          <div className="layout w-full h-full px-4 md:px-6 rounded-none lg:rounded-tr-xl lg:rounded-tl-xl">
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

        {/* Sidebar  **************************************************************************************** */}
        <aside
          className={`${
            !isAboutPage ? "hidden md:flex lg:hidden" : "flex opacity-100"
          } layout md:items-start md:justify-center col-span-1 row-span-1 lg:col-span-1 lg:row-span-1 lg:row-start-2 rounded-tl-2xl rounded-tr-2xl lg:rounded-bl-2xl lg:rounded-tr-none lg:rounded-tl-none relative h-full`}
        >
          <div
            className={`${
              !isAboutPage ? "md:h-[68%]" : "md:h-[50%]"
            } absolute top-0 left-0 w-full h-[30%] md:h-[45%] lg:h-[20%] bg-cover bg-center rounded-tl-2xl rounded-tr-2xl lg:rounded-tl-none lg:rounded-tr-none`}
            style={{ backgroundImage: bgBanner }}
          >
            <span
              className={`${
                isAboutPage ? "hidden" : "block"
              } flex justify-end items-center h-full pr-20 text-4xl text-dark-title`}
              style={{ fontFamily: "Satisfy, cursive" }}
            >
              Francisco Averruz
            </span>
          </div>
          <div className="lg:relative grid grid-cols-1 w-full h-full pb-5 md:pb-0 justify-center">
            <div className="flex w-full lg:absolute pt-10 md:pt-8 lg:pt-7 justify-center md:justify-start lg:justify-center items-center py-5 md:py-3 z-10 md:px-5">
              <Avatar />
            </div>
            <div className="grid grid-cols-1 w-full h-full z-10 md:flex-row-reverse ">
              <div
                className={`flex justify-center pb-5 lg:pb-0 ${
                  !isAboutPage ? "pb-0" : ""
                }`}
              >
                <SideBar />
              </div>
              <div
                className={`${
                  isContactPage ? "hidden" : "block"
                } md:absolute md:top-36 mt-2 md:right-4 lg:top-auto lg:bottom-7 lg:left-0 lg:right-0 flex items-center justify-center z-50`}
              >
                <MainContactBtn />
              </div>
            </div>
          </div>
        </aside>

        {/* Main  **************************************************************************************** */}
        <main
          className={`layout col-span-1 ${
            !isAboutPage ? "lg:col-span-4" : "lg:col-span-3"
          } lg:row-span-1 lg:row-start-2 row-span-1 ${
            isAboutPage
              ? "rounded-bl-2xl rounded-br-2xl lg:rounded-bl-none"
              : !isContactPage
              ? "rounded-2xl md:rounded-none md:rounded-bl-2xl md:rounded-br-2xl"
              : "rounded-tr-2xl rounded-tl-2xl md:rounded-tr-none md:rounded-tl-none"
          } lg:overflow-y-auto`}
        >
          {isAboutPage ? (
            // <h1 className="title titlePages">{t("aboutNav")}</h1>
            <h1 className="title titlePages">{translation}</h1>
          ) : isProjectsPage ? (
            <h1 className="title titlePages">{t("projectsNav")}</h1>
          ) : (
            <h1 className="title titlePages">{t("contactNav")}</h1>
          )}
          <div className="relative h-full px-4 md:px-6 lg:px-10 py-5 z-10 md:flex md:items-center md:justify-center lg:items-start">
            <AnimatedOutlet />
          </div>
        </main>

        {/* Footer  **************************************************************************************** */}
        {isContactPage && (
          <footer className="layout col-span-1 row-span-1 row-start-3 md:row-start-4 lg:row-start-3 lg:col-span-4 w-full col-start-1 rounded-b-2xl flex items-center justify-center h-full py-2">
            <Footer />
          </footer>
        )}

        {/* Navigation Buttons for Mobile  ***************************************************************** */}
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