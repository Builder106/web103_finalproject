import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>User Dashboard</h1>
      {user && <p>Welcome, {user.email}!</p>}
      <p>This is your protected study tracker dashboard.</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;