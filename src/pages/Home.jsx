import React from "react";

import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Skills from "../components/Home/Skills";
import FeaturedProjects from "../components/Home/FeaturedProjects";
import CPStats from "../components/Home/CPStats";
import CTA from "../components/Home/CTA";

const Home = () => {
  return (
    <main className="bg-white text-gray-900">
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <CPStats />
      <CTA />
    </main>
  );
};

export default Home;
