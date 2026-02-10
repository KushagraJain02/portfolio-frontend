import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { getProjectFlags } from "../../utils/projectCategory";
import { Link } from "react-router-dom";

const ProjectCard = ({ project, index }) => {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="block"
      style={{ textDecoration: "none" }}
    >
      <div
        style={{ animationDelay: `${index * 100}ms` }}
        className="project-card opacity-0 animate-slide-up"
      >
        <div className="project-card-content">
          {/* Card Index */}
          <span className="card-index">
            Project {String(index + 1).padStart(3, "0")}
          </span>

          {/* Title */}
          <h3 className="project-title">{project.title}</h3>

          {/* Description */}
          <p className="project-description">{project.description}</p>

          {/* Divider */}
          <div className="card-divider"></div>

          {/* Tech Stack */}
          <div className="tech-stack">
            {project.techstack && project.techstack.length > 0 ? (
              project.techstack.map((tech, idx) => (
                <span key={idx} className="tech-tag" title={tech}>
                  {tech}
                </span>
              ))
            ) : (
              <span className="text-xs text-slate-400">No tech stack info</span>
            )}
          </div>

          {/* Links */}
          <div className="project-links">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="link-btn link-active"
                title="View live demo"
                onClick={(e) => e.stopPropagation()} // stops card navigation
              >
                Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link-btn link-active"
                title="View on GitHub"
                onClick={(e) => e.stopPropagation()} // stops card navigation
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

const ProjectGrid = ({ activeFilter }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await axios.get(`${API_BASE_URL}/projects`);
        // Handle both array directly and nested data property
        const projectData = Array.isArray(res.data)
          ? res.data
          : res.data.data || [];
        setProjects(projectData);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError(
          err.message || "Failed to load projects. Please try again later.",
        );
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    console.log("API BASE:", import.meta.env.VITE_API_BASE_URL);
  }, []);

  // console.log(projects);

  // Memoized filtered projects
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      if (activeFilter === "All") return true;

      const { hasFrontend, hasBackend, hasFullStack, hasDSA } = getProjectFlags(
        project.techstack,
      );

      if (activeFilter === "Frontend") return hasFrontend;
      if (activeFilter === "Backend") return hasBackend;
      if (activeFilter === "Full Stack") return hasFullStack;
      if (activeFilter === "DSA") return hasDSA;

      return true;
    });
  }, [projects, activeFilter]);

  // Loading state
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-32 px-6">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-indigo-200/30 border-t-indigo-500 rounded-full animate-spin"></div>
          <div
            className="absolute inset-0 w-20 h-20 border-4 border-purple-200/30 border-t-purple-500 rounded-full animate-spin"
            style={{ animationDirection: "reverse", animationDuration: "1s" }}
          ></div>
        </div>
        <p className="mt-8 text-indigo-300 font-semibold animate-pulse">
          Loading projects...
        </p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-32 px-6">
        <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8 max-w-md text-center backdrop-blur-sm">
          <svg
            className="w-12 h-12 text-red-400 mx-auto mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-red-300 font-semibold mb-2">
            Oops! Something went wrong
          </p>
          <p className="text-red-200/70 text-sm">{error}</p>
        </div>
      </div>
    );
  }

  // Empty state
  if (filteredProjects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-32 px-6">
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 max-w-md text-center backdrop-blur-sm">
          <svg
            className="w-12 h-12 text-slate-400 mx-auto mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
            />
          </svg>
          <p className="text-slate-300 font-semibold mb-2">No projects found</p>
          <p className="text-slate-400 text-sm">
            No results for{" "}
            <span className="text-indigo-400 font-semibold">
              {activeFilter}
            </span>{" "}
            category
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="portfolio-section">
      {/* Project counter */}
      <div className="counter-container">
        <p className="project-counter">
          Showing{" "}
          <span className="text-indigo-400 font-bold">
            {filteredProjects.length}
          </span>{" "}
          {filteredProjects.length === 1 ? "project" : "projects"}
        </p>
        {activeFilter !== "All" && (
          <span className="filter-badge">{activeFilter}</span>
        )}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Styles */}
      <style>{`
        .portfolio-section {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
          min-height: 100%;
          padding: 60px 24px;
        }

        .counter-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 40px;
          flex-wrap: wrap;
          gap: 16px;
        }

        .project-counter {
          font-size: 14px;
          color: #cbd5e1;
          font-weight: 500;
          letter-spacing: 0.05em;
        }

        .filter-badge {
          display: inline-block;
          padding: 8px 16px;
          background: rgba(99, 102, 241, 0.2);
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-radius: 20px;
          color: #a5b4fc;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          animation: fadeIn 0.3s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 32px;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .portfolio-section {
            padding: 40px 16px;
          }

          .counter-container {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        /* Project Card */
        .project-card {
          position: relative;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 32px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          display: flex;
          flex-direction: column;
        }

        /* Gradient overlay on hover */
        .project-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(79, 70, 229, 0.1), rgba(168, 85, 247, 0.1));
          opacity: 0;
          transition: opacity 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          border-radius: 24px;
          z-index: 1;
        }

        .project-card:hover::before {
          opacity: 1;
        }

        /* Top glow line on hover */
        .project-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.6), transparent);
          opacity: 0;
          transition: opacity 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          border-radius: 24px 24px 0 0;
          z-index: 2;
        }

        .project-card:hover::after {
          opacity: 1;
        }

        .project-card:hover {
          border-color: rgba(99, 102, 241, 0.3);
          transform: translateY(-12px);
          box-shadow: 
            0 30px 60px rgba(79, 70, 229, 0.15),
            0 0 60px rgba(99, 102, 241, 0.1);
        }

        .project-card-content {
          position: relative;
          z-index: 3;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        /* Card Index */
        .card-index {
          font-size: 12px;
          font-weight: 700;
          color: #818cf8;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 12px;
          opacity: 0.8;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .project-card:hover .card-index {
          color: #c7d2fe;
          opacity: 1;
        }

        /* Card Title */
        .project-title {
          font-size: 24px;
          font-weight: 800;
          color: #f1f5f9;
          margin: 0 0 16px;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          letter-spacing: -0.5px;
          line-height: 1.3;
        }

        .project-card:hover .project-title {
          background: linear-gradient(135deg, #e0e7ff, #ddd6fe, #f3e8ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Card Description */
        .project-description {
          font-size: 14px;
          color: #cbd5e1;
          line-height: 1.6;
          margin: 0 0 24px;
          font-weight: 400;
          flex-grow: 1;
          transition: color 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .project-card:hover .project-description {
          color: #e2e8f0;
        }

        /* Divider line */
        .card-divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          margin-bottom: 20px;
          transition: background 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .project-card:hover .card-divider {
          background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.3), transparent);
        }

        /* Tech Stack */
        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 20px;
        }

        .tech-tag {
          display: inline-block;
          padding: 6px 14px;
          background: rgba(99, 102, 241, 0.15);
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
          color: #a5b4fc;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          white-space: nowrap;
          box-shadow: 0 0 20px rgba(99, 102, 241, 0);
        }

        .tech-tag:hover {
          background: rgba(99, 102, 241, 0.3);
          border-color: rgba(99, 102, 241, 0.6);
          transform: scale(1.08) translateY(-2px);
          box-shadow: 0 8px 20px rgba(99, 102, 241, 0.2);
        }

        /* Links */
        .project-links {
          display: flex;
          gap: 12px;
          margin-top: auto;
        }

        .link-btn {
          flex: 1;
          padding: 12px 16px;
          background: rgba(99, 102, 241, 0.2);
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-radius: 12px;
          color: #a5b4fc;
          text-decoration: none;
          font-size: 12px;
          font-weight: 700;
          text-align: center;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          display: inline-block;
        }

        .link-active {
          cursor: pointer;
        }

        .link-active:hover {
          background: rgba(99, 102, 241, 0.4);
          border-color: rgba(99, 102, 241, 0.6);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(99, 102, 241, 0.2);
        }

        .link-active:active {
          transform: translateY(0px);
        }

        .link-disabled {
          opacity: 0.5;
          cursor: not-allowed;
          pointer-events: none;
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ProjectGrid;
