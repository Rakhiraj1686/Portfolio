import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    title: "Languages",
    items: ["Java", "JavaScript", "C++", "C"],
  },
  {
    title: "Web & Backend",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "Socket.IO",
      "REST API",
    ],
  },
  {
    title: "Database",
    items: ["MongoDB", "Mongoose", "MySQL", "Oracle"],
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "GitHub", "VS Code", "Linux", "Vercel"],
  },
  {
    title: "Core Concepts",
    items: ["Data Structures & Algorithms", "OOPs", "REST Architecture"],
  },
  {
    title: "Soft Skills",
    items: [
      "Problem Solving",
      "Communication",
      "Time Management",
      "Adaptability",
      "Team Collaboration",
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Skill = () => {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden px-4 pb-12 pt-8 text-(--color-text) sm:px-6 sm:pb-16 sm:pt-12">
        <div className="mx-auto max-w-6xl">
          {/* Header */}

          <div className="mb-14 text-center">
            <h1 className="text-4xl font-bold sm:text-5xl">
              My <span className="portfolio-name">Skills</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-pink-100/75 leading-relaxed">
              A showcase of my technical skills and the technologies I work
              with.
            </p>
          </div>

          {/* Divider */}

          <div className="mx-auto h-px w-32 bg-linear-to-r from-transparent via-purple-300 to-pink-400 shadow-[0_0_24px_rgba(216,164,255,0.35)] mb-10" />

          {/* Skills Grid */}

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 "
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.title}
                variants={cardItem}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm shadow-[0_18px_40px_rgba(5,3,7,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:border-pink-300/35 hover:bg-white/8"
              >
                <h3 className="mb-4 text-lg font-semibold portfolio-name">
                  {skill.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-pink-100/85 transition duration-300 hover:border-pink-300/40"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="flex items-center justify-center border-t border-white/10 bg-white/5 py-3 backdrop-blur-sm">
        <div className="text-sm tracking-wide text-pink-100/65">
          &copy; 2026 Rakhi. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Skill;
