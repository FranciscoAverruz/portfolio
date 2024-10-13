/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useTranslation } from "react-i18next";
import javascript from "@imgTech/javascript.svg";
import express from "@imgTech/express.svg";
import nodejs from "@imgTech/nodejs.svg";
import html from "@imgTech/html5.svg";
import css from "@imgTech/css3.svg";
import react from "@imgTech/react.svg";
import mongodb from "@imgTech/mongodb.svg";
import mysql from "@imgTech/mysql.svg";
import cypress from "@imgTech/cypress.svg";
import postman from "@imgTech/postman.svg";
import tailwind from "@imgTech/tailwindCSS.svg";
import git from "@imgTech/git.svg";
import gitHub from "@imgTech/gitHub.svg";

const TechCategory = ({ title, technologies }) => (
  <div className="p-3 shadow-lg bg-white/35 dark:bg-dark-accent/35 rounded-2xl">
    <h2 className="subtitle border-b-2">{title}</h2>
    <div className="flex flex-wrap md:flex-row justify-center items-center gap-2 drop-shadow">
      {technologies.map((tech, index) => (
        <div key={index} className="flex flex-col justify-start items-center">
          <img
            src={tech.pic}
            alt={tech.name}
            className={`
              ${tech.name === "express" || tech.name === "Node.js" || tech.name === "MySQL"
                ? "w-16 h-16 md:w-20 md:h-20 mx-2"
                : tech.name === "Cypress" || tech.name === "Postman"
                ? "w-20 h-20 md:w-24 md:h-24 lg:w-20 lg:h-20 mx-2"
                : tech.name === "Git" || tech.name === "Github"
                ? "w-12 h-12 md:w-14 md:h-14 lg:w-12 lg:h-12 mx-2"
                : tech.name === "JavaScript" || tech.name === "HTML" || tech.name === "CSS" || tech.name === "Tailwind"
                ? "w-10 h-10"
                : "w-10 h-10 md:w-14 md:h-14"  // Clases para las tecnologías no listadas
              }
            `}
          />
          {(tech.name === "Tailwind" || tech.name === "Git" || tech.name === "Github") && (
            <h3 className="text-sm text-center">{tech.name}</h3>
          )}
        </div>
      ))}
    </div>
  </div>
);


const Tech = () => {
  const { t } = useTranslation();

  const backend = [
    { name: "Express", pic: express },
    { name: "Node.js", pic: nodejs },
  ];
  const frontend = [
    { name: "JavaScript", pic: javascript },
    { name: "HTML", pic: html },
    { name: "CSS", pic: css },
    { name: "Tailwind", pic: tailwind },
  ];
  const framework = [
    { name: "React", pic: react },
  ];
  const database = [
    { name: "MongoDB", pic: mongodb },
    { name: "MySQL", pic: mysql },
  ];
  const testing = [
    { name: "Cypress", pic: cypress },
    { name: "Postman", pic: postman },
  ];
  const versionControl = [
    { name: "Git", pic: git },
    { name: "Github", pic: gitHub },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-5 px-2 md:px-16 h-full drop-shadow bg-gre">
      <TechCategory title="Frontend" technologies={frontend} />
      <TechCategory title="Backend" technologies={backend} />
      <TechCategory title="Framework" technologies={framework} />
      <TechCategory title={t("database")} technologies={database} />
      <TechCategory title={t("testing")} technologies={testing} />
      <TechCategory title={t("versionsControl")} technologies={versionControl} />
    </div>
  );
};

export default Tech;
