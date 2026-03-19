import React from "react";
import hackathonNK from "../assets/hackathonNK.jpeg";

const hackathons = [
  {
    title: "NavKalpna Hackathon",
    image: hackathonNK,
    location: "Bhopal, Madhya Pradesh",
    date: "2026",
    position: "Top 8 Finalist",
    desc: "Built HealthUp FitAI, an AI-powered fitness intelligence platform that provides personalized workout plans, diet recommendations, habit tracking, and AI coaching.",
    achievement:
      "Selected among the Top 8 teams out of 60+ participants and given the opportunity to further develop the product for real-world implementation.",
  },
];

const Hackathons = () => {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden px-6 pb-16 pt-15 md:pt-15 text-(--color-text) md:px-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center mb-5">
          <h1 className="font-bold leading-tight">
            <span className="bg-linear-to-r from-(--color-primary) via-(--color-accent) to-(--color-secondary) bg-clip-text text-3xl text-transparent sm:text-4xl md:text-5xl">
              Hackathons
            </span>

            <span className="mt-3 block text-xl text-(--color-text) sm:text-2xl md:text-3xl">
              Where Ideas Became Products
            </span>
          </h1>

          <p className="max-w-4xl px-1 text-sm leading-relaxed text-(--color-text-muted) md:text-base">
            I enjoy fast-paced problem solving, collaborating with teams, and
            building real-world MVPs under tight deadlines. Hackathons helped me
            improve product thinking, architecture decisions, and rapid
            development skills.
          </p>
          {/* Divider */}

          <div className="mx-auto h-px w-32 bg-linear-to-r from-transparent via-purple-300 to-pink-400 shadow-[0_0_24px_rgba(216,164,255,0.35)]" />

          <div className="mt-4 grid grid-cols-2 gap-5">
            <div className="group rounded-2xl border border-white/10 bg-black/35 px-4 py-3 backdrop-blur transition hover:-translate-y-0.5 hover:border-(--color-primary)/70">
              <p className="text-2xl font-bold text-(--color-primary) md:text-3xl">
                2+
              </p>
              <p className="mt-1 text-xs text-(--color-text-muted)">
                Hackathons Joined
              </p>
            </div>

            <div className="group rounded-2xl border border-white/10 bg-black/35 px-4 py-3 backdrop-blur transition hover:-translate-y-0.5 hover:border-(--color-secondary)/70">
              <p className="text-2xl font-bold text-(--color-secondary) md:text-3xl">
                MERN
              </p>
              <p className="mt-1 text-xs text-(--color-text-muted)">
                Tech Stack
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="mb-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--color-accent)/90">
              Featured Events
            </p>
            <h2 className="mt-3 text-2xl font-bold text-(--color-text) sm:text-3xl">
              Projects Built Under Pressure
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-1">
            {hackathons.map((hackathon) => (
              <div
                key={hackathon.title}
                className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-linear-to-r from-[#160b1a]/80 via-[#120913]/70 to-[#160b1a]/80 p-6 backdrop-blur"
              >
                <div className="grid items-center gap-8 md:grid-cols-2">
                  <div className="overflow-hidden rounded-2xl border border-white/10">
                    <img
                      src={hackathon.image}
                      alt={hackathon.title}
                      className="h-80 w-full rounded-2xl object-cover transition duration-500 hover:scale-[1.02]"
                    />
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-(--color-accent) md:text-4xl">
                      {hackathon.position}
                    </h2>

                    <h3 className="text-xl font-semibold text-(--color-text)">
                      {hackathon.title}
                    </h3>

                    <p className="text-sm text-(--color-text-muted)">
                      {hackathon.location}
                    </p>

                    <p className="text-sm italic text-(--color-text-muted)/90">
                      {hackathon.date}
                    </p>

                    <ul className="space-y-3 text-sm leading-relaxed text-(--color-text)/90">
                      <li className="flex gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full text-2xl text-(--color-primary)">
                          •
                        </span>
                        <span>{hackathon.desc}</span>
                      </li>

                      <li className="flex gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full text-2xl text-(--color-secondary)">
                          •
                        </span>
                        <span>{hackathon.achievement}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center bg-black/30 py-2 backdrop-blur-xl">
        <div className="text-sm tracking-wide text-(--color-text-muted)">
          © 2026 Rakhi Rani. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Hackathons;
