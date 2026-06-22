

import { useState } from "react";
import { authService, LoginResponseData } from "../services/login";
import { LoginPayload } from "../types";
import { ApiResponse } from "@/lib/api/types";

export function UseLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<LoginResponseData | null>(null);

  const login = async (payload: LoginPayload): Promise<ApiResponse<LoginResponseData> | null> => {
    setLoading(true);
    setError(null);
    try {
      const response = await authService.login(payload);
      setData(response.data);
      if (typeof window !== "undefined") {
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("userEmail", response.data.user.email);
      }
      return response;
    } catch (err: any) {
      const errMsg = err.message || "Login failed. Please check your credentials.";
      setError(errMsg);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error, data };
}