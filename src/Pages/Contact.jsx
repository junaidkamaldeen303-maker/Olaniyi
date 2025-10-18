// src/Pages/Contact.jsx
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

export default function Contact() {
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
    const duration = 2000; // 2 seconds
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

    // Start animations with slight delays for staggered effect
    setTimeout(() => animateCounter('responseTime', 24), 300);
    setTimeout(() => animateCounter('projects', 15), 600);
    setTimeout(() => animateCounter('satisfaction', 100), 900);
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#000B20",
        background: "linear-gradient(135deg, #000B20 0%, #0A1126 50%, #1A1F35 100%)",
        color: "white",
        display: "flex",
        alignItems: "center",
        py: 8,
        position: "relative",
        overflow: "hidden",
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
          background: "radial-gradient(circle, rgba(96,0,255,0.1) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "20%",
          left: "5%",
          width: "200px",
          height: "200px",
          background: "radial-gradient(circle, rgba(0,255,255,0.05) 0%, transparent 70%)",
          borderRadius: "50%",
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
                  backgroundColor: "rgba(96,0,255,0.1)",
                  color: "#6000FF",
                  border: "1px solid #6000FF",
                  fontWeight: 600,
                  mb: 3,
                  px: 2,
                  py: 1
                }}
              />
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  background: "linear-gradient(45deg, #FFFFFF 30%, #A0A0A0 90%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mb: 2,
                  fontSize: { xs: "2.5rem", md: "3rem" }
                }}
              >
                Ready to Build Something Amazing?
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#A0A0A0",
                  maxWidth: "600px",
                  mx: "auto",
                  lineHeight: 1.6
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
                {/* Contact Information - Reduced & No Links */}
                <motion.div variants={itemVariants} style={{ height: '100%' }}>
                  <Card
                    sx={{
                      backgroundColor: "rgba(255,255,255,0.03)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "20px",
                      p: 2,
                      height: '100%'
                    }}
                  >
                    <Typography variant="h6" fontWeight={700} mb={2}>
                      Get In Touch
                    </Typography>
                    
                    <Stack spacing={1.5}>
                      {[
                        {
                          icon: <EmailIcon sx={{ color: "#6000FF" }} />,
                          title: "Email",
                          value: "olaniyikam@gmail.com",
                        },
                        {
                          icon: <PhoneIcon sx={{ color: "#00FFFF" }} />,
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
                            <Typography variant="body2" sx={{ color: "#A0A0A0", fontSize: "0.8rem" }}>
                              {item.title}
                            </Typography>
                            <Typography variant="body1" sx={{ fontWeight: 600, fontSize: "0.85rem" }}>
                              {item.value}
                            </Typography>
                          </Box>
                        </Box>
                      ))}
                    </Stack>

                    {/* Tech Stack */}
                    <Box mt={2}>
                      <Typography variant="body1" sx={{ color: "white", mb: 1, fontWeight: 600 }}>
                        Tech Stack
                      </Typography>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.6 }}>
                        {techStack.map((tech, index) => (
                          <Chip
                            key={index}
                            label={tech}
                            size="small"
                            sx={{
                              backgroundColor: "rgba(0,255,255,0.1)",
                              color: "#00FFFF",
                              border: "1px solid #00FFFF",
                              fontWeight: 500,
                              fontSize: "0.7rem"
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
                            backgroundColor: "rgba(255,255,255,0.02)",
                            border: "1px solid rgba(255,255,255,0.05)",
                            borderRadius: "12px",
                            p: 1.5,
                            textAlign: "center",
                            transition: "all 0.3s ease",
                            "&:hover": {
                              borderColor: "#6000FF",
                              transform: "translateY(-2px)",
                            }
                          }}
                        >
                          <Typography
                            variant="h5"
                            sx={{
                              fontWeight: 800,
                              color: "#6000FF",
                              mb: 0.5,
                              fontSize: "1.5rem"
                            }}
                          >
                            {stat.number}{stat.suffix}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              color: "#A0A0A0",
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

                {/* Social Links - Text back to white */}
                <motion.div variants={itemVariants}>
                  <Card
                    sx={{
                      backgroundColor: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "20px",
                      p: 2,
                      width: '100%'
                    }}
                  >
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: "white",
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
                            backgroundColor: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.1)",
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
                    backgroundColor: "rgba(255,255,255,0.03)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "20px",
                    p: { xs: 3, md: 4 },
                    boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
                    height: "100%",
                    minHeight: '600px'
                  }}
                >
                  <Typography variant="h4" fontWeight={800} mb={1}>
                    Send Message
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#A0A0A0", mb: 3, fontSize: "0.95rem" }}>
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
                        InputLabelProps={{ style: { color: "#A0A0A0" } }}
                        InputProps={{ style: { color: "white" } }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": { borderColor: "rgba(255,255,255,0.2)" },
                            "&:hover fieldset": { borderColor: "#6000FF" },
                            "&.Mui-focused fieldset": {
                              borderColor: "#6000FF",
                              boxShadow: "0 0 0 2px rgba(96,0,255,0.2)",
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
                        InputLabelProps={{ style: { color: "#A0A0A0" } }}
                        InputProps={{ style: { color: "white" } }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": { borderColor: "rgba(255,255,255,0.2)" },
                            "&:hover fieldset": { borderColor: "#6000FF" },
                            "&.Mui-focused fieldset": {
                              borderColor: "#6000FF",
                              boxShadow: "0 0 0 2px rgba(96,0,255,0.2)",
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
                        InputLabelProps={{ style: { color: "#A0A0A0" } }}
                        InputProps={{ style: { color: "white" } }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": { borderColor: "rgba(255,255,255,0.2)" },
                            "&:hover fieldset": { borderColor: "#6000FF" },
                            "&.Mui-focused fieldset": {
                              borderColor: "#6000FF",
                              boxShadow: "0 0 0 2px rgba(96,0,255,0.2)",
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
                          backgroundColor: "#6000FF",
                          background: "linear-gradient(45deg, #6000FF 0%, #7E3AFF 100%)",
                          fontWeight: 700,
                          fontSize: "1rem",
                          py: 1.2,
                          borderRadius: "12px",
                          boxShadow: "0 8px 20px rgba(96,0,255,0.3)",
                          "&:hover": {
                            background: "linear-gradient(45deg, #4B00CC 0%, #6B2AFF 100%)",
                            boxShadow: "0 10px 25px rgba(96,0,255,0.5)",
                            transform: "translateY(-2px)",
                          },
                          "&:disabled": {
                            background: "rgba(96,0,255,0.3)",
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