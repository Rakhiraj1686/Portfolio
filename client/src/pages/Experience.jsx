import React from "react";
import { FaLink } from "react-icons/fa6";

import PageShell from "../components/PageShell";
import vijaiImg from "../assets/Experience/vijai-bhawa.png";

const Experience = () => {
  return (
    <PageShell
      title={
        <>
          My <span className="portfolio-name">Experience</span>
        </>
      }
      description="Here’s a snapshot of my journey so far, working on real-world projects that strengthened my development skills."
      childrenClassName="mt-2 sm:mt-4"
    >
      {/* Divider */}
      <div className="mx-auto h-px w-32 bg-linear-to-r from-transparent via-purple-300 to-pink-400 mb-8" />

      <div className="mx-auto max-w-6xl px-4">
        <article className="relative overflow-hidden rounded-3xl border border-pink-500/20 bg-white/5 backdrop-blur-xl p-6 lg:p-8 transition-all duration-300 hover:border-pink-400/40 hover:shadow-[0_0_40px_rgba(236,72,153,0.15)]">

          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
            {/* Left */}
            <div>
              <h2 className="text-3xl font-bold text-white">
                Full Stack Web Developer
              </h2>

              <div className="mt-3 flex items-center gap-3 flex-wrap">
                <span className="font-semibold text-pink-400">
                  Vijai Bhava Law Firm
                </span>

                <span className="text-pink-100/30">•</span>

                <span className="text-sm text-pink-100/60">
                  Nov 2025 — Jan 2026
                </span>
              </div>

              <ul className="mt-8 space-y-5">
                <li className="flex items-start gap-4">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-pink-500 shrink-0" />
                  <p className="max-w-md text-pink-100/80 leading-6">
                    Built a responsive law firm website using React.js and
                    Node.js.
                  </p>
                </li>

                <li className="flex items-start gap-4">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-pink-500 shrink-0" />
                  <p className="max-w-md text-pink-100/80 leading-6">
                    Integrated secure contact forms and deployed the website on
                    Hostinger.
                  </p>
                </li>

                <li className="flex items-start gap-4">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-pink-500 shrink-0" />
                  <p className="max-w-md text-pink-100/80 leading-6">
                    Optimized performance and responsiveness across all devices.
                  </p>
                </li>
              </ul>
            </div>

            {/* Right */}
            <div className="relative">
  <img
    src={vijaiImg}
    alt="Vijai Bhava Law Firm Website"
    className="w-full rounded-2xl border border-white/10 shadow-xl"
  />

  <a
    href="https://vijaibhavalawfirm.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 backdrop-blur-md text-white hover:bg-pink-500 transition"
  >
    <FaLink />
  </a>

  <div className="absolute bottom-4 left-4 rounded-full bg-green-500/20 px-4 py-1 text-xs font-medium text-green-300 backdrop-blur">
    ● Live Website
  </div>
</div>
          </div>
        </article>
      </div>
    </PageShell>
  );
};

export default Experience;
