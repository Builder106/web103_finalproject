import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

const getInitialState = () => {
  const token = localStorage.getItem('token');
  const user = localStorage.getItem('user');
  return { token, user: user ? JSON.parse(user) : null };
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getInitialState().user);
  const [token, setToken] = useState(getInitialState().token);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // On initial load, we can verify the token with the backend if needed
    setLoading(false);
  }, []);

  const login = (userData, authToken) => {
    localStorage.setItem('token', authToken);
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    setToken(authToken);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setToken(null);
  };

  const value = { user, token, login, logout, loading };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);