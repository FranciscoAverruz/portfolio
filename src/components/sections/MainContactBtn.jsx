/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ContactButton from "../common/ContactButton";
import { FaLinkedinIn } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { FaRegEye, FaEye } from "react-icons/fa";
import { RiDownloadCloud2Line, RiDownloadCloud2Fill } from "react-icons/ri";

const MainContactBtn = () => {
  const [isHoveringViewCV, setIsHoveringViewCV] = useState(false);
  const [isHoveringDownloadCV, setIsHoveringDownloadCV] = useState(false);
  const { t } = useTranslation();

  const handleViewCV = () => {
    window.open("/CV Francisco.Averruz.pdf", "_blank");
  };

  return (
    <div className="flex items-center justify-center lg:flex-col text-xs md:text-base">
      <div className="flex flex-row lg:flex-col gap-2 lg:w-60">
        <div className="flex flex-row lg:flex-col w-28 md:w-80 lg:w-full gap-2">
          <ContactButton
            Icon={FaLinkedinIn}
            to="https://www.linkedin.com/in/franciscoaverruz"
            className={"w-full justify-center md:justify-between"}
            title="https://www.linkedin.com/in/franciscoaverruz"
          >
            LinkedIn
          </ContactButton>

          <ContactButton
            Icon={LuGithub}
            isCV={false}
            to="https://github.com/FranciscoAverruz"
            className={"w-full justify-center md:justify-between"}
            style={{ strokeWidth: "3" }}
            title="https://github.com/FranciscoAverruz"
          >
            GitHub
          </ContactButton>
        </div>
        <div>
          <div className="btnStyle w-44 md:w-52 lg:w-full hover:cursor-pointer flex items-center text-sm justify-between">
            {/* <span className="hidden sm:inline">{t("curriculum")}</span>
            <span className="inline sm:hidden pl-2">CV</span> */}
            <span className="pl-2 md:pl-0">{t("curriculum")}</span>
            <div className="flex flex-row gap-1">
              <button
                onClick={handleViewCV}
                onMouseEnter={() => setIsHoveringViewCV(true)}
                onMouseLeave={() => setIsHoveringViewCV(false)}
                className="btnCV focusBtn"
                title={t("viewCV")}
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
                title={t("downloadCV")}
              >
                {isHoveringDownloadCV ? (
                  <RiDownloadCloud2Fill className="iconBtnCV" />
                ) : (
                  <RiDownloadCloud2Line className="iconBtnCV" />
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
