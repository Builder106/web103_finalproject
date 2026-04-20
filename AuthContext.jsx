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
    setLoading(false);
  }, []); // Only run on mount to set initial loading state

  const login = (userData, token) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);