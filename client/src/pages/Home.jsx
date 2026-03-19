import React from "react";
import rakhi from "../assets/rrr.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { GrCode } from "react-icons/gr";
import { BiLogoLinkedin } from "react-icons/bi";
import { GoMail } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const Navigate = useNavigate();
  return (
    <>
      <div className="min-h-screen text-(--color-text) px-3 sm:px-8 md:px-6 pt-6 pb-20 sm:pb-6 ax-w-7xl mx-auto  bg-black/25 backdrop-blur-md p-4 sm:p-8 md:p-10">
        {/* Profile Image */}
        <div className="mx-auto sm:px-15 sm:py-8 sm:justify-center">
          <img
            src={rakhi}
            alt="Rakhi"
            className="h-20 w-20 sm:h-28 sm:w-28 md:h-32 md:w-32 rounded-full"
          />
        </div>

        {/* Hero Section */}
        <div className="flex justify-center items-center mt-35 sm:mt-24 md:mt-40">
          <div
            className="text-center max-w-3xl"
            style={{ fontFamily: "Dancing Script, cursive" }}
          >
            <h1 className="text-4xl sm:text-6xl lg:text-8xl text-center items-center portfolio-name animate-name font-bold">
              {" "}
              <span style={{ fontFamily: "Dancing Script, cursive" }}>
                {" "}
                Hey, I am RAKHI{" "}
              </span>{" "}
            </h1>
            <p className="text-sm sm:text-lg md:text-xl mt-3 sm:mt-5 px-4 sm:px-0">
              I am a Software Developer specializing in MERN Full Stack
              Development.
            </p>
          </div>
        </div>

        {/* Action Links */}
        <div className="w-full flex justify-center mt-8 px-4">
          <div
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-[60%] sm:w-auto"
            style={{ fontFamily: "Dancing Script, cursive" }}
          >
            {/* Project Button */}
            <button
              onClick={() => Navigate("/project")}
              className="group w-full sm:w-auto flex items-center justify-center gap-2 
      rounded-full px-6 py-3 
      bg-linear-to-r bg-white/5
      border border-white/10 
      backdrop-blur-md
      text-white font-medium
      transition-all duration-300 ease-in-out
      hover:scale-105 hover:border-pink-300/50 hover:shadow-lg hover:shadow-pink-500/20"
            >
              <span>See My Project</span>
              <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* About Button */}
            <button
              onClick={() => Navigate("/about")}
              className="group w-full sm:w-auto flex items-center justify-center gap-2 
      rounded-full px-6 py-3 
      bg-white/5 border border-white/10 
      backdrop-blur-md
      text-white font-medium
      transition-all duration-300 ease-in-out
      hover:scale-105 hover:border-purple-300/50 hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <span>More About Me</span>
              <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Social Icons */}
        <div className="text-(--color-text) flex flex-wrap justify-center items-center gap-4 sm:gap-8 px-4 py-4 mt-6">
          <button
            className="icon-pulse text-xl sm:text-2xl rounded-full p-3 hover:scale-110 transition duration-300 cursor-pointer"
            title="Github"
            onClick={() =>
              window.open("https://github.com/Rakhiraj1686", "_blank")
            }
          >
            <FiGithub />
          </button>

          <button
            className="icon-pulse text-xl sm:text-2xl rounded-full p-3 hover:scale-110 transition duration-300 cursor-pointer"
            title="Leetcode"
            onClick={() =>
              window.open("https://leetcode.com/u/Rakhi_yadvv/", "_blank")
            }
          >
            <GrCode />
          </button>

          <button
            className="icon-pulse text-xl sm:text-2xl rounded-full p-3 hover:scale-110 transition duration-300 cursor-pointer"
            title="Linkedin"
            onClick={() =>
              window.open("https://www.linkedin.com/in/Rakhiraj1686", "_blank")
            }
          >
            <BiLogoLinkedin />
          </button>

          <button
            className="icon-pulse text-xl sm:text-2xl rounded-full p-3 hover:scale-110 transition duration-300 cursor-pointer"
            title="Email"
            onClick={() => window.open("https://mail.google.com/", "_blank")}
          >
            <GoMail />
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
