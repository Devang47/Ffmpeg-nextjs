import create from "zustand";
import type { User } from "firebase/auth";

// Extend this store if you need!

export interface AppStore {
  fontsLoaded: boolean;
  isLoading: boolean;
  isLoadingPopupOpen: boolean;
  user: User | null;
  setFontsLoaded: (fontsLoaded: boolean) => void;
}

export const useAppStore = create<AppStore>((set) => ({
  fontsLoaded: false,
  isLoading: false,
  user: null,
  isLoadingPopupOpen: false,
  setFontsLoaded: (fontsLoaded: boolean) => set((s) => ({ ...s, fontsLoaded })),
}));
