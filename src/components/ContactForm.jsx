import { useRef } from "react";
import { FaRegPaperPlane } from "react-icons/fa";
import { Element } from "react-scroll";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const form = useRef();
  const name = useRef();
  const email = useRef();
  const message = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    toast.success("Message sent");

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
          type="text"
          className="px-4 pt-4 w-full bg-white-700"
          name="message"
          id=""
          rows="6"
        ></textarea>

        <button
          type="submit"
          className="btn bg-gradient-to-br from-purple-400 to-pink-600 text-white text-xs hover:from-pink-600 hover:to-purple-400 "
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
