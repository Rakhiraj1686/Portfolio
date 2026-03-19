import React, { useEffect, useMemo, useState } from "react";
import Cloud from "../assets/Certificates/cloud-computing.jpg";
import IOT from "../assets/Certificates/IOT.jpeg";
import Java from "../assets/Certificates/java.jpeg";
import Meshmerize from "../assets/Certificates/meshmerize.jpeg";

const certificates = [
  {
    title: "Cloud Computing",
    org: "NPTEL",
    year: "May 2025",
    level: "Core",
    track: "Cloud",
    image: Cloud,
    note: "Covered cloud architecture, virtualization, distributed systems, and service models.",
  },
  {
    title: "Programming in Java (Elite)",
    org: "NPTEL",
    year: "Nov 2025",
    level: "Elite",
    track: "Programming",
    image: Java,
    note: "Demonstrated strong Java fundamentals, OOP design, and problem-solving ability.",
  },
  {
    title: "Internet of Things (Elite)",
    org: "NPTEL",
    year: "Nov 2024",
    level: "Elite",
    track: "Hardware",
    image: IOT,
    note: "Learned IoT architecture, sensors, embedded communication, and real-world applications.",
  },
  {
    title: "Meshmerize Robo Competition",
    org: "Techfest IIT Bombay",
    year: "2025",
    level: "3rd Place",
    track: "Competition",
    image: Meshmerize,
    note: "Secured 3rd place with practical robotics implementation, teamwork, and speed-based execution.",
  },
];

const levelStyles = {
  Core: {
    chip: "text-violet-100 border-violet-300/30 bg-violet-500/10",
    bar: "from-violet-400/45 to-fuchsia-500/35",
    button: "hover:border-violet-300/45 hover:text-violet-100",
  },

  Elite: {
    chip: "text-pink-100 border-pink-300/25 bg-pink-500/10",
    bar: "from-pink-400/45 to-rose-500/35",
    button: "hover:border-pink-300/45 hover:text-pink-100",
  },
  "3rd Place": {
    chip: "text-fuchsia-100 border-fuchsia-300/30 bg-fuchsia-500/10",
    bar: "from-fuchsia-400/45 to-pink-500/35",
    button: "hover:border-fuchsia-300/45 hover:text-fuchsia-100",
  },
};

const fallbackStyle = {
  chip: "text-pink-200 border-pink-300/25 bg-pink-500/10",
  bar: "from-pink-500/35 to-rose-500/25",
  button: "hover:border-pink-300/45 hover:text-pink-100",
};

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedCert ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedCert]);

  const totalOrgs = useMemo(
    () => new Set(certificates.map((cert) => cert.org)).size,
    [],
  );

  return (
    <>
      <section className="relative min-h-screen overflow-hidden px-6 pb-16 pt-14 text-(--color-text) md:px-12">
        <div className="mx-auto mb-10 max-w-4xl text-center animate-dropdown">
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Certificates
          </h1>

          <p className="mt-2 text-lg font-bold text-pink-50 sm:text-xl md:text-2xl">
            Built Through Consistent Practice
          </p>

          <p className="mt-4 text-pink-100/80">
            Learning milestones and competition achievements presented in a
            project-style visual gallery with your portfolio color coding.
          </p>
        </div>

        {/* Divider */}

        <div className="mx-auto h-px w-32 bg-linear-to-r from-transparent via-purple-300 to-pink-400 shadow-[0_0_24px_rgba(216,164,255,0.35)]" />

        <div className="mx-auto grid max-w-6xl gap-6 mt-10 md:grid-cols-2">
          {certificates.map((cert, index) => {
            const style = levelStyles[cert.level] || fallbackStyle;

            return (
              <article
                key={`${cert.title}-${index}`}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-pink-300/25 animate-dropdown"
                style={{ animationDelay: `${0.08 * index}s` }}
              >
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-1 bg-linear-to-r ${style.bar}`}
                />

                <div className="flex flex-wrap items-center gap-2 px-5 pt-5">
                  <span
                    className={`rounded-full border px-3 py-1 text-xs backdrop-blur-sm ${style.chip}`}
                  >
                    {cert.level}
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-pink-50/85">
                    {cert.track}
                  </span>
                </div>

                <div className="p-5">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <p className="text-xs uppercase tracking-wide text-pink-100/60">
                      {cert.org}
                    </p>
                    <span className="text-xs text-pink-100/65">
                      {cert.year}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-pink-50">
                    {cert.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-pink-100/80">
                    {cert.note}
                  </p>

                  <button
                    onClick={() => setSelectedCert(cert)}
                    className={`mt-5 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm transition-all duration-300 cursor-pointer hover:-translate-y-0.5 ${style.button}`}
                  >
                    Preview Certificate
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {certificates.length === 0 && (
          <p className="mt-10 text-center text-sm text-pink-100/70">
            No certificates available for this organization.
          </p>
        )}
      </section>

      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#120913] shadow-2xl animate-dropdown">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div>
                <h2 className="text-sm font-semibold text-pink-50">
                  {selectedCert.title}
                </h2>
                <p className="text-xs text-pink-100/70">
                  {selectedCert.org} • {selectedCert.year} •{" "}
                  {selectedCert.level}
                </p>
              </div>

              <button
                onClick={() => setSelectedCert(null)}
                className="rounded-full p-2 text-pink-100/70 transition hover:bg-white/10 hover:text-pink-50 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="h-[75vh] p-4 flex items-center justify-center">
              <img
                src={selectedCert.image}
                alt={`${selectedCert.title} full preview`}
                className="h-full w-full rounded-xl border border-white/10 object-contain animate-dropdown"
                style={{ animationDelay: "0.06s" }}
              />
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-center border-t border-white/10 bg-white/5 py-3 backdrop-blur-sm">
        <div className="text-sm tracking-wide text-pink-100/65">
          &copy; 2026 Rakhi. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Certificates;
