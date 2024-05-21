import { create } from "zustand";
import axiosCustom from "../../axios";
import ErrorAlert from "../../views/components/sweet-alert/ErrorAlert";

const URL = "laporan/search";

export const useLaporanStore = create((set) => ({
  laporanProfilSahabats: [],
  laporanProfilSahabatTerperincis: [],
  // Search profil sahabat based on no kad pengenalan sahabat
  searchNoKadPengenalanSahabatProfilSahabat: async (noKadPengenalanSahabatInput) => {
    try {
      const response = await axiosCustom.post(
        URL,
        noKadPengenalanSahabatInput
      );

      if (response.status === 200) {
        set({ laporanProfilSahabats: response.data });
      } else {
        ErrorAlert(response);
      }
    } catch (error) {
      ErrorAlert(error); // Error related to API response or client side
    }
  },
  // Search profil sahabat terperinci based on no kad pengenalan sahabat
  searchNoKadPengenalanSahabatProfilSahabatTerperinci: async (noKadPengenalanSahabatInput) => {
    try {
      const response = await axiosCustom.post(
        URL,
        noKadPengenalanSahabatInput
      );

      if (response.status === 200) {
        set({ laporanProfilSahabatTerperincis: response.data });
      } else {
        ErrorAlert(response);
      }
    } catch (error) {
      ErrorAlert(error); // Error related to API response or client side
    }
  }
}));