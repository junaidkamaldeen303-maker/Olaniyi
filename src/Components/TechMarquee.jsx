import React, { useState, useMemo } from "react";
import Marquee from "react-fast-marquee";

// ✅ Import your logos (make sure file names match exactly)
import htmlLogo from "../assets/html.svg";
import cssLogo from "../assets/css.svg";
import jsLogo from "../assets/javascript.svg";
import tsLogo from "../assets/typescript.svg";
import reactLogo from "../assets/reactjs.svg";
import tailwindLogo from "../assets/tailwind.svg";
import bootstrapLogo from "../assets/bootstrap.svg";
import nodeLogo from "../assets/nodejs.svg";
import pythonLogo from "../assets/python.svg";
import figmaLogo from "../assets/figma.svg";
import framerLogo from "../assets/framer.svg";
import photoshopLogo from "../assets/photoshop.svg";
import wordpressLogo from "../assets/wordpress.png";

export default function TechMarquee() {
  const [reverse, setReverse] = useState(false);

  // ✅ Duplicate list for seamless infinite scrolling
  const logos = useMemo(
    () => [
      htmlLogo,
      cssLogo,
      jsLogo,
      tsLogo,
      reactLogo,
      tailwindLogo,
      bootstrapLogo,
      nodeLogo,
      pythonLogo,
      figmaLogo,
      framerLogo,
      photoshopLogo,
      wordpressLogo,
      htmlLogo,
      cssLogo,
      jsLogo,
      tsLogo,
      reactLogo,
      tailwindLogo,
      bootstrapLogo,
      nodeLogo,
      pythonLogo,
      figmaLogo,
      framerLogo,
      photoshopLogo,
      wordpressLogo,
    ],
    []
  );

  return (
    <div
      style={{
        position: "relative",
        padding: "40px 0",
        overflow: "hidden",
        background: "transparent",
      }}
    >
      {/* Left Fade Overlay - Inside fade effect */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "120px",
          background: "linear-gradient(90deg, rgba(0,11,32,1) 0%, rgba(0,11,32,0) 100%)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      {/* ✅ Infinite Scrolling Marquee - Faster speed */}
      <Marquee
        gradient={false}
        speed={100} // Increased from 50 to 100
        direction={reverse ? "right" : "left"}
        pauseOnHover={false}
        loop={0} // Infinite loop
      >
        {logos.map((src, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "70px", // space between logos
            }}
          >
            <img
              src={src}
              alt={`tech-logo-${idx}`}
              height={55}
              style={{
                display: "block",
                objectFit: "contain",
                filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.3))",
                opacity: 0.7,
              }}
              onError={(e) => {
                e.target.style.display = "none"; // hide broken images
              }}
            />
          </div>
        ))}
      </Marquee>

      {/* Right Fade Overlay - Inside fade effect */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "120px",
          background: "linear-gradient(270deg, rgba(0,11,32,1) 0%, rgba(0,11,32,0) 100%)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />
    </div>
  );
}