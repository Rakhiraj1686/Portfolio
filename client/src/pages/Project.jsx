import React from "react";
import image from "../assets/projects/fitAI.png";
import image1 from "../assets/projects/craving.png";
import image2 from "../assets/projects/ChatApp.png";
import { IoLogoGithub } from "react-icons/io5";
import { HiOutlineExternalLink } from "react-icons/hi";

const projects = [
  {
    title: "HealthUp",
    img: image,
    date: "Feb 2026",
    desc: "An AI-powered adaptive fitness intelligence platform designed to provide personalized workout plans, diet recommendations, habit tracking, and AI coaching.",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "TailwindCSS",
      "JWT",
      "REST API",
    ],
    github: "https://github.com/Rakhiraj1686/NavKalpana-RICR-NK-0029",
    live: "https://healthup-ai.netlify.app/",
  },
  {
    title: "Craving",
    img: image1,
    date: "Jan 2026",
    desc: "A seamless food ordering platform with authentication, cart system, real-time tracking and admin management.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "REST API"],
    github:
      "https://github.com/Rakhiraj1686/RICR-Web-Development/tree/main/Craving",
    live: "#",
  },
  {
    title: "DostiHUB",
    img: image2,
    date: "Mar 2026",
    desc: "Real-time chat application with secure messaging, responsive UI and fast socket communication.",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Socket.io",
      "Express",
      "JWT",
      "REST API",
      "FlyconUI",
    ],
    github: "https://github.com/Rakhiraj1686/chat-app",
    live: "#",
  },
];

const Project = () => {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden px-6 pb-16 pt-15 text-(--color-text) md:px-12">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Projects
          </h1>

          <p className="mt-4 text-pink-100/80">
            Some of the applications I've built and contributed while learning
            and exploring full-stack development.
          </p>
        </div>

        {/* Divider */}

        <div className="mx-auto h-px w-32 bg-linear-to-r from-transparent via-purple-300 to-pink-400 shadow-[0_0_24px_rgba(216,164,255,0.35)]" />

        <div className="mx-auto grid max-w-6xl gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-pink-300/40 hover:bg-white/10"
            >
              <div className="overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-52 w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="flex flex-col gap-4 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-pink-50">
                    {project.title}
                  </h3>

                  <span className="text-xs text-pink-100/65">
                    {project.date}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-pink-100/78">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-pink-100/75"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-3 flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-lg border border-white/10 bg-white/5 py-2 text-center text-sm transition hover:border-pink-300/40 hover:bg-white/10"
                  >
                    <IoLogoGithub className="inline mr-2" />
                    View Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-lg border border-white/10 bg-white/5 py-2 text-center text-sm transition hover:border-pink-300/40 hover:bg-white/10"
                  >
                    View Live
                    <HiOutlineExternalLink className="inline ml-2" />
                  </a>
                </div>
              </div>

              {project.featured && (
                <div className="absolute left-3 top-3 rounded border border-white/10 bg-white/10 px-2 py-1 text-xs text-pink-50">
                  Featured
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-pink-100/70">
          More projects coming soon...
        </p>
      </section>

      <div className="flex items-center justify-center border-t border-white/10 bg-white/5 py-3 backdrop-blur-sm">
        <div className="text-sm tracking-wide text-pink-100/65">
          &copy; 2026 Rakhi. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Project;
