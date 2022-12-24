import React from "react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/kristian-software-engineer/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHUb <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/kodenow",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:kodenow13@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillFileEarmarkPersonFill size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/kristian-software-engineer/",
      href: "/CV_Kristian_Contreras.pdf",
      download: true,
    },
    {
      id: 5,
      child: (
        <>
          YouTube <FaYoutube size={30} />
        </>
      ),
      style: "rounded-br-md",
      href: "https://youtube.com/@kodenow",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 pl-6 pr-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-orange-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
