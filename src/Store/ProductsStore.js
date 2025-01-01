import { create } from "zustand";

const useProductStore = create((set) => ({
  products: [], // State awal untuk menyimpan produk
  setProducts: (data) => set({ products: data }), // Function untuk memperbarui produk
}));

export default useProductStore;
