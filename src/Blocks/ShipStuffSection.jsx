import React, { useRef, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "../themes/theme";

export default function ShipStuffSection() {
  const { darkMode } = useTheme();
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
      const totalHeight = rect.height;
      let progress = Math.min(Math.max(visibleHeight / totalHeight, 0), 1);
      
      let adjustedProgress = 0;
      if (progress > 0.5) {
        adjustedProgress = (progress - 0.5) / 0.5;
      }
      
      const slowedProgress = Math.pow(adjustedProgress, 0.8);
      setScrollProgress(slowedProgress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const text = "I SHIP COOL STUFF!";
  const totalChars = text.length;
  const revealCount = Math.floor(scrollProgress * totalChars);

  const getCharacterGradient = () => {
    const startColor = darkMode 
      ? "rgba(255,255,255,0.04)" 
      : "rgba(0,0,0,0.04)";
    const endColor = darkMode 
      ? "#FFFFFF" 
      : "#000000";
    
    let gradientStops = [];
    for (let i = 0; i < totalChars; i++) {
      const isRevealed = i < revealCount;
      const color = isRevealed ? endColor : startColor;
      const position = (i / totalChars) * 100;
      gradientStops.push(`${color} ${position}%`);
    }
    
    return `linear-gradient(to right, ${gradientStops.join(', ')})`;
  };

  return (
    <Box
      ref={sectionRef}
      sx={{
        position: "relative",
        width: "100%",
        minHeight: { xs: "40vh", sm: "45vh", md: "50vh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: darkMode ? "#000000" : "#FFFFFF",
        overflow: "hidden",
        py: { xs: 3, sm: 4, md: 6 },
        transition: "background-color 0.3s ease",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1440px",
          mx: "auto",
          px: { xs: 2, sm: 3, md: 4, lg: 6 },
          textAlign: "center",
          userSelect: "none",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: "'Courier New', monospace",
            fontSize: { 
              xs: "1.8rem", 
              sm: "2.5rem", 
              md: "3.5rem", 
              lg: "4.5rem", 
              xl: "5.5rem" 
            },
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: "0.15em",
            whiteSpace: "nowrap",
            textTransform: "uppercase",
            background: getCharacterGradient(),
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            width: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
}