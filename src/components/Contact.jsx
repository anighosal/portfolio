"use client";

import React, { useEffect } from "react";
import ContactForm from "./ContactForm";
import { Element } from "react-scroll";

import Aos from "aos";
import "aos/dist/aos.css";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animations should only happen once while scrolling down
    });
  }, []);

  return (
    <Element name="contact">
      <div className="justify-center mt-20">
        <h2
          className="font-semibold md:text-2xl text-lg text-center mb-20 text-white"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          Contact Me
        </h2>
        <div className="md:flex md:flex-row flex-cols-1  md:space-y-0 space-y-5 gap-5">
          <div>
            <h3
              className="md:text-start text-center text-white md:text-xl text-lg font-bold mb-4"
              data-aos="fade-right"
            >
              Lets Contact
            </h3>
            <p className="text-white" data-aos="fade-right">
              I am currently for new opportunities. My inbox is always open.
              Whether you have a question or just want to say hi, I will try my
              best to get back to you!
            </p>
            <div className="flex gap-10 mt-4" data-aos="fade-right">
              <a
                href="https://www.facebook.com/anighosal2019"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-[#1877f2] bg-white rounded-full text-2xl"></FaFacebook>
              </a>
              <a
                href="https://www.linkedin.com/in/ani-ghosal-4a083a220/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-[#0a66c2] text-2xl"></FaLinkedin>
              </a>
              <a
                href="https://github.com/anighosal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-[#333] bg-white rounded-full text-2xl"></FaGithub>
              </a>
              <a
                href="https://twitter.com/ani_ghosal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-[#1da1f2] text-2xl"></FaTwitter>
              </a>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-duration="800">
            <ContactForm></ContactForm>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
