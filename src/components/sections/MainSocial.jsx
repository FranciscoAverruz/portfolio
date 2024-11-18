/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Social from "@layout/Social";
import { FaLinkedinIn } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { RiDownloadCloud2Line } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import VisibilityOnScroll from "@hooks/VisibilityOnScroll";

const MainSocial = () => {
  const location = useLocation(); 
  const handleViewCV = () => {
    window.open("/CV Francisco.Averruz.pdf", "_blank");
  };
  const { t } = useTranslation();

  const isRouteAllowed =
  location.pathname !== "/" &&
  location.pathname !== "/about" &&
  location.pathname !== "/contact";

  const isVisible = VisibilityOnScroll(
    isRouteAllowed
    ? {
        lg: 0,
        md: 115,
        sm: 170,
      }
    : {
        lg: 0, 
        md: 115,
        sm: 310,
      }
  );

  return (
    <div>
      <div
        className={`flex flex-row gap-1 w-fit fixed bottom-4 right-4 z-40 top-2 left-2 md:left-6 lg:left-0 transition-opacity duration-300 transform lg:-translate-y-6 lg:-translate-x-6 h-fit ${
          isVisible ||
          (isRouteAllowed && window.innerWidth <= 768) ||
          (isRouteAllowed && window.innerWidth > 1024)
            ? "opacity-100"
            : "opacity-0"
        } `}
      >
        <Social
          Icon={FaLinkedinIn}
          to="https://www.linkedin.com/in/franciscoaverruz"
          className={""}
          title="https://www.linkedin.com/in/franciscoaverruz"
        />

        <Social
          Icon={LuGithub}
          to="https://github.com/FranciscoAverruz"
          className={""}
          style={{ strokeWidth: "3" }}
          title="https://github.com/FranciscoAverruz"
        />
        <Social
          Icon={RiDownloadCloud2Line}
          onClick={handleViewCV}
          className={""}
          style={{ strokeWidth: "1" }}
          size={"21"}
          title={t("viewCV")}
        />
      </div>
    </div>
  );
};

export default MainSocial;
