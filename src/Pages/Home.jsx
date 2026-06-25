import React from "react";
import HeroSection from "../Blocks/heroSection.jsx";
import WorkflowSection from "../Blocks/WorkflowSection.jsx";
import SkillsSection from "../Blocks/SkillsSection.jsx";
import ResumeCTA from "../Blocks/ResumeCTA.jsx";
import FeaturedProjects from "../Blocks/FeaturedProjects";
import ContactSection from "../Blocks/ContactSection.jsx";
import ShipStuffSection from "../Blocks/ShipStuffSection.jsx";

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
      <WorkflowSection />
      <SkillsSection />
      <ResumeCTA />
      <FeaturedProjects />
      <ContactSection />
      <ShipStuffSection /> 
    </div>
  );
}