/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Avatar from "@common/Avatar.jsx";
import SideBar from "@layout/SideBar.jsx";
import MainContactBtn from "@sections/MainContactBtn.jsx";

const MainSidebar = ({ isAboutPage, isContactPage, bgBanner }) => {
  return (
    <aside
      className={`${
        !isAboutPage ? "hidden md:flex lg:hidden" : "flex opacity-100"
      } layout md:items-start md:justify-center col-span-1 row-span-1 lg:col-span-1 lg:row-span-1 lg:row-start-2 rounded-tl-2xl rounded-tr-2xl lg:rounded-bl-2xl lg:rounded-tr-none lg:rounded-tl-none relative h-full`}
    >
      <div
        className={`${
          !isAboutPage ? "md:h-[68%]" : "md:h-[50%]"
        } absolute top-0 left-0 w-full h-[30%] md:h-[45%] lg:h-[20%] bg-[length:100%_100%] bg-no-repeat bg-center rounded-tl-2xl rounded-tr-2xl lg:rounded-tl-none lg:rounded-tr-none`}
        style={{
          backgroundImage: bgBanner,
          WebkitMaskImage:"linear-gradient(to bottom, rgba(0,0,0,1) 8%, rgba(0,0,0,0) 100%)",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
          maskRepeat: "no-repeat",
          maskSize: "100% 100%",
        }}
      >
        <div
          className="absolute inset-0 rounded-tl-2xl rounded-tr-2xl lg:rounded-tl-none lg:rounded-tr-none
                  dark:bg-black/30 pointer-events-none"
        ></div>
        <span
          className={`${
            isAboutPage ? "hidden" : "block"
          } flex justify-end items-center h-full pr-20 text-4xl text-dark-title satisfy-font`}
        >
          Francisco Averruz
        </span>
      </div>
      <div className="lg:relative grid grid-cols-1 w-full h-full pb-5 md:pb-0 justify-center">
        <div className="flex w-full lg:absolute pt-10 md:pt-8 lg:pt-7 justify-center md:justify-start lg:justify-center items-center py-5 md:py-3 z-10 md:px-5">
          <Avatar />
        </div>
        <div className="grid grid-cols-1 w-full h-full z-10 md:flex-row-reverse">
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
  );
};

export default MainSidebar;
