const FRONTEND_TECH = [
  "react",
  "next.js",
  "html",
  "css",
  "tailwind",
  "bootstrap",
  "javascript",
  "chart.js",
  "d3.js",
];

const BACKEND_TECH = [
  "node.js",
  "express",
  "express.js",
  "mongodb",
  "postgresql",
  "redis",
  "jwt",
  "stripe",
];

export const getProjectFlags = (tech = []) => {
  const normalized = tech.map((t) => t.toLowerCase());

  const hasFrontend = normalized.some((t) => FRONTEND_TECH.includes(t));
  const hasBackend = normalized.some((t) => BACKEND_TECH.includes(t));
  const hasDSA = normalized.includes("dsa");

  return {
    hasFrontend,
    hasBackend,
    hasFullStack: hasFrontend && hasBackend,
    hasDSA,
  };
};
