import React from "react";
import { LanguageTag } from "./style";
import { FaCss3Alt, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaSquareGithub } from "react-icons/fa6";
import { MdWeb } from "react-icons/md";

const Tag = ({ language }) => {
  const languageIcons = {
    html: <FaHtml5 />,
    css: <FaCss3Alt />,
    javascript: <FaJs />,
    reactjs: <FaReact />,
    mongodb: <DiMongodb />,
    express: <SiExpress />,
    nodejs: <FaNodeJs />,
    github: <FaSquareGithub />,
    demo: <MdWeb />
  };

  return <LanguageTag lang={language}>{languageIcons[language] || language}</LanguageTag>;
};

export default Tag;
