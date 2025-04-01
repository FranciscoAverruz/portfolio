/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import useProjects from "@hooks/useProjects.jsx";
import ProjectModal from "@common/ProjectModal.jsx";
import { LuGithub } from "react-icons/lu";
import { CgPlayButtonO } from "react-icons/cg";
import { useTranslation } from "react-i18next";
import Brand from "@projectsInfo/Brand.jsx"

const ProjectCard = () => {
  const { t } = useTranslation();
  const projects = useProjects();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const openModal = (project) => {
    setCurrentProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentProject(null);
  };

  return (
    <main className="flex flex-wrap flex-col gap-3 justify-center mt-10 w-full">
      {projects.map((project, index) => (
        <aside
          key={index}
          className="border dark:border-light-title/70 p-3 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex justify-between bg-light-background dark:bg-dark-background"
        >
          <section className="flex flex-col md:flex-row w-full">
            <a className="overflow-hidden rounded-lg w-full md:w-80 shadow-md hover:shadow-xl">
              <img
                src={project.mainImage}
                loading="lazy"
                alt={project.name}
                className="w-full h-full object-cover object-center cursor-pointer hover:scale-110 transition-transform duration-200"
              />
            </a>

            <article className="flex flex-col w-full md:pl-4">
              <Brand 
                iconShortX= {project.iconShortX}
                fontType= {project.fontType}
                name= {project.name}
                sloganColor= {project.sloganColor}
                slogan= {project.slogan}
              />
              <div className="flex justify-between h-full flex-col md:flex-row">
                <div className="flex flex-col md:px-5 justify-between w-full">
                  <p className="paragraph h-full w-full pt-5">
                    {project.description}
                  </p>
                  <div className="pt-2">
                    <h3 className="text-sm subtitle tracking-normal mb-1">
                      {t("projectsInfo.technologies")}
                    </h3>
                    <div className="flex flex-wrap gap-1">
                      {project.mainTech.map((tech, idx) => (
                        <div
                          key={idx}
                          className="flex items-center h-6 dark:brightness-75 hover:brightness-125 dark:hover:brightness-150 drop-shadow hover:drop-shadow-lg cursor-pointer transition-all duration-200"
                        >
                          <div
                            className={`${tech.iconBg} text-white h-full flex items-center px-1 rounded-l-lg text-sm shadow-sm`}
                          >
                            {tech.icon}
                          </div>
                          <span
                            className={`${tech.nameBg} ${
                              tech.textColor || "text-black"
                            } h-full flex items-center px-2.5 rounded-r-lg text-xs shadow-sm`}
                          >
                            {tech.name}
                          </span>
                        </div>
                      ))}
                      <span className="text-xl">...</span>
                    </div>
                  </div>
                </div>

                <section className="flex flex-col gap-1 md:border-l-2 md:border-l-light-background/90 md:dark:border-l-dark-secondary/60 pl-0 md:pl-4 h-full justify-end mt-5 md:mt-0">
                  <article className="flex flex-row md:flex-col">
                    <p className="footerGitHub btnDemo">
                      <LuGithub className="paragraph iconFooter" />
                      <a
                        href={project.githubFrontEnd}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline-animate subtitle text-sm"
                      >
                        {t("client")}
                      </a>
                    </p>
                    <p className="footerGitHub btnDemo">
                      <LuGithub className="paragraph iconFooter" />
                      <a
                        href={project.githubBackend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline-animate subtitle text-sm"
                      >
                        {t("server")}
                      </a>
                    </p>
                    <p className="footerGitHub btnDemo">
                      <CgPlayButtonO className="paragraph iconFooter" />
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline-animate subtitle text-sm"
                      >
                        {t("demo")}
                      </a>
                    </p>
                  </article>
                  <button
                    onClick={() => openModal(project)}
                    className="btnStyle"
                  >
                    {t("details")}
                  </button>
                </section>
              </div>
            </article>
          </section>
        </aside>
      ))}

      {isModalOpen && currentProject && (
        <aside className="fixed left-0 top-0 w-full h-full">
          <ProjectModal project={currentProject} closeModal={closeModal} />
        </aside>
      )}
    </main>
  );
};

export default ProjectCard;
