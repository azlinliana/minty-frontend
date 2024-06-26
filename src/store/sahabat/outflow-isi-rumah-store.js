import { create } from "zustand";
import axiosCustom from "../../axios";
import SuccessAlert from "../../views/components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../views/components/sweet-alert/ErrorAlert";
import DeletionAlert from "../../views/components/sweet-alert/DeletionAlert";

export const useOutflowIsiRumahStore = create((set) => ({
  outflowIsiRumahs: [],
  // Fetch inflow isi rumah
  fetchOutflowIsiRumahs: async (isiRumahId) => {
    const response = await axiosCustom.get(
      `/sahabat/outflow-isi-rumah/${isiRumahId}`
    );

    set({ outflowIsiRumahs: response.data });
  },
  // Create outflow isi rumah
  createOutflowIsiRumah: async () => {},
  // Edit outflow isi rumah
  editOutflowIsiRumah: async () => {},
  // Delete outflow isi rumah
  deleteOutflowIsiRumah: async () => {}
}));