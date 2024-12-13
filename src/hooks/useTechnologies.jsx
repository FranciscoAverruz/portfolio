import { useTranslation } from "react-i18next";
import javascript from "@imgTech/javascript.svg";
import express from "@imgTech/express.svg";
import nodejs from "@imgTech/nodejs.svg";
import html from "@imgTech/html5.svg";
import css from "@imgTech/css3.svg";
import mongodb from "@imgTech/mongodb.svg";
import mysqlLight from "@imgTech/mysqlLight.svg";
import mysqlDark from "@imgTech/mysqlDark.svg";
import cypress from "@imgTech/cypress.svg";
import postman from "@imgTech/postman.svg";
import tailwind from "@imgTech/tailwindCSS.svg";
import git from "@imgTech/git.svg";
import gitHub from "@imgTech/gitHub.svg";
import reactLight from "@imgTech/reactLight.svg";
import reactDark from "@imgTech/reactDark.svg";
import jest from "@imgTech/jest.svg";
import swagger from "@imgTech/swagger.svg";

export const useTechnologies = () => {
  const { t } = useTranslation();

  const backend = [{ name: "node.js", pic: nodejs }];
  const frontend = [
    { name: "javaScript", pic: javascript },
    { name: "HTML", pic: html },
    { name: "CSS", pic: css },
  ];

  const framework = [
    { name: "express", pic: express },
    { name: "tailwind", pic: tailwind },
    { name: "react", pic: { light: reactLight, dark: reactDark } },
  ];

  const database = [
    { name: "mongoDB", pic: mongodb },
    { name: "mySQL", pic: { light: mysqlLight, dark: mysqlDark } },
  ];

  const testing = [
    { name: "cypress", pic: cypress },
    { name: "postman", pic: postman },
    { name: "Jest", pic: jest },
  ];

  const versionControl = [
    { name: "git", pic: git },
    { name: "gitHub", pic: gitHub },
  ];

  const libraries = [
    { name: "Swagger", pic: swagger },
  ];

  const allTechnologies = [
    ...frontend,
    ...backend,
    ...framework,
    ...libraries,
    ...database,
    ...testing,
    ...versionControl,
  ];

  return {
    frontend,
    backend,
    framework,
    libraries,
    database,
    testing,
    versionControl,
    allTechnologies,
    t
  };
};
