import { useState } from "react";
import { FaReact, FaNodeJs, FaCss3Alt } from "react-icons/fa";
// import { SiMongodb, SiExpress, SiVuedotjs } from "react-icons/si";

const useProjects = () => {
  const [projects] = useState([
    {
      name: "Proyecto 1",
      description: "Descripción breve del proyecto 1",
      fullDescription: "Descripción detallada del proyecto 1...",
      mainImage:
        "https://images.pexels.com/photos/20453227/pexels-photo-20453227/free-photo-of-escritorio-tecnologia-teclado-auriculares.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Imagen principal del proyecto
      gallery: [
        "https://images.pexels.com/photos/21325133/pexels-photo-21325133/free-photo-of-escritorio-ordenador-portatil-oficina-tecnologia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/4590387/pexels-photo-4590387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ], // Galería de imágenes
      technologies: [
        {
          name: "React",
          icon: <FaReact />,
          iconBg: "bg-blue-600",
          nameBg: "bg-blue-300",
        },
        {
          name: "Node.js",
          icon: <FaNodeJs />,
          iconBg: "bg-green-600",
          nameBg: "bg-green-300",
        },
        {
          name: "CSS",
          icon: <FaCss3Alt />,
          iconBg: "bg-blue-500",
          nameBg: "bg-blue-200",
        },
      ],
      githubLink: "https://github.com/usuario/proyecto1",
      liveLink: "https://proyecto1.com",
    },
  ]);

  return projects;
};

export default useProjects;

/*
  Background colors, based on the name of the technology
       'React':  iconBg: 'bg-blue-600', nameBg: 'bg-blue-300' };
       'Node.js': iconBg: 'bg-green-600', nameBg: 'bg-green-300' };
       'CSS': iconBg: 'bg-blue-500', nameBg: 'bg-blue-200'};
       'Vue.js': iconBg: 'bg-green-500', nameBg: 'bg-green-200' };
       'Express': iconBg: 'bg-gray-700', nameBg: 'bg-gray-500' };
       'MongoDB': iconBg: 'bg-green-800', nameBg: 'bg-green-600' };
        default:  iconBg: 'bg-gray-400', nameBg: 'bg-gray-200' };
  */
