/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";

const ProjectModal = ({ project, closeModal }) => {
  const galleryRef = useRef();
  const [selectedImage, setSelectedImage] = useState(null);

  const handlePrev = () => {
    galleryRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const handleNext = () => {
    galleryRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="fixed inset-0 bg-light-primary/90 dark:bg-dark-primary/90 flex justify-center items-center z-50">
      <div className="bg-light-secondary dark:bg-dark-background rounded-xl p-6 w-full max-w-4xl relative shadow-md h-fit">
        <h2 className="title mb-4">{project.name}</h2>

        <div className="flex flex-col lg:flex-row items-start md:justify-between shadow-md rounded-xl bg-light-background/60 dark:bg-dark-secondary/70 w-full">
          <section className="w-full lg:w-[75.5%] md:border-r-2 md:border-r-light-background/90 md:dark:border-r-dark-secondary/60">
            <div className="flex flex-col md:flex-row w-full shadow-md">
              {/* main image container  ****************************************************************************** */}
              <span className="overflow-hidden rounded-lg h-32 md:w-64 md:h-fit m-2 md-0 md:mt-2 md:ml-2">
                <img
                  src={project.mainImage}
                  alt="Imagen principal del proyecto"
                  className="w-full h-full object-cover cursor-pointer hover:scale-110 transition-transform duration-200"
                />
              </span>
              <span className="flex h-fit w-full justify-between flex-col md:flex-row px-3">
                <p className="paragraph my-5 md:my-0">
                  {project.fullDescription}
                </p>
              </span>
            </div>

            {/* *****************************************  CAROUSEL/GALERY  ***************************************** */}

            <section className="flex items-center py-3 gap-2 w-full">
              {/* prev  ************************************ */}
              <button
                onClick={handlePrev}
                className="bg-dark-secondary text-white p-2 rounded-full hover:bg-dark-secondary/80 transition-all"
              >
                {"<"}
              </button>
              {/* carousel container  ********************** */}
              <div
                ref={galleryRef}
                className="flex gap-2 overflow-x-auto w-full py-2 scroll-smooth"
                style={{
                  scrollbarWidth: "none",
                }}
              >
                {project.gallery.map((image, idx) => (
                  <div
                    key={idx}
                    className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0"
                    onClick={() => handleImageClick(image)}
                  >
                    <img
                      src={image}
                      alt={`Imagen de la galería ${idx + 1}`}
                      className="w-full h-full object-cover rounded-lg cursor-pointer hover:scale-110 transition-transform duration-200"
                    />
                  </div>
                ))}
              </div>
              {/* next  *********************************** */}
              <button
                onClick={handleNext}
                className="bg-dark-secondary text-white p-2 rounded-full hover:bg-dark-secondary/80 transition-all"
              >
                {">"}
              </button>
            </section>
          </section>

          {/* ******** Tech section ******** */}
          <section className="w-full flex px-2 pl-5 justify-center">
            <div className="w-full lg:w-44 my-2">
              <h3 className="text-sm subtitle tracking-normal">Tecnologías:</h3>
              <div className="flex gap-1 flex-wrap mt-1 mb-2">
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
          </section>
        </div>

        {/* close  ********************** */}
        <button
          onClick={closeModal}
          className="absolute btnStyle top-4 right-4 focus:outline-none"
        >
          X
        </button>
      </div>

      {/* Modal - shows a large image *********************************************************** */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div className="relative bg-light-secondary dark:bg-dark-secondary p-6 rounded-lg">
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 text-white text-xl btnStyle"
            >
              X
            </button>
            <img
              src={selectedImage}
              alt="Imagen seleccionada"
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectModal;
