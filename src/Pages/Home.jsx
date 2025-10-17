// src/Pages/Home.jsx
import React from "react";
import HeroSection from "../Blocks/heroSection.jsx";
import TechMarquee from "../Components/TechMarquee.jsx";
import SkillsSection from "../Blocks/SkillsSection.jsx";
import FeaturedProjects from "../Blocks/FeaturedProjects";
import ContactSection from "../Blocks/ContactSection.jsx";

export default function Home() {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <HeroSection />
      <TechMarquee />
      <SkillsSection />
      <FeaturedProjects />
      <ContactSection />
    </div>
  );
}