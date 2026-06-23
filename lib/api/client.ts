import axios from "axios";
import { useAuthStore } from "@/lib/store/authStore";

export const bffClient = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

bffClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

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
