import React from "react";
import NewHeroImage from "../assets/heroImage.jpeg"; // Updated path to your PNG image
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
          I am a Frontend developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          A passionate frontend developer skilled in HTML, CSS, Tailwind, JavaScript, and React.
                    I specialize in designing responsive, user-friendly interfaces that balance visual appeal with functionality.
                    With a strong foundation in problem-solving, I deliver seamless web experiences across diverse devices,
                    ensuring both efficiency and aesthetics in my solutions.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
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
            src={NewHeroImage} // Use the new PNG image path here
            alt="my profile"
            className="rounded-2xl mx-auto w-1/2 md:w-2/3" // Adjust width for the new image size
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
