import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Chip,
  Stack,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import profileImage from "../assets/Comic.png";

export default function About() {
  const [activeMilestone, setActiveMilestone] = useState(0);

  const timelineData = [
    {
      year: "2020-2022",
      title: "The Beginning",
      subtitle: "Computer Science Degree",
      icon: <SchoolIcon />,
      description: "Started my journey in computer science, learning fundamentals of programming, algorithms, and data structures.",
      skills: ["JavaScript", "HTML/CSS", "WordPress", "Java", "Git"],
    },
    {
      year: "2022-2023", 
      title: "First Professional Role",
      subtitle: "Junior Frontend Developer",
      icon: <WorkIcon />,
      description: "Landed my first professional role as a frontend developer. Worked on responsive web design and built production applications.",
      skills: ["React", "TypeScript", "Tailwind CSS", "Material UI", "Framer Motion"],
    },
    {
      year: "2023-2024",
      title: "Full Stack Transition", 
      subtitle: "Full Stack Developer",
      icon: <CodeIcon />,
      description: "Expanded into backend development, working with Node.js, databases, and APIs. Led development of full-stack applications.",
      skills: ["Node.js", "Express", "MongoDB", "REST APIs", "Firebase", "PostgreSQL"],
    },
    {
      year: "2024-2025",
      title: "Advanced Projects",
      subtitle: "Senior Developer & Team Lead", 
      icon: <RocketLaunchIcon />,
      description: "Took on leadership roles, mentoring junior developers and architecting complex systems.",
      skills: ["Java", "Spring Boot", "NestJS", "System Architecture", "AWS", "Docker"],
    },
    {
      year: "2025-Present",
      title: "Continuous Growth",
      subtitle: "Full Stack Specialist",
      icon: <EmojiEventsIcon />,
      description: "Currently focused on building innovative digital products, exploring AI-assisted development, and expanding my expertise in modern web technologies.",
      skills: ["Next.js", "GraphQL", "Microservices", "CI/CD", "Bolt.new", "Cursor AI", "Three.js"],
    }
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: "background.default", minHeight: "100vh" }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box textAlign="center" mb={8}>
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 700, 
              color: "text.primary", 
              mb: 2,
              fontSize: { xs: "2.5rem", md: "3rem" }
            }}
          >
            My Journey
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: "text.secondary", 
              maxWidth: "600px", 
              mx: "auto",
            }}
          >
            From learning to code to crafting digital experiences
          </Typography>
        </Box>

        {/* Profile Summary - Updated to match hero section style */}
        <Box sx={{ 
          display: "flex", 
          flexDirection: { xs: "column", md: "row" }, 
          alignItems: "center", 
          gap: 4, 
          mb: 8, 
          p: 4, 
          backgroundColor: "background.paper", 
          borderRadius: "16px",
          border: "1px solid",
          borderColor: "divider",
        }}>
          {/* Avatar with Glassmorphism - Matches Hero Section */}
          <Box
            sx={{
              position: "relative",
              width: { xs: 140, md: 170 },
              height: { xs: 140, md: 170 },
              borderRadius: "50%",
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "3px solid rgba(255,255,255,0.6)",
              boxShadow: "0 0 40px rgba(100,32,243,0.15), inset 0 0 40px rgba(255,255,255,0.05)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "8px",
              "&::before": {
                content: '""',
                position: "absolute",
                inset: "-6px",
                borderRadius: "50%",
                padding: "2px",
                background: "linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.2))",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                pointerEvents: "none",
              },
            }}
          >
            <Box
              component="img"
              src={profileImage}
              alt="Olaniyi Kamal"
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </Box>
          <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
            <Typography variant="h4" sx={{ color: "text.primary", fontWeight: 700, mb: 1 }}>
              Olaniyi Kamal
            </Typography>
            <Typography variant="h6" sx={{ color: "primary.main", fontWeight: 600, mb: 2 }}>
              Software Engineer
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.6 }}>
              With over 3+ years of experience in web development, I've evolved from writing 
              my first lines of code to architecting complex digital solutions. I specialize in 
              full-stack development with React, Node.js, Java, and modern AI-assisted tools.
            </Typography>
          </Box>
        </Box>

        {/* Timeline Section */}
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 4 }}>
          {/* Timeline Navigation */}
          <Box sx={{ width: { xs: "100%", md: "35%" } }}>
            <Box sx={{ position: "relative" }}>
              {/* Vertical Line - CENTERED ON ICONS */}
              <Box
                sx={{
                  position: "absolute",
                  left: 40,
                  top: 0,
                  bottom: 0,
                  width: "2px",
                  backgroundColor: "primary.main",
                }}
              />
              
              {/* Milestone Markers */}
              <Stack spacing={2}>
                {timelineData.map((milestone, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      p: 2,
                      borderRadius: "12px",
                      cursor: "pointer",
                      backgroundColor: activeMilestone === index ? "rgba(12,36,124,0.2)" : "transparent",
                      border: activeMilestone === index ? "1px solid" : "1px solid transparent",
                      borderColor: activeMilestone === index ? "primary.main" : "transparent",
                      "&:hover": {
                        backgroundColor: "rgba(12,36,124,0.1)",
                      }
                    }}
                    onClick={() => setActiveMilestone(index)}
                  >
                    {/* Timeline Dot */}
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: activeMilestone === index ? "primary.main" : "rgba(12,36,124,0.3)",
                        color: "white",
                        zIndex: 2,
                        flexShrink: 0,
                      }}
                    >
                      {milestone.icon}
                    </Box>

                    {/* Milestone Info */}
                    <Box sx={{ flex: 1 }}>
                      <Typography 
                        variant="caption" 
                        sx={{ 
                          color: "primary.main", 
                          fontWeight: 600,
                          fontSize: "0.7rem",
                          display: "block"
                        }}
                      >
                        {milestone.year}
                      </Typography>
                      <Typography variant="body1" sx={{ color: "text.primary", fontWeight: 600, fontSize: "0.9rem" }}>
                        {milestone.title}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Box>

          {/* Content Display */}
          <Box sx={{ width: { xs: "100%", md: "65%" } }}>
            <Box sx={{ 
              p: 4, 
              backgroundColor: "background.paper", 
              borderRadius: "16px", 
              border: "1px solid",
              borderColor: "divider",
              height: "100%"
            }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
                <Box sx={{ color: "primary.main" }}>
                  {timelineData[activeMilestone].icon}
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ color: "text.primary", fontWeight: 700 }}>
                    {timelineData[activeMilestone].title}
                  </Typography>
                  <Typography variant="h6" sx={{ color: "primary.main", fontWeight: 600 }}>
                    {timelineData[activeMilestone].subtitle}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {timelineData[activeMilestone].year}
                  </Typography>
                </Box>
              </Box>

              <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.7, mb: 4 }}>
                {timelineData[activeMilestone].description}
              </Typography>

              <Typography variant="h6" sx={{ color: "text.primary", mb: 2, fontWeight: 600 }}>
                Key Skills & Technologies
              </Typography>
              
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {timelineData[activeMilestone].skills.map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill}
                    size="small"
                    sx={{
                      backgroundColor: "rgba(40,166,231,0.1)",
                      color: "secondary.main",
                      border: "1px solid",
                      borderColor: "secondary.main",
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}