import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthService from '../services/AuthService';

const ProtectedRoute: React.FC = () => {
  const currentUser = AuthService.getCurrentUser();

  return currentUser ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
