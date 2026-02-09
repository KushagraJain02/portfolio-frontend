import React from "react";

const About = () => {
  return (
    <section className="relative py-20 md:py-32 px-4 md:px-8 lg:px-16 bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-indigo-100 border border-indigo-200 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          <span className="text-sm font-mono font-medium text-indigo-700">
            developer.about()
          </span>
        </div>

        {/* Title with Gradient */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
            Get to know who I am
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl">
            Passionate developer solving complex problems, one algorithm at a
            time
          </p>

          {/* Decorative Line */}
          <div className="w-24 h-1.5 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"></div>
        </div>

        {/* Content Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Left Column - Image with Stats */}
          <div className="col-span-1 md:col-span-1 relative pb-16 md:pb-0">
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden border-4 border-white shadow-2xl shadow-indigo-200/50 group hover:shadow-indigo-300/50 transition-all duration-500">
              {/* Profile Image */}
              <img
                src="https://i.pinimg.com/736x/ba/b5/a7/bab5a73daf7fa97261b2a9ea47a7fe9f.jpg"
                alt="Profile"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(135deg, #e0e7ff 0%, #f3e8ff 100%)";
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent"></div>
            </div>

            {/* Floating Stats - Positioned Outside */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border-2 border-indigo-200 z-20 hover:shadow-2xl transition-shadow duration-300 whitespace-nowrap">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-black bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  1000+
                </div>
                <div className="text-xs font-semibold text-indigo-600 mt-1">
                  Problems
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border-2 border-purple-200 z-20 hover:shadow-2xl transition-shadow duration-300 whitespace-nowrap">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-black bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  3+
                </div>
                <div className="text-xs font-semibold text-purple-600 mt-1">
                  Platforms
                </div>
              </div>
            </div>

            <div className="absolute top-1/3 -right-6 bg-white rounded-2xl p-4 shadow-xl border-2 border-pink-200 z-20 hover:shadow-2xl transition-shadow duration-300 whitespace-nowrap">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-black bg-linear-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                  5+
                </div>
                <div className="text-xs font-semibold text-pink-600 mt-1">
                  Tech Stack
                </div>
              </div>
            </div>
          </div>

          {/* Center Column - Main Content */}
          <div className="col-span-1 md:col-span-1 space-y-6">
            <div className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl shadow-indigo-100/50 border-2 border-white hover:shadow-2xl hover:shadow-indigo-200/50 hover:-translate-y-1 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Profile Icon */}
              <div className="relative z-10 flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-3xl shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform duration-300 shrink-0">
                  👨‍💻
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                    Computer Science
                  </h3>
                  <p className="text-sm md:text-base text-indigo-600 font-semibold">
                    Problem Solver & Builder
                  </p>
                </div>
              </div>

              <p className="relative z-10 text-base md:text-lg text-gray-700 leading-relaxed">
                I am a Computer Science student with a{" "}
                <span className="font-bold text-indigo-600 border-b-2 border-indigo-200">
                  strong DSA foundation
                </span>
                . I have solved{" "}
                <span className="inline-flex items-center justify-center px-2 py-1 rounded-lg bg-linear-to-r from-orange-400 to-pink-500 text-white font-bold text-sm shadow-md">
                  1000+
                </span>{" "}
                problems on LeetCode, Codeforces & CodeChef. I am passionate
                about building{" "}
                <span className="font-bold text-purple-600">
                  scalable applications
                </span>{" "}
                and solving challenging problems.
              </p>

              {/* Code Snippet Style Box */}
              <div className="relative z-10 mt-6 bg-linear-to-br from-slate-900 to-indigo-950 rounded-2xl p-6 font-mono text-sm shadow-xl overflow-hidden">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400 shadow-lg"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400 shadow-lg"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400 shadow-lg"></div>
                  <span className="text-gray-500 ml-2 text-xs">profile.js</span>
                </div>
                <code className="text-gray-300 text-xs md:text-sm">
                  <span className="text-pink-400">const</span>{" "}
                  <span className="text-blue-300">skills</span> = [
                  <br />
                  <span className="ml-4 text-green-300">"DSA"</span>,{" "}
                  <span className="text-green-300">"Problem Solving"</span>,
                  <br />
                  <span className="ml-4 text-green-300">"Full Stack"</span>
                  <br />
                  ];
                </code>
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Skills */}
          <div className="col-span-1 md:col-span-1 space-y-6">
            {/* Platform Badges */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-lg border-2 border-white hover:shadow-xl transition-all duration-300">
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                Active On
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-linear-to-r from-orange-50 to-red-50 border-2 border-orange-200 hover:shadow-md hover:border-orange-300 transition-all duration-300 cursor-pointer group/item">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-orange-500/30 group-hover/item:scale-110 transition-transform duration-300 shrink-0">
                    L
                  </div>
                  <span className="font-semibold text-gray-800 text-sm md:text-base">
                    LeetCode
                  </span>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-2xl bg-linear-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 hover:shadow-md hover:border-blue-300 transition-all duration-300 cursor-pointer group/item">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/30 group-hover/item:scale-110 transition-transform duration-300 shrink-0">
                    CF
                  </div>
                  <span className="font-semibold text-gray-800 text-sm md:text-base">
                    Codeforces
                  </span>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-2xl bg-linear-to-r from-amber-50 to-yellow-50 border-2 border-amber-200 hover:shadow-md hover:border-amber-300 transition-all duration-300 cursor-pointer group/item">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-amber-500/30 group-hover/item:scale-110 transition-transform duration-300 shrink-0">
                    CC
                  </div>
                  <span className="font-semibold text-gray-800 text-sm md:text-base">
                    CodeChef
                  </span>
                </div>
              </div>
            </div>

            {/* Skills Tags */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-lg border-2 border-white hover:shadow-xl transition-all duration-300">
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-2xl">💡</span>
                Core Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "DSA", color: "from-indigo-500 to-indigo-600" },
                  {
                    label: "Algorithms",
                    color: "from-purple-500 to-purple-600",
                  },
                  {
                    label: "System Design",
                    color: "from-pink-500 to-pink-600",
                  },
                  {
                    label: "Problem Solving",
                    color: "from-blue-500 to-blue-600",
                  },
                  { label: "Full Stack", color: "from-cyan-500 to-cyan-600" },
                ].map((skill, i) => (
                  <span
                    key={i}
                    className={`px-3 md:px-4 py-2 rounded-lg bg-linear-to-r ${skill.color} text-white text-xs md:text-sm font-semibold shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer`}
                  >
                    {skill.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations CSS */}
      <style>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
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

export default About;
