import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { FaRegPaperPlane } from "react-icons/fa";
import { Element } from "react-scroll";
import emailjs from "emailjs-com";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const form = useRef();
  const name = useRef();
  const email = useRef();
  const message = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tsme6vp",
        "template_r0d1g64",
        form.current,
        "5m2Fua5uCPRNNSCs_"
      )
      .then(
        () => {
          toast.success("message sent");
        },
        () => {
          toast.error("something is wrong");
        }
      );
    e.target.reset();
    name.current.value = "";
    email.current.value = "";
    message.current.value = "";
  };

  return (
    <Element name="contact">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col w-full lg:w-[500px] gap-[1.2rem] md:border border-0 md:p-4 p-0"
      >
        <input
          ref={name}
          required
          type="text"
          placeholder="Name"
          name="name"
          className="h-9 focus:border-separate w-full
                    border-none bg-white-700 rounded-sm px-4 "
        />

        <input
          ref={email}
          required
          type="email"
          placeholder="Enter Email"
          name="email"
          className="h-9 focus:border-separate w-full
                    border-none bg-white-700 rounded-sm px-4 "
        />

        <textarea
          ref={message}
          required
          placeholder="Write your message"
          className="px-4 pt-4 w-full bg-white-700"
          name="message"
          id=""
          rows="6"
        ></textarea>

        <button
          type="submit"
          className="btn bg-gradient-to-br from-blue-500 via-purple-500 to bg-pink-500 text-white"
        >
          Submit <FaRegPaperPlane></FaRegPaperPlane>
        </button>
      </form>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Element>
  );
};

export default ContactForm;
