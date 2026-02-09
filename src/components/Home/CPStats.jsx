import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CPStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    const fetchStats = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/cp`);
        setStats(res.data.data);
      } catch (err) {
        console.error("Failed to fetch CP stats", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen py-32 bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="relative">
          <div className="w-24 h-24 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
          <div
            className="absolute inset-0 w-24 h-24 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"
            style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
          ></div>
          <div className="mt-12 text-center">
            <p className="text-xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-purple-600 to-blue-600 animate-pulse">
              Loading CP profiles...
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-32 px-4 bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="bg-linear-to-br from-red-50 to-orange-50 rounded-3xl p-12 text-center border-2 border-red-200 shadow-lg backdrop-blur-md max-w-md relative overflow-hidden group">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-red-300/20 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <div className="w-24 h-24 mx-auto mb-6 bg-linear-to-br from-red-100 to-orange-100 rounded-2xl flex items-center justify-center border-2 border-red-200">
              <svg
                className="w-12 h-12 text-red-600"
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
            <p className="text-2xl text-red-700 font-bold mb-2">
              Failed to load
            </p>
            <p className="text-red-600">Unable to fetch CP profiles</p>
          </div>
        </div>
      </div>
    );
  }

  const platforms = [
    {
      name: "Codeforces",
      link: "/cp/codeforces",
      image:
        "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/062020/codeforces_logo.png",
      emoji: "💻",
      gradient: "from-blue-600 to-indigo-600",
      glowColor: "blue-500/30",
      accentColor: "blue-400",
    },
    {
      name: "CodeChef",
      link: "/cp/codechef",
      image: "https://cdn.codechef.com/sites/all/themes/abessive/cc-logo.png",
      emoji: "🍳",
      gradient: "from-amber-600 to-orange-600",
      glowColor: "orange-500/30",
      accentColor: "orange-400",
    },
    {
      name: "LeetCode",
      link: "/cp/leetcode",
      image: "https://leetcode.com/static/images/LeetCode_Sharing.png",
      emoji: "⚡",
      gradient: "from-yellow-600 to-orange-600",
      glowColor: "yellow-500/30",
      accentColor: "yellow-400",
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-linear-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl opacity-40 animate-pulse delay-700"></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full mb-8 border-2 border-pink-400 hover:border-pink-500 transition-colors duration-300">
            <svg
              className="w-5 h-5 text-white-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
            <span className="text-sm font-bold text-blue-700 uppercase tracking-widest">
              Competitive Programming
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black mb-6 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg leading-tight">
            Code Mastery
          </h1>

          <p className="text-slate-600 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Track my competitive programming journey across elite platforms.
            Solve, compete, conquer.
          </p>
        </div>

        {/* Platform Cards with Background Images */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 mb-20">
          {platforms.map((platform, index) => (
            <Link
              key={index}
              to={platform.link}
              className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Background with overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url('${platform.image}')`,
                  backgroundColor: "rgba(30, 27, 75, 0.9)",
                  backgroundBlendMode: "overlay",
                }}
              />

              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${platform.gradient} opacity-0 group-hover:opacity-40 transition-all duration-700`}
              ></div>

              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>

              {/* Glowing corner accent */}
              <div
                className={`absolute -top-32 -right-32 w-64 h-64 bg-${platform.glowColor} rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-all duration-700`}
              ></div>

              {/* Border glow effect */}
              <div className="absolute inset-0 rounded-3xl border border-white/0 group-hover:border-white/20 transition-all duration-500 pointer-events-none"></div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-8 md:p-10">
                {/* Top decorative line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-${platform.accentColor} via-white/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                ></div>

                {/* Card Content */}
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:border-white/40 transition-all duration-300 group-hover:scale-110">
                      <span className="text-3xl">{platform.emoji}</span>
                    </div>
                    <div>
                      <h3 className="text-3xl font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-white/70 transition-all duration-500">
                        {platform.name}
                      </h3>
                      <div className="h-0.5 w-0 bg-linear-to-r from-white/60 to-transparent group-hover:w-full transition-all duration-500 mt-2"></div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-white/70 group-hover:text-white transition-colors duration-300">
                    <span className="text-sm font-semibold">View Profile</span>
                    <svg
                      className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </Link>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              label: "Platforms",
              value: "3",
              icon: "🎯",
              color: "purple",
            },
            {
              label: "Problems Solved",
              value: "1000+",
              icon: "✅",
              color: "pink",
            },
            {
              label: "Contests Participated",
              value: "100+",
              icon: "🏆",
              color: "yellow",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="relative group bg-linear-to-br from-white/60 to-white/40 rounded-2xl p-8 border-2 border-slate-200 hover:border-slate-300 transition-all duration-500 backdrop-blur-sm hover:bg-linear-to-br hover:from-white/80 hover:to-white/60 overflow-hidden shadow-sm hover:shadow-md"
            >
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex items-start justify-between">
                <div>
                  <p className="text-slate-600 text-sm font-semibold uppercase tracking-wider mb-2">
                    {stat.label}
                  </p>
                  <p className="text-4xl font-black text-slate-900">
                    {stat.value}
                  </p>
                </div>
                <div className="text-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link
            to="/cp"
            className="group relative inline-flex items-center gap-3 px-12 py-5 
                     bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 
                     text-white rounded-2xl font-black text-lg 
                     shadow-xl shadow-indigo-300/40
                     hover:shadow-2xl hover:shadow-indigo-400/50
                     hover:scale-105 
                     transition-all duration-500
                     border-2 border-blue-400/30 hover:border-blue-300
                     overflow-hidden"
          >
            {/* Shimmer effect */}
            <span
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent 
                           -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
            ></span>

            {/* Glow effect */}
            <div className="absolute -inset-1 bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-500 -z-10"></div>

            <span className="relative z-10 flex items-center gap-3">
              View All CP Stats
              <svg
                className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CPStats;
