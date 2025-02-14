import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import '../App.css';

const AcercaDe: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Box className="centered-content">
        <div>
          <Typography variant="h4" gutterBottom>
            Acerca de Nosotros
          </Typography>
          <Typography variant="h5" gutterBottom>
            Colaboradores del grupo
          </Typography>
          <Typography variant="body1" paragraph>
            Marco Antonio Chacón Yépez
          </Typography>
          <Typography variant="body1" paragraph>
            Alex Patricio Quishpe Salgado
          </Typography>
          <Typography variant="h5" gutterBottom>
            Visión
          </Typography>
          <Typography variant="body1" paragraph>
            Nuestra visión es crear una plataforma académica líder que conecte estudiantes y docentes a nivel global, 
            fomentando el aprendizaje colaborativo y el intercambio de conocimientos en un entorno seguro y estructurado.
          </Typography>
          <Typography variant="h5" gutterBottom>
            Misión
          </Typography>
          <Typography variant="body1" paragraph>
            Nuestra misión es empoderar a la comunidad educativa proporcionando herramientas innovadoras y accesibles para 
            facilitar la comunicación, la colaboración y el desarrollo personal y profesional de estudiantes y docentes.
          </Typography>
          <Typography variant="h5" gutterBottom>
            Historia
          </Typography>
          <Typography variant="body1" paragraph>
            EduConnect nació con la idea de cerrar la brecha en la comunicación académica. Fundada por un grupo de 
            entusiastas de la educación y la tecnología, nuestra plataforma ha evolucionado para convertirse en un espacio 
            donde el aprendizaje y la enseñanza se encuentran y florecen.
          </Typography>
        </div>
      </Box>
    </Container>
  );
};

export default AcercaDe;
