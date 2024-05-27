import { create } from "zustand";


interface AuthStore {
    isAuthed: boolean,
    setAuthed: (status: boolean) => void
}

const useAuthStore = create<AuthStore>((set) => ({
    isAuthed: false,
    setAuthed: (status) => set(() => ({ isAuthed: status }))
}))

export default useAuthStore;