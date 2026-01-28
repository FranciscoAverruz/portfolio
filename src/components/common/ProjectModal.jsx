/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import { IoReturnUpBack } from "react-icons/io5";
import { LuGithub } from "react-icons/lu";
import { IoCheckbox } from "react-icons/io5";
import { MdOutlineLaptopMac } from "react-icons/md";
import { useTranslation } from "react-i18next";
import Brand from "@projectsInfo/Brand.jsx";

const ProjectModal = ({ project, closeModal }) => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const galleryRef = useRef(null);

  const handleImageClick = (image, index, event) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % project.gallery.length;
    setSelectedImage(project.gallery[newIndex]);
    setCurrentIndex(newIndex);
  };

  const prevImage = () => {
    const newIndex =
      (currentIndex - 1 + project.gallery.length) % project.gallery.length;
    setSelectedImage(project.gallery[newIndex]);
    setCurrentIndex(newIndex);
  };

  const handlePrevScroll = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: -150, behavior: "smooth" });
    }
  };

  const handleNextScroll = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: 150, behavior: "smooth" });
    }
  };

  return (
    <main
      className="absolute h-full gap-3 p-5 overflow-y-scroll bg-[#a8aaae] dark:bg-[#0d1218]
      grid-rows-auto grid grid-cols-1 md:grid-cols-[auto_auto_1fr_1fr] lg:grid-cols-[auto_auto_1fr_1fr_auto_auto] rounded-xl md:rounded-none md:rounded-b-xl text-light-generalText dark:text-dark-generalText"
    >
      {/* **** Title **************************************************************** */}
      <section className="col-span-1 md:col-span-4 lg:col-span-6 text-">
        <Brand
          iconShortX={project.iconShortX}
          fontType={project.fontType}
          name={project.name}
          sloganColor={project.sloganColor}
          slogan={project.slogan}
        />
      </section>

      {/* **** Main Image *********************************************************** */}
      <section className="bgProjectsDetail col-span-1 md:col-span-2 overflow-hidden rounded-lg h-40 md:h-full w-full md:w-52 lg:w-[29rem] relative flex justify-start items-start">
        <img
          src={project.mainImage}
          loading="lazy"
          alt="Imagen principal del proyecto"
          className="absolute w-full h-full -md:right-5 md:object-right-bottom object-cover lg:object-center cursor-pointer hover:scale-110 transition-transform duration-200"
        />
      </section>

      {/* **** description ********************************************************** */}
      <section className="bgProjectsDetail col-span-1 md:col-span-2 p-5 rounded-lg">
        {project.fullDescription}
      </section>

      {/* **** tech ***************************************************************** */}
      <section className="bgProjectsDetail col-span-1 md:col-span-4 lg:col-span-2 lg:row-span-2 lg:w-44 flex flex-col px-2 justify-start rounded-lg">
        <h3 className="text-sm subtitle tracking-normal">
          {t("projectsInfo.technologies")}
        </h3>
        <span className="flex gap-1 flex-wrap mt-1 mb-2">
          {project.mainTech?.map((techMain, idx) => (
            <p
              key={idx}
              className="flex items-center h-6 dark:brightness-75 hover:brightness-125 dark:hover:brightness-150 drop-shadow hover:drop-shadow-lg cursor-pointer transition-all duration-200"
            >
              <strong
                className={` ${techMain.iconBg} text-white h-full flex items-center px-1 rounded-l-lg text-sm shadow-sm`}
              >
                {techMain.icon}
              </strong>
              <span
                className={`${techMain.nameBg} ${
                  techMain.textColor || "text-black"
                } h-full flex items-center px-2.5 rounded-r-lg text-xs shadow-sm`}
              >
                {techMain.name}
              </span>
            </p>
          ))}
          {project.addTech?.map((techAdd, i) => (
            <p
              key={i}
              className="flex items-center h-6 dark:brightness-75 hover:brightness-125 dark:hover:brightness-150 drop-shadow hover:drop-shadow-lg cursor-pointer transition-all duration-200"
            >
              <strong
                className={`${techAdd.iconBg} text-white h-full flex items-center px-1 rounded-l-lg text-sm shadow-sm`}
              >
                {techAdd.icon}
              </strong>
              <span
                className={`${techAdd.nameBg} ${
                  techAdd.textColor || "text-black"
                } h-full flex items-center px-2.5 rounded-r-lg text-xs shadow-sm`}
              >
                {techAdd.name}
              </span>
            </p>
          ))}
        </span>
      </section>

      {/* **** key features ********************************************************* */}
      <section className="bgProjectsDetail col-span-1 md:col-span-4 lg:col-span-3 flex flex-col py-1 px-2 justify-center rounded-lg">
        <h3 className="text-base subTSingleProject tracking-normal ">
          {t("projectsInfo.keyFeat")}
        </h3>
        <span className="flex gap-1 w-full flex-wrap mt-1 mb-2 text-sm">
          {project.keyFeatures.map((tech, i) => (
            <p
              key={i}
              className="flex items-start py-1 px-2 gap-1 rounded-lg drop-shadow-sm bg-[#e1e3e8] dark:bg-[#1a2634] hover:drop-shadow-lg hover:brightness-110 dark:hover:brightness-150 cursor-pointer opacity-70"
            >
              <span className="pt-1">
                <IoCheckbox />
              </span>
              {tech}
            </p>
          ))}
        </span>
      </section>
      {/* **** Links **************************************************************** */}
      <section className="bgProjectsDetail col-span-1 md:col-span-4 lg:col-span-1 p-2 rounded-lg flex  flex-col justify-center items-center">
        <p className="footerGitHub btnDemo flex flex-col md:flex-row lg:flex-col items-start gap-0 py-0">
          <span className="flex flex-row items-center w-24 subTSingleProject">
            <LuGithub className="paragraph iconFooter" />
            {t("client")}
          </span>
          <a
            href={project.githubFrontEndLink}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-animate subtitle text-sm flex flex-col w-full"
          >
            <span className="truncate -translate-y-2 pl-8">
              {project.githubFrontEndText}
            </span>
          </a>
        </p>
        <p className="footerGitHub btnDemo flex flex-col md:flex-row lg:flex-col items-start gap-0 py-0">
          <span className="flex flex-row items-center w-24 subTSingleProject">
            <LuGithub className="paragraph iconFooter" />
            {t("server")}
          </span>
          <a
            href={project.githubBackendLink}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-animate subtitle text-sm flex flex-col w-full"
          >
            <span className="truncate -translate-y-2  pl-8">
              {project.githubBackendText}
            </span>
          </a>
        </p>
        <p className="footerGitHub btnDemo flex flex-col md:flex-row lg:flex-col items-start gap-0 py-0">
          <span className="flex flex-row items-center w-24 subTSingleProject">
            <MdOutlineLaptopMac className="paragraph iconFooter" />
            {t("demo")}
          </span>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-animate subtitle text-sm flex flex-row w-full"
          >
            <span className="truncate -translate-y-2  pl-8">
              {project.liveLink}
            </span>
          </a>
        </p>
      </section>

      {/* **** carousel ************************************************************* */}
      <section className="bgProjectsDetail col-span-1 md:col-span-4 lg:col-span-6 flex items-center py-3 px-1 md:px-5 gap-2 w-full rounded-lg">
        <button
          onClick={handlePrevScroll}
          className="bg-dark-secondary text-white p-2 rounded-full hover:bg-dark-secondary/50 transition-all"
        >
          {"<"}
        </button>

        <div
          ref={galleryRef}
          className="flex gap-1 overflow-x-hidden w-full py-1 scroll-smooth no-scrollbar"
        >
          {project.thumbnails.map((thumbnail, idx) => (
            <div
              key={idx}
              className={`w-16 h-16 md:w-32 md:h-20 flex-shrink-0 transition-all no-scrollbar ${
                currentIndex === idx
                  ? "scale-110 border-2 border-[#cdcfd3] dark:border-[#111922] rounded-xl bg-[#cdcfd3] dark:bg-[#111922]"
                  : ""
              }`}
              onClick={() => handleImageClick(project.gallery[idx], idx)}
            >
              <img
                src={thumbnail}
                loading="lazy"
                alt={`Miniatura ${idx + 1}`}
                className="w-full h-full object-cover rounded-lg cursor-pointer border-transparent border-4 hover:border-[#cdcfd3] hover:dark:border-[#111922] transition-all duration-200 aspect-square"
              />
            </div>
          ))}
        </div>

        <button
          onClick={handleNextScroll}
          className="bg-dark-secondary text-white p-2 rounded-full hover:bg-dark-secondary/80 transition-all"
        >
          {">"}
        </button>
      </section>

      {/* **** return button ******************************************************** */}
      <button
        onClick={closeModal}
        className="bgProjectsDetail fixed top-1 right-1 lg:right-6 shadow-md px-2 py-1 text-2xl rounded-lg"
      >
        <IoReturnUpBack />
      </button>

      {/* **** image modal ********************************************************** */}
      {selectedImage && (
        <section className="fixed inset-0 bg-black/90 flex justify-center items-center z-50">
          <article className="relative bg-light-secondary dark:bg-dark-secondary p-6 rounded-lg flex items-center">
            <div className="relative">
              <button
                onClick={closeImageModal}
                className="absolute top-0 right-0 md:-top-4 md:-right-4 text-white text-xl btnStyle"
              >
                X
              </button>
              <img
                src={selectedImage}
                alt="Imagen seleccionada"
                className="max-w-[90vw] max-h-[70vh] object-contain rounded-lg"
              />
            </div>
            <button
              onClick={prevImage}
              className="absolute left-4 md:-left-4 text-white text-2xl btnStyle"
            >
              {"<"}
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 md:-right-4 text-white text-2xl btnStyle"
            >
              {">"}
            </button>
          </article>
        </section>
      )}
    </main>
  );
};

export default ProjectModal;
