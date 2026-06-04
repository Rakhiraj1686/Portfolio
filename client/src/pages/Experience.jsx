import React from "react";

import PageShell from "../components/PageShell";
import vijaiImg from "../assets/Experience/vijai-bhawa.png";
import { FiFileText, FiExternalLink } from "react-icons/fi";

const Experience = () => {
  return (
    <PageShell
      eyebrow="Professional Journey"
      title={
        <>
          My <span className="portfolio-name">Experience</span>
        </>
      }
      description="Internships, hands-on learning, aur development journey ko same dark glass layout me present kiya jayega."
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
        <article className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 sm:p-8 shadow-[0_24px_50px_rgba(5,3,7,0.18)] overflow-hidden">
            <div className="absolute top-4 right-4 hidden sm:flex gap-3">
            <a href="#" title="Case study (placeholder)" className="p-2 rounded-full bg-white/3 border border-white/8 text-pink-100/85 hover:bg-white/5">
              <FiFileText />
            </a>
            <a href="#" title="Live site (placeholder)" className="p-2 rounded-full bg-white/3 border border-white/8 text-pink-100/85 hover:bg-white/5">
              <FiExternalLink />
            </a>
          </div>

          <div className="flex flex-col gap-6 items-start">
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-pink-50">Full Stack Web Developer</h2>
              <p className="italic text-sm sm:text-base text-pink-100/75 mt-2">Vijai Bhawa Law Firm</p>
              <p className="mt-2 text-sm text-pink-100/65">Nov 2025 — Jan 2026</p>

              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-pink-400" />
                  <span className="text-pink-100/80">Developed and deployed a responsive law-firm website using React and Node.js.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-pink-400" />
                  <span className="text-pink-100/80">Implemented contact forms with validation and integrated hosting on Hostinger.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-pink-400" />
                  <span className="text-pink-100/80">Optimized assets and bundle size to improve load performance across devices.</span>
                </li>
              </ul>

              {/* <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React.js",
                  "Node.js",
                  "Responsive Design",
                  "Deployment",
                  "Hostinger",
                  "Git & GitHub",
                ].map((s) => (
                  <span key={s} className="text-sm px-3 py-1 rounded-full bg-white/3 border border-white/5 text-pink-100/85">{s}</span>
                ))}
              </div> */}
             
            </div>

            <div className="w-full flex justify-center">
              <img src={vijaiImg} alt="Vijai Bhawa website" className="w-full sm:w-auto max-w-xl h-auto object-cover rounded-md border border-white/5 shadow-md" />
            </div>
          </div>
        </article>
      </div>
    </PageShell>
  );
};

export default Experience;
