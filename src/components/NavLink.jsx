import { Link as ScrollLink } from "react-scroll";

const NavLink = ({ href, title }) => {
  return (
    <ScrollLink
      to={href}
      spy={true}
      smooth={true}
      duration={500}
      offset={-100} // Adjust the offset as needed
      className={`block py-2 pl-3 pr-4 rounded md:p-0 sm:text-xl md:pt-2`}
      activeClass="active" // Add the active CSS class here
    >
      {title}
    </ScrollLink>
  );
};

export default NavLink;
