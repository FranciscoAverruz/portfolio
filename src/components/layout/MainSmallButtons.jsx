/* eslint-disable no-unused-vars */
import React from "react";
import FAverruzHeader from "@layout/FAverruzHeader.jsx";
import BgNavSmall from "@common/BgNavSmall.jsx";
import NavBarMenu from "@common/NavBarMenu.jsx";
import ThLang from "@layout/ThLang.jsx";
import MainSocial from "@sections/MainSocial.jsx";


const MainSmallButtons = () => {
  return (
    <div>
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
    </div>
  );
};

export default MainSmallButtons;
