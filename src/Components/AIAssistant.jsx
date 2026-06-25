import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Typography,
  IconButton,
  Paper,
  TextField,
  Avatar,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import PersonIcon from "@mui/icons-material/Person";
import CircleIcon from "@mui/icons-material/Circle";
import { motion, AnimatePresence } from "framer-motion";
import { getAIResponse, checkAIStatus } from "../services/aiService";

const suggestedQuestions = [
  { text: "Show me your projects 🚀" },
  { text: "What are your skills 💡" },
  { text: "How can I contact you?" },
];

function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      text: "👋 Hi! Ask me about Olaniyi's projects, skills, or how to connect.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Check AI status on component mount
  useEffect(() => {
    const testAI = async () => {
      const status = await checkAIStatus();
      console.log("🤖 AI Status:", status);
      if (status.status === 'error') {
        console.warn("⚠️ AI is using fallback responses:", status.message);
      } else {
        console.log("✅ AI is ready!");
      }
    };
    testAI();
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [messages, isOpen]);

  const handleSend = async (messageText = null) => {
    const userMessage = messageText || input;
    if (!userMessage.trim()) return;

    setMessages((prev) => [...prev, { id: Date.now(), type: "user", text: userMessage }]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await getAIResponse(userMessage);
      setMessages((prev) => [...prev, { id: Date.now() + 1, type: "bot", text: response }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          type: "bot",
          text: "Sorry, I'm having trouble. Please try again.",
        },
      ]);
    }
    setIsTyping(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* AI Icon Button - Fixed bottom right */}
      <Box
        sx={{
          position: "fixed",
          bottom: {
            xs: 20,
            md: 32,
          },
          right: {
            xs: 20,
            md: 32,
          },
          zIndex: 2000,
        }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <IconButton
            onClick={() => setIsOpen(!isOpen)}
            sx={{
              width: { xs: 48, md: 52 },
              height: { xs: 48, md: 52 },
              backgroundColor: "#0B1020",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
              "&:hover": { backgroundColor: "#1A1F35" },
            }}
          >
            {isOpen ? (
              <CloseIcon sx={{ fontSize: { xs: 20, md: 22 }, color: "#FFFFFF" }} />
            ) : (
              <SmartToyIcon sx={{ fontSize: { xs: 20, md: 22 }, color: "#FFFFFF" }} />
            )}
          </IconButton>
        </motion.div>
      </Box>

      {/* Chat Box */}
      <AnimatePresence>
        {isOpen && (
          <Box
            sx={{
              position: "fixed",
              bottom: {
                xs: 88,
                sm: 92,
                md: 96,
              },
              right: {
                xs: 20,
                sm: 24,
                md: 32,
              },
              width: {
                xs: "calc(100vw - 40px)",
                sm: 340,
                md: 360,
              },
              maxWidth: "360px",
              height: {
                xs: "70vh",
                md: 520,
              },
              maxHeight: {
                xs: "70vh",
                md: 520,
              },
              zIndex: 1999,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              style={{
                width: "100%",
                height: "100%",
                transformOrigin: "bottom right",
              }}
            >
              <Paper
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#0B1020",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(20px)",
                  borderRadius: "24px",
                  boxShadow: "0 24px 80px rgba(0,0,0,.45)",
                  overflow: "hidden",
                }}
              >
                {/* Header */}
                <Box
                  sx={{
                    p: 1.5,
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexShrink: 0,
                    minHeight: 44,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
                    <Avatar sx={{ width: 24, height: 24, bgcolor: "rgba(100,32,243,0.2)" }}>
                      <SmartToyIcon sx={{ fontSize: 14, color: "#6420F3" }} />
                    </Avatar>
                    <Box>
                      <Typography sx={{ fontWeight: 600, color: "#FFFFFF", fontSize: "0.75rem" }}>
                        Assistant
                      </Typography>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 0.3 }}>
                        <CircleIcon sx={{ fontSize: 4, color: "#22C55E" }} />
                        <Typography variant="caption" sx={{ color: "#22C55E", fontSize: "0.5rem" }}>
                          Online
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <IconButton
                    onClick={() => setIsOpen(false)}
                    sx={{ color: "rgba(255,255,255,0.3)", p: 0.3 }}
                    size="small"
                  >
                    <CloseIcon sx={{ fontSize: 14 }} />
                  </IconButton>
                </Box>

                {/* Messages */}
                <Box
                  sx={{
                    flex: 1,
                    overflowY: "auto",
                    p: 1.5,
                    display: "flex",
                    flexDirection: "column",
                    gap: 0.8,
                  }}
                >
                  {messages.map((msg) => (
                    <Box
                      key={msg.id}
                      sx={{
                        display: "flex",
                        justifyContent: msg.type === "user" ? "flex-end" : "flex-start",
                      }}
                    >
                      {msg.type === "bot" && (
                        <Avatar sx={{ width: 18, height: 18, bgcolor: "rgba(100,32,243,0.2)", mr: 0.4, mt: 0.3 }}>
                          <SmartToyIcon sx={{ fontSize: 11, color: "#6420F3" }} />
                        </Avatar>
                      )}
                      <Paper
                        sx={{
                          p: 0.8,
                          maxWidth: "80%",
                          bgcolor: msg.type === "user" ? "#6420F3" : "rgba(255,255,255,0.05)",
                          color: "#FFFFFF",
                          borderRadius: msg.type === "user"
                            ? "12px 12px 4px 12px"
                            : "12px 12px 12px 4px",
                        }}
                      >
                        <Typography variant="body2" sx={{ fontSize: "0.75rem", whiteSpace: "pre-wrap" }}>
                          {msg.text}
                        </Typography>
                      </Paper>
                      {msg.type === "user" && (
                        <Avatar sx={{ width: 18, height: 18, bgcolor: "rgba(100,32,243,0.2)", ml: 0.4, mt: 0.3 }}>
                          <PersonIcon sx={{ fontSize: 11, color: "#6420F3" }} />
                        </Avatar>
                      )}
                    </Box>
                  ))}
                  {isTyping && (
                    <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                      <Avatar sx={{ width: 18, height: 18, bgcolor: "rgba(100,32,243,0.2)", mr: 0.4 }}>
                        <SmartToyIcon sx={{ fontSize: 11, color: "#6420F3" }} />
                      </Avatar>
                      <Paper sx={{ p: 0.8, bgcolor: "rgba(255,255,255,0.05)", borderRadius: "12px" }}>
                        <Typography sx={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem" }}>•••</Typography>
                      </Paper>
                    </Box>
                  )}
                  <div ref={messagesEndRef} />
                </Box>

                {/* Suggested Questions */}
                {messages.length <= 2 && (
                  <Box sx={{ p: 1.5, pt: 0, display: "flex", flexDirection: "column", gap: 0.5 }}>
                    {suggestedQuestions.map((q, i) => (
                      <Button
                        key={i}
                        variant="outlined"
                        onClick={() => handleSend(q.text)}
                        sx={{
                          justifyContent: "flex-start",
                          color: "#FFFFFF",
                          borderColor: "rgba(255,255,255,0.05)",
                          bgcolor: "rgba(255,255,255,0.04)",
                          textTransform: "none",
                          fontSize: "0.7rem",
                          py: 0.5,
                          px: 1.2,
                          minHeight: 30,
                          "&:hover": {
                            bgcolor: "rgba(100,32,243,0.1)",
                            borderColor: "rgba(100,32,243,0.3)",
                          },
                        }}
                      >
                        {q.text}
                      </Button>
                    ))}
                  </Box>
                )}

                {/* Input */}
                <Box
                  sx={{
                    p: 1,
                    borderTop: "1px solid rgba(255,255,255,0.05)",
                    display: "flex",
                    gap: 0.8,
                    flexShrink: 0,
                    minHeight: 44,
                    alignItems: "center",
                  }}
                >
                  <TextField
                    inputRef={inputRef}
                    fullWidth
                    placeholder="Ask me..."
                    variant="outlined"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    size="small"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "10px",
                        bgcolor: "rgba(255,255,255,0.02)",
                        "& fieldset": { borderColor: "transparent" },
                        "&:hover fieldset": { borderColor: "rgba(100,32,243,0.3)" },
                        "&.Mui-focused fieldset": { borderColor: "#6420F3" },
                        "& input": { 
                          color: "#FFFFFF", 
                          fontSize: "0.75rem", 
                          padding: "6px 10px" 
                        },
                        "& input::placeholder": { 
                          color: "rgba(255,255,255,0.3)", 
                          fontSize: "0.7rem" 
                        },
                      },
                    }}
                  />
                  <IconButton
                    onClick={() => handleSend()}
                    disabled={!input.trim()}
                    sx={{
                      bgcolor: "#6420F3",
                      color: "#FFFFFF",
                      borderRadius: "50%",
                      width: 30,
                      height: 30,
                      "&:hover": { bgcolor: "#4B00CC" },
                      "&:disabled": {
                        bgcolor: "rgba(255,255,255,0.1)",
                        color: "rgba(255,255,255,0.3)",
                      },
                    }}
                  >
                    <SendIcon sx={{ fontSize: 15 }} />
                  </IconButton>
                </Box>
              </Paper>
            </motion.div>
          </Box>
        )}
      </AnimatePresence>
    </>
  );
}

export default AIAssistant;