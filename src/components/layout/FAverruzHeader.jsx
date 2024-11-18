/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import VisibilityOnScroll from "@hooks/visibilityOnScroll.jsx";

const FAverruzHeader = () => {
  const location = useLocation();
  const name = "Francisco Averruz";
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
          md: 200,
          sm: 200,
        }
  );

  return (
    <div>
      <div
        className={`top-0 transition-opacity duration-300  items-center justify-center text-lg md:text-2xl text-light-title dark:text-dark-title ${
          isVisible ||
          (isRouteAllowed && window.innerWidth <= 768) ||
          (isRouteAllowed && window.innerWidth > 1024)
            ? "opacity-100"
            : "opacity-0"
        } `}
        style={{ fontFamily: "Satisfy, cursive" }}
      >
        {name}
      </div>
    </div>
  );
};

export default FAverruzHeader;
