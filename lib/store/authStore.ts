import { create } from "zustand";

interface AuthState {
  accessToken: string | null;
  userEmail: string | null;
  setAuth: (accessToken: string, userEmail: string) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  userEmail: null,
  setAuth: (accessToken, userEmail) => set({ accessToken, userEmail }),
  clearAuth: () => set({ accessToken: null, userEmail: null }),
}));
