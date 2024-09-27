import { create } from "zustand";
import axiosCustom from "../../axios";

export const useProfilSahabatTerperinciStore = create((set) => ({
  profilSahabatTerperinci: [],
  // Fetch profil sahabat
  fetchProfilSahabatTerperinci: async (sahabatId, pembiayaanSahabatId) => {
    const response = await axiosCustom.get(
      `/laporan/profil-sahabat-terperinci/${sahabatId}/${pembiayaanSahabatId}`
    );

    set({ profilSahabatTerperinci: response.data });
  },
}));