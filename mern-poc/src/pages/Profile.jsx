import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/styles.css';

const Profile = () => {
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  const [name, setName] = useState(userInfo.name);
  const [email, setEmail] = useState(userInfo.email);
  const [password, setPassword] = useState('');

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    navigate('/');
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      try {
        const token = userInfo?.token;
        if (!token) {
          throw new Error('No token found');
        }
        await axios.delete('http://localhost:5000/api/users/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        localStorage.removeItem('userInfo');
        alert('Account deleted successfully!');
        navigate('/');
      } catch (error) {
        alert(`Error deleting account: ${error.message}`);
      }
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const token = userInfo?.token;
      const { data } = await axios.put('http://localhost:5000/api/users/profile',
        { name, email, password },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      localStorage.setItem('userInfo', JSON.stringify(data));
      alert('Profile updated successfully!');
      navigate('/profile');
    } catch (error) {
      alert(`Error updating profile: ${error.message}`);
    }
  };

  if (!userInfo) {
    return (
      <div className="container bg-gradient-error">
        <h2 className="text-white">Please log in to view this page.</h2>
        <Link to="/login" className="mt-4 text-xl font-semibold bg-white text-blue-600 py-2 px-6 rounded-full shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105">Login</Link>
      </div>
    );
  }

  return (
    <div className="container bg-gradient-profile">
      <div className="card">
        <h1>Welcome, {userInfo.name}!</h1>
        <p>Email: {userInfo.email}</p>
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="New Password"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <button type="submit" className="button">Update Profile</button>
        </form>
        <button onClick={handleDelete} className="button mt-4 bg-red-600 hover:bg-red-700">Delete Account</button>
        <Link to="/" className="button">Home</Link>
        <Link to="/" className="button mt-4" onClick={handleLogout}>Logout</Link>
      </div>
    </div>
  );
};

export default Profile;
 