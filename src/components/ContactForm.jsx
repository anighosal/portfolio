import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { FaRegPaperPlane } from "react-icons/fa";
import { Element } from "react-scroll";

// Import your environment variables
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FROM_EMAIL = process.env.FROM_EMAIL;

const ContactForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // You can handle the form submission here, e.g., send the data to your server.
    console.log(data);
  };

  return (
    <Element name="contact">
      <form
        className="text-white border rounded md:w-[600px] md:h-[400px] w-full h-full space-y-5 md:px-0"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="space-y-5 md:p-6 p-0">
          {/* Email input remains the same */}
          <div className="space-y-2 md:text-xl shadow-lg">
            <label className="mr-3" htmlFor="email">
              Email:
            </label>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email address",
                },
              }}
              render={({ field }) => (
                <input
                  className="border shadow-md w-[100%] text-black rounded-md"
                  type="text"
                  {...field}
                />
              )}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>

          {/* Replace "Name" input with "Subject" input */}
          <div className="space-y-2 md:text-xl shadow-lg">
            <label className="mr-3" htmlFor="subject">
              Subject:
            </label>
            <Controller
              name="subject"
              control={control}
              rules={{ required: "Subject is required" }}
              render={({ field }) => (
                <input
                  className="border shadow-md w-[100%] text-black rounded-md"
                  type="text"
                  {...field}
                />
              )}
            />
            {errors.subject && <span>{errors.subject.message}</span>}
          </div>

          {/* Message input remains the same */}
          <div className="space-y-2 md:text-xl shadow-lg">
            <label className="mr-3" htmlFor="message">
              Message:
            </label>
            <Controller
              name="message"
              control={control}
              rules={{ required: "Message is required" }}
              render={({ field }) => (
                <textarea
                  className="border shadow-md w-[100%] text-black rounded-md"
                  {...field}
                />
              )}
            />
            {errors.message && <span>{errors.message.message}</span>}
          </div>

          <div className="gap-2 md:text-xl text-center shadow-lg">
            <button
              className="md:py-2 md:px-6 text-center  w-full rounded-md bg-gradient-to-br from-blue-500 via-purple-500 to bg-pink-500 flex items-center"
              type="submit"
            >
              <span className="md:mr-2  text-center">Send Message</span>
              <FaRegPaperPlane />
            </button>
          </div>
        </div>
      </form>
    </Element>
  );
};

export default ContactForm;
