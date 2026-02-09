import React from "react";

const skills = [
  {
    category: "Languages",
    items: ["C++", "JavaScript", "SQL"],
    icon: "💻",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
    glowColor: "shadow-blue-500/50",
    borderColor: "border-blue-200",
  },
  {
    category: "Frontend",
    items: ["React", "HTML", "CSS", "Tailwind"],
    icon: "🎨",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
    glowColor: "shadow-purple-500/50",
    borderColor: "border-purple-200",
  },
  {
    category: "Backend",
    items: ["Node.js", "Express"],
    icon: "⚙️",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50",
    glowColor: "shadow-green-500/50",
    borderColor: "border-green-200",
  },
  {
    category: "CS Fundamentals",
    items: ["DSA", "OOPs", "DBMS", "OS"],
    icon: "🧠",
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50",
    glowColor: "shadow-orange-500/50",
    borderColor: "border-orange-200",
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Postman"],
    icon: "🛠️",
    gradient: "from-indigo-500 to-purple-500",
    bgGradient: "from-indigo-50 to-purple-50",
    glowColor: "shadow-indigo-500/50",
    borderColor: "border-indigo-200",
  },
];

const Skills = () => {
  return (
    <section className="relative py-24 px-8 lg:px-32 bg-linear-to-br from-white via-indigo-50/30 to-white overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      {/* Floating Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 rounded-full bg-indigo-100 border border-indigo-200 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
            </span>
            <span className="text-sm font-mono font-semibold text-indigo-700">
              skills.map()
            </span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-extrabold mb-6 bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>

          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-1 w-20 bg-linear-to-r from-transparent via-indigo-500 to-transparent rounded-full"></div>
            <div className="h-1.5 w-32 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"></div>
            <div className="h-1 w-20 bg-linear-to-r from-transparent via-pink-500 to-transparent rounded-full"></div>
          </div>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit built through hands-on experience and
            continuous learning
          </p>
        </div>

        {/* Main Layout: Cards Left (1 col), Image Right (2 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-20">
          {/* Skills Cards Left - Compact */}
          <div className="lg:col-span-1">
            <div className="grid grid-cols-1 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill.category}
                  className="group relative"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Card Glow Effect */}
                  <div
                    className={`absolute -inset-0.5 bg-linear-to-r ${skill.gradient} rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-300`}
                  ></div>

                  {/* Main Card */}
                  <div
                    className={`relative h-full bg-white rounded-xl p-4 border-2 ${skill.borderColor} transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl overflow-hidden`}
                  >
                    {/* Top Gradient Bar */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${skill.gradient}`}
                    ></div>

                    {/* Background Gradient Overlay */}
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${skill.bgGradient} opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none`}
                    ></div>

                    {/* Icon Badge */}
                    <div className="relative flex items-center gap-2 mb-2">
                      <div
                        className={`w-10 h-10 rounded-lg bg-linear-to-br ${skill.gradient} flex items-center justify-center text-lg shadow-md group-hover:scale-110 transition-all duration-300`}
                      >
                        {skill.icon}
                      </div>
                      <h3 className="text-sm font-bold text-gray-900">
                        {skill.category}
                      </h3>
                    </div>

                    {/* Skills Tags */}
                    <div className="relative flex flex-wrap gap-1">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className={`px-2 py-0.5 bg-linear-to-r ${skill.bgGradient} rounded-md text-xs font-semibold text-gray-700 border border-gray-300 hover:scale-105 transition-all duration-200`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    {/* Corner Decoration */}
                    <div
                      className={`absolute bottom-0 right-0 w-16 h-16 bg-linear-to-tl ${skill.gradient} opacity-5 rounded-tl-2xl group-hover:opacity-10 transition-opacity duration-300`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Right - Larger */}
          <div className="lg:col-span-2 relative group">
            {/* Animated Glow Background */}
            <div className="absolute -inset-2 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-40 group-hover:opacity-60 transition-all duration-500 animate-pulse"></div>

            {/* Image Frame */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white backdrop-blur-sm group-hover:shadow-3xl transition-all duration-500">
              <img
                src="/skills_img.png"
                alt="Skills Showcase"
                loading="lazy"
                className="w-full h-auto object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                style={{
                  width: "100%",
                  maxHeight: "600px",
                  height: "auto",
                  display: "block",
                }}
                onError={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
                }}
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/15 via-transparent to-transparent rounded-xl pointer-events-none"></div>

              {/* Corner Accent - Top Left */}
              <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-white rounded-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              {/* Corner Accent - Bottom Right */}
              <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-white rounded-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              {/* Floating Stats - Compact */}
              <div className="absolute -top-4 -left-4 bg-white rounded-lg p-2 shadow-lg border-2 border-indigo-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 z-10">
                <div className="text-center">
                  <div className="text-lg font-black bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    100%
                  </div>
                  <div className="text-xs font-semibold text-indigo-600">
                    Dedicated
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-2 shadow-lg border-2 border-purple-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 z-10">
                <div className="text-center">
                  <div className="text-lg font-black bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Pro
                  </div>
                  <div className="text-xs font-semibold text-purple-600">
                    Level
                  </div>
                </div>
              </div>

              <div className="absolute top-1/3 -right-4 bg-white rounded-lg p-2 shadow-lg border-2 border-pink-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 z-10">
                <div className="text-center">
                  <div className="text-lg font-black bg-linear-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                    ⭐
                  </div>
                  <div className="text-xs font-semibold text-pink-600">
                    Featured
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="text-center p-6 rounded-2xl bg-linear-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300">
            <div className="text-4xl font-black bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-1">
              {skills.reduce((acc, s) => acc + s.items.length, 0)}+
            </div>
            <div className="text-xs text-gray-700 font-bold uppercase tracking-wider">
              Total Skills
            </div>
          </div>

          <div className="text-center p-6 rounded-2xl bg-linear-to-br from-purple-50 to-pink-50 border-2 border-purple-200 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300">
            <div className="text-4xl font-black bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">
              {skills.length}
            </div>
            <div className="text-xs text-gray-700 font-bold uppercase tracking-wider">
              Categories
            </div>
          </div>

          <div className="text-center p-6 rounded-2xl bg-linear-to-br from-green-50 to-emerald-50 border-2 border-green-200 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300">
            <div className="text-4xl font-black bg-linear-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-1">
              3+
            </div>
            <div className="text-xs text-gray-700 font-bold uppercase tracking-wider">
              Years Learning
            </div>
          </div>

          <div className="text-center p-6 rounded-2xl bg-linear-to-br from-orange-50 to-red-50 border-2 border-orange-200 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-center justify-center gap-1 mb-1">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </div>
              <div className="text-4xl font-black bg-linear-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                ∞
              </div>
            </div>
            <div className="text-xs text-gray-700 font-bold uppercase tracking-wider">
              Always Growing
            </div>
          </div>
        </div>

        {/* Proficiency Bars */}
        <div className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-gray-100">
          <h3 className="text-2xl font-bold text-center mb-8 bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Proficiency Overview
          </h3>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={skill.category} className="group">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{skill.icon}</span>
                    <span className="font-bold text-gray-800 text-sm">
                      {skill.category}
                    </span>
                  </div>
                  <span className="text-xs font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    {Math.floor(70 + Math.random() * 30)}%
                  </span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden border border-gray-200 group-hover:border-indigo-300 transition-all duration-300">
                  <div
                    className={`h-full bg-linear-to-r ${skill.gradient} rounded-full transition-all duration-1000 ease-out`}
                    style={{
                      width: `${70 + Math.random() * 30}%`,
                      transitionDelay: `${index * 150}ms`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Journey Timeline */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-5 rounded-2xl bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-2xl shadow-indigo-500/50 hover:shadow-3xl hover:scale-105 transition-all duration-300 border-2 border-white/20">
            <span className="text-3xl animate-bounce">🎓</span>
            <div className="text-left">
              <div className="font-bold text-lg">Continuous Learner</div>
              <div className="text-indigo-100 text-xs">
                Building expertise every day
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
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

export default Skills;
