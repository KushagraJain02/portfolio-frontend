import React, { useState, useEffect } from "react";

const CompetitiveProgrammingPortfolio = () => {
  const [highlightedIndex, setHighlightedIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const highlights = [
    {
      id: 1,
      icon: "✅",
      text: "Solved 1000+ problems across Codeforces, CodeChef, and LeetCode",
      category: "problems",
      color: "#8b5cf6",
      stat: "1000+",
    },
    {
      id: 2,
      icon: "🏆",
      text: "Achieved Specialist rank on Codeforces with 1419 rating",
      category: "achievements",
      color: "#f59e0b",
      stat: "1419",
    },
    {
      id: 3,
      icon: "⭐",
      text: "3-star rating on CodeChef with consistent performance",
      category: "achievements",
      color: "#10b981",
      stat: "3★",
    },
    {
      id: 4,
      icon: "⚔️",
      text: "Participated in 75+ coding contests",
      category: "contests",
      color: "#ef4444",
      stat: "75+",
    },
    {
      id: 5,
      icon: "💡",
      text: "Mastered dynamic programming and graph algorithms",
      category: "skills",
      color: "#06b6d4",
      stat: "2",
    },
  ];

  const categories = [
    { id: "all", label: "All", icon: "✨", color: "#4f46e5" },
    { id: "achievements", label: "Achievements", icon: "🏆", color: "#f59e0b" },
    { id: "problems", label: "Problems", icon: "✅", color: "#8b5cf6" },
    { id: "contests", label: "Contests", icon: "⚔️", color: "#ef4444" },
    { id: "skills", label: "Skills", icon: "💡", color: "#06b6d4" },
  ];

  const stats = [
    { icon: "🎯", value: "1000+", label: "Problems Solved", color: "#8b5cf6" },
    { icon: "🏅", value: "3", label: "Top Platforms", color: "#f59e0b" },
    { icon: "⚡", value: "75+", label: "Contests", color: "#ef4444" },
  ];

  const filteredHighlights =
    selectedCategory === "all"
      ? highlights
      : highlights.filter((h) => h.category === selectedCategory);

  return (
    <div className="min-h-full w-full bg-linear-to-br from-slate-50 via-indigo-50 to-purple-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 sm:top-20 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-linear-to-br from-indigo-200 to-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 sm:bottom-32 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-linear-to-br from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 bg-linear-to-br from-blue-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-full flex flex-col">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 md:px-8 lg:px-12 pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-8 md:pb-12 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-linear-to-r from-indigo-100 to-purple-100 border border-indigo-200 mb-4 sm:mb-6 md:mb-8 animate-fade-in shadow-sm hover:shadow-md transition-shadow duration-300">
              <span className="text-base sm:text-lg">🚀</span>
              <span className="text-xs sm:text-sm font-semibold text-indigo-700 tracking-wide truncate">
                achievements.portfolio
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-4 bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-slide-up leading-tight px-1">
              Competitive Programming Achievements
            </h1>

            {/* Decorative Divider */}
            <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-4 mb-4 sm:mb-6 md:mb-8 animate-slide-up animation-delay-200">
              <div className="h-0.5 sm:h-1 w-8 sm:w-12 md:w-16 bg-linear-to-r from-transparent via-indigo-400 to-transparent rounded-full"></div>
              <div className="h-1 sm:h-1.5 w-12 sm:w-16 md:w-24 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"></div>
              <div className="h-0.5 sm:h-1 w-8 sm:w-12 md:w-16 bg-linear-to-r from-transparent via-pink-400 to-transparent rounded-full"></div>
            </div>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto animate-slide-up animation-delay-400 leading-relaxed px-2">
              A comprehensive showcase of my competitive programming journey,
              featuring milestones, achievements, and technical mastery across
              multiple platforms
            </p>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-16">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 bg-linear-to-br from-white to-slate-50 border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-lg transform hover:scale-105 animate-slide-up"
                  style={{
                    animationDelay: `${600 + idx * 100}ms`,
                  }}
                >
                  {/* Gradient Overlay on Hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                    style={{ backgroundColor: stat.color }}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3">
                      {stat.icon}
                    </div>
                    <div
                      className="text-3xl sm:text-4xl md:text-5xl font-black mb-1 sm:mb-2"
                      style={{ color: stat.color }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-600 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>

                  {/* Decorative Corner */}
                  <div
                    className="absolute -top-12 -right-12 w-24 h-24 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    style={{ backgroundColor: stat.color }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-8 sm:mb-12 animate-slide-up animation-delay-800">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`group relative px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 whitespace-nowrap ${
                    selectedCategory === cat.id
                      ? "shadow-lg scale-105"
                      : "hover:shadow-md"
                  }`}
                  style={{
                    backgroundColor:
                      selectedCategory === cat.id
                        ? cat.color
                        : "rgba(255, 255, 255, 0.6)",
                    color: selectedCategory === cat.id ? "white" : cat.color,
                    border:
                      selectedCategory === cat.id
                        ? `2px solid ${cat.color}`
                        : `2px solid ${cat.color}40`,
                  }}
                >
                  <div className="flex items-center gap-1 sm:gap-2">
                    <span className="text-sm sm:text-lg">{cat.icon}</span>
                    <span className="hidden sm:inline">{cat.label}</span>
                    <span className="sm:hidden">{cat.label.split(" ")[0]}</span>
                  </div>

                  {/* Active Indicator */}
                  {selectedCategory === cat.id && (
                    <div
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full animate-pulse"
                      style={{ backgroundColor: cat.color }}
                    ></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Grid */}
        <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 grow">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredHighlights.map((highlight, idx) => (
                <div
                  key={highlight.id}
                  className="group relative h-full cursor-pointer transition-all duration-300 transform hover:scale-105 animate-slide-up"
                  style={{
                    animationDelay: `${1000 + idx * 100}ms`,
                  }}
                  onMouseEnter={() => setHighlightedIndex(highlight.id)}
                  onMouseLeave={() => setHighlightedIndex(null)}
                >
                  {/* Card Container */}
                  <div className="h-full relative overflow-hidden rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 bg-white border border-slate-200 group-hover:border-slate-300 shadow-sm hover:shadow-xl transition-all duration-300">
                    {/* Gradient Background on Hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                      style={{ backgroundColor: highlight.color }}
                    ></div>

                    {/* Left Border Accent */}
                    <div
                      className="absolute left-0 top-0 bottom-0 w-1 sm:w-1.5 transform origin-left group-hover:w-1.5 sm:group-hover:w-2 transition-all duration-300"
                      style={{ backgroundColor: highlight.color }}
                    ></div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col gap-3 sm:gap-4 h-full">
                      {/* Icon and Stat */}
                      <div className="flex items-start justify-between gap-2">
                        <div className="text-3xl sm:text-4xl md:text-5xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shrink-0">
                          {highlight.icon}
                        </div>
                        <div
                          className="px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-bold text-white transition-all duration-300 shrink-0"
                          style={{
                            backgroundColor: highlight.color,
                            opacity:
                              highlightedIndex === highlight.id ? 1 : 0.8,
                          }}
                        >
                          {highlight.stat}
                        </div>
                      </div>

                      {/* Achievement Text */}
                      <p className="text-xs sm:text-sm md:text-base text-slate-700 font-semibold leading-relaxed grow group-hover:text-slate-900 transition-colors duration-300">
                        {highlight.text}
                      </p>

                      {/* Progress Bar */}
                      <div className="h-1 sm:h-1.5 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-700"
                          style={{
                            backgroundColor: highlight.color,
                            width:
                              highlightedIndex === highlight.id ? "100%" : "0%",
                          }}
                        ></div>
                      </div>

                      {/* Check Mark */}
                      <div
                        className={`flex items-center gap-2 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                          highlightedIndex === highlight.id
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-2"
                        }`}
                        style={{ color: highlight.color }}
                      >
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>Verified</span>
                      </div>
                    </div>

                    {/* Decorative Corner */}
                    <div
                      className="absolute -top-12 -right-12 w-24 h-24 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                      style={{ backgroundColor: highlight.color }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredHighlights.length === 0 && (
              <div className="text-center py-12 sm:py-16">
                <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">🔍</div>
                <h3 className="text-lg sm:text-2xl font-bold text-slate-800 mb-2">
                  No achievements found
                </h3>
                <p className="text-sm sm:text-base text-slate-600">
                  Try selecting a different category
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 text-center">
          <div className="max-w-2xl mx-auto animate-slide-up animation-delay-1200">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 flex-wrap justify-center">
              <a
                href="contact"
                className="inline-flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-bold text-sm sm:text-base shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>Get In Touch</span>
              </a>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-8 py-3 sm:py-4 bg-white text-indigo-600 border-2 border-indigo-200 rounded-lg font-bold text-sm sm:text-base hover:border-indigo-400 hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16V4m0 0L3 8m0 0l4 4m10-4v12m0 0l4-4m0 0l-4-4"
                  />
                </svg>
                <span>Back to Top</span>
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Animations */}
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

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
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

        .animate-blob {
          animation: blob 8s infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-1200 {
          animation-delay: 1.2s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @media (max-width: 640px) {
          .animate-blob {
            animation: blob 6s infinite;
          }
        }
      `}</style>
    </div>
  );
};

export default CompetitiveProgrammingPortfolio;
