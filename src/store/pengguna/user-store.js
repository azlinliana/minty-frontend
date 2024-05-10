import { create } from "zustand";
import axiosCustom from "../../axios";
import ErrorAlert from "../../views/components/sweet-alert/ErrorAlert";

export const useUserStore = create((set) => ({
  penggunas: [],
  // Search user to add as admin
  searchUserToAddAsAdmin: async (
    searchKakitanganInput,
    openModalCreateAdmin
  ) => {
    try {
      const response = await axiosCustom.post(
        `pengguna/carian-pengguna`,
        { idKakitangan: searchKakitanganInput.idKakitangan } // Destructuring the object to send only relevant properties to the backend
      );

      if (response.status === 200) {
        set({ penggunas: response.data });

        openModalCreateAdmin();
      } else {
        ErrorAlert(response);
      }
    } catch (error) {
      ErrorAlert(error); // Handle network error or other errors
    }
  },
  // Search user to add as super admin
  searchUserToAddAsSuperAdmin: async (
    searchKakitanganInput,
    openModalCreateSuperAdmin
  ) => {
    try {
      const response = await axiosCustom.post(
        `pengguna/carian-pengguna`,
        { idKakitangan: searchKakitanganInput.idKakitangan } // Destructuring the object to send only relevant properties to the backend
      );

      if (response.status === 200) {
        set({ penggunas: response.data });

        openModalCreateSuperAdmin();
      } else {
        ErrorAlert(response);
      }
    } catch (error) {
      ErrorAlert(error); // Handle network error or other errors
    }
  },
}));
