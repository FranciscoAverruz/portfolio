/* eslint-disable no-unused-vars */
import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const SideBar = () => {
  const { t } = useTranslation();
  const location = useLocation(); 

  const isAboutPage = location.pathname === '/' || location.pathname === '/about';

  return (
    <section className="flex flex-col sm:flex-row lg:flex-col justify-center md:justify-start lg:justify-center md:pl-5 lg:pl-0 items-center w-full">
      <div>
        <div className="flex items-center md:items-start lg:items-center flex-col gap-0">
          {isAboutPage && ( 
            <div className="flex flex-row">
              <h1 className="text-light-subtitle dark:text-dark-subtitle">{t("greeting")}</h1>
              <span>👋,</span>
              <span className="ml-2 text-light-subtitle dark:text-dark-subtitle">{t("IAm")}</span>
            </div>
          )}
          <div className="flex items-center">
          {isAboutPage && ( <span 
              className="text-3xl font-semibold dark:font-normal text-light-txt text-light-title dark:text-dark-title my-5 md:my-auto lg:my-5" 
              style={{ fontFamily: 'Satisfy, cursive' }}
            >
              Francisco Averruz
            </span>)}
          </div>
          {isAboutPage && ( 
            <p className="paragraph text-center md:text-left lg:text-center lg:px-10">
              {t("profession")}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default SideBar;
