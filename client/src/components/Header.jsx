import React from "react";
import rakhi from "../assets/rakhiL.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { GrCode } from "react-icons/gr";
import { FiLinkedin } from "react-icons/fi";
import { GoMail } from "react-icons/go";

const Header = () => {
  return (
    <>
      <div className="h-90vh text-(--color-text) ">
        <div className="  p-10">
          {/* <div className="flex justify-end gap-3 border  p-5 rounded-3xl mx-70 mt-10">
            <div>Home</div>
            <div>About</div>
            <div>Experience</div>
            <div>Projects</div>
            <div>Skills</div>
            <div>Npm Zone</div>
            <div>Hackathons</div>
            <div>Certificates</div>
          </div> */}

          <img src={rakhi} alt="" className="h-30 w-30 rounded-full mx-30 " />

          <div className="flex justify-center items-center mt-40">
            <div>
              <h1 className="text-8xl text-center items-center  portfolio-name animate-name font-bold">
                <span> Hey, I am RAKHI</span>
              </h1>
              <p className="text-center items-center text-xl mt-5">
                I am a Software Developer specializing in Full Stack
                Development.
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-10 text-center mx-70 mt-5">
            <p className="items-center text-center flex gap-2">
              <FaArrowRightLong /> See My Project
            </p>
            <p className="items-center text-center flex gap-2">
              <FaArrowRightLong /> More About Me
            </p>
          </div>

          <div className="text-center flex flex-cols-4 justify-center gap-8 mt-5">
            <button
              className="text-2xl rounded-full p-2 bg-gray-800 hover:scale-120 hover:duration-300 cursor-pointer"
              title="Github"
              onClick={() =>
                window.open("https://github.com/Rakhiraj1686", "_blank")
              }
            >
              <FiGithub />
            </button>
            <button
              className="text-2xl rounded-full p-2 bg-gray-800 hover:scale-120 hover:duration-300 cursor-pointer"
              title="Leetcode"
              onClick={() =>
                window.open("https://leetcode.com/u/Rakhi_yadvv/", "_blank")
              }
            >
              <GrCode />
            </button>
            <button
              className=" text-2xl rounded-full  p-2 bg-gray-800 hover:scale-120 hover:duration-300 cursor-pointer"
              title="Linkedin"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/Rakhiraj1686",
                  "_blank",
                )
              }
            >
              <FiLinkedin />
            </button>
            <button
              className="text-2xl rounded-full  p-2 bg-gray-800 hover:scale-120 hover:duration-300 cursor-pointer"
              title="Email"
              onClick={() => window.open("https://mail.google.com/", "_blank")}
            >
              <GoMail />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
