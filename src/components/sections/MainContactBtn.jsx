/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ContactButton from "@common/ContactButton";
import { FaLinkedinIn } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { FaRegEye, FaEye } from "react-icons/fa";
import { RiDownloadCloud2Line, RiDownloadCloud2Fill } from "react-icons/ri";
import { useLocation } from "react-router-dom";

const MainContactBtn = () => {
  const [isHoveringViewCV, setIsHoveringViewCV] = useState(false);
  const [isHoveringDownloadCV, setIsHoveringDownloadCV] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  const handleViewCV = () => {
    window.open("/CV Francisco.Averruz.pdf", "_blank");
  };

  return (
    <div
      className={`${
        isContactPage ? "flex md:mt-1 md:pt-2 md:border-t-2 md:dark:border-t-dark-primary" : ""
      }`}
    >
      <div
        className={`${
          isContactPage
            ? "md:flex-row justify-center lg:gap-5 w-full lg:px-2"
            : "lg:flex-col lg:w-60 lg:gap-2"
        } flex flex-row gap-1 md:gap-5 mt-2 lg:mt-auto`}
      >
        {/* social buttons section */}
        <div className="w-full"> 
          <span
            className={`${
              isContactPage
                ? "md:block w-full flex subtitle mb-4 tracking-tight"
                : "lg:hidden"
            } hidden`}
          > {t('ContactBtnLabel')} </span>
          <div
            className={`${
              isContactPage
                ? "lg:flex-row lg:justify-start"
                : "lg:flex-col justify-center"
            } flex flex-row w-20 md:w-full gap-1 md:gap-2`}
          >
            {/* Linkedin button ******************************************************/}
            <ContactButton
              Icon={FaLinkedinIn}
              to="https://www.linkedin.com/in/franciscoaverruz"
              className={`${
                isContactPage ? "lg:gap-5 md:w-[9rem] lg:w-[10rem]" : ""
              } w-full justify-center md:justify-between`}
              title="https://www.linkedin.com/in/franciscoaverruz"
            > LinkedIn </ContactButton>

            {/* GitHub button ******************************************************/}
            <ContactButton
              Icon={LuGithub}
              isCV={false}
              to="https://github.com/FranciscoAverruz"
              className={`${
                isContactPage ? "lg:gap-5 md:w-[9rem] lg:w-[10rem]" : ""
              } w-full justify-center md:justify-between`}
              style={{ strokeWidth: "3" }}
              title="https://github.com/FranciscoAverruz"
            > GitHub </ContactButton>
          </div>
        </div>
        
        {/* CV buttons section  ******************************************************/}
        <div className="w-full"> 
          <span
            className={`${
              isContactPage
                ? "md:block w-full flex subtitle mb-4 justify-center tracking-tight"
                : "lg:hidden"
            } hidden`}
          > {t('CVBtnLabel')}</span>
          <div
            className={`${
              isContactPage ? "lg:gap-16 lg:w-full" : "md:w-48 lg:w-full"
            } btnStyle w-48 md:w-full hover:cursor-pointer flex items-center text-sm justify-between`}
          >
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
