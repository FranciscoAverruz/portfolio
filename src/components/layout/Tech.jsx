/* eslint-disable no-unused-vars */
import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useTechnologies } from "@hooks/useTechnologies";
import TechImage from '@common/TechImage';
import TechCategory from '@common/TechCategory.jsx';

const Tech = () => {
  const { t, frontend, backend, framework, libraries, database, testing, versionControl, allTechnologies } = useTechnologies();
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  const techCategories = useMemo(() => ({
    frontend,
    backend,
    framework,
    libraries,
    database,
    testing,
    versionControl
  }), [frontend, backend, framework, libraries, database, testing, versionControl]);

  return (
    <div className={`px-0 mb-5 md:mb-0 ${isContactPage ? 'grid-cols-1 px-0' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-1'}`}>
      {isContactPage ? (
        <section className="flex flex-row flex-wrap gap-[2px] md:gap-1 justify-center">
          {allTechnologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center rounded-none md:rounded-xl m-[0.5px] md:m-0 p-0 md:p-2 w-[22px] h-[22px] md:w-10 md:h-10 md:shadow-md md:bg-white/70 md:dark:bg-dark-secondary/70 hover:scale-95 transition-all ease-in-out duration-100 group"
              title={tech.name}
            >
              <TechImage tech={tech} aspectRatio="1/1" />
            </div>
          ))}
        </section>
      ) : (
        <>
          {Object.entries(techCategories).map(([category, technologies]) => (
            <TechCategory key={category} title={t(category)} technologies={technologies} />
          ))}
        </>
      )}
    </div>
  );
};

export default Tech;
