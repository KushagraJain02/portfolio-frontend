import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-start px-8 lg:px-32 bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e520_1px,transparent_1px),linear-gradient(to_bottom,#4f46e520_1px,transparent_1px)] bg-size-[4rem_4rem]"></div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/30 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
      <div className="absolute top-40 left-20 w-96 h-96 bg-indigo-500/30 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-purple-500/30 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>

      {/* Additional Floating Orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-rotate-slow"></div>
      <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-pink-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-300"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-float shadow-lg shadow-blue-400/50"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-float animation-delay-1000 shadow-lg shadow-cyan-400/50"></div>
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-indigo-400 rounded-full animate-float animation-delay-2000 shadow-lg shadow-indigo-400/50"></div>
        <div className="absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-float animation-delay-3000 shadow-lg shadow-purple-400/50"></div>
      </div>

      {/* Developer Workspace Image (Right Side) */}
      <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 h-full pointer-events-none">
        <div className="relative w-full h-full">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-slate-950/90 z-20"></div>

          {/* Developer Workspace Image */}
          <img
            src="https://i.pinimg.com/1200x/7c/e2/a0/7ce2a0be6a58fa80cc15158300d6bf9e.jpg"
            alt="Developer Workspace"
            loading="lazy"
            onError={(e) => {
              console.error("Image failed to load:", e.currentTarget.src);
              e.currentTarget.style.background =
                "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)";
            }}
            className="w-full h-full object-cover opacity-70 blur-xs"
          />

          {/* Decorative Glass Effect Card Overlay */}
          <div className="absolute bottom-10 right-10 bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 max-w-sm z-30 animate-fade-in-up animation-delay-1500 hover:border-cyan-400/50 hover:shadow-cyan-400/30 transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-400 shadow-lg shadow-red-400/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400 shadow-lg shadow-yellow-400/50"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50"></div>
              <span className="text-cyan-400 ml-2 text-xs font-mono font-semibold">
                portfolio.js
              </span>
            </div>
            <code className="font-mono text-sm text-slate-300 leading-relaxed">
              <span className="text-pink-400">const</span>{" "}
              <span className="text-blue-300">developer</span> = {"{"}
              <br />
              <span className="ml-4 text-cyan-300">name</span>:{" "}
              <span className="text-emerald-400">"Kushagra"</span>,<br />
              <span className="ml-4 text-cyan-300">role</span>:{" "}
              <span className="text-emerald-400">"Full Stack"</span>,<br />
              <span className="ml-4 text-cyan-300">status</span>:{" "}
              <span className="text-emerald-400 animate-pulse">
                ● Available
              </span>
              <br />
              {"}"};
            </code>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-linear-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/40 backdrop-blur-sm animate-fade-in-down animate-pulse-glow">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500 shadow-lg shadow-cyan-500/50"></span>
          </span>
          <span className="text-sm font-mono font-semibold text-cyan-300">
            Available for opportunities
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 animate-fade-in-up animation-delay-100">
          <span className="block text-slate-50 mb-2">Hi, I'm</span>
          <span className="block bg-linear-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent relative animate-fade-in-up animation-delay-200">
            Kushagra Jain
            <span className="inline-block ml-4 text-6xl md:text-7xl animate-wave">
              👋
            </span>
          </span>
          {/* Decorative Underline */}
          <div className="mt-4 flex gap-2 animate-fade-in-up animation-delay-300">
            <div className="h-2 w-32 bg-linear-to-r from-cyan-500 to-blue-500 rounded-full shadow-lg shadow-cyan-500/50"></div>
            <div className="h-2 w-20 bg-linear-to-r from-blue-500 to-indigo-500 rounded-full shadow-lg shadow-blue-500/50"></div>
          </div>
        </h1>

        {/* Subtitle with Rich Styling */}
        <div className="mb-8 animate-fade-in-up animation-delay-400">
          <div className="inline-flex items-center gap-3 px-6 py-3 mb-6 rounded-2xl bg-linear-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 backdrop-blur-sm">
            <span className="text-xl md:text-2xl font-bold bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Software Developer
            </span>
            <span className="text-cyan-500/40">|</span>
            <span className="text-xl md:text-2xl font-bold bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Problem Solver
            </span>
          </div>

          <p className="text-lg md:text-2xl text-slate-300 leading-relaxed max-w-3xl">
            I build{" "}
            <span className="font-bold bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              scalable web applications
            </span>{" "}
            and enjoy solving{" "}
            <span className="font-bold bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              complex problems
            </span>
            .
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up animation-delay-500">
          {/* Primary Button */}
          <a
            href="projects"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-linear-to-r from-cyan-600 to-blue-600 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-400/75 hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            {/* Button Shine Effect */}
            <span className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>

            <span className="relative z-10">View Projects</span>

            <svg
              className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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

            {/* Button Glow */}
            <span className="absolute inset-0 rounded-2xl bg-white/10 blur-xl scale-0 group-hover:scale-100 transition-transform duration-500"></span>
          </a>

          {/* Secondary Button */}
          <a
            href="resume"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-slate-100 rounded-2xl font-bold text-lg border-2 border-slate-700 hover:bg-slate-800/80 hover:border-cyan-500 hover:text-cyan-300 hover:scale-105 transition-all duration-300"
          >
            <svg
              className="w-5 h-5 group-hover:rotate-12 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span>Resume</span>
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-lg shadow-emerald-400/50"></div>
          </a>
        </div>

        {/* Stats / Social Proof */}
        <div className="flex flex-wrap items-center gap-8 animate-fade-in-up animation-delay-600">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold shadow-lg shadow-cyan-500/50 group-hover:scale-110 transition-transform">
              <span className="text-xl">🎯</span>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-50">1000+</div>
              <div className="text-sm text-slate-400 font-medium">
                Problems Solved
              </div>
            </div>
          </div>

          <div className="hidden sm:block h-12 w-px bg-linear-to-b from-transparent via-cyan-500/30 to-transparent"></div>

          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/50 group-hover:scale-110 transition-transform">
              <span className="text-xl">🚀</span>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-50">3+</div>
              <div className="text-sm text-slate-400 font-medium">
                Live Projects
              </div>
            </div>
          </div>

          <div className="hidden sm:block h-12 w-px bg-linear-to-b from-transparent via-blue-500/30 to-transparent"></div>

          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/50 group-hover:scale-110 transition-transform">
              <span className="text-xl">💡</span>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-50">10+</div>
              <div className="text-sm text-slate-400 font-medium">
                Technologies
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Showcase */}
        <div className="mt-16 animate-fade-in-up animation-delay-700">
          <p className="text-sm text-cyan-400 font-semibold uppercase tracking-wider mb-4">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "React",
              "Node.js",
              "MongoDB",
              "Express",
              "Tailwind CSS",
              "JavaScript",
              "Git",
            ].map((tech, i) => (
              <div
                key={tech}
                className="group px-4 py-2 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:bg-slate-800/80 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg shadow-slate-900/50 hover:shadow-cyan-500/20"
                style={{
                  animationDelay: `${i * 50}ms`,
                  animation: "slide-in-right 0.8s ease-out forwards",
                  opacity: 0,
                }}
              >
                <span className="text-sm font-semibold text-slate-300 group-hover:text-cyan-300 transition-colors">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes rotate-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes wave {
          0% {
            transform: rotate(0deg);
          }
          10% {
            transform: rotate(14deg);
          }
          20% {
            transform: rotate(-8deg);
          }
          30% {
            transform: rotate(14deg);
          }
          40% {
            transform: rotate(-4deg);
          }
          50% {
            transform: rotate(10deg);
          }
          60% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(34, 211, 238, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(34, 211, 238, 0.6);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-rotate-slow {
          animation: rotate-slow 20s linear infinite;
        }
        .animate-wave {
          animation: wave 2.5s ease-in-out infinite;
          display: inline-block;
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        .animation-delay-100 {
          animation-delay: 0.1s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        .animation-delay-500 {
          animation-delay: 0.5s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        .animation-delay-700 {
          animation-delay: 0.7s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-1500 {
          animation-delay: 1.5s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        body {
          box-sizing: border-box;
        }
      `}</style>
    </section>
  );
};

export default Hero;
