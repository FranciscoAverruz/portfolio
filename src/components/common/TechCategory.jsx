/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import reactLight from "@imgTech/reactLight.svg";
import reactDark from "@imgTech/reactDark.svg";

const TechCategory = ({ title, technologies }) => {
  return (
    <section className="p-0 md:p-3 items-center">
      <h2 className="subtitle border-b-2 border-light-secondary dark:border-dark-secondary mb-2">
        {title}
      </h2>
      <div className="rounded-lg">
        <div className="flex flex-row justify-start items-center gap-2 drop-shadow-lg h-full flex-wrap">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center rounded-xl p-2 w-14 h-14 shadow-md bg-white/70 dark:bg-dark-secondary/70 hover:scale-95 transition-all ease-in-out duration-100 group"
              title={tech.name}
            >
              {tech.name === "react" ? (
                <div className="relative">
                  <img
                    src={reactLight}
                    alt="React Logo"
                    className="dark:hidden w-14 techFx"
                  />
                  <img
                    src={reactDark}
                    alt="React Logo"
                    className="hidden dark:block w-14 techFx"
                  />
                </div>
              ) : tech.name === "mySQL" ? (
                <div className="relative">
                  <img
                    src={tech.pic.light}
                    alt="MySQL Logo"
                    className="dark:hidden w-14 techFx"
                  />
                  <img
                    src={tech.pic.dark}
                    alt="MySQL Logo"
                    className="hidden dark:block w-14 techFx"
                  />
                </div>
              ) : (
                <img
                  src={tech.pic}
                  alt={tech.name}
                  className="flex items-center justify-center techFx"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechCategory;
