import React, { useState, useEffect } from "react";

const CPHeader = () => {
  const [counter, setCounter] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev < 1000) return prev + 10;
        return 1000;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: "Problems Solved", value: "1500+", icon: "✅" },
    { label: "Platforms", value: "3", icon: "🏆" },
    { label: "Total Days", value: "500+", icon: "🔥" },
  ];

  const platforms = [
    { name: "Codeforces", icon: "🔵" },
    { name: "CodeChef", icon: "🟢" },
    { name: "LeetCode", icon: "🟡" },
  ];

  return (
    <section
      className="relative min-h-screen px-6 md:px-12 lg:px-20 py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: "#0f172a" }}
    >
      {/* Elegant Grid Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(56, 189, 248, .05) 25%, rgba(56, 189, 248, .05) 26%, transparent 27%, transparent 74%, rgba(56, 189, 248, .05) 75%, rgba(56, 189, 248, .05) 76%, transparent 77%, transparent),
                          linear-gradient(90deg, transparent 24%, rgba(56, 189, 248, .05) 25%, rgba(56, 189, 248, .05) 26%, transparent 27%, transparent 74%, rgba(56, 189, 248, .05) 75%, rgba(56, 189, 248, .05) 76%, transparent 77%, transparent)`,
          backgroundSize: "50px 50px",
        }}
      ></div>

      {/* Soft Gradient Orbs */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 rounded-full filter blur-3xl opacity-10"
        style={{ backgroundColor: "#22c55e" }}
      ></div>
      <div
        className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full filter blur-3xl opacity-10"
        style={{ backgroundColor: "#38bdf8" }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div
          className={`flex items-center justify-start gap-2 mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <a
            href="/"
            className="text-sm font-medium transition-colors duration-300 hover:opacity-80"
            style={{ color: "#38bdf8" }}
          >
            Home
          </a>
          <svg
            className="w-4 h-4"
            style={{ color: "#38bdf8" }}
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
          <span className="text-sm font-semibold" style={{ color: "#e5e7eb" }}>
            Competitive Programming
          </span>
        </div>

        {/* Main Badge */}
        <div
          className={`inline-flex items-center gap-3 px-6 py-3 mb-12 rounded-full backdrop-blur-md border transition-all duration-1000 delay-200 ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-95"
          }`}
          style={{
            backgroundColor: "rgba(34, 197, 94, 0.1)",
            borderColor: "rgba(34, 197, 94, 0.3)",
          }}
        >
          <div className="relative flex h-3 w-3">
            <span
              className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
              style={{ backgroundColor: "#22c55e" }}
            ></span>
            <span
              className="relative inline-flex rounded-full h-3 w-3"
              style={{ backgroundColor: "#22c55e" }}
            ></span>
          </div>
          <span
            className="text-sm font-mono font-bold tracking-wide"
            style={{ color: "#22c55e" }}
          >
            ACTIVE CODER
          </span>
          <div className="flex items-center gap-2">
            <span className="text-lg">⚡</span>
            <span className="text-xs font-bold" style={{ color: "#22c55e" }}>
              {counter}+ Solved
            </span>
          </div>
        </div>

        {/* Content Layout - Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left - Text Content */}
          <div>
            {/* Main Title */}
            <h1
              className={`text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ color: "#e5e7eb" }}
            >
              Competitive
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #22c55e 0%, #38bdf8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Programming
              </span>
            </h1>

            {/* Description */}
            <p
              className={`text-lg md:text-xl mb-8 leading-relaxed transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ color: "#94a3b8" }}
            >
              My journey in{" "}
              <span style={{ color: "#22c55e", fontWeight: "600" }}>
                problem solving
              </span>{" "}
              and{" "}
              <span style={{ color: "#38bdf8", fontWeight: "600" }}>
                competitive programming
              </span>{" "}
              across multiple platforms, building strong algorithmic foundations
              and coding expertise.
            </p>

            {/* Platforms */}
            <div
              className={`flex flex-wrap gap-3 mb-10 transition-all duration-1000 delay-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {platforms.map((platform) => (
                <div
                  key={platform.name}
                  className="group px-5 py-3 rounded-xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{
                    backgroundColor: "rgba(34, 197, 94, 0.08)",
                    borderColor: "rgba(34, 197, 94, 0.2)",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xl group-hover:scale-125 transition-transform duration-300">
                      {platform.icon}
                    </span>
                    <span
                      className="font-semibold text-sm"
                      style={{ color: "#e5e7eb" }}
                    >
                      {platform.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Row */}
            <div
              className={`grid grid-cols-3 gap-4 transition-all duration-1000 delay-900 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="group p-5 rounded-xl backdrop-blur-sm border transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: "rgba(56, 189, 248, 0.08)",
                    borderColor: "rgba(56, 189, 248, 0.2)",
                  }}
                >
                  <div className="text-3xl mb-2 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                    {stat.icon}
                  </div>
                  <div
                    className="text-2xl font-bold mb-1"
                    style={{ color: "#38bdf8" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "#94a3b8" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image */}
          <div
            className={`flex justify-center transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 scale-100 translate-x-0"
                : "opacity-0 scale-95 translate-x-8"
            }`}
          >
            <div className="relative w-full max-w-md">
              {/* Glow Effect */}
              <div
                className="absolute inset-0 rounded-3xl blur-3xl opacity-20"
                style={{ backgroundColor: "#38bdf8" }}
              ></div>

              {/* Image Container */}
              <div
                className="relative rounded-3xl overflow-hidden border"
                style={{
                  backgroundColor: "rgba(30, 41, 59, 0.8)",
                  borderColor: "rgba(56, 189, 248, 0.2)",
                }}
              >
                <img
                  src="https://copilot.microsoft.com/th/id/BCO.76d74bdf-782a-4b05-96d7-f3cb054b4722.png"
                  alt="Competitive Programming"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  onError="console.error('Image failed to load:', this.src); this.style.background='linear-gradient(135deg, #22c55e20 0%, #38bdf820 100%)'; this.alt='Image unavailable';"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Accent Line */}
        <div
          className={`flex items-center justify-center gap-6 mb-16 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div
            className="flex-1 h-px"
            style={{ backgroundColor: "rgba(34, 197, 94, 0.2)" }}
          ></div>
          <div className="text-2xl animate-pulse" style={{ color: "#38bdf8" }}>
            {"< />"}
          </div>
          <div
            className="flex-1 h-px"
            style={{ backgroundColor: "rgba(34, 197, 94, 0.2)" }}
          ></div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 opacity-5">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            style={{ fill: "#22c55e" }}
          />
        </svg>
      </div>

      <style jsx>{`
        @keyframes ping {
          75%,
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default CPHeader;
