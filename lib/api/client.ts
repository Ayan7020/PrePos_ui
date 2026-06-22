import axios from "axios";

export const bffClient = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
 
bffClient.interceptors.response.use(
  (response) => response.data,
  (error) => { 
    const errorResponse = error.response?.data || {
      success: false,
      message: error.message || "An unexpected error occurred",
      data: null,
    };
    return Promise.reject(errorResponse);
  }
);
