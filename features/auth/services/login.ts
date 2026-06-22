import { bffClient } from "@/lib/api/client";
import { ApiResponse } from "@/lib/api/types";
import { LoginPayload } from "../types";

export interface LoginResponseData {
  accessToken: string;
  user: {
    id: string;
    email: string;
  };
}

export interface SignupPayload {
  name: string;
  email: string;
  password: string;
}

export interface SignupResponseData {
  id: string;
}

export const authService = {
  login: async (payload: LoginPayload): Promise<ApiResponse<LoginResponseData>> => {
    return bffClient.post("/auth/login", payload);
  },

  signup: async (payload: SignupPayload): Promise<ApiResponse<SignupResponseData>> => {
    return bffClient.post("/auth/signup", payload);
  },
};