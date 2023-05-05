import { create } from "zustand";

interface RegisterModalStore {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const useRegisterModal = create<RegisterModalStore>((set) => ({
  isOpen: false,
  closeModal: () => set({ isOpen: false }),
  openModal: () => set({ isOpen: true }),
}));

export default useRegisterModal;
