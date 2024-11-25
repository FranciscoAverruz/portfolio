/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import AnimationPages from "@utils/AnimationPages.jsx";
import { Outlet } from "react-router-dom";

const MainContent = ({
  isAboutPage,
  isProjectsPage,
  isContactPage,
  translation,
  t,
}) => {
  const AnimatedOutlet = AnimationPages(Outlet);

  return (
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
  );
};

export default MainContent;
