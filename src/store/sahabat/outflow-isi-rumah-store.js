import { create } from "zustand";
import axiosCustom from "../../axios";
import SuccessAlert from "../../views/components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../views/components/sweet-alert/ErrorAlert";
import DeletionAlert from "../../views/components/sweet-alert/DeletionAlert";

export const useOutflowIsiRumahStore = create((set) => ({
  outflowIsiRumahs: [],
  currentIsiRumah: {},
  // Fetch inflow isi rumah
  fetchOutflowIsiRumahs: async (isiRumahId) => {
    const response = await axiosCustom.get(
      `/sahabat/outflow-isi-rumah/${isiRumahId}`
    );

    set((state) => ({
      outflowIsiRumahs: {
        ...state.outflowIsiRumahs,
        [isiRumahId]: response.data,
      }
    })); 
  },
  // Create outflow isi rumah
  createOutflowIsiRumah: async (
    isiRumahId,
    outflowIsiRumahInput,
    closeModalCreateTrackingOutflowIsiRumah
  ) => {
    try {
      const response = await axiosCustom.post(
        `/sahabat/outflow-isi-rumah/${isiRumahId}`,
        outflowIsiRumahInput
      );

      if (response.status === 200) {
        set((state) => ({
          outflowIsiRumahs: {
            ...state.outflowIsiRumahs,
            [isiRumahId]: [
              ...state.outflowIsiRumahs[isiRumahId],
              response.data.outflowIsiRumahSahabatData,
            ],
          },
        }));

        closeModalCreateTrackingOutflowIsiRumah();

        SuccessAlert(response.data.success);
      } else {
        ErrorAlert(response);
      }
    } catch (error) {
      ErrorAlert(error);
    }
  },
  // Edit outflow isi rumah
  editOutflowIsiRumah: async () => {},
  // Delete outflow isi rumah
  deleteOutflowIsiRumah: async (isiRumahId, outflowIsiRumahId) => {
    try {
      DeletionAlert(async () => {
        const response = await axiosCustom.delete(
          `/sahabat/outflow-isi-rumah/${outflowIsiRumahId}`
        );

        if (response.status === 200) {
          set((state) => ({
            outflowIsiRumahs: {
              ...state.outflowIsiRumahs,
              [isiRumahId]: state.outflowIsiRumahs[isiRumahId].filter(
                (outflowIsiRumah) => outflowIsiRumah.id !== outflowIsiRumahId
              ),
            },
          }));

          SuccessAlert(response.data.success);
        } else {
          ErrorAlert(response);
        }
      });
    } catch (error) {
      ErrorAlert(error);
    }
  }
}));