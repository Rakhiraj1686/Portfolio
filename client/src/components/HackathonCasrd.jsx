import { HiBuildingOffice2, HiCalendar } from "react-icons/hi2";
import { HiSparkles } from "react-icons/hi";

// Per-card accent themes — falls back to the original pink theme if none is set
const themes = {
  pink: {
    badgeBorder: "border-pink-400/25",
    badgeBg: "bg-pink-500/10",
    badgeText: "text-pink-200",
    hoverBorder: "hover:border-pink-400/30",
    hoverShadow: "hover:shadow-[0_0_40px_rgba(236,72,153,0.18)]",
    icon: "text-pink-300",
    glow: "shadow-[0_0_20px_rgba(236,72,153,0.5)]",
    gradient: "from-pink-400 via-fuchsia-400 to-purple-400",
    iconBg: "from-pink-500/30 to-purple-500/30",
    iconRing: "ring-pink-400/30",
    dot: "bg-pink-400",
  },
  emerald: {
    badgeBorder: "border-emerald-400/25",
    badgeBg: "bg-emerald-500/10",
    badgeText: "text-emerald-200",
    hoverBorder: "hover:border-emerald-400/30",
    hoverShadow: "hover:shadow-[0_0_40px_rgba(16,185,129,0.18)]",
    icon: "text-emerald-300",
    glow: "shadow-[0_0_20px_rgba(16,185,129,0.5)]",
    gradient: "from-emerald-400 via-teal-400 to-cyan-400",
    iconBg: "from-emerald-500/30 to-teal-500/30",
    iconRing: "ring-emerald-400/30",
    dot: "bg-emerald-400",
  },
};

function HackathonCard({ hackathon, index = 0 }) {
  const theme = themes[hackathon.theme] || themes.pink;

  return (
    <div
      style={{ animationDelay: `${index * 100}ms` }}
      className={`group relative flex animate-fade-up flex-col gap-6 overflow-hidden rounded-3xl border border-white/10
      bg-white/5 p-4 opacity-0 backdrop-blur-xl
      transition-all duration-300
      hover:-translate-y-1
      ${theme.hoverBorder}
      hover:bg-white/[0.07]
      hover:scale-[1.01]
      ${theme.hoverShadow}
      md:flex-row`}
    >
      {/* Top gradient hairline accent */}
      <div
        className={`absolute inset-x-0 top-0 h-px bg-linear-to-r ${theme.gradient} opacity-40 transition-opacity duration-500 group-hover:opacity-100`}
      />

      {/* Ambient corner glow on hover */}
      <div
        className={`pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-linear-to-br ${theme.gradient} opacity-0 blur-[90px] transition-opacity duration-700 group-hover:opacity-20`}
      />

      {/* Image */}
      <div className="relative h-60 overflow-hidden rounded-2xl border border-white/10 md:w-80 shrink-0">
        <img
          src={hackathon.image}
          alt={hackathon.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative flex flex-1 flex-col">
        {/* Title + Badge */}
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div
              className={`hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl
              bg-linear-to-br ${theme.iconBg} ring-1 ${theme.iconRing} sm:flex`}
            >
              <HiSparkles className={`text-2xl ${theme.icon}`} />
            </div>

            <div>
              <h3
                className={`bg-linear-to-r ${theme.gradient} bg-clip-text text-3xl font-bold text-transparent`}
              >
                {hackathon.title}
              </h3>

              <div className="mt-2 flex items-center gap-1.5 text-sm text-white/50">
                <HiCalendar className="text-base" />
                <span>{hackathon.date}</span>
              </div>
            </div>
          </div>

          <span
            className={`inline-flex items-center gap-2 rounded-full border ${theme.badgeBorder}
            ${theme.badgeBg} px-4 py-2
            text-sm font-semibold ${theme.badgeText}
            ${hackathon.badgeGlow ? theme.glow : ""}`}
          >
            {hackathon.badgeGlow && (
              <span className="relative flex h-2 w-2">
                <span
                  className={`absolute inline-flex h-full w-full animate-ping rounded-full ${theme.dot} opacity-75`}
                />
                <span
                  className={`relative inline-flex h-2 w-2 rounded-full ${theme.dot}`}
                />
              </span>
            )}
            {hackathon.result}
          </span>
        </div>

        {/* Organizer */}
        <div className="mt-3 flex items-center gap-3 text-white/70">
          <HiBuildingOffice2 className={`text-xl ${theme.icon}`} />
          <span className="text-base">{hackathon.organizer}</span>
        </div>

        {/* Description */}
        <p className="mt-4 leading-7 text-white/75">
          {hackathon.description}
        </p>

        {/* Tech Stack */}
        {hackathon.tech && (
          <div className="mt-4 flex flex-wrap gap-3">
            {hackathon.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10
                bg-white/5 px-4 py-1.5
                text-xs font-medium text-white/70
                transition duration-300
                hover:border-white/20
                hover:bg-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default HackathonCard;