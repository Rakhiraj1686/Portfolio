import { HiBuildingOffice2 } from "react-icons/hi2";

function HackathonCard({ hackathon }) {
  return (
    <div
      className="group flex flex-col gap-6 rounded-3xl border border-white/10
      bg-white/5 p-4 backdrop-blur-xl
      transition-all duration-300
      hover:-translate-y-1
      hover:border-pink-400/30
      hover:bg-white/10
      hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]
      md:flex-row"
    >
      {/* Image */}
      <div className="h-60 overflow-hidden rounded-2xl border border-white/10 md:w-80 shrink-0">
        <img
          src={hackathon.image}
          alt={hackathon.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col">
        {/* Title + Badge */}
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h3 className="text-3xl font-bold text-white">
              {hackathon.title}
            </h3>

            <p className="mt-2 text-sm text-white/55">
              {hackathon.date}
            </p>
          </div>

          <span
            className="rounded-full border border-pink-400/25
            bg-pink-500/10 px-4 py-2
            text-sm font-semibold text-pink-300"
          >
            {hackathon.result}
          </span>
        </div>

        {/* Organizer */}
        <div className="mt-3 flex items-center gap-3 text-white/70">
          <HiBuildingOffice2 className="text-xl text-pink-300" />

          <span className="text-base">
            {hackathon.organizer}
          </span>
        </div>

        {/* Description */}
        <p className="mt-4 leading- text-white/75">
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
                text-xs font-medium text-pink-100/80
                transition duration-300
                hover:border-pink-400/40
                hover:bg-pink-500/10"
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