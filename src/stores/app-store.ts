import { create } from "zustand";

interface AppStore {
  sidebarOpen: boolean;
  toggleSidebar(): void;
}

export const useAppStore = create<AppStore>((set) => ({
  sidebarOpen: false,
  toggleSidebar: () =>
    set((state) => ({
      sidebarOpen: !state.sidebarOpen,
    })),
}));
