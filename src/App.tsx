// src/App.tsx

import React from 'react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import AppRouter from './AppRouter';
import NavigationBar from './components/NavigationBar';

const theme = createTheme({
  palette: {
    mode: 'light', // Cambia 'dark' a 'light' si prefieres un tema claro
    primary: {
      main: '#FF0000', // Cambia esto al color primario que desees
    },
    secondary: {
      main: '#00FF00', // Cambia esto al color secundario que desees
    },
    background: {
      default: '#FFFFFF', // Cambia esto al color de fondo que desees
    },
    text: {
      primary: '#000000', // Cambia esto al color de texto primario que desees
      secondary: '#808080', // Cambia esto al color de texto secundario que desees
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavigationBar />
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
