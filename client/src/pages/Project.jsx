import React from "react";

import PageShell from "../components/PageShell";

const Project = () => {
  return (
    <PageShell
      eyebrow="Work Showcase"
      title={<>Featured <span className="portfolio-name">Projects</span></>}
      description="Real projects, modern interfaces aur practical development work isi dark showcase format me display hoga."
    />
  );
};

export default Project;