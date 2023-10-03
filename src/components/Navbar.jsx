"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaBars, FaMinus } from "react-icons/fa";
import MenuOverlay from "./MenuOverlay";
import { Link as ScrollLink, scroller } from "react-scroll";
import Aos from "aos";

const navLinks = [
  {
    title: "About",
    path: "about",
  },
  {
    title: "Skills",
    path: "skills",
  },
  {
    title: "Projects",
    path: "projects",
  },
  {
    title: "Contact",
    path: "contact",
  },
];

const Navbar = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animations should only happen once while scrolling down
    });
  }, []);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleScrollTo = (to) => {
    if (to === "contact") {
      scroller.scrollTo(to, {
        duration: 500,
        smooth: "easeInOutQuart",
        offset: 0,
      });
    } else {
      scroller.scrollTo(to, {
        duration: 500,
        smooth: "easeInOutQuart",
        offset: -100,
      });
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 text-white right-0 z-10 bg-[#121212] bg-opacity-90"
      data-aos="fade-down"
      data-aos-duration="800"
    >
      <div className="flex md:w-[90%] items-center justify-between mx-auto px-2 md:py-4 md:px-4">
        <Link
          href={"/"}
          className="text-lg md:text-3xl font-bold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:from-pink-600 hover:to-purple-400 "
        >
          Ani Ghosal
        </Link>
        <div className="mobile-menu block text-white md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border  rounded border-slate-200 text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:from-pink-600 hover:to-purple-400 hover:text-white hover:border-white text-white"
            >
              <FaBars className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-white "
            >
              <FaMinus className="h-5 w-5" />
            </button>
          )}
        </div>
        <div
          className={`menu hidden  text-white md:block md:w-auto navbar-center`}
          id="navbar"
        >
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 text-white">
            {navLinks.map((link, index) => (
              <li key={index}>
                <ScrollLink
                  to={link.path}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-50}
                  onClick={() => handleScrollTo(link.path)}
                  activeClass="font-bold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:from-pink-600 hover:to-purple-400" // Add this line
                  className="cursor-pointer hover:from-pink-600 hover:to-purple-400"
                >
                  {link.title}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button
            onClick={() => handleScrollTo("contact")} // Scroll to the "Contact" section
            className="mt-3 px-1 py-1 w-full sm:w-fit bg-gradient-to-br from-purple-400 to-pink-600 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white"
          >
            <span className="block rounded-full md:px-5 md:py-1 px-3 py-1 hover:bg-[#121212]">
              {" "}
              Hire Me
            </span>
          </button>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
