import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const ProjectDetails = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const fetchProject = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/projects/${slug}`);
        setProject(res.data.data);
      } catch (err) {
        setProject(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
          .animate-spin {
            animation: spin 1s linear infinite;
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          .animate-pulse {
            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
        `}</style>
        <div className="text-center">
          <div className="inline-block w-20 h-20 border-4 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin mb-6"></div>
          <p className="text-2xl font-bold text-cyan-400 animate-pulse">
            Loading project...
          </p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 px-6">
        <div className="text-center p-16 bg-slate-800/50 backdrop-blur-xl rounded-3xl shadow-2xl border border-cyan-400/20 max-w-2xl">
          <div className="text-8xl mb-6">🔍</div>
          <p className="text-3xl font-bold text-white mb-4">
            Project not found
          </p>
          <p className="text-slate-300 mb-8 text-lg">
            The project you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <span>←</span>
            <span>Back to Projects</span>
          </Link>
        </div>
      </div>
    );
  }

  const { title, description, techstack = [], github, live } = project;

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out;
        }
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(34, 211, 238, 0.3), inset 0 0 20px rgba(34, 211, 238, 0.1);
          }
          50% {
            box-shadow: 0 0 40px rgba(34, 211, 238, 0.5), inset 0 0 20px rgba(34, 211, 238, 0.2);
          }
        }
        .glow-border {
          animation: glow 3s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
        .shimmer {
          background-image: linear-gradient(
            90deg,
            rgba(255,255,255,0) 0%,
            rgba(255,255,255,0.2) 20%,
            rgba(255,255,255,0.5) 60%,
            rgba(255,255,255,0)
          );
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
        body {
          box-sizing: border-box;
        }
      `}</style>

      <section className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-6 relative overflow-hidden">
        {/* Animated background orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800/80 backdrop-blur-sm text-cyan-400 rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl hover:-translate-x-1 hover:bg-slate-700 transition-all duration-300 border border-cyan-400/30 hover:border-cyan-400/60 animate-slideInLeft group"
          >
            <span className="text-xl transform group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back to Projects</span>
          </Link>

          <div className="mt-16 animate-fadeInUp">
            {/* Title Section */}
            <div className="mb-12">
              <h1 className="text-6xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
                {title}
              </h1>
              <div className="h-1 w-24 bg-linear-to-r from-cyan-400 via-blue-400 to-transparent rounded-full"></div>
            </div>

            {/* Description Section */}
            <div className="mb-16 p-8 bg-slate-800/50 backdrop-blur-md rounded-2xl border border-cyan-400/20 hover:border-cyan-400/40 transition-colors duration-300">
              <p className="text-slate-200 text-xl leading-relaxed font-light">
                {description}
              </p>
            </div>

            {/* Tech Stack Section */}
            {techstack.length > 0 && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <span>Technologies</span>
                  <span className="text-cyan-400">→</span>
                </h2>
                <div className="flex flex-wrap gap-3">
                  {techstack.map((tech, index) => (
                    <div
                      key={tech}
                      className="group relative px-6 py-3 bg-linear-to-br from-cyan-500/20 to-blue-500/20 text-cyan-300 rounded-2xl font-bold text-sm md:text-base shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 cursor-default border border-cyan-400/40 hover:border-cyan-400/80 overflow-hidden"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                        animationFillMode: "both",
                      }}
                    >
                      <span className="shimmer absolute inset-0"></span>
                      <span className="relative flex items-center gap-2">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full group-hover:bg-cyan-300 transition-colors"></span>
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Buttons Section */}
            <div className="flex flex-wrap gap-6 pt-8">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative px-8 py-4 bg-slate-800 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden border border-slate-700 hover:border-cyan-400/60"
                >
                  <span className="absolute inset-0 bg-linear-to-r from-slate-700 to-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 glow-border" style={{ borderRadius: 'inherit' }}></span>
                  <span className="relative flex items-center gap-3">
                    <svg
                      className="w-6 h-6 transform group-hover:rotate-12 transition-transform"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>View on GitHub</span>
                  </span>
                </a>
              )}
              {live && (
                <a
                  href={live}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-500 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-linear-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100" style={{
                    background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2) 0%, transparent 80%)',
                  }}></span>
                  <span className="relative flex items-center gap-3">
                    <svg
                      className="w-6 h-6 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    <span>View Live Demo</span>
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetails;