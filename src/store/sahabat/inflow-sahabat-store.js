import { create } from "zustand";
import axiosCustom from "../../axios";
import SuccessAlert from "../../views/components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../views/components/sweet-alert/ErrorAlert";
import DeletionAlert from "../../views/components/sweet-alert/DeletionAlert";

export const useInflowSahabatStore = create((set) => ({
  inflowSahabats: [],
  // Fetch inflow sahabat
  fetchInflowSahabats: async (mingguId) => {
    const response = await axiosCustom.get(
      `/sahabat/inflow-sahabat/${mingguId}`
    );

    set({ inflowSahabats: response.data });
  },
  // Create inflow sahabat
  createInflowSahabat: async (
    mingguId,
    inflowSahabatInput,
    closeModalCreateTrackingInflowSahabat
  ) => {
    try {
      const response = await axiosCustom.post(
        `/sahabat/inflow-sahabat/${mingguId}`,
        inflowSahabatInput
      );

      if (response.status === 200) {
        set((state) => ({
          inflowSahabats: [
            ...state.inflowSahabats,
            response.data.inflowSahabatData,
          ],
        }));

        closeModalCreateTrackingInflowSahabat();

        SuccessAlert(response.data.success);
      } else {
        ErrorAlert(response);
      }
    } catch (error) {
      ErrorAlert(error);
    }
  },
  // Edit inflow sahabat
  editInflowSahabat: async () => {},
  // Delete inflow sahabat
  deleteInflowSahabat: async () => {},
}));
