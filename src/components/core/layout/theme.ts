import { Radio_Canada } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red, orange, blueGrey, lightGreen } from '@mui/material/colors';

export const radioCanada = Radio_Canada({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: orange[900],
    },
    secondary: {
      main: blueGrey.A700,
    },
    error: {
      main: red.A700,
    },
    success: {
      main: lightGreen[400]
    }
  },
  typography: {
    fontFamily: radioCanada.style.fontFamily,
    h1: {
      fontWeight: 'bold'
    },
    h2: {
      fontWeight: 'bold'
    },
    h3: {
      fontWeight: 'bold'
    }
  },
});

export default theme;