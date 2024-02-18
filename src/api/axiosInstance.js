import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api", // Base URL for API requests
  timeout: 5000, // Request timeout in milliseconds
  // Other configurations...
});

export default instance;
