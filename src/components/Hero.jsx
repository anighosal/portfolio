"use client";

import Image from "next/image";
import img from "../../public/ani.jpg";

import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const resumeUrl =
    "https://drive.google.com/file/d/1xHDbQC-Owzg4L77i4Uut4CiDIBbEhJyL/view?usp=sharing"; // Replace with your resume URL

  const handleDownload = () => {
    window.open(resumeUrl, "_blank");
  };
  return (
    <div className="text-center mb-10">
      <div className="flex flex-col items-center justify-center">
        <Image
          className="rounded-full"
          src={img}
          width={100}
          height={100}
          alt="Image Alt Text"
        ></Image>
        <div className="sm:w-full">
          <h1 className="text-xl text-white mt-3 font-bold">
            <span className="text-transparent md:text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I am
            </span>{" "}
            <TypeAnimation
              className="md:text-5xl"
              sequence={[
                "Web developer",
                1000,
                "Frontend developer",
                1000,
                "Mern stack developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <div className="md:px-20 px-0 md:mx-10 mx-0">
            <p className="mt-2 text-white">
              As a MERN stack and front-end developer, my portfolio showcases my
              expertise in building web applications using the MERN stack
              (MongoDB, Express.js, React, and Node.js) as well as my skills in
              front-end development.
            </p>
          </div>
        </div>
        <div className="flex gap-5 mt-4">
          <a href="https://www.facebook.com/anighosal2019">
            <FaFacebook className="text-[#1877f2] bg-white rounded-full text-2xl"></FaFacebook>
          </a>
          <a href="https://www.linkedin.com/in/ani-ghosal-4a083a220/">
            <FaLinkedin className="text-[#0a66c2] text-2xl"></FaLinkedin>
          </a>
          <a href="https://github.com/anighosal">
            <FaGithub className="text-[#333] bg-white rounded-full text-2xl"></FaGithub>
          </a>
          <a href="https://twitter.com/ani_ghosal">
            <FaTwitter className="text-[#1da1f2] text-2xl"></FaTwitter>
          </a>
        </div>
        <div>
          <button
            onClick={handleDownload}
            className="mt-3 px-1 py-1 w-full sm:w-fit bg-gradient-to-br from-purple-400 to-pink-600 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white"
          >
            <span className="block rounded-full md:px-5 md:py-3 px-3 py-1 bg-[#121212] hover:bg-gradient-to-r from-purple-400 to-pink-600">
              Download Resume
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
