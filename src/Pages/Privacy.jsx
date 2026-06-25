import React from "react";
import { Box, Typography, Container, Divider } from "@mui/material";
import { Link } from "react-router-dom";

export default function Privacy() {
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
            Privacy Policy
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
            Information I Collect
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
            When you visit my portfolio or contact me through the contact form, I may collect:
          </Typography>
          <ul style={{ paddingLeft: "20px", lineHeight: 2 }}>
            <li><Typography variant="body1">Your name</Typography></li>
            <li><Typography variant="body1">Your email address</Typography></li>
            <li><Typography variant="body1">Your message or inquiry</Typography></li>
          </ul>

          <Typography variant="h6" sx={{ color: "text.primary", mb: 2, fontWeight: 600, mt: 4 }}>
            How I Use Your Information
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
            I use the information you provide to:
          </Typography>
          <ul style={{ paddingLeft: "20px", lineHeight: 2 }}>
            <li><Typography variant="body1">Respond to your inquiries</Typography></li>
            <li><Typography variant="body1">Discuss potential projects or collaborations</Typography></li>
            <li><Typography variant="body1">Improve my services</Typography></li>
          </ul>

          <Typography variant="h6" sx={{ color: "text.primary", mb: 2, fontWeight: 600, mt: 4 }}>
            Data Security
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
            I take reasonable measures to protect your personal information from unauthorized access, disclosure, or alteration. However, no method of transmission over the internet is 100% secure.
          </Typography>

          <Typography variant="h6" sx={{ color: "text.primary", mb: 2, fontWeight: 600, mt: 4 }}>
            Third-Party Services
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
            This portfolio uses EmailJS to process contact form submissions. Your information is only used to send your message to me and is not stored or shared with any third parties.
          </Typography>

          <Typography variant="h6" sx={{ color: "text.primary", mb: 2, fontWeight: 600, mt: 4 }}>
            Your Rights
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
            You have the right to:
          </Typography>
          <ul style={{ paddingLeft: "20px", lineHeight: 2 }}>
            <li><Typography variant="body1">Access the personal information I hold about you</Typography></li>
            <li><Typography variant="body1">Request corrections to your personal information</Typography></li>
            <li><Typography variant="body1">Request deletion of your personal information</Typography></li>
          </ul>

          <Typography variant="h6" sx={{ color: "text.primary", mb: 2, fontWeight: 600, mt: 4 }}>
            Contact Me
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
            If you have any questions about this Privacy Policy, please contact me at:
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