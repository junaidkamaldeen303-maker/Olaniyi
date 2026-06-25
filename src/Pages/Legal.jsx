import React from "react";
import { Box, Typography, Container, Divider } from "@mui/material";
import { Link } from "react-router-dom";

export default function Legal() {
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100vh",
        py: { xs: 6, md: 10 },
        transition: "background-color 0.3s ease",
      }}
    >
      <Container maxWidth="md">
        <Box mb={4}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: "text.primary",
              mb: 1,
              fontSize: { xs: "2rem", md: "2.5rem" },
              transition: "color 0.3s ease",
            }}
          >
            Legal Notice
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              transition: "color 0.3s ease",
            }}
          >
            Last updated: {new Date().toLocaleDateString()}
          </Typography>
          <Divider sx={{ mt: 2, borderColor: "divider" }} />
        </Box>

        <Box sx={{ color: "text.secondary", transition: "color 0.3s ease" }}>
          <Typography variant="h6" sx={{ color: "text.primary", mb: 2, fontWeight: 600 }}>
            Disclaimer
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
            This website is a personal portfolio showcasing my work, skills, and experience as a Software Engineer and Full Stack Developer.
          </Typography>

          <Typography variant="h6" sx={{ color: "text.primary", mb: 2, fontWeight: 600, mt: 4 }}>
            Intellectual Property
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
            All content on this website, including text, graphics, logos, icons, and project descriptions, is the property of Olaniyi Kamal unless otherwise stated. You may not reproduce, distribute, or use any content without explicit permission.
          </Typography>

          <Typography variant="h6" sx={{ color: "text.primary", mb: 2, fontWeight: 600, mt: 4 }}>
            Technologies & Tools
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
            This portfolio was built using the following technologies:
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
            {[
              "React",
              "Next.js",
              "JavaScript",
              "TypeScript",
              "Tailwind CSS",
              "Material UI",
              "Bootstrap",
              "Framer Motion",
              "Java",
              "Spring Boot",
              "Node.js",
              "NestJS",
              "Firebase",
              "Figma",
              "Adobe Photoshop",
              "Webflow",
              "WordPress",
              "Vercel",
              "Git",
              "PostgreSQL",
              "MongoDB",
            ].map((tech) => (
              <Box
                key={tech}
                sx={{
                  display: "inline-block",
                  px: 1.5,
                  py: 0.5,
                  backgroundColor: "rgba(100,32,243,0.08)",
                  color: "#6420F3",
                  borderRadius: "6px",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  border: "1px solid rgba(100,32,243,0.15)",
                }}
              >
                {tech}
              </Box>
            ))}
          </Box>

          <Typography variant="h6" sx={{ color: "text.primary", mb: 2, fontWeight: 600, mt: 4 }}>
            Project Credits
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
            All projects displayed on this portfolio are my original work unless otherwise credited. Some projects may use third-party libraries and tools, which are credited within their respective repositories or documentation.
          </Typography>

          <Typography variant="h6" sx={{ color: "text.primary", mb: 2, fontWeight: 600, mt: 4 }}>
            AI Tools & Assistance
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
            This portfolio incorporates AI-assisted development tools including:
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
            {[
              "Bolt.new",
              "Lovable",
              "Replit",
              "v0",
              "Cursor AI",
              "DeepSeek",
              "Claude",
            ].map((tool) => (
              <Box
                key={tool}
                sx={{
                  display: "inline-block",
                  px: 1.5,
                  py: 0.5,
                  backgroundColor: "rgba(244,114,182,0.08)",
                  color: "#F472B6",
                  borderRadius: "6px",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  border: "1px solid rgba(244,114,182,0.15)",
                }}
              >
                {tool}
              </Box>
            ))}
          </Box>

          <Typography variant="h6" sx={{ color: "text.primary", mb: 2, fontWeight: 600, mt: 4 }}>
            External Links
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
            This website may contain links to external websites. I am not responsible for the content, privacy policies, or practices of any external sites.
          </Typography>

          <Typography variant="h6" sx={{ color: "text.primary", mb: 2, fontWeight: 600, mt: 4 }}>
            Availability
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
            I make every effort to keep this website available and functioning properly. However, I cannot guarantee uninterrupted access and may occasionally need to perform maintenance.
          </Typography>

          <Typography variant="h6" sx={{ color: "text.primary", mb: 2, fontWeight: 600, mt: 4 }}>
            Contact
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
            For any legal inquiries or concerns, please contact me at:
            <br />
            <strong style={{ color: "#6420F3" }}>olaniyikam@gmail.com</strong>
          </Typography>

          <Box
            component={Link}
            to="/"
            sx={{
              display: "inline-block",
              mt: 4,
              color: "#6420F3",
              textDecoration: "none",
              fontWeight: 600,
              "&:hover": { textDecoration: "underline" },
            }}
          >
            ← Back to Home
          </Box>
        </Box>
      </Container>
    </Box>
  );
}