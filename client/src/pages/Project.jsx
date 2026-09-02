import React, { useState, useRef, useEffect } from "react";

import { IoLogoGithub, IoSparklesOutline } from "react-icons/io5";
import { HiOutlineExternalLink } from "react-icons/hi";
import {
  FiSearch,
  FiPenTool,
  FiCode,
  FiUploadCloud,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

/* ================= DATA ================= */

const projects = [
  {
    title: "HealthUp",
    img: "https://a.storyblok.com/f/202591/1793x1227/1b00d13118/wellness-application-big-image-2.png/m/3840x2628/filters%3Aformat%28webp%29%3Aquality%2895%29",
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
    live: "https://healthup-ai.vercel.app/",
  },
  {
  title: "TransitOps",
  img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
  date: "July 2026",
  desc: "A role-based transit operations management platform with secure authentication, role-based access control, and efficient management of transit operations.",
  tech: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "JWT",
    "REST API",
    "TailwindCSS",
  ],
  github: "https://github.com/Rakhiraj1686/TransitOps",
  live: "https://transitops-rk.vercel.app",
},
  {
    title: "Craving",
    img: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80",
    date: "Jan 2026",
    desc: "A seamless food ordering platform with authentication, cart system, real-time tracking and admin management.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "REST API"],
    github:
      "https://github.com/Rakhiraj1686/RICR-Web-Development/tree/main/Craving",
    live: "#",
  },
  {
    title: "DostiHUB",
    img: "https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=1200&q=80",
    date: "Mar 2026",
    desc: "A real-time chat application with secure messaging, responsive UI, user authentication, and seamless Socket.io communication.",
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
  {
    title: "EduAI",
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
    date: "August 2026",
    desc: "An AI-powered EdTech platform that provides personalized mock tests, intelligent question generation, and performance analysis for students.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "REST API",
      "TailwindCSS",
      "AI Integration",
    ],
    github: "https://github.com/nitish1445/HackInMotion-RICR-HIM-1166.git",
    live: "#",
  },
];

/* ================= DEVELOPMENT PROCESS ================= */

const process = [
  {
    icon: FiSearch,
    title: "Research",
    description: "Understanding the problem, users and requirements deeply.",
  },
  {
    icon: FiPenTool,
    title: "Design",
    description: "Wireframing and structuring a clean, intuitive interface.",
  },
  {
    icon: FiCode,
    title: "Development",
    description: "Writing scalable, maintainable full-stack code.",
  },
  {
    icon: FiUploadCloud,
    title: "Deployment",
    description: "Shipping, testing and iterating in production.",
  },
];

/* ================= ANIMATED COUNTER ================= */

const Counter = ({ value, suffix = "", duration = 1200 }) => {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);

          const startTime = performance.now();

          const step = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);

            setDisplay(Math.floor(progress * value));

            if (progress < 1) {
              requestAnimationFrame(step);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [started, value, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
};

/* ================= PROJECT CARD ================= */

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);

  const [glow, setGlow] = useState({
    x: 50,
    y: 50,
  });

  const [tilt, setTilt] = useState({
    x: 0,
    y: 0,
  });

  const handleMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();

    const px = (e.clientX - rect.left) / rect.width;

    const py = (e.clientY - rect.top) / rect.height;

    setGlow({
      x: px * 100,
      y: py * 100,
    });

    setTilt({
      x: (py - 0.5) * -6,
      y: (px - 0.5) * 6,
    });
  };

  const handleLeave = () => {
    setTilt({
      x: 0,
      y: 0,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        animationDelay: `${index * 90}ms`,
      }}
      className="group relative animate-fade-up overflow-hidden rounded-2xl border border-white/10 bg-white/5 opacity-0 backdrop-blur-sm transition-[transform,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-pink-300/40 hover:bg-white/10"
    >
      {/* Mouse-follow spotlight */}

      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(
            280px circle at ${glow.x}% ${glow.y}%,
            rgba(216,164,255,0.12),
            transparent 70%
          )`,
        }}
      />

      {/* Featured badge */}

      {project.featured && (
        <div className="absolute left-3 top-3 z-10 flex items-center gap-1 rounded border border-white/10 bg-white/10 px-2 py-1 text-xs text-pink-50">
          <IoSparklesOutline />
          Featured
        </div>
      )}

      {/* Image */}

      <div className="relative h-52 overflow-hidden">
        <img
          src={project.img}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        <div className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
      </div>

      {/* Content */}

      <div className="relative flex flex-col gap-4 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-pink-50">
            {project.title}
          </h3>

          <span className="text-xs text-pink-100/65">{project.date}</span>
        </div>

        <p className="text-sm leading-relaxed text-pink-100/78">
          {project.desc}
        </p>

        {/* Technologies */}

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

        {/* Buttons */}

        <div className="mt-3 flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-lg border border-white/10 bg-white/5 py-2 text-center text-sm transition hover:border-pink-300/40 hover:bg-white/10"
          >
            <IoLogoGithub className="mr-2 inline" />
            Source Code
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-lg border border-white/10 bg-white/5 py-2 text-center text-sm transition hover:border-pink-300/40 hover:bg-white/10"
          >
            Live Demo
            <HiOutlineExternalLink className="ml-2 inline" />
          </a>
        </div>
      </div>
    </div>
  );
};

/* ================= MAIN ================= */

const Project = () => {
  const projectsRef = useRef(null);
  const hideTimer = useRef(null);

  const [showArrows, setShowArrows] = useState(false);

  /* ================= SHOW ARROWS ON SCROLL ================= */

  const handleScroll = () => {
    setShowArrows(true);

    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
    }

    hideTimer.current = setTimeout(() => {
      setShowArrows(false);
    }, 1500);
  };

  /* ================= ARROW SCROLL ================= */

  const scrollProjects = (direction) => {
    if (!projectsRef.current) return;

    projectsRef.current.scrollBy({
      left: direction === "left" ? -420 : 420,
      behavior: "smooth",
    });

    setShowArrows(true);

    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
    }

    hideTimer.current = setTimeout(() => {
      setShowArrows(false);
    }, 1500);
  };

  /* ================= CLEANUP ================= */

  useEffect(() => {
    return () => {
      if (hideTimer.current) {
        clearTimeout(hideTimer.current);
      }
    };
  }, []);

  return (
    <>
      <section className="relative min-h-screen overflow-hidden px-6 pb-16 pt-15 text-(--color-text) md:px-12">
        {/* ================= HEADER ================= */}

        <div className="mx-auto mb-16 max-w-2xl animate-fade-up text-center opacity-0">
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Projects
          </h1>

          <p className="mt-4 text-pink-100/80">
            Some of the applications I've built and contributed while learning
            and exploring full-stack development.
          </p>
        </div>

        {/* ================= DIVIDER ================= */}

        <div className="mx-auto h-px w-32 bg-linear-to-r from-transparent via-purple-300 to-pink-400 shadow-[0_0_24px_rgba(216,164,255,0.35)]" />

        {/* ================= PROJECT SLIDER ================= */}

        <div className="relative mx-auto mt-16 max-w-6xl">
          {/* ================= LEFT ARROW ================= */}

          <button
            type="button"
            onClick={() => scrollProjects("left")}
            aria-label="Previous projects"
            className={`
              absolute left-1 top-1/2 z-20 hidden h-11 w-11
              -translate-y-1/2 items-center justify-center
              rounded-full border border-white/10
              bg-black/40 text-pink-200 shadow-lg
              backdrop-blur-md
              transition-all duration-300
              hover:scale-110
              hover:border-pink-300/50
              hover:bg-pink-500/20
              md:flex
              ${
                showArrows
                  ? "pointer-events-auto opacity-100"
                  : "pointer-events-none opacity-0"
              }
            `}
          >
            <FiChevronLeft className="text-2xl" />
          </button>

          {/* ================= SCROLL CONTAINER ================= */}

          <div
            ref={projectsRef}
            onScroll={handleScroll}
            className="projects-scroll overflow-x-auto overflow-y-hidden scroll-smooth px-1 pb-6 md:px-14"
          >
            <div className="flex w-max gap-8">
              {projects.map((project, index) => (
                <div key={index} className="w-[320px] shrink-0 sm:w-90 lg:w-95">
                  <ProjectCard project={project} index={index} />
                </div>
              ))}
            </div>
          </div>

          {/* ================= RIGHT ARROW ================= */}

          <button
            type="button"
            onClick={() => scrollProjects("right")}
            aria-label="Next projects"
            className={`
              absolute right-1 top-1/2 z-20 hidden h-11 w-11
              -translate-y-1/2 items-center justify-center
              rounded-full border border-white/10
              bg-black/40 text-pink-200 shadow-lg
              backdrop-blur-md
              transition-all duration-300
              hover:scale-110
              hover:border-pink-300/50
              hover:bg-pink-500/20
              md:flex
              ${
                showArrows
                  ? "pointer-events-auto opacity-100"
                  : "pointer-events-none opacity-0"
              }
            `}
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>

        {/* ================= MOBILE HINT ================= */}

        <p className="mt-1 text-center text-xs text-pink-100/50 md:hidden">
          Swipe left or right to explore projects
        </p>

        {/* ================= DESKTOP HINT ================= */}

        <p className="mt-1 hidden text-center text-xs text-pink-100/50 md:block">
          Scroll horizontally to explore projects
        </p>

        {/* ================= MORE PROJECTS ================= */}

        <p className="mt-6 text-center text-sm text-pink-100/70">
          More projects coming soon...
        </p>

        {/* ================= DEVELOPMENT PROCESS ================= */}

        <div className="mx-auto mt-24 max-w-6xl">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />

            <span className="rounded-full border border-pink-400/20 bg-pink-500/10 px-5 py-2 text-sm uppercase tracking-[0.3em] text-pink-300">
              Development Process
            </span>

            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  style={{
                    animationDelay: `${i * 100}ms`,
                  }}
                  className="relative animate-fade-up rounded-2xl border border-white/10 bg-white/5 p-6 text-center opacity-0 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-pink-300/40"
                >
                  <span className="absolute right-5 top-4 text-xs font-medium text-white/25">
                    0{i + 1}
                  </span>

                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5">
                    <Icon className="text-xl text-pink-300" />
                  </div>

                  <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>

                  <p className="mt-2 text-sm leading-5 text-pink-100/70">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <div className="flex items-center justify-center border-t border-white/10 bg-white/5 py-1 backdrop-blur-sm">
        <div className="text-sm tracking-wide text-pink-100/65">
          &copy; 2026 Rakhi. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Project;
