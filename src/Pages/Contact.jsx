import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Stack,
  Alert,
  IconButton,
  Grid,
  Container,
  Card,
  Chip,
} from "@mui/material";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import SendIcon from "@mui/icons-material/Send";
import CodeIcon from "@mui/icons-material/Code";
import { useTheme } from "../themes/theme";

export default function Contact() {
  const { darkMode } = useTheme();
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [counters, setCounters] = useState({
    responseTime: 0,
    projects: 0,
    satisfaction: 0
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_85w6uq9",
        "template_xpgcq4j",
        form.current,
        "6sH152jShzxL-WZpG"
      )
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          setSuccess(false);
          setLoading(false);
        }
      );
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactStats = [
    { number: counters.responseTime, label: "Response Time", suffix: "h", target: 24 },
    { number: counters.projects, label: "Projects Delivered", suffix: "+", target: 15 },
    { number: counters.satisfaction, label: "Client Satisfaction", suffix: "%", target: 100 }
  ];

  const techStack = ["React", "Node.js", "TypeScript", "MongoDB", "AWS"];

  const socialLinks = [
    {
      icon: <LinkedInIcon />,
      label: "LinkedIn",
      url: "https://linkedin.com/in/yourprofile",
      color: "#0077b5"
    },
    {
      icon: <GitHubIcon />,
      label: "GitHub", 
      url: "https://github.com/junaidkamaldeen303-maker",
      color: "#6e5494"
    },
    {
      icon: <WhatsAppIcon />,
      label: "WhatsApp",
      url: "https://wa.me/2348124016354",
      color: "#25D366"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Count up animation
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const animateCounter = (key, target) => {
      let currentStep = 0;
      const stepValue = target / steps;

      const timer = setInterval(() => {
        currentStep++;
        const currentValue = Math.min(Math.floor(stepValue * currentStep), target);
        
        setCounters(prev => ({
          ...prev,
          [key]: currentValue
        }));

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    };

    setTimeout(() => animateCounter('responseTime', 24), 300);
    setTimeout(() => animateCounter('projects', 15), 600);
    setTimeout(() => animateCounter('satisfaction', 100), 900);
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "background.default",
        color: "text.primary",
        display: "flex",
        alignItems: "center",
        py: 8,
        position: "relative",
        overflow: "hidden",
        transition: "background-color 0.3s ease",
      }}
    >
      {/* Background Elements */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: "300px",
          height: "300px",
          background: `radial-gradient(circle, ${darkMode ? 'rgba(12,36,124,0.1)' : 'rgba(100,32,243,0.05)'} 0%, transparent 70%)`,
          borderRadius: "50%",
          transition: "background 0.3s ease",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "20%",
          left: "5%",
          width: "200px",
          height: "200px",
          background: `radial-gradient(circle, ${darkMode ? 'rgba(40,166,231,0.05)' : 'rgba(40,166,231,0.03)'} 0%, transparent 70%)`,
          borderRadius: "50%",
          transition: "background 0.3s ease",
        }}
      />

      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants}>
            <Box textAlign="center" mb={6}>
              <Chip
                icon={<CodeIcon />}
                label="LET'S CONNECT"
                sx={{
                  backgroundColor: darkMode ? "rgba(12,36,124,0.1)" : "rgba(100,32,243,0.08)",
                  color: "primary.main",
                  border: "1px solid",
                  borderColor: "primary.main",
                  fontWeight: 600,
                  mb: 3,
                  px: 2,
                  py: 1,
                  transition: "all 0.3s ease",
                }}
              />
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  color: "text.primary",
                  mb: 2,
                  fontSize: { xs: "2.5rem", md: "3rem" },
                  transition: "color 0.3s ease",
                }}
              >
                Ready to Build Something Amazing?
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "text.secondary",
                  maxWidth: "600px",
                  mx: "auto",
                  lineHeight: 1.6,
                  transition: "color 0.3s ease",
                }}
              >
                Let's discuss your next project and bring your ideas to life with cutting-edge technology
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={4} justifyContent="center" alignItems="stretch">
            {/* Left Panel - Contact Info & Stats */}
            <Grid item xs={12} lg={5}>
              <Stack spacing={3} sx={{ height: '100%' }}>
                {/* Contact Information */}
                <motion.div variants={itemVariants} style={{ height: '100%' }}>
                  <Card
                    sx={{
                      backgroundColor: "background.paper",
                      border: "1px solid",
                      borderColor: "divider",
                      borderRadius: "20px",
                      p: 2,
                      height: '100%',
                      transition: "all 0.3s ease",
                    }}
                  >
                    <Typography variant="h6" fontWeight={700} mb={2} color="text.primary">
                      Get In Touch
                    </Typography>
                    
                    <Stack spacing={1.5}>
                      {[
                        {
                          icon: <EmailIcon sx={{ color: "primary.main" }} />,
                          title: "Email",
                          value: "olaniyikam@gmail.com",
                        },
                        {
                          icon: <PhoneIcon sx={{ color: "secondary.main" }} />,
                          title: "Phone",
                          value: "+234 8124016354",
                        },
                        {
                          icon: <LocationOnIcon sx={{ color: "#FF6B6B" }} />,
                          title: "Location",
                          value: "Lagos, Nigeria",
                        }
                      ].map((item, index) => (
                        <Box
                          key={index}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1.5,
                            p: 1,
                            borderRadius: "8px",
                          }}
                        >
                          <Box sx={{ width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>
                            {item.icon}
                          </Box>
                          <Box>
                            <Typography variant="body2" sx={{ color: "text.secondary", fontSize: "0.8rem" }}>
                              {item.title}
                            </Typography>
                            <Typography variant="body1" sx={{ fontWeight: 600, fontSize: "0.85rem", color: "text.primary" }}>
                              {item.value}
                            </Typography>
                          </Box>
                        </Box>
                      ))}
                    </Stack>

                    {/* Tech Stack */}
                    <Box mt={2}>
                      <Typography variant="body1" sx={{ color: "text.primary", mb: 1, fontWeight: 600 }}>
                        Tech Stack
                      </Typography>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.6 }}>
                        {techStack.map((tech, index) => (
                          <Chip
                            key={index}
                            label={tech}
                            size="small"
                            sx={{
                              backgroundColor: darkMode ? "rgba(40,166,231,0.1)" : "rgba(100,32,243,0.08)",
                              color: "secondary.main",
                              border: "1px solid",
                              borderColor: "secondary.main",
                              fontWeight: 500,
                              fontSize: "0.7rem",
                              transition: "all 0.3s ease",
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  </Card>
                </motion.div>

                {/* Stats Cards */}
                <motion.div variants={itemVariants}>
                  <Grid container spacing={1.5}>
                    {contactStats.map((stat, index) => (
                      <Grid item xs={4} key={index}>
                        <Card
                          sx={{
                            backgroundColor: darkMode ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)",
                            border: `1px solid ${darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
                            borderRadius: "12px",
                            p: 1.5,
                            textAlign: "center",
                            transition: "all 0.3s ease",
                            "&:hover": {
                              borderColor: "primary.main",
                              transform: "translateY(-2px)",
                            }
                          }}
                        >
                          <Typography
                            variant="h5"
                            sx={{
                              fontWeight: 800,
                              color: "primary.main",
                              mb: 0.5,
                              fontSize: "1.5rem"
                            }}
                          >
                            {stat.number}{stat.suffix}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              color: "text.secondary",
                              fontWeight: 500,
                              fontSize: "0.7rem"
                            }}
                          >
                            {stat.label}
                          </Typography>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </motion.div>

                {/* Social Links */}
                <motion.div variants={itemVariants}>
                  <Card
                    sx={{
                      backgroundColor: "background.paper",
                      border: "1px solid",
                      borderColor: "divider",
                      borderRadius: "20px",
                      p: 2,
                      width: '100%',
                      transition: "all 0.3s ease",
                    }}
                  >
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: "text.primary",
                        mb: 1.5, 
                        fontWeight: 600,
                        textAlign: "center"
                      }}
                    >
                      Connect With Me
                    </Typography>
                    <Stack direction="row" spacing={1} justifyContent="center">
                      {socialLinks.map((social, index) => (
                        <IconButton
                          key={index}
                          component="a"
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            color: social.color,
                            backgroundColor: darkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
                            border: `1px solid ${darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
                            transition: "all 0.3s ease",
                            "&:hover": {
                              backgroundColor: social.color,
                              color: "white",
                              transform: "scale(1.1)",
                            },
                          }}
                        >
                          {social.icon}
                        </IconButton>
                      ))}
                    </Stack>
                  </Card>
                </motion.div>
              </Stack>
            </Grid>

            {/* Right Panel - Contact Form */}
            <Grid item xs={12} lg={7}>
              <motion.div variants={itemVariants}>
                <Card
                  sx={{
                    backgroundColor: "background.paper",
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: "20px",
                    p: { xs: 3, md: 4 },
                    boxShadow: darkMode ? "0 20px 40px rgba(0,0,0,0.25)" : "0 20px 40px rgba(0,0,0,0.05)",
                    height: "100%",
                    minHeight: '600px',
                    transition: "all 0.3s ease",
                  }}
                >
                  <Typography variant="h4" fontWeight={800} mb={1} color="text.primary">
                    Send Message
                  </Typography>
                  <Typography variant="body1" sx={{ color: "text.secondary", mb: 3, fontSize: "0.95rem" }}>
                    Fill out the form below and I'll get back to you within 24 hours
                  </Typography>

                  <AnimatePresence>
                    {success === true && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        <Alert 
                          severity="success" 
                          sx={{ 
                            mb: 3, 
                            borderRadius: "12px",
                            backgroundColor: "rgba(76, 175, 80, 0.1)",
                            color: "#4CAF50",
                            border: "1px solid #4CAF50"
                          }}
                        >
                          Message sent successfully! I'll get back to you soon.
                        </Alert>
                      </motion.div>
                    )}
                    {success === false && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        <Alert 
                          severity="error" 
                          sx={{ 
                            mb: 3, 
                            borderRadius: "12px",
                            backgroundColor: "rgba(244, 67, 54, 0.1)",
                            color: "#F44336",
                            border: "1px solid #F44336"
                          }}
                        >
                          Something went wrong. Please try again or contact me directly.
                        </Alert>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <form ref={form} onSubmit={sendEmail}>
                    <Stack spacing={2.5}>
                      <TextField
                        name="name"
                        label="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        variant="outlined"
                        required
                        fullWidth
                        InputLabelProps={{ style: { color: "text.secondary" } }}
                        InputProps={{ style: { color: "text.primary" } }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": { borderColor: "divider" },
                            "&:hover fieldset": { borderColor: "primary.main" },
                            "&.Mui-focused fieldset": {
                              borderColor: "primary.main",
                              boxShadow: "0 0 0 2px rgba(100,32,243,0.2)",
                            },
                          },
                        }}
                      />
                      <TextField
                        name="email"
                        label="Your Email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        variant="outlined"
                        required
                        fullWidth
                        InputLabelProps={{ style: { color: "text.secondary" } }}
                        InputProps={{ style: { color: "text.primary" } }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": { borderColor: "divider" },
                            "&:hover fieldset": { borderColor: "primary.main" },
                            "&.Mui-focused fieldset": {
                              borderColor: "primary.main",
                              boxShadow: "0 0 0 2px rgba(100,32,243,0.2)",
                            },
                          },
                        }}
                      />
                      <TextField
                        name="message"
                        label="Your Message"
                        multiline
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        variant="outlined"
                        required
                        fullWidth
                        InputLabelProps={{ style: { color: "text.secondary" } }}
                        InputProps={{ style: { color: "text.primary" } }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": { borderColor: "divider" },
                            "&:hover fieldset": { borderColor: "primary.main" },
                            "&.Mui-focused fieldset": {
                              borderColor: "primary.main",
                              boxShadow: "0 0 0 2px rgba(100,32,243,0.2)",
                            },
                          },
                        }}
                      />

                      <Button
                        type="submit"
                        variant="contained"
                        disabled={loading}
                        startIcon={loading ? null : <SendIcon />}
                        sx={{
                          mt: 1,
                          backgroundColor: "primary.main",
                          fontWeight: 700,
                          fontSize: "1rem",
                          py: 1.2,
                          borderRadius: "12px",
                          boxShadow: "0 8px 20px rgba(100,32,243,0.3)",
                          "&:hover": {
                            backgroundColor: "secondary.main",
                            boxShadow: "0 10px 25px rgba(100,32,243,0.5)",
                            transform: "translateY(-2px)",
                          },
                          "&:disabled": {
                            backgroundColor: "rgba(100,32,243,0.3)",
                            transform: "none",
                            boxShadow: "none",
                          }
                        }}
                      >
                        {loading ? "Sending..." : "Send Message"}
                      </Button>
                    </Stack>
                  </form>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}