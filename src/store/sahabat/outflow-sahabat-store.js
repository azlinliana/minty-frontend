import { create } from "zustand";
import axiosCustom from "../../axios";
import SuccessAlert from "../../views/components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../views/components/sweet-alert/ErrorAlert";
import DeletionAlert from "../../views/components/sweet-alert/DeletionAlert";

export const useOutflowSahabatStore = create((set) => ({
  outflowSahabats: [],
  // Fetch outflow sahabat
  fetchOutflowSahabats: async (mingguId) => {
    const response = await axiosCustom.get(
      `/sahabat/outflow-sahabat/${mingguId}`
    );

    set({ outflowSahabats: response.data });
  },
  // Create outflow sahabat
  createOutflowSahabat: async () => {
  },
  // Edit outflow sahabat
  editOutflowSahabat: async () => {},
  // Delete outflow sahabat
  deleteOutflowSahabat: async () => {}
}));