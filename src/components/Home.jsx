import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = ({ darkMode }) => {
  // console.log(darkMode);
  return (
    <div
      name="home"
      className="px-14 h-screen w-full bg-gradient-to-b from-[#2cc0d2]  via-cyan-200 to-[#2cc0d2] dark:bg-gradient-to-b dark:from-gray-800 dark:via-gray-700 dark:to-gray-800"
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-[#0b6972] dark:text-orange-400">
            I'm a Full Stack Developer
          </h2>
          <p className=" text-cyan-900 dark:text-gray-500 py-4 max-w-md">
            I have 8 years of experience building and designing software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Next JS and GraphQL.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-orange-700 to-orange-500 dark:from-cyan-700 dark:to-[#2cc0d2] cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-3/4"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
