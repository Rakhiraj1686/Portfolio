import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaArrowDown } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";

const resumeHref = "/resume.pdf";

const highlights = [
  {
    number: "6+",
    title: "Projects",
    subtitle: "Built with React & MERN",
  },
  {
    number: "200+",
    title: "DSA Problems",
    subtitle: "Consistency in problem solving",
  },
  {
    number: "2",
    title: "Real Client",
    subtitle: "Freelance business website",
  },
];

const About = () => {
  return (
    <div className="flex min-h-screen flex-col ">
      <div className="absolute right-0 bottom-0 h-112 w-md rounded-full bg-purple-600/15 blur-[180px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.03)_1px,transparent_1px)] bg-size-[26px_26px]" />
      <section className="relative flex-1 overflow-hidden px-6 py-20 text-white">
        <div className="absolute inset-0 -z-10">
        </div>

        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-pink-300">
              About
            </p>

            <h1 className="mt-5 text-2xl font-bold leading-7 lg:leading-tight lg:text-4xl">
              The Story Behind
              <span className="portfolio-name mt-3 block">My Journey</span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-7 text-white/70">
              Every project I build teaches me something new. I enjoy creating
              responsive interfaces, writing clean backend logic, and
              continuously improving my development skills through real-world
              projects.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5">
              <a
                href={resumeHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-linear-to-r from-pink-500 to-purple-600 px-6 py-3 font-semibold transition hover:-translate-y-1 hover:shadow-[0_0_10px_rgba(236,72,153,.45)]"
              >
                <div className="flex items-center gap-3">
                  <FaDownload />
                  View Resume
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-15 grid gap-6 md:grid-cols-3"
          >
            {highlights.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:border-pink-400/30"
              >
                <h2 className="text-3xl font-bold text-pink-300">
                  {item.number}
                </h2>
                <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-white/60">{item.subtitle}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-15 flex justify-center"
          >
            <FaArrowDown className="text-2xl text-pink-300" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-15"
          >
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10" />
              <span className="rounded-full border border-pink-400/20 bg-pink-500/10 px-5 py-2 text-sm uppercase tracking-[0.3em] text-pink-300">
                Journey
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <div className="mt-16 space-y-8">
              {[
                {
                  year: "2023",
                  title: "Started Engineering",
                  description:
                    "Started my B.Tech journey and built a strong foundation in programming, logic and problem solving.",
                },
                {
                  year: "2024",
                  title: "Discovered Web Development",
                  description:
                    "Learned HTML, CSS, JavaScript and React while building responsive websites and personal projects.",
                },
                {
                  year: "2025",
                  title: "Entered Full Stack Development",
                  description:
                    "Built complete MERN applications with authentication, APIs, MongoDB and modern UI practices.",
                },
                {
                  year: "2026",
                  title: "Worked With a Real Client",
                  description:
                    "Designed and deployed a business website while communicating directly with the client and delivering requested features.",
                },
              ].map((step, index) => (
                <motion.div
                  key={step.year}
                  initial={{ opacity: 0, x: index % 2 ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  className="group grid items-center gap-6 lg:grid-cols-[120px_1fr]"
                >
                  <div className="flex h-full items-center justify-center lg:justify-start">
                    <span className="text-4xl font-bold text-pink-300 transition duration-300 group-hover:scale-110">
                      {step.year}
                    </span>
                  </div>

                  <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-pink-400/30 hover:bg-white/10">
                    <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-pink-400 to-purple-500" />
                    <h3 className="text-2xl font-semibold">{step.title}</h3>
                    <p className="mt-2 leading-6 text-white/65">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ===================== WHAT DRIVES ME ===================== */}

          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-24"
          >
            {/* Section Heading */}
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10" />

              <span className="rounded-full border border-pink-400/20 bg-pink-500/10 px-5 py-2 text-sm uppercase tracking-[0.3em] text-pink-300">
                What Drives Me
              </span>

              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Content */}
            <div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:border-pink-400/30 hover:bg-white/10">
              <h2 className="text-3xl font-bold leading-9 lg:text-4xl">
                Building With
                <span className="portfolio-name"> Purpose</span>
              </h2>

              <p className="mt-8 text-lg leading-7 text-white/70">
                I believe great applications are created through
                <span className="font-medium text-pink-300">
                  {" "}
                  continuous learning
                </span>
                ,
                <span className="font-medium text-pink-300">
                  {" "}
                  clean architecture
                </span>
                , and
                <span className="font-medium text-pink-300">
                  {" "}
                  attention to user experience
                </span>
                .
              </p>

              <p className="mt-4 text-lg leading-6 text-white/70">
                Every project challenges me to think differently, write cleaner
                code, and become a better developer than I was yesterday.
              </p>
            </div>
          </motion.section>

          {/* ===================== PERSONAL SIDE ===================== */}

          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-15"
          >
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10" />

              <span className="rounded-full border border-pink-400/20 bg-pink-500/10 px-4 py-2 text-sm uppercase tracking-[0.3em] text-pink-300">
                Beyond Development
              </span>

              <div className="h-px flex-1 bg-white/10" />
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-3">
              {/* Education */}

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-pink-400/30 hover:bg-white/10">
                <h3 className="text-2xl font-semibold flex items-center gap-3"><IoBookOutline className="text-pink-300 text-2xl" /> Education</h3>

                <p className="mt-4 text-lg font-medium text-pink-300">
                  IES College of Technology
                </p>

                <p className="mt-2 leading-5 text-white/70">
                  B.Tech in Electronics & Communication Engineering
                </p>

                <p className="mt-1 text-white/60">CGPA: 7.3 • 2023 – 2027</p>
              </div>

              {/* Interests */}

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-pink-400/30 hover:bg-white/10">
                <h3 className="text-2xl font-semibold flex items-center gap-3"><FaReact className="text-pink-300 text-2xl" /> Interests</h3>

                <p className="mt-4 text-lg font-medium text-pink-300">
                  Full Stack Development & UI Design
                </p>

                <p className="mt-2 leading-5 text-white/70">
                  Passionate about building modern web applications, creating
                  intuitive user experiences, and developing scalable backend
                  solutions.
                </p>
              </div>

              {/* Hobbies */}

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-pink-400/30 hover:bg-white/10">
                <h3 className="text-2xl font-semibold flex items-center gap-3"><FaRegHeart /> Hobbies</h3>

                <p className="mt-4 text-lg font-medium text-pink-300">
                  Exploring, Reading & Creativity
                </p>

                <p className="mt-2 leading-5 text-white/70">
                  I enjoy exploring new places, reading books, journaling, and
                  engaging in creative activities that keep me inspired and help
                  maintain a balanced lifestyle.
                </p>
              </div>
            </div>
          </motion.section>
        </div>
      </section>

      <footer className="mt-20 border-t  border-white/10  bg-white/5 py-1">
        <div className="text-center text-sm tracking-wide text-pink-100/60">
          © 2026 Rakhi Roy. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default About;
