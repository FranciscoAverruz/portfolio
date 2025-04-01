import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import projectsData from "@projectsInfo/projects.json";
import { MdEmail } from "react-icons/md";
import {
  SiReact,
  SiReactrouter,
  SiTailwindcss,
  SiFramer,
  SiChartdotjs,
  SiJsonwebtokens,
  SiStripe,
  SiVite,
  SiJavascript,
  SiNpm,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiSocketdotio,
  SiCorsair,
  SiSwagger,
  SiJest,
} from "react-icons/si";

const iconMapping = {
  SiReact: <SiReact/>,
  SiReactrouter: <SiReactrouter/>,
  SiTailwindcss: <SiTailwindcss/>,
  SiFramer: <SiFramer/>,
  SiChartdotjs: <SiChartdotjs/>,
  SiJsonwebtokens: <SiJsonwebtokens/>,
  SiStripe: <SiStripe/>,
  SiVite: <SiVite/>,
  SiJavascript: <SiJavascript/>,
  SiNpm: <SiNpm/>,
  SiNodedotjs: <SiNodedotjs/>,
  SiExpress: <SiExpress/>,
  SiMongodb: <SiMongodb/>,
  SiSocketdotio: <SiSocketdotio/>,
  SiCorsair: <SiCorsair/>,
  SiSwagger: <SiSwagger/>,
  SiJest: <SiJest/>,
  MdEmail: <MdEmail/>
};

const useProjects = () => {
  const { t } = useTranslation();
  const [projects, setProjects] = useState([]); 

  useEffect(() => {
    const translatedProjects = projectsData.map((project) => ({
      ...project,
      description: t(project.description),
      fullDescription: t(project.fullDescription),
      keyFeatures: t(project.keyFeatures, { returnObjects: true }),
      mainTech: project.mainTech.map((tech) => ({
        ...tech,
        icon: iconMapping[tech.icon],
      })),
      addTech: project.addTech?.map((tech) => ({
        ...tech,
        icon: iconMapping[tech.icon],
      })),
    }));

    setProjects(translatedProjects);
  }, [t]);

  return projects;
};

export default useProjects;