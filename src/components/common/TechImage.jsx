/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const TechImage = ({ tech }) => {

  if (tech.pic.light && tech.pic.dark) {
    return (
      <div className="relative">
        <img
          src={tech.pic.light}
          alt={`${tech.name} Light Logo`}
          className="dark:hidden w-14 techFx"
          loading="lazy"
        />
        <img
          src={tech.pic.dark}
          alt={`${tech.name} Dark Logo`}
          className="hidden dark:block w-14 techFx"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <img
      src={tech.pic}
      alt={tech.name}
      className="flex items-center justify-center techFx"
      loading="lazy"
    />
  );
};

export default TechImage;
