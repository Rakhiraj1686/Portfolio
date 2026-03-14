import React from "react";

import PageShell from "../components/PageShell";

const Certificates = () => {
  return (
    <PageShell
      eyebrow="Achievements"
      title={<>My <span className="portfolio-name">Certificates</span></>}
      description="Courses, certifications, aur verified learning milestones ko is dark premium style me present kiya jayega."
    />
  );
};

export default Certificates;