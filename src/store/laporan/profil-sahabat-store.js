import { create } from "zustand";
import axiosCustom from "../../axios";

export const useProfilSahabatStore = create((set) => ({
  profilSahabat: [],
  // Fetch profil sahabat
  fetchProfilSahabat: async (sahabatId, pembiayaanSahabatId) => {
    const response = await axiosCustom.get(
      `/laporan/profil-sahabat/${sahabatId}/${pembiayaanSahabatId}`
    );

    set({ profilSahabat: response.data });
  },
}));
