import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#6420F3' },
    secondary: { main: '#28a6e7' },
    background: { 
      default: '#ffffff', 
      paper: '#f5f5f5' 
    },
    text: { 
      primary: '#000000', 
      secondary: '#66978b' 
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
  },
});