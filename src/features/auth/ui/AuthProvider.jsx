import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../lib/AuthContext';

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const login = (email, password) => {

    if (email && password) {
      setIsAuthenticated(true);
      navigate('/');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    navigate('/login');
  };

  const value = {
    isAuthenticated,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};