import { create } from 'zustand'

interface states {
  signInWindow: boolean
  logIn: boolean
  setLogIn: () => void
}

export const useStore = create<states>((set) => ({
  signInWindow: false,
  logIn: true,
  setLogIn: () => set((state) => ({ logIn: !state.logIn })),
}))
