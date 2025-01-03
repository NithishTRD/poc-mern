import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const Profile = () => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  if (!userInfo) {
    return (
      <div className="container bg-gradient-error">
        <h2 className="text-white">Please log in to view this page.</h2>
        <Link to="/login" className="button">Login</Link>
      </div>
    );
  }

  return (
    <div className="container bg-gradient-profile">
      <div className="card">
        <h1>Welcome, {userInfo.name}!</h1>
        <p>Email: {userInfo.email}</p>
      </div>
      <Link to="/" className="button">Home</Link>
    </div>
  );
};

export default Profile;
