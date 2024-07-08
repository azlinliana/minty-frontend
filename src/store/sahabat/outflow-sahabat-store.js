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
  createOutflowSahabat: async (
    mingguId,
    outflowSahabatInput,
    closeModalCreateTrackingOutflowSahabat
  ) => {
    try {
      const response = await axiosCustom.post(
        `/sahabat/outflow-sahabat/${mingguId}`,
        outflowSahabatInput
      );

      if (response.status === 200) {
        set((state) => ({
          outflowSahabats: [
            ...state.outflowSahabats,
            response.data.outflowSahabatData,
          ],
        }));

        closeModalCreateTrackingOutflowSahabat();

        SuccessAlert(response.data.success);
      } else {
        ErrorAlert(response);
      }
    } catch (error) {
      ErrorAlert(error);
    }
  },
  // Edit outflow sahabat
  editOutflowSahabat: async () => {},
  // Delete outflow sahabat
  deleteOutflowSahabat: async (outflowSahabatId) => {
    try {
      DeletionAlert(async () => {
        const response = await axiosCustom.delete(
          `/sahabat/outflow-sahabat/${outflowSahabatId}`
        );

        if (response.status === 200) {
          set((state) => ({
            outflowSahabats: state.outflowSahabats.filter(
              (outflowSahabat) => outflowSahabat.id !== outflowSahabatId
            ),
          }));

          SuccessAlert(response.data.success);
        } else {
          ErrorAlert(response);
        }
      });
    } catch (error) {
      ErrorAlert(error);
    }
  },
}));
