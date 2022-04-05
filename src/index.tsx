import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      light: '#c8e4fb',
      main: '#1976d2',
      dark: '#115293',
      contrastText: '#fff',
    },
    secondary: {
      light: '#e3f0d3',
      main: '#aed581',
      dark: '#79955a',
      contrastText: '#fff',
    },
  },
  typography: {
    h1: {
      fontSize:30,
      fontWeight: 800,
    },
    h2: {
      fontSize: 20,
      fontWeight: 500,
    },
    body1: {
      fontSize: 16,
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);
