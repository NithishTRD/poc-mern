import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../api/api'; // Importing the register function from api.js
import '../styles/styles.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Started");
      console.log(name, email, password);
      const data = await registerUser(name, email, password); 
      localStorage.setItem('userInfo', JSON.stringify(data)); 
      alert('Registration successful!');
      navigate('/profile'); // Navigate to the profile page after successful registration
    } catch (error) {
      alert('Error during registration');
    }
  };

  return (
    <div className="container bg-gradient-home">
      <div className="card">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
          <button type="submit" className="button">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
