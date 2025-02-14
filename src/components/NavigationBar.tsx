import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/AuthService';

const NavigationBar: React.FC = () => {
  const navigate = useNavigate();
  const currentUser = AuthService.getCurrentUser();

  const handleLogout = () => {
    AuthService.logoutUser();
    navigate('/'); 
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          EduConnect
        </Typography>
        {currentUser ? (
          <>
            <Button color="inherit" onClick={() => navigate('/inicio')}>
              Inicio
            </Button>
            <Button color="inherit" onClick={() => navigate('/publicaciones')}>
              Publicaciones
            </Button>
            <Button color="inherit" onClick={() => navigate('/acerca-de')}>
              Acerca De
            </Button>
            {currentUser.role === 'administrador' && (
              <Button color="inherit" onClick={() => navigate('/admin')}>
                Admin
              </Button>
            )}
            <Button color="inherit" onClick={handleLogout}>
              Cerrar Sesión
            </Button>
          </>
        ) : (
          <Button color="inherit" onClick={() => navigate('/')}>
            Iniciar Sesión
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
