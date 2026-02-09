import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const CPPlatformDetails = () => {
  const { platform } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPlatformStats = async () => {
      try {
        const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
        const res = await axios.get(`${API_BASE_URL}/cp/${platform}`);
        setData(res.data.data);
      } catch (err) {
        setError("Failed to fetch platform stats");
      } finally {
        setLoading(false);
      }
    };

    fetchPlatformStats();
  }, [platform]);

  const getPlatformURL = (platform, data) => {
    const urls = {
      codeforces: `https://codeforces.com/profile/${data.handle}`,
      codechef: `https://www.codechef.com/users/${data.handle}`,
      leetcode: `https://leetcode.com/${data.handle}`,
    };
    return urls[platform] || "#";
  };

  const platformConfig = {
    codeforces: {
      title: "Codeforces",
      gradient: "from-emerald-400 to-teal-400",
      accentGradient: "from-emerald-500 to-teal-500",
      accentColor: "emerald",
      icon: "💻",
      bgPattern: "from-slate-950 via-slate-900 to-slate-950",
    },
    codechef: {
      title: "CodeChef",
      gradient: "from-cyan-400 to-blue-400",
      accentGradient: "from-cyan-500 to-blue-500",
      accentColor: "cyan",
      icon: "🍳",
      bgPattern: "from-slate-950 via-slate-900 to-slate-950",
    },
    leetcode: {
      title: "LeetCode",
      gradient: "from-violet-400 to-purple-400",
      accentGradient: "from-violet-500 to-purple-500",
      accentColor: "purple",
      icon: "⚡",
      bgPattern: "from-slate-950 via-slate-900 to-slate-950",
    },
  };

  const config = platformConfig[platform] || platformConfig.codeforces;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-slate-700 border-t-emerald-500 rounded-full animate-spin"></div>
          <div
            className="absolute inset-0 w-20 h-20 border-4 border-slate-800 border-t-emerald-400 rounded-full animate-spin opacity-40"
            style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
          ></div>
          <div className="mt-8 text-center">
            <p className="text-lg font-semibold text-slate-400 animate-pulse">
              Loading stats...
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 px-4">
        <div className="bg-linear-to-br from-slate-900 to-slate-800 rounded-2xl p-12 text-center border border-slate-700 shadow-2xl max-w-md relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-red-500 to-rose-500"></div>
          <div className="relative z-10">
            <div className="w-24 h-24 mx-auto mb-6 bg-linear-to-br from-red-950 to-rose-950 rounded-full flex items-center justify-center border border-red-700">
              <svg
                className="w-12 h-12 text-red-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <p className="text-2xl font-bold text-red-400 mb-2">
              {error || "Platform not found"}
            </p>
            <p className="text-slate-400 mb-8">Unable to load statistics</p>
            <Link
              to="/cp"
              className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-red-600 to-rose-600 text-white rounded-lg font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Platforms
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section
      className={`min-h-screen bg-linear-to-br ${config.bgPattern} py-20 px-6 relative overflow-hidden`}
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-linear-to-br from-emerald-950/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-linear-to-br from-purple-950/30 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <Link
          to="/cp"
          className="inline-flex items-center gap-2 mb-12 px-5 py-2.5 
                   bg-slate-800/50 hover:bg-slate-800 rounded-lg font-semibold shadow-sm hover:shadow-md
                   text-slate-300 hover:text-white
                   border border-slate-700 hover:border-slate-600
                   hover:-translate-x-0.5 transition-all duration-300 group text-sm backdrop-blur-sm"
        >
          <svg
            className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Platforms
        </Link>

        <div className="bg-linear-to-br from-slate-800 to-slate-900 rounded-2xl p-12 mb-16 shadow-2xl border border-slate-700 relative overflow-hidden">
          <div
            className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${config.accentGradient}`}
          ></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="flex items-start gap-6">
              <div
                className={`w-20 h-20 bg-linear-to-br ${config.gradient} rounded-xl flex items-center justify-center text-4xl shadow-lg shrink-0`}
              >
                {config.icon}
              </div>

              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                  Competitive Programming
                </p>
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-1">
                  {config.title}
                </h1>
                <p className="text-lg text-slate-400">{data.handle}</p>
              </div>
            </div>

            <a
              href={getPlatformURL(platform, data)}
              target="_blank"
              rel="noopener noreferrer"
              className={`group inline-flex items-center gap-2 px-6 py-3 
                       bg-linear-to-r ${config.accentGradient} 
                       text-white rounded-lg font-semibold text-sm
                       shadow-lg hover:shadow-xl
                       hover:scale-105 
                       transition-all duration-300
                       relative overflow-hidden
                       whitespace-nowrap`}
            >
              <span className="relative z-10">Visit Profile</span>
              <svg
                className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>

        {platform === "codeforces" && (
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <span
                  className={`w-1.5 h-8 bg-linear-to-b ${config.accentGradient} rounded-full`}
                ></span>
                Profile Statistics
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Stat
                  label="Handle"
                  value={data.handle}
                  accentGradient={config.gradient}
                  icon="👤"
                />
                <Stat
                  label="Current Rating"
                  value={data.rating}
                  accentGradient={config.gradient}
                  icon="📊"
                  highlight
                />
                <Stat
                  label="Current Rank"
                  value={data.rank}
                  accentGradient={config.gradient}
                  icon="🏆"
                />
                <Stat
                  label="Max Rating"
                  value={data.maxRating}
                  accentGradient={config.gradient}
                  icon="⭐"
                />
                <Stat
                  label="Max Rank"
                  value={data.maxRank}
                  accentGradient={config.gradient}
                  icon="👑"
                />
              </div>
            </div>

            {data.contribution !== undefined && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <span
                    className={`w-1.5 h-8 bg-linear-to-b ${config.accentGradient} rounded-full`}
                  ></span>
                  Community
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Stat
                    label="Contribution"
                    value={data.contribution ?? "—"}
                    accentGradient={config.gradient}
                    icon="🤝"
                  />
                  <Stat
                    label="Friends"
                    value={data.friendOfCount ?? "—"}
                    accentGradient={config.gradient}
                    icon="👥"
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {platform === "codechef" && (
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <span
                  className={`w-1.5 h-8 bg-linear-to-b ${config.accentGradient} rounded-full`}
                ></span>
                Profile Statistics
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Stat
                  label="Handle"
                  value={data.handle}
                  accentGradient={config.gradient}
                  icon="👤"
                />
                <Stat
                  label="Current Rating"
                  value={data.rating}
                  accentGradient={config.gradient}
                  icon="📊"
                  highlight
                />
                <Stat
                  label="Highest Rating"
                  value={data.maxRating}
                  accentGradient={config.gradient}
                  icon="⭐"
                />
                <Stat
                  label="Stars"
                  value={data.stars}
                  accentGradient={config.gradient}
                  icon="✨"
                />
              </div>
            </div>

            {data.globalRank !== undefined && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <span
                    className={`w-1.5 h-8 bg-linear-to-b ${config.accentGradient} rounded-full`}
                  ></span>
                  Rankings
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Stat
                    label="Global Rank"
                    value={data.globalRank ?? "—"}
                    accentGradient={config.gradient}
                    icon="🌍"
                  />
                  <Stat
                    label="Country Rank"
                    value={data.countryRank ?? "—"}
                    accentGradient={config.gradient}
                    icon="🗺️"
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {platform === "leetcode" && (
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <span
                  className={`w-1.5 h-8 bg-linear-to-b ${config.accentGradient} rounded-full`}
                ></span>
                Contest Performance
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Stat
                  label="Username"
                  value={data.handle}
                  accentGradient={config.gradient}
                  icon="👤"
                />
                <Stat
                  label="Global Rank"
                  value={data.globalRank ?? "—"}
                  accentGradient={config.gradient}
                  icon="🌍"
                  highlight
                />
                <Stat
                  label="Contest Rating"
                  value={
                    Number.isFinite(data.rating) ? Math.floor(data.rating) : "—"
                  }
                  accentGradient={config.gradient}
                  icon="📊"
                />
                <Stat
                  label="Contests"
                  value={data.contests}
                  accentGradient={config.gradient}
                  icon="🎯"
                />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <span
                  className={`w-1.5 h-8 bg-linear-to-b ${config.accentGradient} rounded-full`}
                ></span>
                Problems Solved
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <Stat
                  label="Total Solved"
                  value={data.totalSolved}
                  accentGradient="from-slate-400 to-slate-300"
                  icon="✅"
                  highlight
                  large
                />
                <Stat
                  label="Easy"
                  value={data.easy}
                  accentGradient="from-emerald-400 to-green-400"
                  icon="🟢"
                />
                <Stat
                  label="Medium"
                  value={data.medium}
                  accentGradient="from-yellow-400 to-amber-400"
                  icon="🟡"
                />
                <Stat
                  label="Hard"
                  value={data.hard}
                  accentGradient="from-red-400 to-rose-400"
                  icon="🔴"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const Stat = ({
  label,
  value,
  accentGradient = "from-slate-400 to-slate-500",
  icon,
  highlight = false,
  large = false,
}) => {
  return (
    <div
      className={`group relative bg-linear-to-br from-slate-800 to-slate-900 rounded-xl p-6 shadow-lg hover:shadow-xl 
                   border border-slate-700 hover:border-slate-600
                   transition-all duration-300 overflow-hidden
                   hover:-translate-y-1 
                   ${large ? "sm:col-span-2 lg:col-span-1" : ""}
                   ${highlight ? "ring-1 ring-offset-2 ring-offset-slate-900 ring-slate-600" : ""}`}
    >
      <div
        className={`absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r ${accentGradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
      ></div>

      <div
        className={`absolute top-0 right-0 w-12 h-12 bg-linear-to-br ${accentGradient} opacity-0 group-hover:opacity-10 rounded-full blur-xl transition-opacity duration-300`}
      ></div>

      <div className="relative z-10">
        {icon && (
          <div
            className={`mb-3 group-hover:scale-110 transition-transform duration-300 ${large ? "text-4xl" : "text-3xl"}`}
          >
            {icon}
          </div>
        )}

        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
          {label}
        </p>

        <p
          className={`font-bold text-slate-100
                     group-hover:text-transparent group-hover:bg-clip-text 
                     group-hover:bg-linear-to-r ${accentGradient}
                     transition-all duration-300
                     ${large ? "text-4xl" : "text-3xl"}`}
        >
          {value}
        </p>
      </div>
    </div>
  );
};

export default CPPlatformDetails;
