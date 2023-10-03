"use client";

import React, { useEffect } from "react";
import { Element } from "react-scroll";
import {
  FaBootstrap,
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiNextDotJs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiNextdotjs,
  SiTailwindcss,
  SiDaisyui,
  SiGit,
  SiFirebase,
  SiVercel,
} from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <Element name="skills">
      <div
        className="mb-20 md:mt-0 mt-20"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div>
          <h2
            className="font-bold text-center md:text-4xl text-lg text-white mb-20"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Skills
          </h2>
        </div>
        <div className="">
          <div
            className="grid grid-cols-4 md:grid-cols-8 gap-4 text-white justify-center items-center"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <SkillIcon
              icon={
                <FaHtml5 className="md:w-16 md:h-16 w-10 h-10 text-blue-500" />
              }
              text="Html5"
            />
            <SkillIcon
              icon={
                <FaCss3 className="md:w-16 md:h-16 w-10 h-10 text-blue-500" />
              }
              text="Css3"
            />
            <SkillIcon
              icon={
                <FaJs className="md:w-16 md:h-16 w-10 h-10 text-yellow-400" />
              }
              text="Javascript"
            />
            <SkillIcon
              icon={
                <FaReact className="md:w-16 md:h-16 w-10 h-10 text-blue-400" />
              }
              text="ReactJs"
            />
            <SkillIcon
              icon={
                <FaNodeJs className="md:w-16 md:h-16 w-10 h-10 text-green-400" />
              }
              text="NodeJs"
            />
            <SkillIcon
              icon={
                <FaBootstrap className="md:w-16 md:h-16 w-10 h-10 text-purple-600" />
              }
              text="Bootstrap"
            />
            <SkillIcon
              icon={
                <FaFigma className="md:w-16 md:h-16 w-10 h-10 text-purple-600" />
              }
              text="Figma"
            />
            <SkillIcon
              icon={
                <SiNextdotjs className="md:w-16 md:h-16 w-10 h-10 text-gray-400" />
              }
              text="NextJs"
            />
            <SkillIcon
              icon={
                <SiMongodb className="md:w-16 md:h-16 w-10 h-10 text-gray-500" />
              }
              text="Mongoose"
            />
            <SkillIcon
              icon={
                <SiMongodb className="md:w-16 md:h-16 w-10 h-10 text-green-500" />
              }
              text="MongoDb"
            />
            <SkillIcon
              icon={
                <SiTailwindcss className="md:w-16 md:h-16 w-10 h-10 text-blue-400" />
              }
              text="Tailwind Css"
            />
            <SkillIcon
              icon={
                <SiExpress className="md:w-16 md:h-16 w-10 h-10 text-green-500" />
              }
              text="ExpressJs"
            />
            <SkillIcon
              icon={
                <SiDaisyui className="md:w-16 md:h-16 w-10 h-10 text-indigo-500" />
              }
              text="Daisy Ui"
            />
            <SkillIcon
              icon={
                <SiGit className="md:w-16 md:h-16 w-10 h-10 text-red-500" />
              }
              text="Git"
            />
            <SkillIcon
              icon={
                <SiFirebase className="md:w-16 md:h-16 w-10 h-10 text-yellow-400" />
              }
              text="Firebase"
            />
            <SkillIcon
              icon={
                <SiVercel className="md:w-16 md:h-16 w-10 h-10 text-blue-400" />
              }
              text="Vercel"
            />
          </div>
        </div>
      </div>
    </Element>
  );
};

// SkillIcon component to render each skill icon with text
const SkillIcon = ({ icon, text }) => (
  <div>
    {icon}
    <p className="text-center">{text}</p>
  </div>
);

export default Skills;
