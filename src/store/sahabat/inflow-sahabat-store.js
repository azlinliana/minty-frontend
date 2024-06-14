import { create } from "zustand";
import axiosCustom from "../../axios";
import SuccessAlert from "../../views/components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../views/components/sweet-alert/ErrorAlert";
import DeletionAlert from "../../views/components/sweet-alert/DeletionAlert";

export const useInflowSahabatStore = create((set) => ({
  inflowSahabats: [],
  // Fetch inflow sahabat
  fetchInflowSahabats: async () => {
    const response = await axiosCustom.get(
      `/sahabat/inflow-sahabat/${mingguId}`
    );
  },
  // Create inflow sahabat
  createInflowSahabat: async () => {
    const response = await axiosCustom.post(
      `/sahabat/inflow-sahabat/${mingguId}`,
      inflowSahabatInput
    );
  },
  // Edit inflow sahabat
  editInflowSahabat: async () => {},
  // Delete inflow sahabat
  deleteInflowSahabat: async () => {}
}));