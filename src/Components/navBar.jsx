// src/Components/navBar.jsx
import React, { useState } from "react";
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
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { styled } from "@mui/system";
import { Link, useLocation } from "react-router-dom";

// Clean AppBar that touches sides
const GlassAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.mode === 'dark' 
    ? "rgba(10, 17, 40, 0.9)" 
    : "rgba(245, 245, 247, 0.9)",
  backdropFilter: "blur(20px)",
  borderBottom: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
}));

// Navigation link styles - simplified
const NavLink = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(4),
  fontSize: "1rem",
  fontWeight: 500,
  color: theme.palette.text.secondary,
  cursor: "pointer",
  textDecoration: "none",
  transition: "color 0.3s ease-in-out",
  
  "&:hover": {
    color: theme.palette.text.primary,
  },
}));

export default function NavBar() {
  const isMobile = useMediaQuery("(max-width:768px)");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Home", to: "/" },
    { label: "Projects", to: "/projects" },
    { label: "About", to: "/about" },
  ];

  return (
    <>
      {/* Add Google Fonts link to head */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet" />
      
      <GlassAppBar position="fixed" elevation={0}>
        <Toolbar sx={{ 
          display: "flex", 
          justifyContent: "space-between",
          px: { xs: 2, md: 4 }
        }}>
          {/* Name - Moved closer to center */}
          <Box 
            component={Link}
            to="/"
            sx={{ 
              display: "flex", 
              alignItems: "center", 
              textDecoration: "none",
              cursor: "pointer",
              marginLeft: { md: "100px" }
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontFamily: "'Great Vibes', cursive",
                fontWeight: 400,
                color: "text.primary",
                fontSize: { xs: "1.8rem", md: "2rem" },
              }}
            >
              Olaniyi 
            </Typography>
          </Box>

          {/* Desktop Menu - Centered */}
          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", flex: 1, justifyContent: "center" }}>
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  component={Link}
                  to={item.to}
                >
                  {item.label}
                </NavLink>
              ))}
            </Box>
          )}

          {/* Right Side - LET'S TALK Button only */}
          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
              {/* LET'S TALK Button with Arrow */}
              <Button
                component={Link}
                to="/contact"
                variant="outlined"
                endIcon={
                  <Box
                    sx={{
                      backgroundColor: "primary.main",
                      borderRadius: "50%",
                      width: "32px",
                      height: "32px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transform: "rotate(45deg)",
                    }}
                  >
                    <ArrowUpwardIcon sx={{ fontSize: "20px", color: "white" }} />
                  </Box>
                }
                sx={{
                  color: "text.primary",
                  borderColor: "primary.main",
                  borderRadius: "25px",
                  px: 2,
                  py: 1,
                  fontWeight: 500,
                  minWidth: "auto",
                  "&:hover": {
                    borderColor: "primary.light",
                    backgroundColor: "rgba(126, 58, 255, 0.1)",
                  }
                }}
              >
                LET'S TALK
              </Button>
            </Box>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{ color: "text.primary" }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          PaperProps={{
            sx: {
              background: (theme) => theme.palette.mode === 'dark' 
                ? "rgba(10, 17, 40, 0.95)" 
                : "rgba(245, 245, 247, 0.95)",
              backdropFilter: "blur(20px)",
              width: 280,
            },
          }}
        >
          <Box sx={{ p: 2 }}>
            <Typography 
              variant="h6" 
              sx={{ 
                color: "text.primary", 
                textAlign: "center", 
                mb: 3,
                fontWeight: 600 
              }}
            >
              Navigation
            </Typography>
            <List>
              {navItems.map((item) => (
                <ListItem
                  key={item.to}
                  component={Link}
                  to={item.to}
                  onClick={() => setDrawerOpen(false)}
                  sx={{
                    borderRadius: "8px",
                    mb: 1,
                    color: "text.secondary",
                    "&:hover": {
                      color: "text.primary",
                    }
                  }}
                >
                  <ListItemText primary={item.label} />
                </ListItem>
              ))}
              {/* Mobile Contact Item */}
              <ListItem
                component={Link}
                to="/contact"
                onClick={() => setDrawerOpen(false)}
                sx={{
                  borderRadius: "8px",
                  mb: 1,
                  color: "text.secondary",
                  "&:hover": {
                    color: "text.primary",
                  }
                }}
              >
                <ListItemText primary="Contact" />
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </GlassAppBar>
    </>
  );
}