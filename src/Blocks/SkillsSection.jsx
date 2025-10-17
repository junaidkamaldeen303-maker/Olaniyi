import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SkillsSection() {

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundColor: "#000B20",
        color: "white",
        py: { xs: 10, md: 14 },
        px: { xs: 3, md: 14 },
        borderTop: "1px solid rgba(255,255,255,0.1)", // ✅ subtle line at top
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          textAlign: { xs: "center", md: "left" },
          maxWidth: "1300px",
          mx: "auto",
          mb: 8,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 1.5,
            fontSize: { xs: "1.8rem", md: "2.3rem" },
          }}
        >
          Building Digital Experiences
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontWeight: 400,
            color: "rgba(255,255,255,0.8)",
            maxWidth: "650px",
            fontSize: { xs: "1rem", md: "1.1rem" },
          }}
        >
          I specialize in creating stunning user interfaces and developing
          high-quality applications that stand out.
        </Typography>
      </Box>

      {/* Boxes Section */}
      <Grid
        container
        spacing={4}
        justifyContent="space-between"
        alignItems="stretch"
        sx={{
          maxWidth: "1300px",
          mx: "auto",
          mb: 6,
          flexWrap: { xs: "wrap", md: "nowrap" }, // ✅ stay side-by-side on desktop
        }}
      >
        {[
          {
            emoji: "💡",
            title: "What I Can Do",
            subtitle:
              "I can help develop solutions that will grow your business.",
            content: [
              "UI/UX Design",
              "Fullstack Development",
              "Mobile App Development",
              "Database Design",
              "API Integration",
            ],
          },
          {
            emoji: "🧰",
            title: "Tools I Use",
            subtitle:
              "I use the latest tools and technologies to build functional and scalable products.",
            sections: [
              {
                label: "Frontend:",
                items: "HTML/CSS, React, JavaScript, TypeScript...",
              },
              { label: "Backend:", items: "Node.js, Python, OAuth..." },
              { label: "Design:", items: "Figma, Framer, Photoshop..." },
            ],
          },
          {
            emoji: "🎨",
            title: "UI/UX Design",
            subtitle:
              "I'm a designer first, developer second. I can help design modern and engaging interfaces.",
            content: [
              "User-centered Design",
              "Modern & Clean UI",
              "Responsive Layouts",
              "Wireframe & Prototype",
            ],
          },
        ].map((box, index) => (
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "20px",
                p: { xs: 2, md: 2.5 },
                textAlign: "left",
                backdropFilter: "blur(8px)",
                width: "100%",
                maxWidth: "390px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
                },
              }}
            >
              {/* Header with purple emoji */}
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: 0.8,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <span style={{ color: "#6000FF", fontSize: "1.6rem" }}>
                  {box.emoji}
                </span>
                {box.title}
              </Typography>

              {/* Subheader */}
              <Typography
                variant="body2"
                sx={{
                  mb: 1,
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "0.88rem",
                }}
              >
                {box.subtitle}
              </Typography>

              {/* Content */}
              <Box sx={{ flexGrow: 1 }}>
                {box.content && (
                  <ul
                    style={{
                      paddingLeft: "1.1rem",
                      margin: 0,
                      lineHeight: 1.5,
                      listStyleType: "disc",
                      fontSize: "0.88rem",
                    }}
                  >
                    {box.content.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}

                {box.sections &&
                  box.sections.map((section, i) => (
                    <Box key={i} sx={{ mb: 0.3 }}>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 600, fontSize: "0.88rem" }}
                      >
                        {section.label}
                      </Typography>
                      <Typography variant="body2" sx={{ fontSize: "0.88rem" }}>
                        {section.items}
                      </Typography>
                    </Box>
                  ))}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Bottom Button - Aligned with Last Box */}
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "flex-end" },
          maxWidth: "1300px",
          mx: "auto",
          pr: { xs: 0, md: 0 }, // ✅ remove extra padding so it aligns with box grid
        }}
      >
   <Button
          variant="outlined"
          onClick={() => navigate('/projects')}
          sx={{
            borderColor: "#6000FF",
            color: "#6000FF",
            fontWeight: 600,
            textTransform: "none",
            fontSize: "0.9rem",
            borderRadius: "10px",
            px: 3,
            py: 0.8,
            "&:hover": {
              borderColor: "#7E3AFF",
              color: "#7E3AFF",
              backgroundColor: "rgba(126,58,255,0.08)",
              boxShadow: "0 0 10px rgba(126,58,255,0.4)",
            },
          }}
        >
          View Projects
        </Button>
      </Box>
    </Box>
  );
}
