import React, { useRef } from "react";
import {
  Box,
  Typography,
  Chip,
  Card,
} from "@mui/material";
import { motion } from "framer-motion";
import { useTheme as useCustomTheme } from "../themes/theme";
import Marquee from "react-fast-marquee";
import {
  Code,
  Storage,
  AutoAwesome,
  Palette,
} from "@mui/icons-material";

// Import tech stack logos
import gitLogo from "../assets/git.png";
import githubLogo from "../assets/github.png";
import reactLogo from "../assets/reactjs.svg";
import nextjsLogo from "../assets/nextjs.png";
import typescriptLogo from "../assets/typescript.png";
import tailwindLogo from "../assets/tailwindcss.png";
import framerLogo from "../assets/framer.png";
import threejsLogo from "../assets/threejs.png";
import vercelLogo from "../assets/Vercel.png";
import firebaseLogo from "../assets/firebase.png";
import javaLogo from "../assets/java.png";
import springbootLogo from "../assets/springboot.png";
import nodejsLogo from "../assets/nodejs.svg";
import mongodbLogo from "../assets/mongodb.png";
import figmaLogo from "../assets/figma.svg";
import photoshopLogo from "../assets/Adobe Photoshop.png";
import bootstrapLogo from "../assets/bootstrap.svg";
import javascriptLogo from "../assets/javascript.svg";
import webflowLogo from "../assets/webflow.png";
import wixLogo from "../assets/Wix Studio.png";
import wordpressLogo from "../assets/wordpress.png";

const skillsData = [
  {
    id: "frontend",
    title: "Frontend",
    icon: <Code />,
    accentColor: "#8B5CF6",
    description: "Building responsive and interactive web interfaces using modern frontend frameworks, animation libraries, and scalable component architectures.",
    technologies: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Material UI", "Bootstrap", "Framer Motion"],
  },
  {
    id: "backend",
    title: "Backend",
    icon: <Storage />,
    accentColor: "#22D3EE",
    description: "Designing secure, scalable backend systems, RESTful APIs, authentication services, databases, and cloud-powered infrastructure.",
    technologies: ["Java", "Spring Boot", "Node.js", "NestJS", "REST APIs", "Authentication", "Firebase"],
  },
  {
    id: "vibeCoding",
    title: "Vibe Coding",
    icon: <AutoAwesome />,
    accentColor: "#F472B6",
    description: "Accelerating software delivery using AI-assisted development platforms for rapid prototyping, interface generation, debugging, and full-stack application development.",
    technologies: ["Bolt.new", "Lovable", "Replit", "v0", "Cursor AI", "DeepSeek", "Claude"],
  },
  {
    id: "websiteDesign",
    title: "Website Design",
    icon: <Palette />,
    accentColor: "#FBBF24",
    description: "Crafting visually stunning and user-centric website designs that blend creativity with functionality for memorable digital experiences.",
    technologies: ["Figma", "Framer", "Three.js", "Webflow", "Wix Studio", "WordPress", "Adobe Photoshop"],
  },
];

// Tech stack logos for carousel
const techLogos = [
  { name: "Git", logo: gitLogo },
  { name: "GitHub", logo: githubLogo },
  { name: "React", logo: reactLogo },
  { name: "Next.js", logo: nextjsLogo },
  { name: "JavaScript", logo: javascriptLogo },
  { name: "TypeScript", logo: typescriptLogo },
  { name: "Tailwind CSS", logo: tailwindLogo },
  { name: "Bootstrap", logo: bootstrapLogo },
  { name: "Framer Motion", logo: framerLogo },
  { name: "Three.js", logo: threejsLogo },
  { name: "Vercel", logo: vercelLogo },
  { name: "Firebase", logo: firebaseLogo },
  { name: "Java", logo: javaLogo },
  { name: "Spring Boot", logo: springbootLogo },
  { name: "Node.js", logo: nodejsLogo },
  { name: "MongoDB", logo: mongodbLogo },
  { name: "Figma", logo: figmaLogo },
  { name: "Webflow", logo: webflowLogo },
  { name: "Wix Studio", logo: wixLogo },
  { name: "WordPress", logo: wordpressLogo },
  { name: "Adobe Photoshop", logo: photoshopLogo },
];

export default function SkillsSection() {
  const { darkMode } = useCustomTheme();
  const sectionRef = useRef(null);

  const colors = {
    background: darkMode ? "#000000" : "#FFFFFF",
    cardBg: darkMode ? "rgba(18,18,30,0.9)" : "rgba(255,255,255,0.9)",
    cardBorder: darkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)",
    primaryText: darkMode ? "#FFFFFF" : "#0A1022",
    secondaryText: darkMode ? "rgba(255,255,255,0.60)" : "rgba(0,0,0,0.55)",
    tertiaryText: darkMode ? "rgba(255,255,255,0.85)" : "rgba(0,0,0,0.85)",
    badgeBg: darkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
    badgeBorder: darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
    badgeText: darkMode ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.6)",
    techBadgeBg: darkMode ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)",
    techBadgeBorder: darkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)",
    skillBadgeBg: darkMode ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)",
    skillBadgeBorder: darkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)",
    glowColor: darkMode ? "rgba(74,155,255,0.06)" : "rgba(74,155,255,0.03)",
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: i * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  const techStripVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.3,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <Box
      ref={sectionRef}
      sx={{
        position: "relative",
        width: "100%",
        backgroundColor: colors.background,
        py: { xs: "60px", sm: "80px", md: "120px", lg: "140px" },
        px: { xs: 2, sm: 5, md: 8, lg: 10 },
        overflow: "hidden",
        transition: "background-color 0.3s ease",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background Effects */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: "400px",
          height: "400px",
          background: `radial-gradient(circle, ${colors.glowColor} 0%, transparent 70%)`,
          filter: "blur(80px)",
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
            linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          pointerEvents: "none",
          opacity: 0.3,
        }}
      />

      {/* Main Content */}
      <Box
        sx={{
          maxWidth: "1440px",
          width: "100%",
          position: "relative",
          zIndex: 2,
          mx: "auto",
        }}
      >
        {/* Left Aligned Header Content */}
        <Box sx={{ mb: { xs: "40px", sm: "50px", md: "60px" } }}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            style={{ marginBottom: "20px" }}
          >
            <Box
              sx={{
                display: "inline-block",
                backgroundColor: colors.badgeBg,
                border: `1px solid ${colors.badgeBorder}`,
                borderRadius: "999px",
                padding: "8px 18px",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: colors.badgeText,
                }}
              >
                SKILLS
              </Typography>
            </Box>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            style={{ marginBottom: "12px" }}
          >
            <Typography
              variant="h1"
              sx={{
                fontFamily: "'Playfair Display', 'Cormorant Garamond', serif",
                fontSize: { xs: "2.5rem", sm: "3.2rem", md: "4rem", lg: "5rem", xl: "5.5rem" },
                fontWeight: 600,
                letterSpacing: "-1px",
                color: colors.primaryText,
                lineHeight: 1.1,
                transition: "color 0.3s ease",
                textAlign: "left",
              }}
            >
              My Technical Skills<span style={{ color: "#4A9BFF" }}>.</span>
            </Typography>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Typography
              variant="body1"
              sx={{
                maxWidth: "700px",
                fontSize: { xs: "16px", sm: "17px", md: "18px" },
                fontWeight: 400,
                lineHeight: 1.8,
                color: colors.secondaryText,
                transition: "color 0.3s ease",
                textAlign: "left",
              }}
            >
              I build complete digital products—from intuitive user interfaces and scalable backend systems to AI-powered workflows, cloud deployment, and modern development automation.
            </Typography>
          </motion.div>
        </Box>

        {/* Technology Showcase Marquee - No Pause on Hover */}
        <motion.div
          variants={techStripVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{
            marginBottom: { xs: "40px", sm: "50px", md: "60px" },
            width: "100%",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              width: "100%",
              py: "8px",
            }}
          >
            <Marquee
              gradient={true}
              gradientColor={darkMode ? [0, 0, 0] : [255, 255, 255]}
              speed={50}
              pauseOnHover={false}
              loop={0}
            >
              {techLogos.map((tech, index) => (
                <Box
                  key={`${tech.name}-${index}`}
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "14px 24px",
                    marginRight: "16px",
                    backgroundColor: colors.techBadgeBg,
                    border: `1px solid ${colors.techBadgeBorder}`,
                    borderRadius: "16px",
                    cursor: "default",
                    whiteSpace: "nowrap",
                  }}
                >
                  <Box
                    component="img"
                    src={tech.logo}
                    alt={tech.name}
                    sx={{
                      width: "28px",
                      height: "28px",
                      objectFit: "contain",
                      filter: darkMode 
                        ? "brightness(1) drop-shadow(0 0 2px rgba(255,255,255,0.1))" 
                        : "brightness(0.9) drop-shadow(0 0 2px rgba(0,0,0,0.05))",
                      ...(tech.name === "GitHub" && {
                        filter: darkMode ? "brightness(0) invert(1)" : "brightness(1)",
                      }),
                      ...(tech.name === "Vercel" && {
                        filter: darkMode ? "brightness(0) invert(1)" : "brightness(1)",
                      }),
                      ...(tech.name === "Three.js" && {
                        filter: darkMode ? "brightness(1)" : "brightness(0.8)",
                      }),
                      ...(tech.name === "Framer Motion" && {
                        filter: darkMode ? "brightness(1)" : "brightness(0.8)",
                      }),
                      ...(tech.name === "Bootstrap" && {
                        filter: darkMode ? "brightness(1)" : "brightness(0.8)",
                      }),
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 500,
                      color: colors.tertiaryText,
                      transition: "color 0.3s ease",
                    }}
                  >
                    {tech.name}
                  </Typography>
                </Box>
              ))}
            </Marquee>
          </Box>
        </motion.div>

        {/* Skills Grid - Simple flexbox 2x2 */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: { xs: 2.5, sm: 3, md: 3, lg: 4 },
            maxWidth: "1440px",
            mx: "auto",
          }}
        >
          {skillsData.map((skill, index) => (
            <Box
              key={skill.id}
              sx={{
                flex: { xs: "0 0 100%", sm: "0 0 calc(50% - 16px)", md: "0 0 calc(50% - 16px)", lg: "0 0 calc(50% - 20px)" },
                maxWidth: { xs: "100%", sm: "calc(50% - 16px)", md: "calc(50% - 16px)", lg: "calc(50% - 20px)" },
                display: "flex",
                alignItems: "stretch",
              }}
            >
              <motion.div
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <Card
                  sx={{
                    height: "100%",
                    minHeight: {
                      xs: "300px",
                      sm: "320px",
                      md: "340px",
                      lg: "360px",
                      xl: "380px",
                    },
                    maxHeight: {
                      xs: "auto",
                      sm: "auto",
                      md: "auto",
                      lg: "420px",
                    },
                    backgroundColor: colors.cardBg,
                    border: `1px solid ${colors.cardBorder}`,
                    borderRadius: "24px",
                    padding: {
                      xs: "24px",
                      sm: "28px",
                      md: "28px",
                      lg: "32px",
                    },
                    boxShadow: darkMode
                      ? "0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.02)"
                      : "0 4px 20px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.8)",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.3s ease",
                  }}
                >
                  {/* Category Header - Icon + Title */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      mb: "20px",
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: "44px", sm: "48px", md: "48px", lg: "48px" },
                        height: { xs: "44px", sm: "48px", md: "48px", lg: "48px" },
                        borderRadius: "14px",
                        backgroundColor: `${skill.accentColor}15`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: skill.accentColor,
                        flexShrink: 0,
                      }}
                    >
                      {skill.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontSize: {
                          xs: "1.1rem",
                          sm: "1.2rem",
                          md: "1.3rem",
                          lg: "1.5rem",
                        },
                        fontWeight: 700,
                        color: colors.primaryText,
                      }}
                    >
                      {skill.title}
                    </Typography>
                  </Box>

                  {/* Description */}
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: {
                        xs: "13px",
                        sm: "13px",
                        md: "14px",
                        lg: "15px",
                      },
                      lineHeight: 1.6,
                      color: colors.secondaryText,
                      mb: "24px",
                      flex: 1,
                      maxWidth: {
                        xs: "100%",
                        sm: "95%",
                        md: "95%",
                        lg: "90%",
                      },
                    }}
                  >
                    {skill.description}
                  </Typography>

                  {/* Technology Badges */}
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "10px",
                      mt: "auto",
                    }}
                  >
                    {skill.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        sx={{
                          height: "auto",
                          padding: "6px 14px",
                          backgroundColor: colors.skillBadgeBg,
                          border: `1px solid ${colors.skillBadgeBorder}`,
                          borderRadius: "8px",
                          cursor: "default",
                          "& .MuiChip-label": {
                            fontSize: {
                              xs: "12px",
                              sm: "12px",
                              md: "13px",
                              lg: "13px",
                            },
                            fontWeight: 500,
                            padding: 0,
                            color: colors.tertiaryText,
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Card>
              </motion.div>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}