import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import '../App.css';

const Inicio: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Box className="centered-content">
        <div>
          <Typography variant="h4" gutterBottom>
            Bienvenido a EduConnect
          </Typography>
          <Typography variant="body1">
            Plataforma pública que permite a docentes y estudiantes publicar material educativo y obtener retroalimentación de los lectores.
          </Typography>
        </div>
      </Box>
    </Container>
  );
};

export default Inicio;
