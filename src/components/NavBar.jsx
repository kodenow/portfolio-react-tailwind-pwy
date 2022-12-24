import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/KodeNowLogo.png";
import { Link } from "react-scroll";
import { BsFillMoonStarsFill } from "react-icons/bs";

const NavBar = ({ darkMode, setDarkMode }) => {
  const [nav, setNav] = useState(false);
  console.log(darkMode);
  const onButtonClick = (mode) => {
    console.log("set modde");
    setDarkMode(mode);
  };

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 text-white px-14 fixed">
      <div>
        <img className="stroke-white" src={logo} width={200} height={200} />
      </div>
      <ul className="hidden md:flex">
        <li>
          <BsFillMoonStarsFill
            onClick={() => onButtonClick(!darkMode)}
            className=" cursor-pointer text-2xl text-black dark:text-white"
          />
        </li>
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={link}>{link}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-[#2cc0d2] md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={20} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-bl">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} to={link} smooth={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
