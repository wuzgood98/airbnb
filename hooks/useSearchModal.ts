import { create } from "zustand";

interface SearchModalStore {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const useSearchModal = create<SearchModalStore>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));

export default useSearchModal;
