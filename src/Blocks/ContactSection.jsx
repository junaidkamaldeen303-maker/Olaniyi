import React, { useRef } from "react";
import { Box, Typography, TextField, Button, Snackbar, Alert } from "@mui/material";
import backgroundImage from "../assets/yap.jpg";
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const formRef = useRef();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      'service_85w6uq9',
      'template_xpgcq4j',
      formRef.current,
      '6sH152jShzxL-WZpG'
    )
    .then(() => {
      setSuccess(true);
      setLoading(false);
      formRef.current.reset();
    })
    .catch(() => {
      setLoading(false);
    });
  };

  return (
    <Box sx={{ p: { xs: 2, md: 10 }, backgroundColor: "#070a2f" }}>
      <Box
        sx={{
          position: "relative",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "white",
          py: { xs: 10, md: 14 },
          px: { xs: 3, md: 10 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "90vh",
          borderRadius: "12px",
          border: "1px solid rgba(255,255,255,0.4)",
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to bottom right, rgba(7,10,47,0.85), rgba(7,10,47,0.7))",
            zIndex: 1,
            borderRadius: "12px",
          }}
        />

        {/* Content */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center", md: "center" },
            justifyContent: "space-between",
            gap: { xs: 6, md: 10 },
            maxWidth: "1100px",
            width: "100%",
          }}
        >
          {/* Left Text Section */}
          <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                color: "#B797EA",
                lineHeight: 1.2,
                fontSize: { xs: "2rem", md: "2.8rem" },
                mb: 0.5,
              }}
            >
              Bringing your ideas to life.
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                color: "#B797EA",
                lineHeight: 1.2,
                fontSize: { xs: "2rem", md: "2.4rem" },
                mb: 3,
              }}
            >
              Let's turn your vision into reality.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontWeight: 400,
                color: "rgba(255,255,255,0.85)",
                fontSize: { xs: "1rem", md: "1.1rem" },
                maxWidth: "480px",
              }}
            >
              Have a project in mind or just want to chat? Let's connect!
            </Typography>
          </Box>

          {/* Right Form Section */}
          <Box
            component="form"
            ref={formRef}
            onSubmit={handleSubmit}
            sx={{
              flex: 1,
              background: "rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(10px)",
              borderRadius: "16px",
              p: { xs: 2, md: 3 },
              display: "flex",
              flexDirection: "column",
              gap: 2.5,
              maxWidth: "380px",
              mx: { xs: "auto", md: 0 },
            }}
          >
            <TextField
              name="name"
              label="Full Name"
              variant="outlined"
              fullWidth
              InputLabelProps={{ style: { color: "rgba(255,255,255,0.7)" } }}
              InputProps={{
                style: {
                  color: "#fff",
                  borderRadius: "12px",
                  background: "rgba(255,255,255,0.08)",
                  fontSize: "0.9rem",
                },
              }}
            />

            <TextField
              name="email"
              label="Email Address"
              variant="outlined"
              fullWidth
              InputLabelProps={{ style: { color: "rgba(255,255,255,0.7)" } }}
              InputProps={{
                style: {
                  color: "#fff",
                  borderRadius: "12px",
                  background: "rgba(255,255,255,0.08)",
                  fontSize: "0.9rem",
                },
              }}
            />

            <TextField
              name="message"
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              InputLabelProps={{ style: { color: "rgba(255,255,255,0.7)" } }}
              InputProps={{
                style: {
                  color: "#fff",
                  borderRadius: "12px",
                  background: "rgba(255,255,255,0.08)",
                  fontSize: "0.9rem",
                },
              }}
            />

            {/* Send Button */}
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                type="submit"
                variant="outlined"
                disabled={loading}
                sx={{
                  borderColor: "#6000FF",
                  color: "#6000FF",
                  fontWeight: 600,
                  textTransform: "none",
                  fontSize: "0.9rem",
                  borderRadius: "10px",
                  px: 3,
                  py: 0.6,
                  "&:hover": {
                    borderColor: "#7E3AFF",
                    color: "#7E3AFF",
                    backgroundColor: "rgba(126,58,255,0.08)",
                  },
                }}
              >
                {loading ? 'Sending...' : 'Send'}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Snackbar open={success} autoHideDuration={6000} onClose={() => setSuccess(false)}>
        <Alert severity="success">Message sent successfully!</Alert>
      </Snackbar>
    </Box>
  );
}