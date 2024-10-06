/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ContactButton from "../common/ContactButton";
import { RiLinkedinLine } from "react-icons/ri";
import { LuGithub } from "react-icons/lu";
import { FaRegEye, FaEye } from "react-icons/fa";
import { IoCloudDownloadOutline, IoCloudDownloadSharp } from "react-icons/io5";

const MainContactBtn = () => {
  const [isHoveringViewCV, setIsHoveringViewCV] = useState(false);
  const [isHoveringDownloadCV, setIsHoveringDownloadCV] = useState(false);

  const handleViewCV = () => {
    window.open("/CV Francisco.Averruz.pdf", "_blank");
  };

  return (
    <div className="flex items-center justify-center lg:flex-col text-xs md:text-base">
      <div className="flex flex-row lg:flex-col gap-2 lg:w-60">
        <div className="flex flex-row lg:flex-col w-48 md:w-80 lg:w-full gap-2"> 
          <ContactButton
            Icon={RiLinkedinLine}
            to="https://www.linkedin.com/in/franciscoaverruz"
            className={"w-full justify-between"}
          >
            LinkedIn
          </ContactButton>
          <ContactButton
            Icon={LuGithub}
            isCV={false}
            to="https://github.com/FranciscoAverruz"
            className={"w-full justify-between"}
          >
            GitHub
          </ContactButton>
        </div>
        <div>
          <div className="btnStyle w-28 md:w-52 lg:w-full hover:cursor-pointer flex items-center text-sm justify-between">
            <span className="hidden sm:inline">Curriculum</span>
            <span className="inline sm:hidden">CV</span>
            <div className="flex flex-row gap-1">
              <button
                onClick={handleViewCV}
                onMouseEnter={() => setIsHoveringViewCV(true)}
                onMouseLeave={() => setIsHoveringViewCV(false)}
                className="btnCV focusBtn"
              >
                {isHoveringViewCV ? (
                  <FaEye className="iconBtnCV" />
                ) : (
                  <FaRegEye className="iconBtnCV" />
                )}
              </button>
              <a
                href="/CV Francisco.Averruz.pdf"
                download="CV Francisco.Averruz.pdf"
                onMouseEnter={() => setIsHoveringDownloadCV(true)}
                onMouseLeave={() => setIsHoveringDownloadCV(false)}
                className="btnCV focusBtn"
              >
                {isHoveringDownloadCV ? (
                  <IoCloudDownloadSharp className="iconBtnCV" />
                ) : (
                  <IoCloudDownloadOutline className="iconBtnCV" />
                )}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContactBtn;
