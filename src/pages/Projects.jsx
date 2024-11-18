/* eslint-disable no-unused-vars */
import React from 'react'
import { useTranslation } from "react-i18next";
import ProjectCard from '@sections/ProjectCard.jsx';

const Projects = () => {

  return (
    <div className="p-0 mt-10 md:mt-5 lg:w-[70vw]">
      <ProjectCard />
    </div>
  );
}

export default Projects