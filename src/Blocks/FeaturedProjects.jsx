// src/Blocks/FeaturedProjects.jsx
import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Chip,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// Import images from assets folder
import ecommerceImage from "../assets/E-commerce platform.jpg";
import taskImage from "../assets/Task Management App.jpg";
import weatherImage from "../assets/Weather platform.jpg";

const featuredProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with modern UI, secure payments, and admin dashboard.",
    image: ecommerceImage,
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Full Stack"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management with real-time updates and team collaboration features.",
    image: taskImage,
    technologies: ["React", "Firebase", "Material-UI", "Context API"],
    category: "Web App"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather data with beautiful visualizations and interactive maps.",
    image: weatherImage,
    technologies: ["JavaScript", "Chart.js", "API Integration", "CSS3"],
    category: "Frontend"
  }
];

export default function FeaturedProjects() {
  const [currentProject, setCurrentProject] = useState(0);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % featuredProjects.length);
    }, 5000);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [featuredProjects.length]);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  const goToProject = (index) => {
    setCurrentProject(index);
  };

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "background.default", position: "relative" }}>
      {/* Background Pattern */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `radial-gradient(circle at 20% 80%, ${theme.palette.primary.main}1a 0%, transparent 50%)`,
          zIndex: 1,
        }}
      />

      <Box sx={{ position: "relative", zIndex: 2, maxWidth: "1200px", mx: "auto", px: { xs: 3, md: 4 } }}>
        {/* Section Header */}
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: "text.primary",
              mb: 2,
              fontSize: { xs: "1.8rem", md: "2.5rem" }
            }}
          >
            Featured Projects
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "text.secondary",
              maxWidth: "500px",
              mx: "auto",
              fontSize: { xs: "0.9rem", md: "1.1rem" }
            }}
          >
            A glimpse of my recent work and creative solutions
          </Typography>
        </Box>

        {/* Carousel Container */}
        <Box 
          sx={{ 
            position: "relative", 
            height: { xs: "400px", md: "450px" },
            overflow: "hidden",
            borderRadius: "16px",
            border: "1px solid",
            borderColor: "divider",
            background: "background.paper",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              style={{ height: "100%" }}
            >
              <Box sx={{ display: "flex", height: "100%", flexDirection: { xs: "column", md: "row" } }}>
                {/* Project Image */}
                <Box
                  sx={{
                    flex: 1,
                    position: "relative",
                    minHeight: { xs: "150px", md: "auto" },
                    overflow: "hidden"
                  }}
                >
                  <img 
                    src={featuredProjects[currentProject].image} 
                    alt={featuredProjects[currentProject].title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center"
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background: `linear-gradient(90deg, ${theme.palette.background.default}cc 0%, transparent 100%)`,
                    }}
                  />
                </Box>

                {/* Project Info */}
                <Box
                  sx={{
                    flex: 1,
                    p: { xs: 2.5, md: 4 },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    background: "background.paper",
                  }}
                >
                  {/* Updated Category Label */}
                  <Box sx={{ mb: 2 }}>
                    <Typography
                      variant="overline"
                      sx={{
                        color: "primary.main",
                        fontWeight: 600,
                        fontSize: "0.75rem",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        backgroundColor: "rgba(12,36,124,0.1)",
                        px: 2,
                        py: 0.5,
                        borderRadius: "12px",
                        display: "inline-block"
                      }}
                    >
                      {featuredProjects[currentProject].category}
                    </Typography>
                  </Box>

                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      color: "text.primary",
                      mb: 1.5,
                      fontSize: { xs: "1.3rem", md: "1.8rem" }
                    }}
                  >
                    {featuredProjects[currentProject].title}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.secondary",
                      mb: 3,
                      lineHeight: 1.5,
                      fontSize: { xs: "0.85rem", md: "0.95rem" }
                    }}
                  >
                    {featuredProjects[currentProject].description}
                  </Typography>

                  {/* Technologies */}
                  <Stack direction="row" spacing={1} flexWrap="wrap" gap={0.8}>
                    {featuredProjects[currentProject].technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        variant="outlined"
                        sx={{
                          color: "secondary.main",
                          borderColor: "secondary.main",
                          fontSize: "0.7rem",
                          height: "22px"
                        }}
                      />
                    ))}
                  </Stack>
                </Box>
              </Box>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <IconButton
            onClick={prevProject}
            sx={{
              position: "absolute",
              left: 12,
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "rgba(0,0,0,0.5)",
              color: "white",
              width: "40px",
              height: "40px",
              "&:hover": {
                backgroundColor: "primary.main",
              }
            }}
          >
            <ChevronLeftIcon />
          </IconButton>

          <IconButton
            onClick={nextProject}
            sx={{
              position: "absolute",
              right: 12,
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "rgba(0,0,0,0.5)",
              color: "white",
              width: "40px",
              height: "40px",
              "&:hover": {
                backgroundColor: "primary.main",
              }
            }}
          >
            <ChevronRightIcon />
          </IconButton>

          {/* Dots Indicator */}
          <Box sx={{ position: "absolute", bottom: 16, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 1 }}>
            {featuredProjects.map((_, index) => (
              <Box
                key={index}
                onClick={() => goToProject(index)}
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: index === currentProject ? "primary.main" : "rgba(255,255,255,0.3)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: index === currentProject ? "primary.main" : "rgba(255,255,255,0.5)",
                  }
                }}
              />
            ))}
          </Box>
        </Box>

        {/* View All Projects Button */}
        <Box textAlign="center" mt={4}>
          <Button
            variant="outlined"
            onClick={() => navigate('/projects')}
            sx={{
              borderColor: "primary.main",
              color: "primary.main",
              px: 3,
              py: 1,
              borderRadius: "25px",
              fontWeight: 600,
              fontSize: "0.9rem",
              "&:hover": {
                borderColor: "secondary.main",
                color: "secondary.main",
                backgroundColor: "rgba(12,36,124,0.08)",
                boxShadow: "0 0 15px rgba(12,36,124,0.3)",
              }
            }}
          >
            View All Projects
          </Button>
        </Box>
      </Box>
    </Box>
  );
}