import create from "zustand";
import type { User } from "firebase/auth";

// Extend this store if you need!

export interface AppStore {
  isLoading: boolean;
  isLoadingPopupOpen: boolean;
  user: User | null | "not signed in";
  logs: string;
}

export const useAppStore = create<AppStore>((set) => ({
  isLoading: false,
  user: null,
  logs: "[info] app started",
  isLoadingPopupOpen: false,
}));
