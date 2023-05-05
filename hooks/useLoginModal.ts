import { create } from "zustand";

interface LoginModalStore {
  isOpen: boolean;
  closeModal: () => void;
  openModal: () => void;
}

const useLoginModal = create<LoginModalStore>((set) => ({
  isOpen: false,
  closeModal: () => set({ isOpen: false }),
  openModal: () => set({ isOpen: true }),
}));

export default useLoginModal;
