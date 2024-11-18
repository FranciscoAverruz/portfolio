/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useLocation } from "react-router-dom";
import { useTechnologies } from "@hooks/useTechnologies";
import reactLight from "@imgTech/reactLight.svg";
import reactDark from "@imgTech/reactDark.svg"; 
import TechCategory from '@common/TechCategory.jsx';

const Tech = () => {
  const { t, frontend, backend, framework, libraries, database, testing, versionControl, allTechnologies } = useTechnologies();
  
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  return (
    <div className={`px-0 mb-5 md:mb-0 ${isContactPage ? 'grid-cols-1 px-0' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-1'}`}>
      {isContactPage ? (
        // Renderiza una sola fila con todas las tecnologías
        <section className="flex flex-row flex-wrap gap-[2px] md:gap-1 justify-center">
          {allTechnologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center rounded-none md:rounded-xl m-[0.5px] md:m-0 p-0 md:p-2 w-[22px] h-[22px] md:w-10 md:h-10 md:shadow-md md:bg-white/70 md:dark:bg-dark-secondary/70 hover:scale-95 transition-all ease-in-out duration-100 group"
              title={tech.name}
            >
              {tech.name === "react" ? (
                <div className="relative">
                  <img src={reactLight} alt="React Logo" className="dark:hidden w-14 techFx" />
                  <img src={reactDark} alt="React Logo" className="hidden dark:block w-14 techFx" />
                </div>
              ) : tech.name === "mySQL" ? (
                <div className="relative">
                  <img src={tech.pic.light} alt="MySQL Logo" className="dark:hidden w-14 techFx" />
                  <img src={tech.pic.dark} alt="MySQL Logo" className="hidden dark:block w-14 techFx" />
                </div>
              ) : (
                <img src={tech.pic} alt={tech.name} className="flex items-center justify-center techFx" />
              )}
            </div>
          ))}
        </section>
      ) : (
        // Renderiza la estructura completa por categorías
        <>
          <TechCategory title="Frontend" technologies={frontend} />
          <TechCategory title="Backend" technologies={backend} />
          <TechCategory title="Framework" technologies={framework} />
          <TechCategory title={t("libraries")} technologies={libraries} />
          <TechCategory title={t("database")} technologies={database} />
          <TechCategory title={t("testing")} technologies={testing} />
          <TechCategory title={t("versionsControl")} technologies={versionControl} />
        </>
      )}
    </div>
  );
};

export default Tech;
