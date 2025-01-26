import axios from 'axios';

// Set up the base URL to your backend API
const api = axios.create({
  baseURL: 'http://localhost:5000/api/auth',  // Use the correct backend URL
});

export default api;