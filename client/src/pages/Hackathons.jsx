import React from "react";

import PageShell from "../components/PageShell";

const Hackathons = () => {
  return (
    <PageShell
      eyebrow="Competitive Builds"
      title={<>Hackathon <span className="portfolio-name">Highlights</span></>}
      description="Hackathon participation, rapid builds, aur team collaboration ko bhi ab same dark project aesthetic me dikhaya jayega."
    />
  );
};

export default Hackathons;