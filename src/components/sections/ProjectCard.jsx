/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import useProjects from "@hooks/useProjects.jsx";
import ProjectModal from "@common/ProjectModal.jsx";
import { LuGithub } from "react-icons/lu";
import { CgPlayButtonO } from "react-icons/cg";
import ReactDOM from "react-dom";

const ProjectCard = () => {
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
    <div className="flex flex-wrap flex-col gap-3 justify-center mt-10">
      {projects.map((project, index) => (
        <div
          key={index}
          className="border dark:border-light-title/70 p-3 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex justify-between bg-light-background/50 dark:bg-dark-background/50"
        >
          <div className="flex flex-col md:flex-row w-full">
            <div className="overflow-hidden rounded-lg w-full md:w-48 h-32">
              <img
                src={project.mainImage}
                alt={project.name}
                className="w-full h-full object-cover cursor-pointer hover:scale-110 transition-transform duration-200"
              />
            </div>

            <div className="flex flex-col w-full md:pl-4">
              <h2 className="title text-lg w-full my-2 md:my-auto">
                {project.name}
              </h2>

              <div className="flex justify-between h-full flex-col md:flex-row">
                <div className="flex flex-col md:px-5 justify-between w-full">
                  <div className="h-full w-full">
                    <p className="paragraph">{project.description}</p>
                  </div>

                  <div className="pt-2">
                    <h3 className="text-sm subtitle tracking-normal mb-1">
                      Tecnologías:
                    </h3>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, idx) => (
                        <div key={idx} className="flex items-center h-6">
                          <div
                            className={` ${tech.iconBg} h-full flex items-center px-1 rounded-l-lg text-sm shadow-sm`}
                          >
                            {tech.icon}
                          </div>
                          <span
                            className={`${tech.nameBg} h-full flex items-center px-2.5 rounded-r-lg text-xs shadow-sm`}
                          >
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <section className="flex md:flex-col gap-1 md:border-l-2 md:border-l-light-background/90 md:dark:border-l-dark-secondary/60 pl-0 md:pl-4 h-full justify-end mt-5 md:mt-0">
                  <div className="footerGitHub btnDemo">
                    <LuGithub className="paragraph iconFooter" />
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline-animate subtitle text-sm"
                    >
                      GitHub
                    </a>
                  </div>
                  <div className="footerGitHub btnDemo">
                    <CgPlayButtonO className="paragraph iconFooter" />
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline-animate subtitle text-sm"
                    >
                      Demo
                    </a>
                  </div>
                  <button
                    onClick={() => openModal(project)}
                    className="btnStyle"
                  >
                    Detalles
                  </button>
                </section>
              </div>
            </div>
          </div>
        </div>
      ))}

      {isModalOpen &&
        currentProject &&
        ReactDOM.createPortal(
          <ProjectModal
            project={currentProject}
            closeModal={closeModal}
            className="absolute w-screen h-screen"
          />,
          document.body
        )}
    </div>
  );
};

export default ProjectCard;
