/* eslint-disable no-unused-vars */
import React from "react";
import NavBar from "@layout/NavBar.jsx";
import MainSocial from "@sections/MainSocial.jsx";
import ThLang from "@layout/ThLang.jsx";

const Header = () => {
  return (
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
  );
};

export default Header;
