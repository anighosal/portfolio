// utils/scrollToSection.js
import { scroller } from "react-scroll";

const ScrollToSection = (sectionName) => {
  scroller.scrollTo(sectionName, {
    duration: 500, // Adjust the duration as needed
    delay: 0,
    smooth: "easeInOutQuart", // Adjust the smooth scrolling effect
  });
};

export default ScrollToSection;
