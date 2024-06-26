import { create } from "zustand";
import axiosCustom from "../../axios";
import SuccessAlert from "../../views/components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../views/components/sweet-alert/ErrorAlert";
import DeletionAlert from "../../views/components/sweet-alert/DeletionAlert";

export const useIsiRumahStore = create((set) => ({
  isiRumahSahabats: [],
  // Fetch isi rumah sahabat
  fetchIsiRumahSahabats: async (mingguId) => {
    const response = await axiosCustom.get(
      `/sahabat/isi-rumah/${mingguId}`
    );

    set({ isiRumahSahabats: response.data });
  },
  // Create isi rumah sahabat
  createIsiRumahSahabat: async () => {},
  // Edit isi rumah sahabat
  editIsiRumahSahabat: async () => {},
  // Delete isi rumah sahabat
  deleteIsiRumahSahabat: async () => {},
}));