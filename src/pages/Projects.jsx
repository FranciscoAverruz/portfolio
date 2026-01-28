/* eslint-disable no-unused-vars */
import React from 'react'
import { useTranslation } from "react-i18next";
import ProjectCard from '@sections/ProjectCard.jsx';

const Projects = () => {
  const { t } = useTranslation();

  return (
  <aside className="w-full h-full md:w-[90vw] lg:w-[85vw] flex items-start justify-start dark:text-white transition-all duration-300">
    <ProjectCard />
  </aside>
  );
}

export default Projects