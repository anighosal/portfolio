// utils/scrollToSection.js
import { scroller } from "react-scroll";

const ScrollToSection = (sectionName) => {
  scroller.scrollTo(sectionName, {
    duration: 500,
    delay: 0,
    smooth: "easeInOutQuart",
  });
};

export default ScrollToSection;
