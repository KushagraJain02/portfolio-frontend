// src/components/Projects/ProjectHero.jsx
import React from "react";

const ProjectHero = ({ project }) => {
  return (
    <section className="project-hero">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="mt-2 text-gray-600">{project.subtitle}</p>
    </section>
  );
};

export default ProjectHero;
