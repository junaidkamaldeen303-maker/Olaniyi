// src/Pages/About.jsx
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
import profileImage from "../assets/profile.png";

export default function About() {
  const [activeMilestone, setActiveMilestone] = useState(0);

  const timelineData = [
    {
      year: "2020-2022",
      title: "The Beginning",
      subtitle: "Computer Science Degree",
      icon: <SchoolIcon />,
      description: "Started my journey in computer science, learning fundamentals of programming, algorithms, and data structures.",
      skills: ["JavaScript", "HTML/CSS", "Wordpress", "Java"],
    },
    {
      year: "2022-2023", 
      title: "First Professional Role",
      subtitle: "Junior Frontend Developer",
      icon: <WorkIcon />,
      description: "Landed my first professional role as a frontend developer. Worked on responsive web design and built production applications.",
      skills: ["React", "TypeScript", "SASS", "Git"],
    },
    {
      year: "2023-2024",
      title: "Full Stack Transition", 
      subtitle: "Full Stack Developer",
      icon: <CodeIcon />,
      description: "Expanded into backend development, working with Node.js, databases, and APIs. Led development of full-stack applications.",
      skills: ["Node.js", "Express", "MongoDB", "REST APIs"],
    },
    {
      year: "2024-2025",
      title: "Advanced Projects",
      subtitle: "Senior Developer & Team Lead", 
      icon: <RocketLaunchIcon />,
      description: "Took on leadership roles, mentoring junior developers and architecting complex systems.",
      skills: ["Team Leadership", "System Architecture", "AWS", "Docker"],
    },
    {
      year: "2025-Present",
      title: "Continuous Growth",
      subtitle: "Full Stack Specialist",
      icon: <EmojiEventsIcon />,
      description: "Currently focused on building innovative digital products and exploring new technologies.",
      skills: ["Next.js", "GraphQL", "Microservices", "CI/CD"],
    }
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: "#000B20", minHeight: "100vh" }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box textAlign="center" mb={8}>
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 700, 
              color: "white", 
              mb: 2,
              fontSize: { xs: "2.5rem", md: "3rem" }
            }}
          >
            My Journey
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: "#A0A0A0", 
              maxWidth: "600px", 
              mx: "auto",
            }}
          >
            From learning to code to crafting digital experiences
          </Typography>
        </Box>

        {/* Profile Summary */}
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center", gap: 4, mb: 8, p: 4, backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "16px" }}>
          <Box
            sx={{
              width: { xs: 120, md: 150 },
              height: { xs: 120, md: 150 },
              borderRadius: "50%",
              backgroundColor: "#6000FF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "3px solid #6000FF",
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
            <Typography variant="h4" sx={{ color: "white", fontWeight: 700, mb: 1 }}>
              Olaniyi Kamal
            </Typography>
            <Typography variant="h6" sx={{ color: "#6000FF", fontWeight: 600, mb: 2 }}>
              Full Stack Developer
            </Typography>
            <Typography variant="body1" sx={{ color: "#A0A0A0", lineHeight: 1.6 }}>
              With over 3 years of experience in web development, I've evolved from writing 
              my first lines of code to architecting complex digital solutions.
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
                  backgroundColor: "#6000FF",
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
                      backgroundColor: activeMilestone === index ? "rgba(96,0,255,0.2)" : "transparent",
                      border: activeMilestone === index ? "1px solid #6000FF" : "1px solid transparent",
                      "&:hover": {
                        backgroundColor: "rgba(96,0,255,0.1)",
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
                        backgroundColor: activeMilestone === index ? "#6000FF" : "rgba(96,0,255,0.3)",
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
                          color: "#6000FF", 
                          fontWeight: 600,
                          fontSize: "0.7rem",
                          display: "block"
                        }}
                      >
                        {milestone.year}
                      </Typography>
                      <Typography variant="body1" sx={{ color: "white", fontWeight: 600, fontSize: "0.9rem" }}>
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
              backgroundColor: "rgba(255,255,255,0.05)", 
              borderRadius: "16px", 
              border: "1px solid rgba(255,255,255,0.1)",
              height: "100%"
            }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
                <Box sx={{ color: "#6000FF" }}>
                  {timelineData[activeMilestone].icon}
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ color: "white", fontWeight: 700 }}>
                    {timelineData[activeMilestone].title}
                  </Typography>
                  <Typography variant="h6" sx={{ color: "#6000FF", fontWeight: 600 }}>
                    {timelineData[activeMilestone].subtitle}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#A0A0A0" }}>
                    {timelineData[activeMilestone].year}
                  </Typography>
                </Box>
              </Box>

              <Typography variant="body1" sx={{ color: "#A0A0A0", lineHeight: 1.7, mb: 4 }}>
                {timelineData[activeMilestone].description}
              </Typography>

              <Typography variant="h6" sx={{ color: "white", mb: 2, fontWeight: 600 }}>
                Key Skills & Technologies
              </Typography>
              
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {timelineData[activeMilestone].skills.map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill}
                    size="small"
                    sx={{
                      backgroundColor: "rgba(0,255,255,0.1)",
                      color: "#00FFFF",
                      border: "1px solid #00FFFF",
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