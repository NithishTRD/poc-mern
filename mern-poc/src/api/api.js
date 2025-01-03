
import axios from 'axios';


const apiUrl = 'http://localhost:5000/api';

// Create an instance of axios with the base URL
const api = axios.create({
  baseURL: apiUrl, 
});


export const getUserProfile = async (token) => {
  try {
    const response = await api.get('/users/profile', {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data.message || 'Error fetching profile';
  }
};

// POST request for login
export const loginUser = async (email, password) => {
  try {
    const response = await api.post('/users/login', { email, password });
    return response.data;
  } catch (error) {
    throw error.response.data.message || 'Login failed';
  }
};

// POST request for registration
export const registerUser = async (name, email, password) => {
  try {
    console.log("Started registered user");
    const response = await api.post('/users/register', { name, email, password });
    return response.data;
  } catch (error) {
    throw error.response.data.message || 'Registration failed';
  }
};

export default api;
