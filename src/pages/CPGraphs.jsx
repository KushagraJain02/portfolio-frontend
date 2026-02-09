import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = ["#22c55e", "#facc15", "#ef4444"];

const CPGraphs = () => {
  const [cpData, setCpData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const API_BASE = import.meta.env.VITE_API_BASE_URL;
    const fetchCPStats = async () => {
      try {
        const res = await axios.get(`${API_BASE}/cp`);
        setCpData(res.data.data);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCPStats();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-50 via-indigo-50/30 to-purple-50/50">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
          <div
            className="absolute inset-0 w-20 h-20 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin opacity-40"
            style={{ animationDirection: "reverse", animationDuration: "1s" }}
          ></div>
          <div className="mt-8 text-center">
            <p className="text-lg font-bold text-transparent bg-clip-text bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 animate-pulse">
              Loading CP stats...
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-50 via-red-50/30 to-slate-50 px-4">
        <div className="bg-linear-to-br from-red-50 via-white to-red-100 rounded-3xl p-12 text-center border-2 border-red-200/50 shadow-2xl backdrop-blur-sm max-w-md relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-linear-to-r from-red-500 via-orange-500 to-red-500"></div>
          <div className="relative z-10">
            <div className="w-24 h-24 mx-auto mb-6 bg-linear-to-br from-red-100 to-orange-100 rounded-full flex items-center justify-center">
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
            <p className="text-3xl font-black text-red-700 mb-3">
              Failed to load data
            </p>
            <p className="text-red-600">Unable to fetch CP statistics</p>
          </div>
        </div>
      </div>
    );
  }

  /* ===================== GRAPH DATA ===================== */

  const ratingComparison = [
    {
      platform: "Codeforces",
      rating: cpData.codeforces.rating,
    },
    {
      platform: "CodeChef",
      rating: cpData.codechef.rating,
    },
    {
      platform: "LeetCode",
      rating: Math.round(cpData.leetcode.rating),
    },
  ];

  const leetcodeProblems = [
    { name: "Easy", value: cpData.leetcode.easy },
    { name: "Medium", value: cpData.leetcode.medium },
    { name: "Hard", value: cpData.leetcode.hard },
  ];

  const currentVsMax = [
    {
      platform: "Codeforces",
      current: cpData.codeforces.rating,
      max: cpData.codeforces.maxRating,
    },
    {
      platform: "CodeChef",
      current: cpData.codechef.rating,
      max: cpData.codechef.maxRating,
    },
  ];

  /* ===================== CUSTOM TOOLTIP ===================== */
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white/95 backdrop-blur-sm border-2 border-gray-200 rounded-xl p-4 shadow-xl">
          <p className="font-bold text-gray-900 mb-2">{label}</p>
          {payload.map((entry, index) => (
            <p
              key={index}
              className="text-sm font-semibold"
              style={{ color: entry.color }}
            >
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  /* ===================== CUSTOM PIE LABEL ===================== */
  const renderCustomLabel = ({ name, value, percent }) => {
    return `${name}: ${value} (${(percent * 100).toFixed(0)}%)`;
  };

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-50 via-indigo-50/30 to-purple-50/50 py-16 px-6 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-linear-to-r from-indigo-100 to-purple-100 rounded-full mb-6 border border-indigo-200/50">
            <svg
              className="w-5 h-5 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            <span className="text-sm font-bold text-indigo-700 uppercase tracking-wider">
              Analytics Dashboard
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-4 bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-sm">
            CP Progress Overview
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-medium">
            Visual insights into your competitive programming journey
          </p>
        </div>

        {/* ===================== RATING COMPARISON ===================== */}
        <section className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-gray-200/50 relative overflow-hidden group hover:shadow-3xl transition-shadow duration-500">
          <div className="absolute top-0 left-0 right-0 h-2 bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600"></div>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-2xl shadow-lg">
              📊
            </div>
            <h2 className="text-3xl font-black text-gray-900">
              Platform Rating Comparison
            </h2>
          </div>

          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ratingComparison}>
                <XAxis
                  dataKey="platform"
                  tick={{ fill: "#374151", fontWeight: 600 }}
                  axisLine={{ stroke: "#9ca3af" }}
                />
                <YAxis
                  tick={{ fill: "#374151", fontWeight: 600 }}
                  axisLine={{ stroke: "#9ca3af" }}
                />
                <Tooltip
                  content={<CustomTooltip />}
                  cursor={{ fill: "rgba(99, 102, 241, 0.1)" }}
                />
                <Bar
                  dataKey="rating"
                  fill="url(#colorRating)"
                  radius={[12, 12, 0, 0]}
                  animationDuration={1000}
                />
                <defs>
                  <linearGradient id="colorRating" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity={1} />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0.8} />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* ===================== LEETCODE PROBLEMS ===================== */}
        <section className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-gray-200/50 relative overflow-hidden group hover:shadow-3xl transition-shadow duration-500">
          <div className="absolute top-0 left-0 right-0 h-2 bg-linear-to-r from-green-600 via-yellow-600 to-red-600"></div>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-linear-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center text-2xl shadow-lg">
              ⚡
            </div>
            <div>
              <h2 className="text-3xl font-black text-gray-900">
                LeetCode Problems Distribution
              </h2>
              <p className="text-gray-600 font-semibold">
                Total Solved:{" "}
                <span className="text-purple-600 font-black text-xl">
                  {cpData.leetcode.totalSolved}
                </span>
              </p>
            </div>
          </div>

          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={leetcodeProblems}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={140}
                  label={renderCustomLabel}
                  labelLine={{ stroke: "#9ca3af", strokeWidth: 2 }}
                  animationDuration={1000}
                >
                  {leetcodeProblems.map((_, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index]}
                      stroke="#fff"
                      strokeWidth={3}
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend
                  verticalAlign="bottom"
                  height={36}
                  iconType="circle"
                  formatter={(value, entry) => (
                    <span className="font-bold text-gray-700">{value}</span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Legend Cards */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-green-50 rounded-xl p-4 border-2 border-green-200">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <p className="text-xs font-bold text-gray-600 uppercase">
                  Easy
                </p>
              </div>
              <p className="text-2xl font-black text-green-700">
                {cpData.leetcode.easy}
              </p>
            </div>
            <div className="bg-yellow-50 rounded-xl p-4 border-2 border-yellow-200">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <p className="text-xs font-bold text-gray-600 uppercase">
                  Medium
                </p>
              </div>
              <p className="text-2xl font-black text-yellow-700">
                {cpData.leetcode.medium}
              </p>
            </div>
            <div className="bg-red-50 rounded-xl p-4 border-2 border-red-200">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <p className="text-xs font-bold text-gray-600 uppercase">
                  Hard
                </p>
              </div>
              <p className="text-2xl font-black text-red-700">
                {cpData.leetcode.hard}
              </p>
            </div>
          </div>
        </section>

        {/* ===================== CURRENT VS MAX ===================== */}
        <section className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-gray-200/50 relative overflow-hidden group hover:shadow-3xl transition-shadow duration-500">
          <div className="absolute top-0 left-0 right-0 h-2 bg-linear-to-r from-cyan-600 via-blue-600 to-indigo-600"></div>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-linear-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-2xl shadow-lg">
              🏆
            </div>
            <h2 className="text-3xl font-black text-gray-900">
              Current vs Max Rating
            </h2>
          </div>

          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={currentVsMax}>
                <XAxis
                  dataKey="platform"
                  tick={{ fill: "#374151", fontWeight: 600 }}
                  axisLine={{ stroke: "#9ca3af" }}
                />
                <YAxis
                  tick={{ fill: "#374151", fontWeight: 600 }}
                  axisLine={{ stroke: "#9ca3af" }}
                />
                <Tooltip
                  content={<CustomTooltip />}
                  cursor={{ fill: "rgba(99, 102, 241, 0.1)" }}
                />
                <Legend
                  verticalAlign="top"
                  height={36}
                  iconType="circle"
                  formatter={(value) => (
                    <span className="font-bold text-gray-700 capitalize">
                      {value}
                    </span>
                  )}
                />
                <Bar
                  dataKey="current"
                  fill="url(#colorCurrent)"
                  radius={[12, 12, 0, 0]}
                  animationDuration={1000}
                  name="Current Rating"
                />
                <Bar
                  dataKey="max"
                  fill="url(#colorMax)"
                  radius={[12, 12, 0, 0]}
                  animationDuration={1000}
                  name="Max Rating"
                />
                <defs>
                  <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity={1} />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.8} />
                  </linearGradient>
                  <linearGradient id="colorMax" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity={1} />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity={0.8} />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>
      </div>
    </main>
  );
};

export default CPGraphs;
