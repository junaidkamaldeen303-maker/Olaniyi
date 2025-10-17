// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme } from './themes/theme.jsx';

// Pages
import Home from "./Pages/Home.jsx";
import Projects from "./Pages/Projects.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";

// Global Components
import NavBar from "./Components/navBar.jsx";
import Footer from "./Components/Footer.jsx";
import ScrollToTop from "./Components/ScrollToTop";

// Create Theme Context
const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
          };

            return (
                <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
                      {children}
                          </ThemeContext.Provider>
                            );
                            };

                            export const useTheme = () => {
                              const context = React.useContext(ThemeContext);
                                if (!context) {
                                    throw new Error('useTheme must be used within a ThemeProvider');
                                      }
                                        return context;
                                        };

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
                                                                                                                            backgroundColor: currentTheme.palette.background.default,
                                                                                                                                        minHeight: "100vh",
                                                                                                                                                    overflowX: "hidden",
                                                                                                                                                                display: "flex",
                                                                                                                                                                            flexDirection: "column",
                                                                                                                                                                                        transition: 'background-color 0.3s ease'
                                                                                                                                                                                                  }}
                                                                                                                                                                                                          >
                                                                                                                                                                                                                    <NavBar />
                                                                                                                                                                                                                              <div style={{ flex: 1, paddingTop: "clamp(80px, 12vh, 140px)" }}>
                                                                                                                                                                                                                                          <Routes>
                                                                                                                                                                                                                                                        <Route path="/" element={<Home />} />
                                                                                                                                                                                                                                                                      <Route path="/projects" element={<Projects />} />
                                                                                                                                                                                                                                                                                    <Route path="/about" element={<About />} />
                                                                                                                                                                                                                                                                                                  <Route path="/contact" element={<Contact />} />
                                                                                                                                                                                                                                                                                                              </Routes>
                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                  <Footer />
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