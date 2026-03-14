import React from "react";
import { FaCode, FaHeart, FaLaptopCode } from "react-icons/fa";

import PageShell from "../components/PageShell";

const aboutHighlights = [
  {
    icon: FaCode,
    title: "Clean Building",
    text: "Responsive interfaces aur smooth user experience ke saath modern web apps banana pasand hai.",
  },
  {
    icon: FaLaptopCode,
    title: "MERN Focus",
    text: "Frontend aur backend dono side ka kaam balance karke complete products build karti hoon.",
  },
  {
    icon: FaHeart,
    title: "Learning Drive",
    text: "Nayi technologies explore karna aur projects ko better visuals dena mujhe genuinely pasand hai.",
  },
];

const About = () => {
  return (
    <PageShell
      eyebrow="Creative Developer Profile"
      title={
        <>
          About <span className="portfolio-name">Me</span>
        </>
      }
      description="I’m Rakhi, a passionate MERN Stack Developer who loves turning ideas into modern and user-friendly web applications. I enjoy solving problems, learning new technologies, and building projects that create real impact."
    >
      <div className="mx-auto h-0.5 w-32 rounded-full bg-gradient-to-r from-pink-100/10 via-purple-300 to-pink-400/20 shadow-[0_0_24px_rgba(216,164,255,0.45)]" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 sm:mt-10">
        {aboutHighlights.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 p-5 bg-white/5 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-pink-100/20 via-purple-300/20 to-pink-400/20">
                <Icon className="text-lg text-pink-100" />
              </div>
              <h2 className="text-lg font-semibold text-pink-50">{item.title}</h2>
              <p className="text-sm leading-7 mt-2 text-pink-100/75">{item.text}</p>
            </div>
          );
        })}
      </div>
    </PageShell>
  );
};

export default About;
