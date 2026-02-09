import React from "react";

const projects = [
  {
    title: "Go-Food",
    desc: "Full-stack MERN food ordering platform with JWT authentication, role-based access, cart, order history, and responsive UI. Served 100+ test users with optimized performance.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://go-food-frontend-zeta.vercel.app/",
    icon: "🛍️",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
    iconBg: "from-blue-400 to-cyan-600",
    glowColor: "shadow-blue-500/50",
    category: "Full Stack",
  },
  {
    title: "Doctor Appointment Website",
    desc: "Full-stack doctor appointment system with JWT-based authentication, admin/user dashboards, and REST APIs handling 500+ test bookings with sub-200ms response time.",
    tech: ["React", "Chart.js", "Node.js"],
    link: "https://doctorapp-frontend-eight.vercel.app/",
    icon: "📊",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
    iconBg: "from-purple-400 to-pink-600",
    glowColor: "shadow-purple-500/50",
    category: "Data Visualization",
  },
  {
    title: "Currency Converter",
    desc: "Real-time currency converter using external APIs with intuitive UI and fast conversions.",
    tech: ["React"],
    link: "https://kushagrajain02.github.io/crypto/",
    icon: "✍️",
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50",
    iconBg: "from-orange-400 to-red-600",
    glowColor: "shadow-orange-500/50",
    category: "Full Stack",
  },
];

const FeaturedProjects = () => {
  return (
    <section className="relative py-24 px-8 lg:px-32 bg-linear-to-br from-slate-50 via-indigo-50/30 to-slate-50 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* Floating Gradient Orbs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute top-40 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 rounded-full bg-indigo-100 border border-indigo-200 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
            </span>
            <span className="text-sm font-mono font-semibold text-indigo-700">
              portfolio.showcase()
            </span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-extrabold mb-6 bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-1 w-20 bg-linear-to-r from-transparent via-indigo-500 to-transparent rounded-full"></div>
            <div className="h-1.5 w-32 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"></div>
            <div className="h-1 w-20 bg-linear-to-r from-transparent via-pink-500 to-transparent rounded-full"></div>
          </div>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing my latest work in full-stack development and
            problem-solving
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, index) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card Glow Effect */}
              <div
                className={`absolute -inset-0.5 bg-linear-to-r ${p.gradient} rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500`}
              ></div>

              {/* Main Card */}
              <div className="relative h-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
                {/* Top Gradient Bar */}
                <div className={`h-2 bg-linear-to-r ${p.gradient}`}></div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Icon Badge & Category */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-linear-to-br ${p.iconBg} flex items-center justify-center text-3xl shadow-lg ${p.glowColor} group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                    >
                      {p.icon}
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full bg-linear-to-r ${p.bgGradient} text-xs font-semibold text-gray-700 border border-gray-200`}
                    >
                      {p.category}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:bg-clip-text group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                    {p.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed line-clamp-2">
                    {p.desc}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tech.map((t, i) => (
                      <span
                        key={t}
                        className={`px-3 py-1.5 bg-linear-to-r ${p.bgGradient} rounded-lg text-xs font-semibold text-gray-700 border border-gray-200 hover:scale-105 transition-transform duration-200 cursor-pointer`}
                        style={{ animationDelay: `${i * 50}ms` }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* View Project Link */}
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-500 group-hover:text-indigo-600 transition-colors duration-300">
                    <span>View Project</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300"
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
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div
                  className={`h-1 bg-linear-to-r ${p.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                ></div>

                {/* Hover Overlay Effect */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${p.bgGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                ></div>

                {/* Corner Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <div
                    className={`w-full h-full bg-linear-to-br ${p.gradient} rounded-bl-full`}
                  ></div>
                </div>
              </div>

              {/* Floating Number Badge */}
              <div className="absolute -top-3 -right-3 w-10 h-10 rounded-xl bg-linear-to-br from-slate-800 to-slate-900 flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-110 transition-transform duration-300 border-2 border-white">
                {String(index + 1).padStart(2, "0")}
              </div>
            </a>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-16">
          <a
            href="/projects"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-indigo-500/50 hover:scale-105 transition-all duration-300 overflow-hidden relative"
          >
            {/* Button Shine Effect */}
            <span className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>

            <span className="relative z-10">View All Projects</span>

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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>

            {/* Particles Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white rounded-full animate-ping"></div>
              <div
                className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-ping"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-white rounded-full animate-ping"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
          </a>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-black bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
              {projects.length}+
            </div>
            <div className="text-sm text-gray-600 font-semibold uppercase tracking-wider">
              Projects
            </div>
          </div>

          <div className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-black bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              10+
            </div>
            <div className="text-sm text-gray-600 font-semibold uppercase tracking-wider">
              Technologies
            </div>
          </div>

          <div className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-black bg-linear-to-r from-pink-600 to-red-600 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <div className="text-sm text-gray-600 font-semibold uppercase tracking-wider">
              Completion
            </div>
          </div>

          <div className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-black bg-linear-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
              ∞
            </div>
            <div className="text-sm text-gray-600 font-semibold uppercase tracking-wider">
              Learning
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default FeaturedProjects;
