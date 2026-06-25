import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../themes/theme";
import DownloadIcon from "@mui/icons-material/Download";

export default function ResumeCTA() {
  const { darkMode } = useTheme();
  const navigate = useNavigate();
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

  const colors = {
    background: darkMode ? "#000000" : "#FFFFFF",
    panelBg: darkMode ? "rgba(14,20,38,0.92)" : "rgba(240,242,247,0.92)",
    panelBorder: darkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)",
    primaryText: darkMode ? "#FFFFFF" : "#0A1022",
    secondaryText: darkMode ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.6)",
    badgeBg: darkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
    badgeBorder: darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
    badgeText: darkMode ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.6)",
    buttonPrimaryBg: darkMode ? "#FFFFFF" : "#0A1022",
    buttonPrimaryText: darkMode ? "#000000" : "#FFFFFF",
    buttonPrimaryHover: darkMode ? "#F4F4F4" : "#1A1A2E",
    buttonSecondaryBorder: darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
    buttonSecondaryText: darkMode ? "#FFFFFF" : "#0A1022",
    buttonSecondaryHoverBg: darkMode ? "#FFFFFF" : "#0A1022",
    buttonSecondaryHoverText: darkMode ? "#000000" : "#FFFFFF",
    glowColor: darkMode ? "rgba(74,155,255,0.08)" : "rgba(74,155,255,0.04)",
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.97, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <Box
      ref={sectionRef}
      sx={{
        position: "relative",
        width: "100%",
        backgroundColor: colors.background,
        py: { xs: "40px", sm: "50px", md: "60px", lg: "80px" },
        px: { xs: 2, sm: 3, md: 4, lg: 6 },
        overflow: "hidden",
        transition: "background-color 0.3s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background Glow */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "400px",
          height: "400px",
          background: `radial-gradient(circle, ${colors.glowColor} 0%, transparent 70%)`,
          filter: "blur(60px)",
          pointerEvents: "none",
          transition: "background 0.3s ease",
        }}
      />

      {/* Main Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={hasAnimated ? "visible" : "hidden"}
        style={{
          width: "100%",
          maxWidth: "1440px",
        }}
      >
        <Box
          sx={{
            position: "relative",
            backgroundColor: colors.panelBg,
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderRadius: { xs: "20px", sm: "24px", md: "28px", lg: "32px" },
            border: `1px solid ${colors.panelBorder}`,
            boxShadow: darkMode
              ? "0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)"
              : "0 20px 60px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8)",
            padding: { xs: "24px 20px", sm: "28px 24px", md: "32px 32px", lg: "40px 48px" },
            minHeight: { xs: "auto", sm: "auto", md: "220px", lg: "260px" },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: { xs: 2.5, sm: 3, md: 3, lg: 4 },
            transition: "all 0.3s ease",
          }}
        >
          {/* Left Content - 60% */}
          <Box
            sx={{
              flex: { xs: "1 1 100%", md: "0 0 60%" },
              maxWidth: { xs: "100%", md: "60%" },
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {/* Section Badge */}
            <Box
              sx={{
                display: "inline-block",
                backgroundColor: colors.badgeBg,
                border: `1px solid ${colors.badgeBorder}`,
                borderRadius: "999px",
                padding: "4px 12px",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
                alignSelf: "flex-start",
                mb: { xs: "10px", sm: "12px", md: "12px", lg: "16px" },
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  fontSize: { xs: "9px", sm: "10px", md: "11px", lg: "12px" },
                  fontWeight: 600,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: colors.badgeText,
                }}
              >
                DOWNLOAD RESUME
              </Typography>
            </Box>

            {/* Heading */}
            <Typography
              variant="h1"
              sx={{
                fontFamily: "'Inter', 'Satoshi', sans-serif",
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3.2rem", xl: "4rem" },
                fontWeight: 900,
                letterSpacing: "-2px",
                textTransform: "uppercase",
                color: colors.primaryText,
                lineHeight: 1.1,
                mb: { xs: "6px", sm: "8px", md: "10px", lg: "12px" },
                transition: "color 0.3s ease",
              }}
            >
              PROFESSIONAL
              <br />
              SNAPSHOT<span style={{ color: "#4A9BFF" }}>.</span>
            </Typography>

            {/* Supporting Copy */}
            <Typography
              variant="body1"
              sx={{
                maxWidth: { xs: "100%", sm: "100%", md: "450px", lg: "520px" },
                fontSize: { xs: "13px", sm: "14px", md: "15px", lg: "16px" },
                fontWeight: 500,
                lineHeight: { xs: 1.6, sm: 1.7, md: 1.7, lg: 1.8 },
                color: colors.secondaryText,
                transition: "color 0.3s ease",
              }}
            >
              Get my latest resume with project highlights, technical stack, and professional experience.
            </Typography>
          </Box>

          {/* Right Actions - 40% */}
          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
            style={{
              flex: { xs: "1 1 100%", md: "0 0 40%" },
              maxWidth: { xs: "100%", md: "40%" },
              width: "100%",
              display: "flex",
              flexDirection: { xs: "column", sm: "row", md: "column", lg: "row" },
              alignItems: { xs: "stretch", sm: "center", md: "stretch", lg: "center" },
              justifyContent: { xs: "center", md: "flex-end" },
              gap: { xs: "12px", sm: "14px", md: "14px", lg: "16px" },
            }}
          >
            {/* Primary Button - DOWNLOAD RESUME */}
            <Button
              variant="contained"
              component="a"
              href="/resume.pdf"
              download="Olaniyi_Kamal_Resume.pdf"
              startIcon={<DownloadIcon sx={{ fontSize: { xs: "16px", sm: "18px", md: "18px", lg: "20px" } }} />}
              sx={{
                backgroundColor: colors.buttonPrimaryBg,
                color: colors.buttonPrimaryText,
                fontWeight: 700,
                fontSize: { xs: "0.75rem", sm: "0.8rem", md: "0.85rem", lg: "0.9rem" },
                padding: { xs: "10px 18px", sm: "12px 22px", md: "14px 24px", lg: "16px 28px" },
                borderRadius: { xs: "10px", sm: "12px", md: "14px", lg: "16px" },
                textTransform: "none",
                transition: "all 250ms ease",
                minWidth: { xs: "100%", sm: "auto", md: "100%", lg: "auto" },
                flex: { xs: "1", sm: "0", md: "1", lg: "0" },
                "&:hover": {
                  backgroundColor: colors.buttonPrimaryHover,
                  transform: "translateY(-4px)",
                  boxShadow: darkMode 
                    ? "0 10px 30px rgba(255,255,255,0.12)"
                    : "0 10px 30px rgba(0,0,0,0.10)",
                },
                "& .MuiButton-startIcon": {
                  marginRight: { xs: "4px", sm: "6px", md: "6px", lg: "8px" },
                },
              }}
            >
              DOWNLOAD RESUME
            </Button>

            {/* Secondary Button - CONTACT ME */}
            <Button
              variant="outlined"
              onClick={() => navigate('/contact')}
              sx={{
                borderColor: colors.buttonSecondaryBorder,
                color: colors.buttonSecondaryText,
                fontWeight: 600,
                fontSize: { xs: "0.75rem", sm: "0.8rem", md: "0.85rem", lg: "0.9rem" },
                padding: { xs: "10px 18px", sm: "12px 22px", md: "14px 24px", lg: "16px 28px" },
                borderRadius: { xs: "10px", sm: "12px", md: "14px", lg: "16px" },
                textTransform: "none",
                transition: "all 250ms ease",
                minWidth: { xs: "100%", sm: "auto", md: "100%", lg: "auto" },
                flex: { xs: "1", sm: "0", md: "1", lg: "0" },
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: colors.buttonSecondaryHoverBg,
                  color: colors.buttonSecondaryHoverText,
                  borderColor: colors.buttonSecondaryHoverBg,
                  transform: "translateY(-4px)",
                  boxShadow: darkMode 
                    ? "0 10px 30px rgba(255,255,255,0.08)"
                    : "0 10px 30px rgba(0,0,0,0.06)",
                },
              }}
            >
              CONTACT ME
            </Button>
          </motion.div>
        </Box>
      </motion.div>
    </Box>
  );
}