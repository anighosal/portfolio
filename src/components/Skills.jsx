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
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animations should only happen once while scrolling down
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
            className="font-bold text-center md:text-3xl text-lg text-white mb-20"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Skills
          </h2>
        </div>
        <div className="overflow-x-auto">
          <div
            className="flex flex-wrap flex-col-4 text-white  justify-center items-center gap-4"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div>
              <FaHtml5 className="w-32 h-32 text-blue-500"></FaHtml5>
              <p className="text-center">Html5</p>
            </div>
            <div>
              <FaCss3 className="w-32 h-32 text-blue-500" />
              <p className="text-center">Css3</p>
            </div>
            <div>
              <FaJs className="w-32 h-32 text-yellow-400" />
              <p className="text-center">Javascript</p>
            </div>
            <div>
              <FaReact className="w-32 h-32 text-blue-400" />
              <p className="text-center">ReactJs</p>
            </div>
            <div>
              <FaNodeJs className="w-32 h-32 text-green-400" />
              <p className="text-center">NodeJs</p>
            </div>
            <div>
              <FaBootstrap className="w-32 h-32 text-purple-600" />
              <p className="text-center">Bootstrap</p>
            </div>
            <div>
              <FaFigma className="w-32 h-32 text-purple-600" />
              <p className="text-center">Figma</p>
            </div>
            <div>
              <SiNextdotjs className="w-32 h-32 text-gray-400" />
              <p className="text-center">NextJs</p>
            </div>
          </div>

          <div
            className="flex flex-wrap text-white flex-col-4 justify-center items-center gap-4 mt-6"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div>
              <SiMongodb className="w-32 h-32 text-gray-500"></SiMongodb>
              <p className="text-center">Mongoose</p>
            </div>
            <div>
              <SiMongodb className="w-32 h-32 text-green-500"></SiMongodb>
              <p className="text-center">MongoDb</p>
            </div>
            <div>
              <SiTailwindcss className="w-32 h-32 text-blue-400" />
              <p className="text-center">Tailwind Css</p>
            </div>
            <div>
              <SiExpress className="w-32 h-32 text-green-500" />
              <p className="text-center">ExpressJs</p>
            </div>
            <div>
              <SiDaisyui className="w-32 h-32 text-indigo-500" />
              <p className="text-center">Daisy Ui</p>
            </div>
            <div>
              <SiGit className="w-32 h-32 text-red-500" />
              <p className="text-center">Git</p>
            </div>
            <div>
              <SiFirebase className="w-32 h-32 text-yellow-400" />
              <p className="text-center">Firebase</p>
            </div>
            <div>
              <SiVercel className="w-32 h-32 text-blue-400" />
              <p className="text-center">Vercel</p>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Skills;
