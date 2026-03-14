import React from "react";

import PageShell from "../components/PageShell";

const Skill = () => {
  return (
    <PageShell
      eyebrow="Capabilities"
      title={<>My <span className="portfolio-name">Skills</span></>}
      description="MERN stack, UI development, and problem solving par focused skill set ko yahan showcase kiya jayega in the same dark theme style."
    />
  );
};

export default Skill;