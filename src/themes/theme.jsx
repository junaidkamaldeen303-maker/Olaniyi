// src/themes/theme.jsx
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#6000FF' },
    secondary: { main: '#00FFFF' },
    background: { default: '#F5F5F7', paper: '#FFFFFF' },
    text: { primary: '#1a1a1a', secondary: '#666666' },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    h1: { fontSize: '3.5rem', fontWeight: 700 },
    h2: { fontSize: '3rem', fontWeight: 600 },
    h3: { fontSize: '2.5rem', fontWeight: 600 },
    h4: { fontSize: '2rem', fontWeight: 500 },
    h5: { fontSize: '1.5rem', fontWeight: 500 },
    h6: { fontSize: '1.25rem', fontWeight: 500 },
    body1: { fontSize: '1rem', fontWeight: 400 },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        }
      }
    }
  }
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#7E3AFF' }, // Lighter purple
    secondary: { main: '#00D4FF' }, // Brighter cyan
    background: { 
      default: '#0A1128', // Dark blue instead of pure black
      paper: 'rgba(30, 41, 59, 0.8)' // Dark blue-gray
    },
    text: { 
      primary: '#F0F4F8', // Soft white
      secondary: '#94A3B8' // Muted blue-gray
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    h1: { fontSize: '3.5rem', fontWeight: 700 },
    h2: { fontSize: '3rem', fontWeight: 600 },
    h3: { fontSize: '2.5rem', fontWeight: 600 },
    h4: { fontSize: '2rem', fontWeight: 500 },
    h5: { fontSize: '1.5rem', fontWeight: 500 },
    h6: { fontSize: '1.25rem', fontWeight: 500 },
    body1: { fontSize: '1rem', fontWeight: 400 },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(30, 41, 59, 0.6)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.1)',
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        outlined: {
          borderColor: '#7E3AFF',
          '&:hover': {
            borderColor: '#9D5BFF',
            backgroundColor: 'rgba(126, 58, 255, 0.1)',
          }
        },
        contained: {
          background: 'linear-gradient(45deg, #7E3AFF 0%, #9D5BFF 100%)',
          '&:hover': {
            background: 'linear-gradient(45deg, #6B2AFF 0%, #8B4AFF 100%)',
          }
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          '&.MuiChip-outlined': {
            borderColor: '#00D4FF',
            color: '#00D4FF',
          }
        }
      }
    }
  }
});