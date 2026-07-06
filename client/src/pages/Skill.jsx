import React from "react";
import { motion } from "framer-motion";

import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaTools,
  FaUsers,
  FaCode,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiOracle,
  SiPostman,
  SiVercel,
} from "react-icons/si";

const skills = [
  {
    title: "Languages",
    icon: <FaJava className="text-2xl text-(--color-primary)" />,
    items: [
      { name: "Java", icon: <FaJava /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "C++", icon: <FaCode /> },
      { name: "C", icon: <FaCode /> },
    ],
  },

  {
    title: "Frontend & Backend",
    icon: <FaReact className="text-2xl text-(--color-primary)" />,
    items: [
      { name: "HTML", icon: <FaCode /> },
      { name: "CSS", icon: <FaCode /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "REST API", icon: <FaCode /> },
    ],
  },

  {
    title: "Database",
    icon: <SiMongodb className="text-2xl text-(--color-primary)" />,
    items: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Mongoose", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Oracle", icon: <SiOracle /> },
    ],
  },

  {
    title: "Tools",
    icon: <FaTools className="text-2xl text-(--color-primary)" />,
    items: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGitAlt /> },
      { name: "VS Code", icon: <FaCode /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Linux", icon: <FaCode /> },
      { name: "Vercel", icon: <SiVercel /> },
    ],
  },

  {
    title: "Core Concepts",
    icon: <FaCode className="text-2xl text-(--color-primary)" />,
    items: [
      { name: "Data Structures", icon: <FaCode /> },
      { name: "Algorithms", icon: <FaCode /> },
      { name: "OOP", icon: <FaCode /> },
      { name: "REST Architecture", icon: <FaCode /> },
    ],
  },

  {
    title: "Soft Skills",
    icon: <FaUsers className="text-2xl text-(--color-primary)" />,
    items: [
      { name: "Problem Solving", icon: <FaUsers /> },
      { name: "Communication", icon: <FaUsers /> },
      { name: "Team Collaboration", icon: <FaUsers /> },
      { name: "Adaptability", icon: <FaUsers /> },
      { name: "Time Management", icon: <FaUsers /> },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardItem = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
    },
  },
};

const Skill = () => {
  return (
    <div>
      <section className="relative min-h-screen overflow-hidden px-5 py-12 text-(--color-text)">
        {/* Background Glow */}

        <div className="absolute inset-0 -z-10">
          {/* <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-pink-500/10 blur-[140px]" /> */}
          <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-purple-600/10 blur-[160px]" />
        </div>

        <div className="mx-auto max-w-7xl">
          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-16 text-center"
          >
            {/* <p className="uppercase tracking-[0.35em] text-sm text-pink-300">
              Technical Expertise
            </p> */}

            <h1 className="mt-3 text-4xl font-bold leading-6 sm:text-5xl">
              My <span className="portfolio-name">Skills</span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl leading-8 text-white/70">
              Technologies and tools I use to build responsive, scalable and
              user-focused web applications.
            </p>
          </motion.div>

          {/* Divider */}

          <div className="mx-auto mb-10  h-px w-32 bg-linear-to-r from-transparent via-purple-300 to-pink-400" />

          {/* Cards */}

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid gap-7 md:grid-cols-2 xl:grid-cols-3"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.title}
                variants={cardItem}
                whileHover={{
                  y: -8,
                }}
                className="group rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all duration-300 hover:border-pink-400/30 hover:bg-white/10 hover:shadow-[0_0_5px_rgba(236,72,153,.18)]"
              >
                {/* Card Header */}

                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-pink-500/20 to-purple-500/20 text-(--color-primary)">
                    {skill.icon}
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold">{skill.title}</h2>

                    <p className="text-sm text-white/50">
                      {skill.items.length} Technologies
                    </p>
                  </div>
                </div>

                {/* Skills */}

                <div className="flex flex-wrap gap-3">
                  {skill.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 transition duration-300 hover:border-pink-300/40 hover:bg-white/10"
                    >
                      <span className="text-(--color-primary)">
                        {item.icon}
                      </span>

                      {item.name}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}

      <footer className="mt-20 border-t border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-center py-1">
          <p className="text-sm tracking-wide text-pink-100/60">
            © 2026 Rakhi Roy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Skill;
