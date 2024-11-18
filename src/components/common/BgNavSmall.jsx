/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import VisibilityOnScroll from "@hooks/VisibilityOnScroll";

const BgNavSmall = () => {
  const location = useLocation();

  const isRouteAllowed =
    location.pathname !== "/" &&
    location.pathname !== "/about" &&
    location.pathname !== "/contact";

  const isVisible = VisibilityOnScroll(
    isRouteAllowed
      ? {
          lg: 0,
          md: 30,
          sm: 170,
        }
      : {
          lg: 0,
          md: 30,
          sm: 50,
        }
  );

  return (
    <div>
      <div
        className={`flex fixed top-0 left-0 w-full h-12 z-30 lg:hidden items-center justify-center ${
          isVisible ||
          (isRouteAllowed && window.innerWidth <= 768) ||
          (isRouteAllowed && window.innerWidth > 1024)
            ? "bg-white/70 dark:bg-dark-secondary/60 backdrop-blur-lg transition-all ease-in-out duration-300 shadow-md"
            : ""
        }`}
      ></div>
    </div>
  );
};

export default BgNavSmall;
