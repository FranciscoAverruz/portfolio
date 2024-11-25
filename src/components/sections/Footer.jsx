/* eslint-disable no-unused-vars */
import React from "react";
import Tech from "@layout/Tech.jsx";
import { LuGithub } from "react-icons/lu";
import { useTranslation } from "react-i18next";
import { IoIosAt } from "react-icons/io";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="layout col-span-1 row-span-1 row-start-3 md:row-start-4 lg:row-start-3 lg:col-span-4 w-full col-start-1 rounded-b-2xl flex items-center justify-center h-full py-2">
    <section className="px-5 md:px-2 lg:px-1 xl:px-5 w-full h-full flex flex-col-reverse lg:flex-row justify-center md:justify-between gap-0">
      <div className="flex items-start justify-start md:items-center md:justify-center flex-col md:flex-row py-0 mt-0 md:py-2 lg:py-0 gap-1 md:gap-2">
        <div className="flex gap-1 paragraph justify-center items-center text-xs md:text-md lg:text-sm">
          <IoIosAt className="paragraph iconFooter" />
          <span>franciscoaverruz7@gmail.com</span>
        </div>
        <div className="flex justify-center items-center gap-1 footerGitHub text-xs md:text-md lg:text-sm">
          <LuGithub className="paragraph iconFooter" />
          <a
            href="https://github.com/FranciscoAverruz/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="paragraph underline-animate"
          >
            {t("portGithub")}
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center m-0 -mb-2 md:m-0 md:-mb-0"><Tech /></div>
    </section>
    </footer>
  );
};

export default Footer;
