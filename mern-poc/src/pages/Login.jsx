import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/api';
import '../styles/styles.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(email, password);
      localStorage.setItem('userInfo', JSON.stringify(data));
      alert('Login successful!');
      navigate('/profile');
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="container bg-gradient-home">
      <div className="card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
          <button type="submit" className="button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login; 
