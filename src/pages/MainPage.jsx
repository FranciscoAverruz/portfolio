/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@layout/Header";
import MainSidebar from "@layout/MainSidebar";
import MainContent from "@layout/MainContent";
import Footer from "@sections/Footer";
import ScrollToTopButton from "@common/ScrollToTopButton.jsx";
import { useTranslation } from "react-i18next";
import MainSmallButtons from "@layout/MainSmallButtons.jsx";
import bgImg from "@imgTech/bgImg.webp";
import bgBanner from "@imgTech/bgBanner.webp";


const MainPage = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about" || location.pathname === "/";
  const isProjectsPage = location.pathname === "/projects";
  const isContactPage = location.pathname === "/contact";
  const { t } = useTranslation();
  const [translation, setTranslation] = useState("");

  useEffect(() => {
    setTranslation(t("aboutNav"));
  }, [t]);

  return (
    <div
      className="flex justify-center w-screen h-screen text-light-txt dark:text-dark-txt bg-cover bg-center bg-no-repeat backdrop-blur" 
      style={{ backgroundImage:`url(${bgImg})`}}
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
        <Header />
        <MainSidebar
          isAboutPage={isAboutPage}
          isContactPage={isContactPage}
          bgBanner={`url(${bgBanner})`}
        />
        <MainContent
          isAboutPage={isAboutPage}
          isProjectsPage={isProjectsPage}
          isContactPage={isContactPage}
          translation={translation}
          t={t}
        />
        {isContactPage && <Footer />}
        <ScrollToTopButton />
      </div>
      <MainSmallButtons />
    </div>
  );
};

export default MainPage;
