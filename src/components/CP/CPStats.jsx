import React, { useEffect, useState } from "react";
import axios from "axios";

const CPStats = () => {
  const [stats, setStats] = useState([]);
  const [animatedStats, setAnimatedStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCPStats = async () => {
      try {
        const API_BASE = import.meta.env.VITE_API_BASE_URL;
        const res = await axios.get(`${API_BASE}/cp`);

        const { codeforces, codechef, leetcode } = res.data.data;

        /* 🔁 TRANSFORM BACKEND DATA */
        const formattedStats = [
          {
            platform: "Codeforces",
            rating: codeforces.rating,
            maxRating: codeforces.maxRating,
            rank: codeforces.rank,
            problemsSolved: 550,
            contests: null,
            badge: "🔵",
            color: "#4F46E5",
            bgColor: "#EEF2FF",
            borderColor: "#C7D2FE",
            gradient: "from-indigo-600 to-indigo-700",
            link: "https://codeforces.com/profile/" + codeforces.handle,
          },
          {
            platform: "CodeChef",
            rating: codechef.rating,
            maxRating: codechef.maxRating,
            rank: codechef.stars,
            problemsSolved: 350,
            contests: null,
            badge: "🟢",
            color: "#059669",
            bgColor: "#ECFDF5",
            borderColor: "#A7F3D0",
            gradient: "from-emerald-600 to-emerald-700",
            link: "https://codechef.com/users/" + codechef.handle,
          },
          {
            platform: "LeetCode",
            rating: Math.round(leetcode.rating),
            maxRating: null,
            rank: `Global Rank ${leetcode.globalRank}`,
            problemsSolved: leetcode.totalSolved,
            contests: leetcode.contests,
            badge: "🟡",
            color: "#D97706",
            bgColor: "#FFFBEB",
            borderColor: "#FCD34D",
            gradient: "from-amber-600 to-amber-700",
            link: "https://leetcode.com/" + leetcode.handle,
          },
        ];

        setStats(formattedStats);

        /* 🔁 INIT ANIMATION STATE */
        setAnimatedStats(
          formattedStats.map((s) => ({
            ...s,
            displaySolved: 0,
            displayRating: 0,
          })),
        );
      } catch (err) {
        console.error("Failed to fetch CP stats", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCPStats();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const platform = entry.target.getAttribute("data-platform");
          const stat = stats.find((s) => s.platform === platform);

          if (stat) {
            animateCounters(platform, stat.problemsSolved, stat.rating);
          }

          const fills = entry.target.querySelectorAll(".progress-fill");
          fills.forEach((fill) => {
            const width = fill.style.width;
            fill.style.width = "0";
            setTimeout(() => {
              fill.style.width = width;
            }, 50);
          });

          observer.unobserve(entry.target);
        }
      });
    });

    document.querySelectorAll(".platform-card").forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, [stats]);

  const animateCounters = (platform, endSolved, endRating) => {
    const duration = 1000;
    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      setAnimatedStats((prev) =>
        prev.map((s) => {
          if (s.platform === platform) {
            return {
              ...s,
              displaySolved: Math.floor(progress * endSolved),
              displayRating: Math.floor(progress * endRating),
            };
          }
          return s;
        }),
      );

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-slate-50 to-slate-100">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-slate-200 border-t-indigo-600 rounded-full animate-spin"></div>
          <p className="text-slate-600 font-medium">Loading your stats...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-slate-50 to-slate-100">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md text-center">
          <div className="text-4xl mb-4">⚠️</div>
          <p className="text-lg font-semibold text-slate-900 mb-2">
            Error Loading Stats
          </p>
          <p className="text-slate-600">{error}</p>
        </div>
      </div>
    );
  }

  const totalProblemsSolved = stats.reduce(
    (sum, s) => sum + s.problemsSolved,
    0,
  );

  const PlatformCard = ({ stat, index }) => {
    const maxRating = stat.maxRating || 2500;
    const ratingPercent = (stat.rating / maxRating) * 100;
    const problemsPercent = Math.min((stat.problemsSolved / 500) * 100, 100);

    const animatedStat =
      animatedStats.find((s) => s.platform === stat.platform) || stat;

    return (
      <div
        className="platform-card group relative overflow-hidden rounded-2xl bg-white border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 p-8 animate-slide-in-up"
        data-platform={stat.platform}
        style={{
          borderColor: stat.borderColor,
          animationDelay: `${400 + index * 100}ms`,
        }}
      >
        {/* Top accent bar */}
        <div
          className="absolute inset-x-0 top-0 h-1.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
          style={{
            background: `linear-gradient(to right, ${stat.color}, ${stat.color}cc)`,
          }}
        ></div>

        {/* Header */}
        <div
          className="flex items-start justify-between pb-6 border-b-2"
          style={{ borderColor: stat.bgColor }}
        >
          <div className="flex gap-4">
            <div
              className="flex items-center justify-center w-16 h-16 rounded-xl text-3xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 font-semibold"
              style={{ backgroundColor: stat.bgColor, color: stat.color }}
            >
              {stat.badge}
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold" style={{ color: stat.color }}>
                {stat.platform}
              </h3>
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg w-fit transition-all duration-300 group-hover:scale-105"
                style={{
                  backgroundColor: stat.bgColor,
                  color: stat.color,
                  border: `1.5px solid ${stat.borderColor}`,
                }}
              >
                <span>⭐</span> {stat.rank}
              </span>
            </div>
          </div>
          <a
            href={stat.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 flex items-center justify-center rounded-xl transition-all duration-300 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 hover:shadow-md active:scale-95"
            style={{
              backgroundColor: stat.bgColor,
              border: `1.5px solid ${stat.borderColor}`,
              color: stat.color,
            }}
          >
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5 stroke-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              ></path>
            </svg>
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-col gap-5 mt-6 mb-8">
          {/* Rating Stat */}
          <div
            className="rounded-xl p-5 transition-all duration-300 group-hover:shadow-md"
            style={{
              backgroundColor: stat.bgColor,
              border: `1.5px solid ${stat.borderColor}`,
            }}
          >
            <div className="flex items-center justify-between mb-3.5">
              <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-600 uppercase tracking-wider">
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                  style={{ color: stat.color, strokeWidth: 2 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  ></path>
                </svg>
                Current Rating
              </div>
              <div className="text-3xl font-bold" style={{ color: stat.color }}>
                {animatedStat.displayRating}
              </div>
            </div>
            <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="progress-fill h-full rounded-full transition-all duration-1000 ease-out"
                style={{
                  background: `linear-gradient(to right, ${stat.color}, ${stat.color}cc)`,
                  width: `${ratingPercent}%`,
                }}
              ></div>
            </div>
            <div className="flex justify-between mt-3 text-xs font-medium text-slate-500">
              <span>Max: {stat.maxRating}</span>
              <span>{Math.round(ratingPercent)}%</span>
            </div>
          </div>

          {/* Problems Solved Stat */}
          <div
            className="rounded-xl p-5 transition-all duration-300 group-hover:shadow-md"
            style={{
              backgroundColor: stat.bgColor,
              border: `1.5px solid ${stat.borderColor}`,
            }}
          >
            <div className="flex items-center justify-between mb-3.5">
              <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-600 uppercase tracking-wider">
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                  style={{ color: stat.color, strokeWidth: 2 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                Problems Solved
              </div>
              <div className="text-3xl font-bold" style={{ color: stat.color }}>
                {animatedStat.displaySolved}
              </div>
            </div>
            <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="progress-fill h-full rounded-full transition-all duration-1000 ease-out"
                style={{
                  background: `linear-gradient(to right, ${stat.color}, ${stat.color}cc)`,
                  width: `${problemsPercent}%`,
                }}
              ></div>
            </div>
            <div className="flex justify-between mt-3 text-xs font-medium text-slate-500">
              <span>Target: 500</span>
              <span>{Math.round(problemsPercent)}%</span>
            </div>
          </div>

          {/* Contests Stat */}
          {stat.contests && (
            <div
              className="rounded-xl p-5 transition-all duration-300 group-hover:shadow-md"
              style={{
                backgroundColor: stat.bgColor,
                border: `1.5px solid ${stat.borderColor}`,
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    style={{ color: stat.color, strokeWidth: 2 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  Contests Attended
                </div>
                <div
                  className="text-3xl font-bold"
                  style={{ color: stat.color }}
                >
                  {stat.contests}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* View Profile Button */}
        <a
          href={stat.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3.5 rounded-xl text-white font-semibold text-sm flex items-center justify-center gap-2.5 transition-all duration-300 hover:shadow-xl active:scale-95"
          style={{
            background: `linear-gradient(135deg, ${stat.color} 0%, ${stat.color}dd 100%)`,
          }}
        >
          <span>View Profile</span>
          <svg
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5 stroke-2 transition-transform duration-300 group-hover:translate-x-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            ></path>
          </svg>
        </a>
      </div>
    );
  };

  return (
    <div className="w-full min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-100">
      {/* Content */}
      <section className="relative py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-2.5 px-6 py-2.5 bg-indigo-100 border-2 border-indigo-200 rounded-full mb-8">
              <span className="text-xl">📊</span>
              <span className="text-sm font-semibold text-indigo-700">
                Competitive Programming Stats
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-in-up text-slate-900">
              Performance Overview
            </h1>

            <div
              className="flex items-center justify-center gap-4 my-8 animate-slide-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex-1 h-px bg-linear-to-r from-transparent via-slate-300 to-transparent"></div>
              <span className="text-2xl font-light text-slate-400">
                &lt; /&gt;
              </span>
              <div className="flex-1 h-px bg-linear-to-r from-transparent via-slate-300 to-transparent"></div>
            </div>

            <p
              className="max-w-2xl mx-auto text-slate-600 text-lg leading-relaxed animate-slide-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              Track your competitive programming journey across multiple
              platforms with real-time metrics and progress analytics.
            </p>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div
              className="bg-white rounded-2xl border-2 border-slate-200 p-8 flex gap-6 items-start transition-all duration-300 hover:shadow-2xl hover:border-indigo-300 animate-slide-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="text-5xl shrink-0">✅</div>
              <div className="flex-1">
                <h3 className="text-5xl font-bold text-indigo-600 mb-2">
                  {totalProblemsSolved}
                </h3>
                <p className="text-slate-600 font-semibold mb-4">
                  Total Problems Solved
                </p>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    ></path>
                  </svg>
                  <span>Across 3 premium platforms</span>
                </div>
              </div>
            </div>

            <div
              className="bg-white rounded-2xl border-2 border-slate-200 p-8 flex gap-6 items-start transition-all duration-300 hover:shadow-2xl hover:border-emerald-300 animate-slide-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="text-5xl shrink-0">🏆</div>
              <div className="flex-1">
                <h3 className="text-5xl font-bold text-emerald-600 mb-2">
                  75+
                </h3>
                <p className="text-slate-600 font-semibold mb-4">
                  Contest Participations
                </p>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    ></path>
                  </svg>
                  <span>Continuous competitive engagement</span>
                </div>
              </div>
            </div>
          </div>

          {/* Platform Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <PlatformCard key={stat.platform} stat={stat} index={index} />
            ))}
          </div>

          {/* Bottom Info Section */}
          <div
            className="bg-linear-to-r from-indigo-50 to-blue-50 rounded-2xl border-2 border-indigo-200 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 transition-all duration-300 hover:shadow-2xl hover:border-indigo-300 animate-slide-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="flex gap-6 flex-1">
              <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-indigo-100 text-3xl shrink-0 border-2 border-indigo-200">
                💪
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Consistent Growth
                </h3>
                <p className="text-slate-600">
                  Maintain an active presence across multiple platforms with
                  steady improvement and achievement milestones.
                </p>
              </div>
            </div>
            <a
              href="/cp/graphs"
              className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold flex items-center gap-3 transition-all duration-300 hover:shadow-lg hover:bg-indigo-700 active:scale-95 shrink-0 whitespace-nowrap"
            >
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5 stroke-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                ></path>
              </svg>
              <span>View Progress Graph</span>
            </a>
          </div>
        </div>
      </section>

      {/* Tailwind Animation Classes */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }

        .animate-slide-in-up {
          animation: slideInUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default CPStats;
