import React from "react";
import { motion } from "framer-motion";
import { TbSchool } from "react-icons/tb";
import { FiBookOpen } from "react-icons/fi";
import { AiOutlineRise } from "react-icons/ai";
import { FaDownload, FaHeart } from "react-icons/fa";

const resumeHref = "/resume.pdf";

const panelClassName =
  "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_18px_40px_rgba(5,3,7,0.16)]";

const stats = [
  { value: "5+", label: "Projects Built" },
  { value: "100+", label: "DSA Problems" },
  { value: "4", label: "Tech Stacks" },
  { value: "2027", label: "Graduate Year" },
];

const cards = [
  {
    title: "Education",
    icon: TbSchool,
    content: (
      <>
        <p className="mt-2 text-pink-100/80">
          <span className="font-medium text-(--color-primary)">
            IES College of Technology
          </span>{" "}
          - B.Tech (ECE), CGPA 7.3
        </p>
        <p className="text-pink-100/65">
          Academic journey focused on growth and practical learning.
        </p>
      </>
    ),
  },
  {
    title: "Passion",
    icon: FiBookOpen,
    content: (
      <p className="mt-2 text-pink-100/78">
        I genuinely enjoy building full-stack applications and using clean,
        scalable code to solve real-world problems.
      </p>
    ),
  },
  {
    title: "Interests",
    icon: AiOutlineRise,
    content: (
      <p className="mt-2 text-pink-100/78">
        Backend systems, scalable APIs, better UI design, and improving
        problem-solving through DSA keep me motivated.
      </p>
    ),
  },
  {
    title: "Hobbies",
    icon: FaHeart,
    content: (
      <p className="mt-2 text-pink-100/78">
        Exploring new places, journaling, reading, and creative activities keep
        me refreshed and inspired.
      </p>
    ),
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden px-4 pb-12 pt-8 text-(--color-text) sm:px-6 sm:pb-16 sm:pt-12">
        <div className="mx-auto max-w-6xl">
          
          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-14 text-center sm:pt-10"
          >
            <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
              About <span className="portfolio-name">Me</span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl leading-8 text-pink-100/80">
              I am Rakhi, a MERN stack developer who enjoys turning ideas into
              modern applications. I like building complete products and
              continuously improving both visuals and logic.
            </p>

            {/* <a
              href={resumeHref}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-medium text-pink-50 shadow-[0_18px_40px_rgba(5,3,7,0.16)] transition-all duration-300 hover:-translate-y-1 hover:border-pink-300/40 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(216,164,255,0.45)]"
            >
              <FaDownload className="text-(--color-primary)" />
              Download Resume
            </a> */}
          </motion.div>

          {/* Divider */}

          <div className="mx-auto h-px w-32 bg-linear-to-r from-transparent via-purple-300 to-pink-400 shadow-[0_0_24px_rgba(216,164,255,0.35)]" />

          {/* Stats */}

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-14 mt-12 grid grid-cols-2 gap-4 text-center sm:gap-6 md:grid-cols-4"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={item}
                className={`${panelClassName} p-5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(216,164,255,0.35)]`}
              >
                <h3 className="text-3xl font-bold text-(--color-primary)">
                  {stat.value}
                </h3>
                <p className="mt-1 text-sm text-pink-100/70">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Cards */}

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2"
          >
            {cards.map((card) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.title}
                  variants={item}
                  whileHover={{ scale: 1.03 }}
                  className={`${panelClassName} group flex gap-4 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-pink-300/40 hover:bg-white/10 hover:shadow-[0_0_35px_rgba(216,164,255,0.45)]`}
                >
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl 
                    bg-linear-to-br from-pink-200/15 via-purple-300/20 to-pink-400/20 
                    text-xl text-pink-100
                    transition-all duration-300
                    group-hover:shadow-[0_0_18px_rgba(216,164,255,0.5)]"
                  >
                    <Icon />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-pink-50">
                      {card.title}
                    </h3>
                    {card.content}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Footer */}

      <div className="flex items-center justify-center border-t border-white/10 bg-white/5 py-3 backdrop-blur-sm">
        <div className="text-sm tracking-wide text-pink-100/65">
          Copyright 2026 Rakhi. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default About;