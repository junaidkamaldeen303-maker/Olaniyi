import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme, ThemeProvider, useTheme } from './themes/theme.jsx';

import Home from "./Pages/Home.jsx";
import Projects from "./Pages/Projects.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Privacy from "./Pages/Privacy.jsx";
import Legal from "./Pages/Legal.jsx";

import NavBar from "./Components/navBar.jsx";
import Footer from "./Components/Footer.jsx";
import ScrollToTop from "./Components/ScrollToTop";
import AIAssistant from "./Components/AIAssistant.jsx";

function ThemedApp() {
  const { darkMode } = useTheme();
  const currentTheme = darkMode ? darkTheme : lightTheme;

  return (
    <MUIThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Router>
        <ScrollToTop />
        <div
          style={{
            margin: 0,
            padding: 0,
            minHeight: "100vh",
            overflowX: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <NavBar />
          <div style={{ flex: 1, paddingTop: "clamp(80px, 12vh, 140px)" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/legal" element={<Legal />} />
            </Routes>
          </div>
          <Footer />
          <AIAssistant />
        </div>
      </Router>
    </MUIThemeProvider>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}