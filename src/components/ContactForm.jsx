import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { FaRegPaperPlane } from "react-icons/fa";
import { Element } from "react-scroll";
import emailjs from "emailjs-com";
import { useRef } from "react";
import StartToastifyInstance from "toastify-js";

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
        (result) => {
          console.log(result.text);
          if (result.text) {
            console.log("hello ");
            StartToastifyInstance({
              text: "Mail sent",
              className: "info",
              style: {
                background: "linear-gradient(to right, #fe6601, #ff6605)",
              },
            }).showToast();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
    name.current.value = "";
    email.current.value = "";
    message.current.value = "";
  };

  return (
    <Element name="contact">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col w-full lg:w-[500px] gap-[1.2rem] border p-4"
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
    </Element>
  );
};

export default ContactForm;
