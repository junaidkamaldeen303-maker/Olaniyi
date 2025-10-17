// src/Components/ContactButton.jsx
import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function ContactButton({ text = "Contact Me" }) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // fade-up from below
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Button
        variant="contained"
        sx={{
          mt: 3,
          backgroundColor: "#6000FF",
          color: "#fff",
          fontWeight: "bold",
          px: 4,
          py: 1.5,
          borderRadius: "12px",
          textTransform: "none",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            backgroundColor: "#4B00CC",
            boxShadow: "0 0 15px rgba(96,0,255,0.7)",
            transform: "scale(1.05)",
          },
        }}
        onClick={() => navigate("/contact")}
      >
        {text}
      </Button>
    </motion.div>
  );
}
