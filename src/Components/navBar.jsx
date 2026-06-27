import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Sun, Moon } from "@phosphor-icons/react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../themes/theme";

export default function NavBar() {
  const isMobile = useMediaQuery("(max-width:768px)");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "Projects", to: "/projects" },
    { label: "About", to: "/about" },
  ];

  // Theme-based colors
  const colors = {
    // Logo text - Always purple
    logoColor: "#6420F3",
    
    // Nav links
    navLinkColor: !scrolled 
      ? (darkMode ? "#FFFFFF" : "#000000")
      : (darkMode ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.8)"),
    navLinkHoverColor: darkMode ? "#FFFFFF" : "#000000",
    navLinkActiveColor: darkMode ? "#FFFFFF" : "#000000",
    
    // Menu button
    menuButtonColor: !scrolled 
      ? (darkMode ? "#FFFFFF" : "#000000")
      : (darkMode ? "#FFFFFF" : "#000000"),
    
    // Theme toggle
    themeToggleColor: !scrolled 
      ? (darkMode ? "#FFFFFF" : "#000000")
      : (darkMode ? "#FFD700" : "#000000"),
    
    // Let's Talk button - Always purple
    talkButtonBg: !scrolled ? "#6420F3" : "transparent",
    talkButtonText: !scrolled ? "#FFFFFF" : "#6420F3",
    talkButtonBorder: "#6420F3",
    talkButtonHoverBg: !scrolled ? "#4B00CC" : "rgba(100,32,243,0.1)",
    
    // Arrow icon
    arrowBg: scrolled 
      ? "#6420F3"
      : "#FFFFFF",
    arrowColor: scrolled 
      ? "#FFFFFF"
      : "#6420F3",
    
    // AppBar background
    appBarBg: scrolled 
      ? (darkMode ? "rgba(10,10,10,0.85)" : "rgba(255,255,255,0.85)")
      : "transparent",
    
    // Border
    borderColor: scrolled 
      ? (darkMode ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)")
      : "transparent",
    
    // Box shadow
    boxShadow: scrolled 
      ? (darkMode ? "0 0 20px rgba(255,255,255,0.1)" : "0 0 20px rgba(100,32,243,0.15)")
      : "none",
    
    // Drawer
    drawerBg: darkMode ? "rgba(10,10,10,0.95)" : "rgba(255,255,255,0.95)",
    drawerText: darkMode ? "#FFFFFF" : "#000000",
    drawerHoverBg: darkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
  };

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.cdnfonts.com/css/azonix" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Rye&display=swap" rel="stylesheet" />
      
      <AppBar 
        position="fixed" 
        elevation={0}
        sx={{
          width: scrolled ? "90%" : "92%",
          left: scrolled ? "5%" : "4%",
          right: scrolled ? "5%" : "4%",
          top: scrolled ? "10px" : "20px",
          borderRadius: scrolled ? "50px" : "40px",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          background: colors.appBarBg,
          backdropFilter: scrolled ? "blur(10px)" : "blur(0)",
          border: scrolled ? "1px solid" : "none",
          borderColor: colors.borderColor,
          boxShadow: colors.boxShadow,
          "&:hover": scrolled ? {
            boxShadow: darkMode 
              ? "0 0 30px rgba(255,255,255,0.2)"
              : "0 0 30px rgba(100,32,243,0.25)",
            borderColor: darkMode ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.2)",
          } : {},
        }}
      >
        <Toolbar sx={{ 
          display: "flex", 
          justifyContent: "space-between",
          px: { xs: 2, md: 4 },
          minHeight: scrolled ? "64px" : "80px",
          transition: "min-height 0.4s ease",
        }}>
          {/* Name - Left Side - Purple Logo */}
          <Box 
            component={Link}
            to="/"
            sx={{ 
              textDecoration: "none",
              cursor: "pointer",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              }
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "'Azonix', sans-serif",
                fontWeight: 400,
                letterSpacing: "2px",
                color: colors.logoColor,
                fontSize: scrolled ? "1.3rem" : "1.5rem",
                transition: "all 0.3s ease",
              }}
            >
              Olaniyi
            </Typography>
          </Box>

          {/* Desktop Menu - Centered */}
          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
              {navItems.map((item) => {
                const isActive = location.pathname === item.to;
                return (
                  <Typography
                    key={item.to}
                    component={Link}
                    to={item.to}
                    sx={{
                      fontSize: "1rem",
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? colors.navLinkActiveColor : colors.navLinkColor,
                      cursor: "pointer",
                      textDecoration: "none",
                      position: "relative",
                      transition: "color 0.3s ease",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: -8,
                        left: "50%",
                        width: isActive ? "100%" : 0,
                        height: "2px",
                        background: "linear-gradient(90deg, #6420F3, #28a6e7)",
                        transition: "all 0.3s ease",
                        transform: "translateX(-50%)",
                        borderRadius: "2px",
                      },
                      "&:hover": {
                        color: colors.navLinkHoverColor,
                      },
                      "&:hover::after": {
                        width: "100%",
                      },
                    }}
                  >
                    {item.label}
                  </Typography>
                );
              })}
            </Box>
          )}

          {/* Right Side - Theme Toggle + LET'S TALK Button */}
          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              {/* Theme Toggle */}
              <IconButton
                onClick={toggleDarkMode}
                sx={{
                  color: colors.themeToggleColor,
                  backgroundColor: !scrolled ? "transparent" : "rgba(0,0,0,0.05)",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)",
                    transform: "rotate(15deg)",
                  },
                }}
              >
                {darkMode ? <Sun size={22} weight="fill" /> : <Moon size={22} weight="fill" />}
              </IconButton>

              {/* LET'S TALK Button - Purple */}
              <Button
                component={Link}
                to="/contact"
                variant={scrolled ? "outlined" : "contained"}
                endIcon={
                  <Box
                    sx={{
                      backgroundColor: colors.arrowBg,
                      borderRadius: "50%",
                      width: "28px",
                      height: "28px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transform: "rotate(45deg)",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <ArrowUpwardIcon sx={{ fontSize: "16px", color: colors.arrowColor }} />
                  </Box>
                }
                sx={{
                  backgroundColor: !scrolled ? "#6420F3" : "transparent",
                  color: !scrolled ? "#FFFFFF" : "#6420F3",
                  borderColor: "#6420F3",
                  borderRadius: "30px",
                  px: 2.5,
                  py: 0.8,
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: scrolled ? "rgba(100,32,243,0.1)" : "#4B00CC",
                    transform: "translateY(-2px)",
                    "& .MuiBox-root": {
                      transform: "rotate(90deg)",
                    },
                  },
                }}
              >
                LET'S TALK
              </Button>
            </Box>
          )}

          {/* Mobile Menu Button + Theme Toggle */}
          {isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {/* Theme Toggle - Now visible on mobile */}
              <IconButton
                onClick={toggleDarkMode}
                sx={{ 
                  color: !scrolled 
                    ? (darkMode ? "#FFFFFF" : "#6420F3")
                    : (darkMode ? "#FFD700" : "#6420F3"),
                  transition: "color 0.3s ease",
                  padding: "8px",
                }}
              >
                {darkMode ? <Sun size={20} weight="fill" /> : <Moon size={20} weight="fill" />}
              </IconButton>

              {/* Menu Button */}
              <IconButton
                onClick={() => setDrawerOpen(true)}
                sx={{ 
                  color: !scrolled 
                    ? (darkMode ? "#FFFFFF" : "#6420F3")
                    : "text.primary",
                  transition: "color 0.3s ease",
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          )}
        </Toolbar>

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          PaperProps={{
            sx: {
              background: colors.drawerBg,
              backdropFilter: "blur(20px)",
              width: 280,
              borderLeft: `1px solid ${darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
            },
          }}
        >
          <Box sx={{ p: 3 }}>
            <Typography 
              variant="h6" 
              sx={{ 
                color: colors.drawerText, 
                textAlign: "center", 
                mb: 4,
                fontWeight: 600,
                fontFamily: "'Azonix', sans-serif",
                letterSpacing: "2px",
              }}
            >
              Olaniyi
            </Typography>
            <List>
              {navItems.map((item) => {
                const isActive = location.pathname === item.to;
                return (
                  <ListItem
                    key={item.to}
                    component={Link}
                    to={item.to}
                    onClick={() => setDrawerOpen(false)}
                    sx={{
                      borderRadius: "12px",
                      mb: 1.5,
                      color: isActive ? "#6420F3" : colors.drawerText,
                      backgroundColor: isActive ? "rgba(100,32,243,0.1)" : "transparent",
                      textAlign: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: colors.drawerHoverBg,
                        transform: "translateX(5px)",
                      },
                    }}
                  >
                    <ListItemText 
                      primary={item.label} 
                      primaryTypographyProps={{
                        fontWeight: isActive ? 600 : 500,
                        textAlign: "center",
                      }}
                    />
                  </ListItem>
                );
              })}
              <ListItem
                component={Link}
                to="/contact"
                onClick={() => setDrawerOpen(false)}
                sx={{
                  borderRadius: "12px",
                  mt: 2,
                  color: colors.drawerText,
                  textAlign: "center",
                  justifyContent: "center",
                  border: "1px solid",
                  borderColor: "#6420F3",
                  "&:hover": {
                    backgroundColor: colors.drawerHoverBg,
                    transform: "translateX(5px)",
                  },
                }}
              >
                <ListItemText primary="Contact" />
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </AppBar>
    </>
  );
}