import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import {
  SearchOutlined,
  BrushOutlined,
  CodeOutlined,
  RocketOutlined,
} from "@mui/icons-material";
import { useTheme } from "../themes/theme";

export default function WorkflowSection() {
  const { darkMode } = useTheme();
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const workflowSteps = [
    {
      id: 1,
      title: "DISCOVERY",
      description: "Understanding your vision, goals, and challenges through deep collaboration.",
      icon: <SearchOutlined />,
      accentColor: "#4A9BFF",
      gradient: "rgba(74,155,255,0.15)",
    },
    {
      id: 2,
      title: "DESIGN",
      description: "Translating insights into intuitive interfaces with focus on user experience.",
      icon: <BrushOutlined />,
      accentColor: "#8B5CF6",
      gradient: "rgba(139,92,246,0.15)",
    },
    {
      id: 3,
      title: "DEVELOPMENT",
      description: "Building scalable, robust solutions with clean code and modern architecture.",
      icon: <CodeOutlined />,
      accentColor: "#22D3EE",
      gradient: "rgba(34,211,238,0.15)",
    },
    {
      id: 4,
      title: "LAUNCH",
      description: "Deploying with precision and ensuring seamless handoff for growth.",
      icon: <RocketOutlined />,
      accentColor: "#F472B6",
      gradient: "rgba(244,114,182,0.15)",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: i * 0.12,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  // Theme-based colors
  const colors = {
    background: darkMode ? "#000000" : "#FFFFFF",
    cardBg: darkMode ? "rgba(18,18,30,0.9)" : "rgba(255,255,255,0.9)",
    cardBorder: darkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)",
    cardHoverBorder: darkMode ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.12)",
    primaryText: darkMode ? "#FFFFFF" : "#0A1022",
    secondaryText: darkMode ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.55)",
    stepNumberColor: darkMode ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.25)",
    badgeBg: darkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
    badgeBorder: darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
    badgeText: darkMode ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.6)",
    iconBg: darkMode ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)",
    connectorColor: darkMode ? "rgba(111,167,255,0.35)" : "rgba(74,155,255,0.25)",
    glowColor: darkMode ? "rgba(74,155,255,0.08)" : "rgba(74,155,255,0.04)",
    gridColor: darkMode ? "rgba(255,255,255,0.01)" : "rgba(0,0,0,0.02)",
  };

  return (
    <Box
      ref={sectionRef}
      sx={{
        position: "relative",
        width: "100%",
        backgroundColor: colors.background,
        py: { xs: "60px", sm: "80px", md: "100px", lg: "120px" },
        px: { xs: 2, sm: 3, md: 4, lg: 6 },
        overflow: "hidden",
        transition: "background-color 0.3s ease",
        minHeight: { xs: "auto", md: "100vh" },
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Background Effects */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: { xs: "300px", sm: "400px", md: "500px", lg: "600px" },
          height: { xs: "300px", sm: "400px", md: "500px", lg: "600px" },
          background: `radial-gradient(circle, ${colors.glowColor} 0%, transparent 70%)`,
          filter: "blur(60px)",
          pointerEvents: "none",
          transition: "background 0.3s ease",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `
            linear-gradient(${colors.gridColor} 1px, transparent 1px),
            linear-gradient(90deg, ${colors.gridColor} 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          pointerEvents: "none",
          opacity: 0.3,
        }}
      />

      {/* Main Content */}
      <Box
        sx={{
          maxWidth: "1440px",
          width: "100%",
          position: "relative",
          zIndex: 2,
          mx: "auto",
        }}
      >
        {/* Section Badge */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
          style={{ textAlign: "center", marginBottom: "20px" }}
        >
          <Box
            sx={{
              display: "inline-block",
              backgroundColor: colors.badgeBg,
              border: `1px solid ${colors.badgeBorder}`,
              borderRadius: "999px",
              padding: "6px 14px",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              transition: "all 0.3s ease",
            }}
          >
            <Typography
              variant="caption"
              sx={{
                fontSize: { xs: "10px", sm: "11px", md: "12px" },
                fontWeight: 600,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: colors.badgeText,
              }}
            >
              EXECUTION STRATEGY
            </Typography>
          </Box>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
          style={{ textAlign: "center", marginBottom: "12px" }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: "'Inter', 'Satoshi', sans-serif",
              fontSize: { xs: "2rem", sm: "2.8rem", md: "3.8rem", lg: "4.8rem", xl: "5.5rem" },
              fontWeight: 900,
              letterSpacing: "-2px",
              textTransform: "uppercase",
              color: colors.primaryText,
              lineHeight: 1.1,
              transition: "color 0.3s ease",
            }}
          >
            MY WORKFLOW<span style={{ color: "#4A9BFF" }}>.</span>
          </Typography>
        </motion.div>

        {/* Supporting Description */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
          style={{ textAlign: "center", marginBottom: { xs: "40px", sm: "50px", md: "60px", lg: "70px" } }}
        >
          <Typography
            variant="body1"
            sx={{
              maxWidth: "600px",
              margin: "0 auto",
              fontSize: { xs: "14px", sm: "15px", md: "16px" },
              fontWeight: 500,
              lineHeight: 1.7,
              color: colors.secondaryText,
              px: { xs: 2, sm: 0 },
              transition: "color 0.3s ease",
            }}
          >
            A systematic approach to transforming complex ideas into digital reality.
          </Typography>
        </motion.div>

        {/* Workflow Cards - All on one line */}
        <Grid
          container
          spacing={{ xs: 2.5, sm: 2, md: 2, lg: 2.5 }}
          sx={{
            justifyContent: "center",
            position: "relative",
            flexWrap: { xs: "wrap", md: "nowrap" },
          }}
        >
          {/* Connector Lines - Desktop & Tablet */}
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              position: "absolute",
              top: "50%",
              left: "12.5%",
              right: "12.5%",
              height: "2px",
              background: colors.connectorColor,
              transform: "translateY(-50%)",
              zIndex: 0,
              transition: "background 0.3s ease",
            }}
          />

          {workflowSteps.map((step, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={step.id}
              sx={{
                display: "flex",
                justifyContent: "center",
                flex: { xs: "1 1 100%", sm: "1 1 50%", md: "1 1 25%" },
                maxWidth: { xs: "100%", sm: "50%", md: "25%" },
              }}
            >
              <motion.div
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={hasAnimated ? "visible" : "hidden"}
                style={{
                  width: "100%",
                  maxWidth: { xs: "100%", sm: "100%", md: "100%" },
                }}
              >
                <Box
                  sx={{
                    height: { xs: "280px", sm: "260px", md: "240px", lg: "260px" },
                    backgroundColor: colors.cardBg,
                    border: `1px solid ${colors.cardBorder}`,
                    borderRadius: { xs: "20px", sm: "18px", md: "16px", lg: "20px" },
                    padding: { xs: "20px", sm: "16px", md: "14px", lg: "18px" },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    position: "relative",
                    transition: "all 0.3s ease",
                    boxShadow: darkMode 
                      ? "0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.02)"
                      : "0 4px 20px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.8)",
                    "&:hover": {
                      borderColor: colors.cardHoverBorder,
                      boxShadow: darkMode 
                        ? `0 8px 40px rgba(0,0,0,0.5), inset 0 0 60px ${step.gradient}`
                        : `0 8px 40px rgba(0,0,0,0.06), inset 0 0 60px ${step.gradient}`,
                      transform: "translateY(-6px)",
                    },
                  }}
                >
                  {/* Icon Container */}
                  <Box
                    sx={{
                      width: { xs: "44px", sm: "36px", md: "32px", lg: "40px" },
                      height: { xs: "44px", sm: "36px", md: "32px", lg: "40px" },
                      borderRadius: { xs: "14px", sm: "12px", md: "10px", lg: "14px" },
                      backgroundColor: colors.iconBg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: { xs: "16px", sm: "12px", md: "10px", lg: "14px" },
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.08)",
                        boxShadow: `0 0 30px ${step.accentColor}40`,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        color: step.accentColor,
                        fontSize: { xs: "20px", sm: "16px", md: "14px", lg: "18px" },
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {step.icon}
                    </Box>
                  </Box>

                  {/* Step Number - More Visible */}
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: { xs: "11px", sm: "10px", md: "9px", lg: "11px" },
                      fontWeight: 800,
                      letterSpacing: "2px",
                      color: step.accentColor,
                      opacity: 0.7,
                      mb: { xs: "4px", sm: "3px", md: "2px", lg: "4px" },
                      transition: "color 0.3s ease, opacity 0.3s ease",
                      "&:hover": {
                        opacity: 1,
                      },
                    }}
                  >
                    STEP {String(step.id).padStart(2, '0')}
                  </Typography>

                  {/* Card Title */}
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: "20px", sm: "16px", md: "14px", lg: "18px" },
                      fontWeight: 800,
                      fontStyle: "italic",
                      textTransform: "uppercase",
                      color: colors.primaryText,
                      lineHeight: 1.1,
                      mb: { xs: "8px", sm: "6px", md: "4px", lg: "8px" },
                      transition: "color 0.3s ease",
                    }}
                  >
                    {step.title}
                  </Typography>

                  {/* Card Description */}
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: "13px", sm: "11px", md: "10px", lg: "12px" },
                      lineHeight: { xs: 1.6, sm: 1.5, md: 1.4, lg: 1.6 },
                      color: colors.secondaryText,
                      flex: 1,
                      transition: "color 0.3s ease",
                    }}
                  >
                    {step.description}
                  </Typography>

                  {/* Accent Line at Bottom */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: "0",
                      left: { xs: "20px", sm: "16px", md: "14px", lg: "18px" },
                      right: { xs: "20px", sm: "16px", md: "14px", lg: "18px" },
                      height: "2px",
                      background: `linear-gradient(90deg, ${step.accentColor}40, transparent)`,
                      borderRadius: "2px",
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}