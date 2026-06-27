import React from "react";
import {
  Box,
  Typography,
  Divider,
  IconButton,
  Stack,
  Button,
  Avatar,
} from "@mui/material";
import { LinkedIn, Email } from "@mui/icons-material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Link } from "react-router-dom";
import { useTheme } from "../themes/theme";
import comicImage from "../assets/Comic.png"; // ✅ Import the image

export default function Footer() {
  const { darkMode } = useTheme();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Theme-based colors
  const colors = {
    background: darkMode ? "#050816" : "#F8F9FC",
    textPrimary: darkMode ? "#FFFFFF" : "#0A1022",
    textSecondary: darkMode ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.45)",
    textMuted: darkMode ? "rgba(255,255,255,0.40)" : "rgba(0,0,0,0.40)",
    divider: darkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
    iconBg: darkMode ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)",
    iconBorder: darkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)",
    iconColor: darkMode ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.6)",
    buttonBorder: darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
    buttonText: darkMode ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.8)",
    glowColor: darkMode ? "rgba(74,155,255,0.05)" : "rgba(74,155,255,0.03)",
    gridColor: darkMode ? "rgba(255,255,255,0.01)" : "rgba(0,0,0,0.01)",
    vignette: darkMode ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.05)",
  };

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: <WhatsAppIcon sx={{ fontSize: 22 }} />,
      url: "https://wa.me/2348124016354",
      color: "#25D366",
      hoverBg: "rgba(37,211,102,0.15)",
    },
    {
      name: "LinkedIn",
      icon: <LinkedIn sx={{ fontSize: 22 }} />,
      url: "https://linkedin.com/in/olaniyikam",
      color: "#0077B5",
      hoverBg: "rgba(0,119,181,0.15)",
    },
    {
      name: "Email",
      icon: <Email sx={{ fontSize: 22 }} />,
      url: "mailto:olaniyikam@gmail.com",
      color: "#EA4335",
      hoverBg: "rgba(234,67,53,0.15)",
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        backgroundColor: colors.background,
        position: "relative",
        overflow: "hidden",
        pt: { xs: 4, md: 6 },
        pb: { xs: 3, md: 4 },
        px: { xs: 3, sm: 4, md: 6, lg: 8 },
        transition: "background-color 0.3s ease",
      }}
    >
      {/* Background Effects */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: "300px",
          height: "300px",
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
          opacity: 0.2,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `radial-gradient(circle at 50% 50%, transparent 60%, ${colors.vignette} 100%)`,
          pointerEvents: "none",
          transition: "background 0.3s ease",
        }}
      />

      {/* Main Content Container */}
      <Box
        sx={{
          maxWidth: "1440px",
          mx: "auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Top Row */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "center", md: "center" },
            gap: { xs: 2, md: 3 },
          }}
        >
          {/* Left Column - Brand Identity */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              gap: 0.5,
              flex: { xs: "0", md: "0 0 30%" },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Avatar
                src={comicImage}
                alt="Olaniyi Kamal"
                sx={{
                  width: 40,
                  height: 40,
                  border: "2px solid rgba(100,32,243,0.3)",
                }}
              />
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "'Azonix', sans-serif",
                    fontWeight: 700,
                    letterSpacing: "-0.5px",
                    color: colors.textPrimary,
                    fontSize: "20px",
                    transition: "color 0.3s ease",
                  }}
                >
                  OLANIYI
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    fontSize: "10px",
                    letterSpacing: "1.5px",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    color: colors.textSecondary,
                    transition: "color 0.3s ease",
                  }}
                >
                  Software Engineer
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Center Column - Social Links (EXACT CENTER) */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flex: { xs: "0", md: "0 0 34%" },
            }}
          >
            <Stack direction="row" spacing={1.5}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  component="a"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  sx={{
                    width: 48,
                    height: 48,
                    backgroundColor: colors.iconBg,
                    border: `1px solid ${colors.iconBorder}`,
                    borderRadius: "50%",
                    color: social.color,
                    transition: "all 0.3s ease",
                    position: "relative",
                    "&:hover": {
                      backgroundColor: social.hoverBg,
                      borderColor: social.color,
                      color: social.color,
                      transform: "translateY(-2px)",
                      width: "auto",
                      padding: "0 16px",
                      borderRadius: "24px",
                      gap: "8px",
                      "& .social-label": {
                        opacity: 1,
                        width: "auto",
                        marginRight: "4px",
                      },
                    },
                  }}
                >
                  {social.icon}
                  <Typography
                    className="social-label"
                    sx={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: social.color,
                      opacity: 0,
                      width: 0,
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      transition: "all 0.3s ease",
                      textTransform: "none",
                    }}
                  >
                    {social.name}
                  </Typography>
                </IconButton>
              ))}
            </Stack>
          </Box>

          {/* Right Column - Quick Actions (FARTHEST RIGHT) */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-end" },
              gap: 1.5,
              flex: { xs: "0", md: "0 0 30%" },
            }}
          >
            {/* Download Resume Button */}
            <Button
              component="a"
              href="/resume.pdf"
              download="Olaniyi_Kamal_Resume.pdf"
              variant="contained"
              sx={{
                width: { xs: "100%", md: "180px" },
                height: 40,
                backgroundColor: "#6420F3",
                color: "#FFFFFF",
                borderRadius: "999px",
                fontWeight: 600,
                fontSize: "0.8rem",
                textTransform: "none",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#4B00CC",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 25px rgba(100,32,243,0.3)",
                },
              }}
            >
              Download Resume
            </Button>

            <Button
              onClick={handleScrollToTop}
              variant="outlined"
              startIcon={<ArrowUpwardIcon sx={{ fontSize: 16 }} />}
              sx={{
                width: { xs: "100%", md: "180px" },
                height: 40,
                backgroundColor: "transparent",
                border: `1px solid ${colors.buttonBorder}`,
                borderRadius: "999px",
                color: colors.buttonText,
                fontWeight: 500,
                fontSize: "0.8rem",
                textTransform: "none",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: darkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
                  borderColor: darkMode ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Back to Top
            </Button>
          </Box>
        </Box>

        {/* Divider */}
        <Divider
          sx={{
            my: { xs: 3, md: 4 },
            borderColor: colors.divider,
            width: "100%",
            transition: "border-color 0.3s ease",
          }}
        />

        {/* Bottom Row */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "center", md: "center" },
            gap: { xs: 1.5, md: 0 },
          }}
        >
          {/* Copyright */}
          <Box
            sx={{
              flex: { xs: "0", md: "0 0 30%" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontSize: "12px",
                fontWeight: 400,
                color: colors.textMuted,
                transition: "color 0.3s ease",
              }}
            >
              © {new Date().getFullYear()} Olaniyi. All Rights Reserved.
            </Typography>
          </Box>

          {/* Empty Space - Middle Column */}
          <Box
            sx={{
              flex: "0 0 34%",
              display: { xs: "none", md: "block" },
            }}
          />

          {/* Right Side - Legal Links */}
          <Box
            sx={{
              flex: { xs: "0", md: "0 0 30%" },
              textAlign: { xs: "center", md: "right" },
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              gap: 2.5,
            }}
          >
            <Typography
              component={Link}
              to="/privacy"
              sx={{
                fontSize: "12px",
                fontWeight: 400,
                color: colors.textMuted,
                textDecoration: "none",
                transition: "color 0.3s ease",
                cursor: "pointer",
                "&:hover": {
                  color: colors.textPrimary,
                },
              }}
            >
              Privacy Policy
            </Typography>
            <Typography
              component={Link}
              to="/legal"
              sx={{
                fontSize: "12px",
                fontWeight: 400,
                color: colors.textMuted,
                textDecoration: "none",
                transition: "color 0.3s ease",
                cursor: "pointer",
                "&:hover": {
                  color: colors.textPrimary,
                },
              }}
            >
              Legal
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}