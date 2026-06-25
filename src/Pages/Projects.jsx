// src/Pages/Projects.jsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Container,
  Dialog,
  DialogContent,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";

// Import images
import ecommerceImage from "../assets/E-commerce platform.jpg";
import taskImage from "../assets/Task Management App.jpg";
import weatherImage from "../assets/Weather platform.jpg";
import fitnessImage from "../assets/Mobile fitness app.jpg";
import portfolioImage from "../assets/Porfolio website.jpg";
import apiImage from "../assets/API management.jpg";
import socialImage from "../assets/Social media dashboard.jpg";
import elearningImage from "../assets/E-learning.jpg";

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with modern UI and secure payments",
    fullDescription: "A complete e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, payment integration, and admin dashboard.",
    image: ecommerceImage,
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
    category: "Full Stack",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management with real-time updates",
    fullDescription: "A productivity app that allows teams to manage tasks, set deadlines, and collaborate in real-time. Built with modern web technologies for optimal performance.",
    image: taskImage,
    technologies: ["React", "Firebase", "Material-UI", "Context API"],
    category: "Web App",
    featured: false
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather data with beautiful visualizations",
    fullDescription: "An interactive weather dashboard that displays current conditions, forecasts, and historical data with beautiful charts and maps.",
    image: weatherImage,
    technologies: ["JavaScript", "Chart.js", "API Integration", "CSS3"],
    category: "Frontend",
    featured: true
  },
  {
    id: 4,
    title: "Mobile Fitness App",
    description: "Cross-platform fitness tracking application",
    fullDescription: "A React Native application for tracking workouts, nutrition, and progress. Includes social features and personalized recommendations.",
    image: fitnessImage,
    technologies: ["React Native", "Redux", "Firebase", "Chart.js"],
    category: "Mobile",
    featured: false
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Modern portfolio with smooth animations",
    fullDescription: "A responsive portfolio website showcasing my work with smooth animations, dark mode, and optimized performance.",
    image: portfolioImage,
    technologies: ["React", "Framer Motion", "Material-UI", "EmailJS"],
    category: "Frontend",
    featured: true
  },
  {
    id: 6,
    title: "API Management System",
    description: "Backend system for API management and analytics",
    fullDescription: "A comprehensive API management system with rate limiting, analytics dashboard, and developer portal.",
    image: apiImage,
    technologies: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker"],
    category: "Backend",
    featured: false
  },
  {
    id: 7,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management",
    fullDescription: "A comprehensive dashboard for managing multiple social media accounts with analytics and scheduling features.",
    image: socialImage,
    technologies: ["Vue.js", "Node.js", "MySQL", "Chart.js"],
    category: "Full Stack",
    featured: false
  },
  {
    id: 8,
    title: "E-learning Platform",
    description: "Online learning platform with video streaming",
    fullDescription: "A modern e-learning platform with course management, video streaming, and student progress tracking.",
    image: elearningImage,
    technologies: ["React", "Django", "PostgreSQL", "AWS S3"],
    category: "Full Stack",
    featured: true
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("All");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const categories = ["All", ...new Set(projectsData.map(project => project.category))];
  
  const filteredProjects = filter === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <Box sx={{ py: 8, backgroundColor: "background.default", minHeight: "100vh" }}>
      <Container maxWidth="xl">
        {/* Header */}
        <Box textAlign="center" mb={6}>
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 700, 
              color: "text.primary", 
              mb: 2,
              fontSize: { xs: "2.5rem", md: "3.5rem" }
            }}
          >
            My Projects
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: "text.secondary", 
              maxWidth: "600px", 
              mx: "auto",
              fontSize: { xs: "1rem", md: "1.25rem" }
            }}
          >
            A collection of my recent work and personal projects
          </Typography>
        </Box>

        {/* Filter Chips */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 6, flexWrap: "wrap", gap: 1 }}>
          {categories.map((category) => (
            <Chip
              key={category}
              label={category}
              onClick={() => setFilter(category)}
              variant={filter === category ? "filled" : "outlined"}
              sx={{
                color: filter === category ? "background.default" : "primary.main",
                backgroundColor: filter === category ? "primary.main" : "transparent",
                borderColor: "primary.main",
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: filter === category ? "secondary.main" : "rgba(12,36,124,0.1)",
                }
              }}
            />
          ))}
        </Box>

        {/* Projects Grid - Centered with equal height cards */}
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Grid 
            container 
            spacing={3} 
            sx={{ 
              maxWidth: '1200px',
              justifyContent: { xs: 'center', sm: 'flex-start' }
            }}
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <Grid 
                  item 
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  key={project.id}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                    style={{ 
                      width: '100%', 
                      maxWidth: '280px',
                      height: '100%'
                    }}
                  >
                    <Card 
                      sx={{ 
                        backgroundColor: "background.paper",
                        backdropFilter: "blur(10px)",
                        border: "1px solid",
                        borderColor: "divider",
                        borderRadius: "16px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        height: "380px",
                        display: "flex",
                        flexDirection: "column",
                        width: '100%',
                        "&:hover": {
                          transform: "translateY(-8px)",
                          boxShadow: "0 20px 40px rgba(12,36,124,0.3)",
                          borderColor: "primary.main",
                        }
                      }}
                      onClick={() => setSelectedProject(project)}
                    >
                      {/* Featured Badge - Moved up */}
                      {project.featured && (
                        <Box sx={{ position: "absolute", top: 8, right: 8, zIndex: 2 }}>
                          <Chip 
                            label="Featured" 
                            size="small"
                            sx={{ 
                              backgroundColor: "secondary.main", 
                              color: "background.default",
                              fontWeight: "bold",
                              fontSize: "0.7rem"
                            }}
                          />
                        </Box>
                      )}

                      <CardMedia
                        component="img"
                        height="160"
                        image={project.image}
                        alt={project.title}
                        sx={{ 
                          borderTopLeftRadius: "16px", 
                          borderTopRightRadius: "16px",
                          objectFit: "cover"
                        }}
                      />
                      
                      <CardContent sx={{ 
                        p: 2.5, 
                        flexGrow: 1, 
                        display: "flex", 
                        flexDirection: "column",
                        height: '100%'
                      }}>
                        <Box sx={{ flexGrow: 1 }}>
                          <Typography 
                            variant="h6" 
                            sx={{ 
                              fontWeight: 600, 
                              color: "text.primary", 
                              mb: 1,
                              fontSize: "1rem",
                              lineHeight: 1.3,
                              minHeight: '40px',
                              display: 'flex',
                              alignItems: 'center'
                            }}
                          >
                            {project.title}
                          </Typography>
                          
                          <Typography 
                            variant="body2" 
                            sx={{ 
                              color: "text.secondary", 
                              mb: 2,
                              lineHeight: 1.4,
                              fontSize: '0.85rem',
                              minHeight: '80px',
                              display: 'flex',
                              alignItems: 'center'
                            }}
                          >
                            {project.description}
                          </Typography>

                          {/* Tech Stack */}
                          <Stack direction="row" spacing={0.5} flexWrap="wrap" gap={0.5}>
                            {project.technologies.slice(0, 4).map((tech) => (
                              <Chip
                                key={tech}
                                label={tech}
                                size="small"
                                variant="outlined"
                                sx={{
                                  color: "secondary.main",
                                  borderColor: "secondary.main",
                                  fontSize: "0.65rem",
                                  height: "22px"
                                }}
                              />
                            ))}
                            {project.technologies.length > 4 && (
                              <Chip
                                label={`+${project.technologies.length - 4}`}
                                size="small"
                                sx={{
                                  backgroundColor: "rgba(255,255,255,0.1)",
                                  color: "text.primary",
                                  fontSize: "0.65rem",
                                  height: "22px"
                                }}
                              />
                            )}
                          </Stack>
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </AnimatePresence>
          </Grid>
        </Box>

        {/* Project Detail Modal */}
        <Dialog
          open={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          maxWidth="lg"
          fullWidth
          fullScreen={isMobile}
          PaperProps={{
            sx: {
              backgroundColor: "background.default",
              backgroundImage: "none",
              borderRadius: isMobile ? 0 : "16px",
              overflow: 'hidden'
            }
          }}
        >
          {selectedProject && (
            <>
              <DialogContent sx={{ p: 0 }}>
                <Box sx={{ position: "relative" }}>
                  <IconButton
                    onClick={() => setSelectedProject(null)}
                    sx={{
                      position: "absolute",
                      top: 16,
                      right: 16,
                      zIndex: 3,
                      color: "text.primary",
                      backgroundColor: "rgba(0,0,0,0.5)",
                      "&:hover": {
                        backgroundColor: "rgba(0,0,0,0.7)",
                      }
                    }}
                  >
                    <CloseIcon />
                  </IconButton>

                  {/* Full image display without cropping */}
                  <Box sx={{ 
                    width: "100%", 
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "background.paper"
                  }}>
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title}
                      style={{ 
                        width: "100%",
                        height: "auto",
                        maxHeight: "70vh",
                        objectFit: "contain"
                      }}
                    />
                  </Box>

                  <Box sx={{ p: 4 }}>
                    <Typography variant="h4" sx={{ color: "text.primary", mb: 2, fontWeight: 700 }}>
                      {selectedProject.title}
                    </Typography>

                    <Typography variant="body1" sx={{ color: "text.secondary", mb: 3, lineHeight: 1.6 }}>
                      {selectedProject.fullDescription}
                    </Typography>

                    <Typography variant="h6" sx={{ color: "text.primary", mb: 2, fontWeight: 600 }}>
                      Technologies Used
                    </Typography>

                    <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                      {selectedProject.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          sx={{
                            color: "secondary.main",
                            borderColor: "secondary.main",
                            backgroundColor: "rgba(40,166,231,0.1)",
                          }}
                          variant="outlined"
                        />
                      ))}
                    </Stack>
                  </Box>
                </Box>
              </DialogContent>
            </>
          )}
        </Dialog>
      </Container>
    </Box>
  );
}