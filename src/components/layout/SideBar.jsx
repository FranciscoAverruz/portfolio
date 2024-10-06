/* eslint-disable no-unused-vars */
import React from "react";
import { useTranslation } from "react-i18next";

const SideBar = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="flex flex-col sm:flex-row lg:flex-col justify-center md:justify-start lg:justify-center md:pl-5 lg:pl-0 items-center w-full">
      <div>
        <div className="flex items-center md:items-start lg:items-center  flex-col gap-0 ">
          <div className="flex flex-row">
            <h1>{t("greeting")}</h1>
            <span>👋,</span>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-col items-center md:gap-4 lg:gap-0">
            <span>{t("IAm")}</span>
            <span className="text-xl text-light-txt dark:text-white font-bold py-2">Francisco Averruz</span>
          </div>
          <p className="text-center md:text-left lg:text-center lg:px-10">
            {t("profession")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
