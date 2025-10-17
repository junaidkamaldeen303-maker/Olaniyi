// src/Blocks/heroSection.jsx
import ContactButton from "../Components/ContactButton.jsx";
import { useNavigate } from "react-router-dom";
import React from "react";
import { Box, Typography, Button, Stack, Chip } from "@mui/material";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function HeroSection() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
          particles: {
            color: { value: ["#6000FF", "#00FFFF"] },
            links: { enable: false },
            move: { enable: true, speed: 1.2, outModes: "bounce" },
            number: { value: 40, density: { enable: true, area: 800 } },
            opacity: { value: 0.6 },
            shape: { type: "circle" },
            size: { value: { min: 3, max: 8 } },
          },
          detectRetina: true,
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />

      {/* Hero Content - Moved up with transform */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          maxWidth: "900px",
          px: 3,
          transform: { md: "translateY(-10%)" }
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Badge */}
          <Chip
            label="FULL STACK DEVELOPER"
            sx={{
              backgroundColor: 'rgba(96,0,255,0.2)',
              color: '#6000FF',
              fontWeight: 600,
              fontSize: { xs: '0.7rem', md: '0.8rem' },
              mb: 2,
              border: '1px solid rgba(96,0,255,0.5)',
              '& .MuiChip-label': {
                px: { xs: 1.5, md: 2 },
              }
            }}
          />

          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              mb: 2,
            }}
          >
            Hi, I'm <span style={{ color: "#6000FF" }}>Olaniyi Kamal</span>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "0.9rem", md: "1.1rem" },
              mb: 4,
              maxWidth: "700px",
              mx: "auto",
              lineHeight: { xs: 1.5, md: 1.6 }
            }}
          >
            As a full-stack developer, I handle both front-end and back-end 
            development to create complete digital products. I focus on building 
            applications that are not only visually appealing and user-friendly 
            but also robust, secure, and capable of handling growth while maintaining
            optimal performance.
          </Typography>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
          >
            <Button
              variant="outline"
              onClick={() => navigate('/projects')}
              sx={{
                backgroundColor: "#6000FF",
                color: "#fff",
                fontWeight: "600",
                px: { xs: 3, md: 4 },
                py: { xs: 1, md: 1.5 },
                borderRadius: "30px",
                fontSize: { xs: "0.9rem", md: "1rem" },
                "&:hover": {
                  backgroundColor: "#6000FF",
                  boxShadow: "0 0 15px rgba(96,0,255,0.7)",
                },
              }}
            >
              View Projects
            </Button>

            <Button
              variant="outlined"
              onClick={() => navigate('/contact')}
              sx={{
                borderColor: "#6000FF",
                color: "#fff",
                fontWeight: "600",
                px: { xs: 3, md: 4 },
                py: { xs: 1, md: 1.5 },
                borderRadius: "30px",
                fontSize: { xs: "0.9rem", md: "1rem" },
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
                "&:hover": {
                  borderColor: "#6000FF",
                  color: "#6000FF",
                  boxShadow: "0 0 15px rgba(96,0,255,0.7)",
                },
              }}
            >
              Get in touch
            </Button>
          </Stack>
        </motion.div>
      </Box>
    </Box>
  );
}