// src/Components/Footer.jsx
import React from "react";
import {
  Box,
  Typography,
  Divider,
  IconButton,
  Stack,
} from "@mui/material";
import { LinkedIn, GitHub } from "@mui/icons-material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      {/* Add Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet" />
      
      <Box
        component="footer"
        sx={{
          background: isHomePage ? "#070a2f" : "rgba(0, 11, 32, 0.85)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          color: "white",
          pt: 4,
          pb: 2,
          px: { xs: 2, md: 4 },
        }}
      >
        {/* Top Divider */}
        <Divider
          sx={{
            mb: 3,
            width: "85%",
            mx: "auto",
            borderColor: "rgba(255,255,255,0.1)",
          }}
        />

        {/* Row: Name Only | Social Icons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            textAlign: { xs: "center", md: "left" },
            mb: 3,
            gap: { xs: 2, md: 0 },
          }}
        >
          {/* Name Only - Positioned same as navbar */}
          <Box sx={{ 
            display: "flex", 
            alignItems: "center",
            marginLeft: { md: "100px" }
          }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "'Great Vibes', cursive",
                fontWeight: 400,
                color: "#fff",
                fontSize: { xs: "1.5rem", md: "1.8rem" },
              }}
            >
              Olaniyi 
            </Typography>
          </Box>

          {/* Social Icons */}
          <Stack direction="row" spacing={2}>
            <IconButton
              component="a"
              href="https://wa.me/08124016354"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#fff", "&:hover": { color: "#6000FF" } }}
            >
              <WhatsAppIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#fff", "&:hover": { color: "#6000FF" } }}
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              component="a"
              href="https://github.com/junaidkamaldeen303-maker"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#fff", "&:hover": { color: "#6000FF" } }}
            >
              <GitHub />
            </IconButton>
          </Stack>
        </Box>

        {/* Bottom Divider */}
        <Divider
          sx={{
            mt: 2,
            mb: 2,
            width: "85%",
            mx: "auto",
            borderColor: "rgba(255,255,255,0.1)",
          }}
        />

        {/* Copyright */}
        <Typography variant="body2" sx={{ color: "#aaa", textAlign: "center" }}>
          © {new Date().getFullYear()} Olaniyi Kamal. All rights reserved.
        </Typography>
      </Box>
    </>
  );
}