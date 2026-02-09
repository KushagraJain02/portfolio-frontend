// src/components/Projects/TechStack.jsx
import React from "react";

const TechStack = ({ techs }) => {
  return (
    <section className="tech-stack mt-4">
      <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
      <ul className="flex flex-wrap gap-2">
        {techs.map((tech, index) => (
          <li key={index} className="px-2 py-1 bg-gray-200 rounded">
            {tech}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TechStack;
