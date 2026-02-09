import React, { useState } from "react";
import ProjectsHeader from "../components/Projects/ProjectsHeader";
import ProjectFilters from "../components/Projects/ProjectFilters";
import ProjectGrid from "../components/Projects/ProjectGrid";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <main className="bg-white text-gray-900">
      <ProjectsHeader />
      <ProjectFilters
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <ProjectGrid activeFilter={activeFilter} />
    </main>
  );
};

export default Projects;
