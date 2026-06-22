import axios from "axios";

export const backendClient = axios.create({
  baseURL: process.env.API_URL || "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
 

backendClient.interceptors.response.use(
  (response) => response,
  (error) => {  
    const errorResponse = error.response?.data || {
      success: false,
      message: error.message || "We're experiencing temporary technical difficulties. Fix in progress!",
      data: null,
    };
 

    return Promise.reject(errorResponse);
  }
);
