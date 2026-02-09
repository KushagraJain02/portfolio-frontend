import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  if (!project) return null;

  const { title, slug, description, techStack = [] } = project;

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(99, 102, 241, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(168, 85, 247, 0.6);
          }
        }
        .group:hover .float-effect {
          animation: float 3s ease-in-out infinite;
        }
        .group:hover .glow-effect {
          animation: glow 2s ease-in-out infinite;
        }
        @keyframes slideUp {
          from {
            transform: translateY(10px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .group:hover .slide-up {
          animation: slideUp 0.5s ease-out forwards;
        }
      `}</style>

      <Link
        to={`/projects/${slug}`}
        className="group relative block bg-linear-to-br from-white via-indigo-50/30 to-purple-50/30 backdrop-blur-sm rounded-3xl shadow-2xl p-8 hover:shadow-[0_20px_60px_rgba(99,102,241,0.4)] hover:scale-105 transition-all duration-500 border-2 border-slate-200 hover:border-transparent overflow-hidden"
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-linear-to-br from-indigo-400/0 via-purple-400/0 to-pink-400/0 group-hover:from-indigo-400/20 group-hover:via-purple-400/20 group-hover:to-pink-400/20 transition-all duration-700 rounded-3xl"></div>

        {/* Decorative circles */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-linear-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-linear-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>

        {/* Glow border effect */}
        <div className="glow-effect absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Content */}
        <div className="relative z-10 float-effect">
          {/* Title with enhanced gradient */}
          <h3 className="text-3xl font-black mb-5 text-slate-900 group-hover:bg-linear-to-r group-hover:from-indigo-600 group-hover:via-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500 leading-tight">
            {title}
          </h3>

          {/* Description */}
          <p className="text-slate-700 mb-8 line-clamp-3 text-lg leading-relaxed font-medium group-hover:text-slate-800 transition-colors duration-300">
            {description}
          </p>

          {/* Tech Stack with enhanced styling */}
          {techStack.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, index) => (
                <span
                  key={tech}
                  className="slide-up px-5 py-2.5 text-sm font-extrabold bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 text-white rounded-2xl shadow-lg group-hover:shadow-2xl group-hover:scale-110 group-hover:rotate-2 transition-all duration-300"
                  style={{
                    transitionDelay: `${index * 80}ms`,
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full"></div>
        </div>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-indigo-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </Link>
    </>
  );
};

export default ProjectCard;
