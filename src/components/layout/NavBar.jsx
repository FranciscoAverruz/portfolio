/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// src/components/layout/NavBar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  PiFolderOpenDuotone,
  PiFolderOpenFill,
} from "react-icons/pi";
import { BiConversation, BiSolidConversation } from "react-icons/bi";
import { HiOutlineUser, HiUser } from "react-icons/hi2";

const NavBar = ({ darkLangButton, socialButton }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const [hoveredLink, setHoveredLink] = useState(null);

  const LinksMain = [
    {
      name: "aboutNav",
      link: "/about",
      icons: { default: <HiOutlineUser />, active: <HiUser /> },
    },
    {
      name: "projectsNav",
      link: "/projects",
      icons: { default: <PiFolderOpenDuotone />, active: <PiFolderOpenFill /> },
    },
    // {
    //   name: "experienceNav",
    //   link: "/experience",
    //   icons: { default: <PiBriefcaseDuotone />, active: <PiBriefcaseFill /> },
    // },
    {
      name: "contactNav",
      link: "/contact",
      icons: { default: <BiConversation />, active: <BiSolidConversation /> },
    },
  ];

  const isActiveLink = (path) => {
    if (path === "/about" && (location.pathname === "/" || location.pathname === "/about")) {
      return true;
    }
    return location.pathname === path;
  };

  return (
    <nav className="text-light-subtitle dark:text-dark-subtitle flex h-14 lg:h-12 justify-center items-center relative drop-shadow-sm">
      <ul className="flex flex-row gap-4 md:gap-16 lg:gap-20 z-50 md:z-30 tracking-wide">
        {LinksMain.map((item) => (
          <li
            key={item.name}
            className="flex justify-center flex-row"
            onMouseEnter={() => setHoveredLink(item.name)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <Link
              to={item.link}
              className={`flex flex-col w-full md:flex-row gap-0 md:gap-3 text-sm font-medium items-center lg:items-start ${
                isActiveLink(item.link)
              ? "text-light-active dark:text-dark-active"
              : "text-light-subtitle dark:text-dark-subtitle hover:text-light-active dark:hover:text-dark-active focus:text-active"
          } focus:outline-none focus:text-active dark:focus:text-active`
            }
            >
              <div
                className={`flex text-2xl justify-center  ${
                  isActiveLink(item.link) || hoveredLink === item.name
                    ? "font-extralight"
                    : ""
                }`}
              >
                {isActiveLink(item.link) || hoveredLink === item.name
                  ? item.icons.active
                  : item.icons.default}
              </div>
              <div className="text-sm">{t(item.name)}</div>
            </Link>
          </li>
        ))}
      </ul>
       {socialButton && (
        <div className="absolute left-4 lg:right-0 top-1/2 transform -translate-y-1/2">
          {socialButton}
        </div>
      )}
      {darkLangButton && (
        <div className="absolute right-4 lg:right-0 top-1/2 transform -translate-y-1/2">
          {darkLangButton}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
