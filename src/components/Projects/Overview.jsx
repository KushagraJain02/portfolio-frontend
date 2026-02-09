// src/components/Projects/Overview.jsx
import React from "react";

const Overview = ({ description }) => {
  return (
    <section className="overview mt-4">
      <h2 className="text-2xl font-semibold mb-2">Overview</h2>
      <p className="text-gray-700">{description}</p>
    </section>
  );
};

export default Overview;
