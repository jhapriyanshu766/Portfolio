import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];

  const socialLinks = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/priyanshu-jha-139057199?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      id: 2,
      child: (
        <>
          Coding Profile <FaCode size={30} />
        </>
      ),
      href: "https://codolio.com/profile/ZojiOwZk",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:btech2021.priyanshujha@mphi.edu.in",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/jhapriyanshuresume.pdf",
      download: true,
    },
    {
      id: 5,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/jhapriyanshu766?tab=stars",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 pt-4 pb-4 text-white bg-black fixed z-20 top-0">
      <div>
        <h1 className="text-5xl font-signature ml-2">Priyanshu</h1>
      </div>

      {/* For large screens */}
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* For mobile view */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 pt-16">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}

          {/* Social Links for Mobile View */}
          <div className="mt-8 flex flex-col items-center">
            {socialLinks.map(({ id, child, href, download }) => (
              <li
                key={id}
                className="flex justify-between items-center w-60 h-14 my-2 text-gray-500"
              >
                <a
                  href={href}
                  className="flex justify-between items-center w-full pb-4"
                  download={download}
                  target="_blank"
                  rel="noreferrer"
                >
                  {child}
                </a>
              </li>
            ))}
          </div>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
