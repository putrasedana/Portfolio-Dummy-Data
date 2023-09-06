import { useState } from "react";
import Logo from "../assets/logo.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between  items-center px-6 md:px-20  bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo" style={{ width: "100px" }} />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Menu Button */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[140px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#0077B5]">
            <a href="/" className="flex justify-evenly items-center w-full to-gray-300 ml-5">
              Linkedin <FaLinkedin className="ml-4" size={30} />
            </a>
          </li>
          <li className="w-[140px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#333]">
            <a href="/" className="flex justify-evenly items-center w-full to-gray-300 ml-6">
              Github <FaGithub className="ml-5" size={30} />
            </a>
          </li>
          <li className="w-[140px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#00a000]">
            <a href="/" className="flex justify-evenly items-center w-full to-gray-300 ml-8">
              Email <HiOutlineMail className="ml-6" size={30} />
            </a>
          </li>
          <li className="w-[140px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-blue-800">
            <a href="/" className="flex justify-evenly items-center w-full to-gray-300 ml-5">
              Resume <BsFillPersonLinesFill className="ml-5" size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
