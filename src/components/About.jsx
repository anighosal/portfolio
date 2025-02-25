"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect, useState, useTransition } from "react";
import { Element } from "react-scroll";
import img from "../../public/Developer.57c452315bafee7dd643.png";
import TabButton from "./TabButton";

const tabData = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="md:list-disc  pl-2">
        <li>
          M.s.c(Chemistry) from Govt Tolaram College & University,
          Session(2018-2019)
        </li>
        <li>National University, Bangladesh</li>
      </ul>
    ),
  },
  {
    title: "Course",
    id: "course",
    content: (
      <ul className="md:list-disc  pl-2">
        <li>Complete Web development(2023) From Programming Hero</li>
        <li>Next Level Web development(2024) From Programming Hero</li>
      </ul>
    ),
  },
];

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <Element name="about">
      {" "}
      <section className="text-white">
        <div className="md:grid md:grid-cols-2 gap-5 justify-center items-center md:py-8 md:px-2 px-3 py-16">
          <div
            className="ml-0 w-full"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <Image
              className="md:w-[500px] md:h-[500px] w-full h-full"
              src={img}
              width={500}
              height={500}
              alt="about me"
            />
          </div>
          <div
            className="mt-4 md:mt-0 text-left flex flex-col px-3 h-full"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <h2 className="md:text-start text-center md:text-4xl text-lg font-bold mb-4">
              About Me
            </h2>
            <p className="text-xs md:text-base">
              Welcome to my portfolio, a passionate and enthusiastic MERN
              (MongoDB, Express.js, React.js, Node.js) stack developer eager to
              kickstart my career in web development. As a recent graduate, I am
              equipped with a solid foundation in programming and a strong drive
              to learn and grow as a developer. During my studies, I developed a
              keen interest in full-stack development, and the MERN stack caught
              my attention due to its versatility and widespread use in the
              industry. I have spent considerable time honing my skills in each
              component of the MERN stack, and I am excited to apply my
              knowledge to real-world projects.
            </p>
            <div className="flex md:justify-start justify-center flex-row mt-8">
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                Education
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("course")}
                active={tab === "course"}
              >
                Course
              </TabButton>
            </div>
            <div className="mt-8 md:text-start text-center">
              {tabData.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default About;
