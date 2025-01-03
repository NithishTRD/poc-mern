
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('userInfo');
        navigate('/');
    }
    return (
        <div className="container bg-gradient-home">
            <h1 className="text-5xl font-extrabold mb-8">Welcome to MERN POC</h1>
            <div>
                {!userInfo ? (
                    <>
                        <Link to="/login" className="button">Login</Link>
                        <Link to="/register" className="button">Register</Link>
                    </>
                ) : (
                    <>
                        <Link to="/profile" className="button">Profile</Link>
                        <button onClick={handleLogout} className="button">Logout</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Home;
