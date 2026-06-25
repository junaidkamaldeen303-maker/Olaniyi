import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#6420F3' },
    secondary: { main: '#28a6e7' },
    background: { 
      default: '#000000', 
      paper: '#1a1a1a' 
    },
    text: { 
      primary: '#ffffff', 
      secondary: '#66978b' 
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
  },
});