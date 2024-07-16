import { create } from "zustand";
import axiosCustom from "../../axios";
import ErrorAlert from "../../views/components/sweet-alert/ErrorAlert";

const URL = "laporan";

export const useLaporanStore = create((set, get) => ({
  laporanProfilSahabats: [],
  laporanProfilSahabatTerperincis: [],
  pembiayaanSahabats: [],
  pembiayaanSahabatTerperincis: [],
  // Search profil sahabat based on no kad pengenalan sahabat
  searchNoKadPengenalanSahabatProfilSahabat: async (
    noKadPengenalanSahabatInput
  ) => {
    try {
      const response = await axiosCustom.post(
        `${URL}/search`,
        noKadPengenalanSahabatInput
      );

      if (response.status === 200) {
        set({ laporanProfilSahabats: response.data });

        return get().laporanProfilSahabats;
      } else {
        ErrorAlert(response);
      }
    } catch (error) {
      ErrorAlert(error);
    }
  },
  // Fetch pembiayaan sahabat - profil sahabat
  fetchPembiayaanProfilSahabat: async (sahabatId) => {
    const response = await axiosCustom.get(
      `${URL}/profil-sahabat/pembiayaan/${sahabatId}`
    );

    set({ pembiayaanSahabats: response.data });
  },
  // Search profil sahabat terperinci based on no kad pengenalan sahabat
  searchNoKadPengenalanSahabatProfilSahabatTerperinci: async (
    noKadPengenalanSahabatInput
  ) => {
    try {
      const response = await axiosCustom.post(
        `${URL}/search`,
        noKadPengenalanSahabatInput
      );

      if (response.status === 200) {
        set({ laporanProfilSahabatTerperincis: response.data });

        return get().laporanProfilSahabatTerperincis;
      } else {
        ErrorAlert(response);
      }
    } catch (error) {
      ErrorAlert(error);
    }
  },
  // Fetch pembiayaan sahabat - profil sahabat terperinci
  fetchPembiayaanProfilSahabatTerperinci: async (sahabatId) => {
    const response = await axiosCustom.get(
      `${URL}/profil-sahabat-terperinci/pembiayaan/${sahabatId}`
    );

    set({ pembiayaanSahabatTerperincis: response.data });
  },
}));
