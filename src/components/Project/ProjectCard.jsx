import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./Project.css";
import Image from "next/image";

const ProjectCard = ({ project }) => {
  const { title, position, image, technology, features, liveSite } = project;

  return (
    <div className="card card-compact  w-full shadow-md border rounded-xl border-gray-200">
      <div className="card-image-wrapper">
        <Image
          className="md:h-[200px] p-2 rounded-md"
          src={image}
          width={500}
          height={500}
          alt="imageName"
        ></Image>
      </div>
      <div className="card-body text-white">
        <h2 className="card-title text-base font-semibold">{title}</h2>

        <p className="font-semibold">
          Technology: <span className="font-normal text-xs">{technology}</span>
        </p>
        <p className=" font-semibold">
          Features: <span className="text-xs font-normal">{features}</span>
        </p>
        <p className="font-semibold">
          Position: <span className="font-normal text-xs">{position}</span>
        </p>
        <div className="card-actions max-w-full md:justify-center justify-end">
          <a href={liveSite} target="_blank" rel="noopener noreferrer">
            <button className="w-full px-16 py-1 left-0 flex items-center rounded-md bg-gradient-to-br from-purple-400 to-pink-600 text-white text-xs hover:from-pink-600 hover:to-purple-400">
              Live Site <FaArrowRight className="ml-2 text-xs"></FaArrowRight>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
