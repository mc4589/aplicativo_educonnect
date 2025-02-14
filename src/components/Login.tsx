import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Link } from '@mui/material';
import AuthService from '../services/AuthService';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = AuthService.loginUser(username, password);
    if (user) {
      if (user.role === 'administrador') {
        navigate('/admin');
      } else {
        navigate('/inicio');
      }
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Iniciar Sesión
      </Typography>
      <TextField
        label="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Contraseña"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleLogin}
        fullWidth
      >
        Iniciar Sesión
      </Button>
      <Typography variant="body2" align="center" style={{ marginTop: '16px' }}>
        ¿No tienes cuenta? <Link href="/registro">Regístrate aquí</Link>
      </Typography>
    </Container>
  );
};

export default Login;
