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
            <div className="image-section">
                <img src="https://imgcms.1stoplighting.com/site/common/promos/all/2023/skyx-hero-100.jpg" alt="Image 1" />
                <img src="https://imgcms.1stoplighting.com/site/common/promos/all/2024/final_chandelier_feature_heroslider.webp" alt="Image 2" />
            </div>
            <h3 className="centered-heading">People Searching For</h3>
            <div className="search-tags">
                <Link to="#">floor lamps</Link>
                <Link to="#">wall sconces</Link>
                <Link to="#">celest</Link>
                <Link to="#">visual comfort</Link>
                <Link to="#">uttermost decor</Link>
                <Link to="#">linear chandelier</Link>
                <Link to="#">table lamps</Link>
                <Link to="#">wall art</Link>
            </div>
            <h3 className="centered-heading">Shop by department</h3>
            <div className="department-section">
                <Link to="#">
                    <span>Ceiling Lights</span>
                    <img src="https://imgprd.1stoplighting.com/crystorama-lighting/products/ken_2203_vg_300.jpg" alt="Ceiling Lights" />

                </Link>
                <Link to="#">
                    <span>Outdoor Lighting</span>
                    <img src="https://imgprd.1stoplighting.com/capital-lighting/products/946411bk_300.jpg" alt="Outdoor Lighting" />

                </Link>
                <Link to="#">
                    <span>Ceiling Fans</span>
                    <img src="https://imgprd.1stoplighting.com/craftmade-lighting/products/gar56fb5_300.jpg" alt="Ceiling Fans" />

                </Link>
                <Link to="#">
                    <span>LED Mirrors</span>
                    <img src="https://imgprd.1stoplighting.com/elan-lighting/products/84165cg_300.jpg" alt="LED Mirrors" />

                </Link>
                <Link to="#">
                    <span>Wall Lighting</span>
                    <img src="https://imgprd.1stoplighting.com/savoy-house/products/9_0901_1_322_300.jpg" alt="Wall Lighting" />

                </Link>
                <Link to="#">
                    <span>Bath Lights</span>
                    <img src="https://imgprd.1stoplighting.com/kichler/products/45574bk_300.jpg" alt="Bath Lights" />

                </Link>
            </div>
            <h1 className="text-5xl font-extrabold mb-8">Welcome to MERN POC</h1>
            <p className="info-text">You can create, update, delete, login, and register in this application.</p>
            <p className="info-text">It uses MongoDb for Database and JWT for tokenization</p>
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
