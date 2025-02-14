import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, MenuItem } from '@mui/material';
import AuthService from '../services/AuthService';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'publicador' | 'administrador'>('publicador');
  const navigate = useNavigate();

  const handleRegister = () => {
    const success = AuthService.registerUser(username, password, role);
    if (success) {
      navigate('/');
    } else {
      alert('Usuario ya existe');
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Registrarse
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
      <TextField
        label="Rol"
        value={role}
        onChange={(e) => setRole(e.target.value as 'publicador' | 'administrador')}
        fullWidth
        margin="normal"
        select
      >
        <MenuItem value="publicador">Publicador</MenuItem>
        <MenuItem value="administrador">Administrador</MenuItem>
      </TextField>
      <Button
        variant="contained"
        color="primary"
        onClick={handleRegister}
        fullWidth
      >
        Registrarse
      </Button>
    </Container>
  );
};

export default Register;
