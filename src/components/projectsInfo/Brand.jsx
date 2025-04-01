/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import iconShortX from "/iconShortX.png";

const Brand = ({fontType, name, sloganColor, slogan}) => {
  return (
    <aside className="flex flex-row mt-10 md:mt-0">
      <span>
        <img
          src={iconShortX}
          alt="Project logo"
          loading="lazy"
          className="w-12 h-12 aspect-square mr-5 drop-shadow-md"
        />
      </span>
      <span className="flex flex-col md:flex-row md:items-end title text-lg w-full">
        <span className={`text-4xl mr-2 ${fontType}`}>
          {name}
        </span>
        <span className={`${sloganColor} text-sm md:text-xl brightness-50 dark:brightness-100`}>
          {slogan}
        </span>
      </span>
    </aside>
  );
};

export default Brand;
