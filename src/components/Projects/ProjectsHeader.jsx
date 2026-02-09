import React from "react";

const ProjectsHeader = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://i.pinimg.com/736x/c0/07/56/c00756d993e9cf616ed481d0d890b856.jpg"
          alt="background"
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            e.target.style.background =
              "linear-gradient(135deg, #1e293b 0%, #312e81 50%, #1e293b 100%)";
          }}
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-slate-900/90 via-slate-800/85 to-slate-900/90"></div>
      </div>

      {/* Decorative Floating Elements */}
      <div className="absolute top-20 left-12 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse"></div>
      <div
        className="absolute bottom-40 right-16 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse"
        style={{ animationDelay: "1.5s" }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 w-full min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="w-full max-w-5xl">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 mb-10 opacity-0 animate-fadeIn">
            <a
              href="/"
              className="text-indigo-300 hover:text-white transition-colors text-sm font-medium"
            >
              Home
            </a>
            <svg
              className="w-4 h-4 text-indigo-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="text-white text-sm font-bold">Projects</span>
          </div>

          {/* Status Badge */}
          <div
            className="flex justify-center mb-12 opacity-0 animate-slideUp"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
              <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
              </div>
              <span className="text-xs font-mono font-bold text-white tracking-wide">
                PORTFOLIO SHOWCASE
              </span>
              <div className="px-3 py-1 rounded-lg bg-indigo-600 text-white text-xs font-bold">
                2024
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <div
            className="text-center mb-8 opacity-0 animate-slideUp"
            style={{ animationDelay: "0.2s" }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
              <span className="bg-linear-to-r from-white via-indigo-100 to-white bg-clip-text text-transparent">
                My Projects
              </span>
            </h1>

            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-1 w-12 bg-linear-to-r from-transparent via-indigo-400 to-transparent"></div>
              <div className="w-3 h-3 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
              <div className="h-1.5 w-24 bg-linear-to-r from-indigo-400 via-purple-400 to-indigo-400 shadow-lg shadow-purple-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
              <div className="h-1 w-12 bg-linear-to-r from-transparent via-purple-400 to-transparent"></div>
            </div>
          </div>

          {/* Description */}
          <p
            className="text-center text-lg sm:text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto mb-14 leading-relaxed opacity-0 animate-slideUp"
            style={{ animationDelay: "0.3s" }}
          >
            A collection of my most meaningful projects — from{" "}
            <span className="font-bold text-white">
              full-stack applications
            </span>{" "}
            to{" "}
            <span className="font-bold text-white">
              competitive programming dashboards
            </span>
            .
          </p>

          {/* Stats Grid */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-14 opacity-0 animate-slideUp"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="group p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/15 hover:border-white/30 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl mb-3">💼</div>
              <div className="text-3xl font-black text-white mb-2">12+</div>
              <div className="text-xs sm:text-sm text-indigo-300 font-bold uppercase tracking-wider">
                Projects
              </div>
            </div>

            <div className="group p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/15 hover:border-white/30 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl mb-3">🛠️</div>
              <div className="text-3xl font-black text-white mb-2">8+</div>
              <div className="text-xs sm:text-sm text-indigo-300 font-bold uppercase tracking-wider">
                Technologies
              </div>
            </div>

            <div className="group p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/15 hover:border-white/30 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl mb-3">⭐</div>
              <div className="text-3xl font-black text-white mb-2">3</div>
              <div className="text-xs sm:text-sm text-indigo-300 font-bold uppercase tracking-wider">
                Featured
              </div>
            </div>

            <div className="group p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/15 hover:border-white/30 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center justify-center gap-2 text-3xl mb-3">
                <div className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
                </div>
                <span>🚀</span>
              </div>
              <div className="text-3xl font-black text-white mb-2">Live</div>
              <div className="text-xs sm:text-sm text-indigo-300 font-bold uppercase tracking-wider">
                All Active
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div
            className="flex flex-wrap justify-center gap-3 mb-14 opacity-0 animate-slideUp"
            style={{ animationDelay: "0.5s" }}
          >
            {[
              "React",
              "Node.js",
              "MongoDB",
              "Express",
              "Tailwind",
              "TypeScript",
              "PostgreSQL",
              "AWS",
            ].map((tech) => (
              <div
                key={tech}
                className="group px-5 py-2.5 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/15 hover:border-white/40 hover:shadow-xl transition-all duration-300 transform hover:scale-110"
              >
                <span className="text-xs sm:text-sm font-bold text-white">
                  {tech}
                </span>
                <div className="absolute inset-0 rounded-xl bg-linear-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div
            className="flex justify-center opacity-0 animate-slideUp"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <span>Get in Touch</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div
            className="mt-16 flex justify-center opacity-0 animate-slideUp"
            style={{ animationDelay: "0.7s" }}
          >
            <div className="inline-flex flex-col items-center gap-2 text-indigo-300 animate-bounce">
              <span className="text-xs font-semibold uppercase tracking-wider">
                Scroll to explore
              </span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ProjectsHeader;
