import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./Project.css";
import Image from "next/image";

const ProjectCard = ({ project }) => {
  const { title, position, image, technology, features, liveSite } = project;

  return (
    <div className="card card-compact  w-full shadow-xl">
      <div className="card-image-wrapper" style={{ height: "100px" }}>
        <Image src={image} width={500} height={500} alt="imageName"></Image>
      </div>
      <div className="card-body bg-white">
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
        <div className="card-actions justify-end">
          <a href={liveSite} target="_blank" rel="noopener noreferrer">
            <button className="px-3 py-1 flex items-center rounded-md mr-2 bg-gradient-to-br from-blue-500 via-purple-500 to bg-pink-500 text-white text-xs">
              Live Site <FaArrowRight className="ml-2 text-xs"></FaArrowRight>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
