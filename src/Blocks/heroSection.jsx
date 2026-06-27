import { useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { motion } from "framer-motion";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useTheme } from "../themes/theme";
import comicImage from "../assets/Comic.png";

export default function HeroSection() {
  const navigate = useNavigate();
  const { darkMode } = useTheme();
  const containerRef = useRef(null);
  
  // Custom cursor state
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Text animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  const avatarVariants = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  // Theme-based colors
  const colors = {
    background: darkMode ? "#000000" : "#FFFFFF",
    primaryText: darkMode ? "#FFFFFF" : "#000000",
    secondaryText: darkMode ? "#B5B5B5" : "#666666",
    avatarBg: "#F3F3F3",
    buttonPrimaryBg: darkMode ? "#FFFFFF" : "#000000",
    buttonPrimaryText: darkMode ? "#000000" : "#FFFFFF",
    buttonPrimaryHover: darkMode ? "#F5F5F5" : "#333333",
    buttonSecondaryBorder: darkMode ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.15)",
    buttonSecondaryText: darkMode ? "#FFFFFF" : "#000000",
    buttonSecondaryHoverBg: darkMode ? "#FFFFFF" : "#000000",
    buttonSecondaryHoverText: darkMode ? "#000000" : "#FFFFFF",
    cursorDot: darkMode ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.8)",
    cursorBorder: darkMode ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)",
  };

  return (
    <Box
      ref={containerRef}
      sx={{
        position: "relative",
        minHeight: "100vh",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.background,
        overflow: "hidden",
        px: { xs: 2, sm: 3, md: 6, lg: 10 },
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      {/* Custom Cursor - Hide on touch devices */}
      <Box
        sx={{
          display: { xs: 'none', sm: 'none', md: 'block' },
          position: "fixed",
          pointerEvents: "none",
          zIndex: 9999,
          left: cursorPosition.x - 20,
          top: cursorPosition.y - 20,
          transition: "transform 0.15s ease-out",
          transform: isHovering ? "scale(1.2)" : "scale(1)",
        }}
      >
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            border: `1.5px solid ${colors.cursorBorder}`,
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: 4,
              height: 4,
              borderRadius: "50%",
              backgroundColor: colors.cursorDot,
              position: "absolute",
            }}
          />
        </Box>
      </Box>

      {/* Main Content Container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          alignItems: { xs: "center", sm: "center", md: "center" },
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "1500px",
          gap: { xs: 2, sm: 2.5, md: 4, lg: 0 },
          position: "relative",
          zIndex: 2,
          height: { xs: "auto", sm: "auto", md: "100%" },
          minHeight: { xs: "auto", sm: "auto", md: "100%" },
          py: { xs: 0.5, sm: 1, md: 0 }, // Reduced padding top on mobile
        }}
      >
        {/* Mobile/Tablet Layout: Avatar + Heading Row */}
        <Box
          sx={{
            display: { xs: "flex", sm: "flex", md: "none" },
            flexDirection: "row",
            alignItems: "center",
            gap: { xs: 2, sm: 2.5 },
            width: "100%",
            mb: { xs: 1, sm: 1.5 },
            mt: { xs: 0.5, sm: 1 }, // Reduced top margin on mobile
          }}
        >
          {/* Small Avatar for Mobile/Tablet */}
          <motion.div
            variants={avatarVariants}
            initial="hidden"
            animate="visible"
            style={{ flexShrink: 0 }}
          >
            <Box
              sx={{
                width: { xs: "60px", sm: "70px" },
                height: { xs: "60px", sm: "70px" },
                borderRadius: "50%",
                backgroundColor: "#F3F3F3",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                border: "none",
                outline: "none",
                boxShadow: "none",
              }}
            >
              <Box
                component="img"
                src={comicImage}
                alt="Olaniyi Kamal"
                sx={{
                  width: "85%",
                  height: "85%",
                  objectFit: "cover",
                  borderRadius: "50%",
                  border: "none",
                  outline: "none",
                }}
              />
            </Box>
          </motion.div>

          {/* Mobile/Tablet Heading */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ flex: 1 }}
          >
            <motion.div variants={itemVariants}>
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "'Playfair Display', 'Instrument Serif', serif",
                  fontSize: { xs: "1.5rem", sm: "1.8rem" },
                  fontWeight: 400,
                  color: colors.primaryText,
                  lineHeight: 1.15,
                  transition: "color 0.3s ease",
                }}
              >
                Hey there, <span style={{ fontStyle: "italic" }}>I'm</span>
                <br />
                <span style={{ fontStyle: "italic" }}>Olaniyi Kamal.</span>
              </Typography>
            </motion.div>
          </motion.div>
        </Box>

        {/* Left Column */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              flex: { xs: "1 1 100%", sm: "1 1 100%", md: "0 0 58%" },
              maxWidth: { xs: "100%", sm: "100%", md: "58%" },
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: { xs: "flex-start", sm: "flex-start", md: "center" },
              height: { xs: "auto", sm: "auto", md: "100%" },
            }}
          >
            {/* Desktop Heading - Hidden on Mobile/Tablet */}
            <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h1"
                  sx={{
                    fontFamily: "'Playfair Display', 'Instrument Serif', serif",
                    fontSize: { xs: "2.8rem", sm: "3.5rem", md: "4.5rem", lg: "5.5rem", xl: "6.5rem" },
                    fontWeight: 400,
                    color: colors.primaryText,
                    lineHeight: 0.95,
                    letterSpacing: "-0.02em",
                    mb: 1,
                    transition: "color 0.3s ease",
                  }}
                >
                  Hey there, <span style={{ fontStyle: "italic" }}>I'm</span>
                  <br />
                  <span style={{ fontStyle: "italic" }}>Olaniyi Kamal.</span>
                </Typography>
              </motion.div>
            </Box>

            {/* Description Paragraph */}
            <motion.div variants={itemVariants}>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "'Inter', 'Manrope', sans-serif",
                  fontSize: { 
                    xs: "0.95rem", 
                    sm: "1rem", 
                    md: "1.1rem", 
                    lg: "1.35rem" 
                  },
                  fontWeight: 500,
                  color: colors.secondaryText,
                  lineHeight: { xs: 1.6, sm: 1.6, md: 1.8 },
                  maxWidth: { xs: "100%", sm: "100%", md: "620px" },
                  mt: { xs: 0.5, sm: 0.8, md: 3 },
                  mb: { xs: 0.8, sm: 1, md: 2.5 },
                  transition: "color 0.3s ease",
                }}
              >
                I'm a software developer building scalable, simple digital products across education, healthcare, developer tools, cloud systems, blockchain systems, LLMs, and more.
              </Typography>
            </motion.div>

            {/* Personal Motto */}
            <motion.div variants={itemVariants}>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "'Playfair Display', 'Instrument Serif', serif",
                  fontSize: { 
                    xs: "1rem", 
                    sm: "1.1rem", 
                    md: "1.4rem", 
                    lg: "1.8rem" 
                  },
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: colors.primaryText,
                  mb: { xs: 1.2, sm: 1.5, md: 4 },
                  mt: { xs: 0.3, sm: 0.5, md: 1 },
                  transition: "color 0.3s ease",
                }}
              >
                I ship really cool stuff.
              </Typography>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={buttonVariants}>
              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                spacing={{ xs: 1.5, sm: 2, md: 2.5 }}
                sx={{ gap: { xs: "12px", sm: "16px", md: "20px" }, flexWrap: "wrap" }}
              >
                <Button
                  variant="contained"
                  onClick={() => navigate('/projects')}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  endIcon={<ArrowDownwardIcon sx={{ fontSize: { xs: "18px", sm: "20px", md: "20px" } }} />}
                  sx={{
                    backgroundColor: colors.buttonPrimaryBg,
                    color: colors.buttonPrimaryText,
                    fontWeight: 600,
                    fontSize: { 
                      xs: "0.85rem", 
                      sm: "0.9rem", 
                      md: "1rem"
                    },
                    px: { 
                      xs: "18px", 
                      sm: "22px", 
                      md: "32px"
                    },
                    py: { 
                      xs: "10px", 
                      sm: "12px", 
                      md: "18px"
                    },
                    borderRadius: "10px",
                    textTransform: "none",
                    transition: "all 250ms ease, background-color 0.3s ease, color 0.3s ease",
                    minWidth: { xs: "auto", sm: "auto", md: "auto" },
                    "&:hover": {
                      backgroundColor: colors.buttonPrimaryHover,
                      transform: "translateY(-2px)",
                      boxShadow: "none",
                    },
                    "& .MuiButton-endIcon": {
                      marginLeft: { xs: "4px", md: "8px" },
                    },
                  }}
                >
                  View Projects
                </Button>

                <Button
                  variant="outlined"
                  onClick={() => navigate('/contact')}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  sx={{
                    borderColor: colors.buttonSecondaryBorder,
                    color: colors.buttonSecondaryText,
                    fontWeight: 500,
                    fontSize: { 
                      xs: "0.85rem", 
                      sm: "0.9rem", 
                      md: "1rem"
                    },
                    px: { 
                      xs: "18px", 
                      sm: "22px", 
                      md: "32px"
                    },
                    py: { 
                      xs: "10px", 
                      sm: "12px", 
                      md: "18px"
                    },
                    borderRadius: "10px",
                    textTransform: "none",
                    transition: "all 250ms ease, border-color 0.3s ease, color 0.3s ease, background-color 0.3s ease",
                    minWidth: { xs: "auto", sm: "auto", md: "auto" },
                    "&:hover": {
                      backgroundColor: colors.buttonSecondaryHoverBg,
                      color: colors.buttonSecondaryHoverText,
                      borderColor: colors.buttonSecondaryHoverBg,
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  Get In Touch
                </Button>
              </Stack>
            </motion.div>
          </Box>
        </motion.div>

        {/* Right Column - Avatar (Desktop only) */}
        <Box
          sx={{
            display: { xs: "none", sm: "none", md: "flex" },
            flex: "0 0 42%",
            maxWidth: "42%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <motion.div
            variants={avatarVariants}
            initial="hidden"
            animate="visible"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <Box
              sx={{
                width: { sm: "220px", md: "280px", lg: "360px", xl: "430px" },
                height: { sm: "220px", md: "280px", lg: "360px", xl: "430px" },
                borderRadius: "50%",
                backgroundColor: "#F3F3F3",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                flexShrink: 0,
                border: "none",
                outline: "none",
                boxShadow: "none",
              }}
            >
              <Box
                component="img"
                src={comicImage}
                alt="Olaniyi Kamal"
                sx={{
                  width: "85%",
                  height: "85%",
                  objectFit: "cover",
                  borderRadius: "50%",
                  border: "none",
                  outline: "none",
                }}
              />
            </Box>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
}