/* eslint-disable no-unused-vars */
import React from 'react'
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import ProjectCard from '@sections/ProjectCard.jsx';

const Projects = () => {
  const { t } = useTranslation();

  return (
    // <div className="p-0 mt-10 md:mt-5 lg:w-[70vw]">
    <div className="p-0 mt-10 md:mt-20 lg:w-[70vw] flex items-center justify-center dark:text-white transition-all duration-300">
    <section className="flex flex-col items-center text-center p-6 border-4 border-dashed border-yellow-400 dark:border-yellow-500 rounded-lg bg-white/40 dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
        🚧 {t('projects.pTitle')} 🚧
      </h2>
      <p className="text-lg text-yellow-700 dark:text-yellow-300 font-semibold mb-6">
        {t("projects.pFuture")}
      </p>
      <div className="w-52 h-52 overflow-hidden rounded-full shadow-lg mb-6">
        <img
          src={
            'https://images.pexels.com/photos/5749149/pexels-photo-5749149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          }
          alt="En construcción"
          className="w-full h-full object-cover opacity-90"
        />
      </div>
      <Link to="/contact">
        <button className="mt-4 px-6 py-2 bg-yellow-500 dark:bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 dark:hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:focus:ring-yellow-400 focus:ring-offset-2">
          {t("projects.pContact")}
        </button>
      </Link>
    </section>
    {/* <ProjectCard /> */}
  </div>
  );
}

export default Projects