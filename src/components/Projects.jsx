"use client";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Element } from "react-scroll";
import ProjectCard from "./Project/ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Music-King",
    image: "https://i.ibb.co/y62bwqn/Screenshot-7.png",
    description: "A full-stack Website with some awesome features.",
    features:
      "Instructors can added classes, Students can enroll and pay for one class, Admin can make anyone an instructor,they can manage all users",
    technology:
      "React.js, React-Router, Tailwind CSS, Font Awesome,Node.JS, ExpressJS, MongoDB, Jwt and Stripe.js",
    position: "Full stack developer",
    liveSite: "https://music-king-two.vercel.app/",
  },
  {
    id: 2,
    title: "Food-Zone",
    image: "https://i.ibb.co/m63CtT1/Screenshot-6.png",
    description: "Chef-Hunt is a Documentary website.",
    features:
      "This is a single page website.Here allthe chefs will describe their popular dishes. You can see the name of any chef, which country and how many dishes they have made.Users can rate the chef's cooking.",
    technology:
      "React.js, React-Router, Bootstrap, Font Awesome,Node.JS, Express.JS",
    position: "Frontend developer",
    liveSite: "https://chef-client-hcy4.vercel.app/",
  },
  {
    id: 3,
    title: "Kids-Gallery",
    image: "https://i.ibb.co/CQfrwkk/Screenshot-5.png",
    description:
      "This is a mern based E-Commerce Website. Users can easily see all products.",
    features:
      "This is an animal toy maroon stock website, Users can add one or more, Users can delete added ages ifthey want.",
    technology:
      "React.js, React-Router, Tailwind CSS, DaisyUi, Font Awesome,Node.JS, ExpressJS, MongoDB, JWT AOS, Lazy Loading.",
    position: "Mern stack developer",
    liveSite: "https://toys-client.vercel.app/",
  },
  {
    id: 4,
    title: "HatMart(Team Project)",
    image: "https://i.ibb.co/dGMcCZV/Screenshot-12.jpg",
    description: "A full-stack Website with some awesome features.",
    features:
      "Instructors can added classes, Students can enroll and pay for one class, Admin can make anyone an instructor,they can manage all users",
    technology:
      "React.js, React-Router, Tailwind CSS, Font Awesome,Node.JS, ExpressJS, MongoDB, Jwt and Stripe.js",
    position: "Frontend developer",
    liveSite: "https://hat-mart-client.vercel.app/",
  },
  {
    id: 5,
    title: "Online Nursery Website",
    image: "https://i.ibb.co/XkNVxHcY/Screenshot-3.png",
    description: "This is totally Frontend based Project",
    features:
      "User can added a new product in cart with payment system, Users view & search all categories and products, User can delete and edit their product",
    technology:
      "React.js, Redux, Tailwind CSS, Font Awesome,Node.JS, ExpressJS, MongoDB, Jwt and Stripe.js",
    position: "Frontend developer",
    liveSite: "https://online-nursery-website-client-plum.vercel.app/",
  },
];

const Projects = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <Element name="projects">
      <div className="mb-10 mt-20" data-aos="fade-up" data-aos-duration="800">
        <h2 className="font-semibold text-center md:text-4xl text-lg text-white mb-20">
          {" "}
          Projects
        </h2>
        <div className="space-x-5 mt-8">
          <div
            className="grid grid-cols-1 md:grid-cols-4 gap-10"
            data-aos="flip-left"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project}></ProjectCard>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Projects;
