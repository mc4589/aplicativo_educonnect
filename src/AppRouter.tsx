import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Inicio from './pages/Inicio';
import AcercaDe from './pages/AcercaDe';
import Publicaciones from './pages/Publicaciones';
import Admin from './pages/Admin';
import ProtectedRoute from './components/ProtectedRoute';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registro" element={<Register />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/acerca-de" element={<AcercaDe />} />
        <Route path="/publicaciones" element={<Publicaciones />} />
        <Route path="/admin" element={<Admin />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
