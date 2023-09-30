// utils/scrollNavLink.js
import React from "react";

import ScrollToSection from "./ScrollToSection";

const ScrollNavLink = ({ to, children }) => {
  const handleClick = () => {
    ScrollToSection(to);
  };

  return (
    <button
      className="block py-2 pl-3 pr-4 text-white rounded md:p-0 sm:text-xl md:pt-2"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default ScrollNavLink;
