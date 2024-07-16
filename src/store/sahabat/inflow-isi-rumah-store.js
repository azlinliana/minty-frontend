import { create } from "zustand";
import axiosCustom from "../../axios";
import SuccessAlert from "../../views/components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../views/components/sweet-alert/ErrorAlert";
import DeletionAlert from "../../views/components/sweet-alert/DeletionAlert";

export const useInflowIsiRumahStore = create((set) => ({
  inflowIsiRumahs: [],
  currentIsiRumah: {},
  // Fetch inflow isi rumah
  fetchInflowIsiRumahs: async (isiRumahId) => {
    const response = await axiosCustom.get(
      `/sahabat/inflow-isi-rumah/${isiRumahId}`
    );

    set((state) => ({
      inflowIsiRumahs: {
        ...state.inflowIsiRumahs,
        [isiRumahId]: response.data,
      },
    }));
  },
  // Create inflow isi rumah
  createInflowIsiRumah: async (
    isiRumahId,
    inflowIsiRumahInput,
    closeModalCreateTrackingInflowIsiRumah
  ) => {
    try {
      const response = await axiosCustom.post(
        `/sahabat/inflow-isi-rumah/${isiRumahId}`,
        inflowIsiRumahInput
      );

      if (response.status === 200) {
        set((state) => ({
          inflowIsiRumahs: {
            ...state.inflowIsiRumahs,
            [isiRumahId]: [
              ...state.inflowIsiRumahs[isiRumahId],
              response.data.inflowIsiRumahSahabatData,
            ],
          },
        }));

        closeModalCreateTrackingInflowIsiRumah();

        SuccessAlert(response.data.success);
      } else {
        ErrorAlert(response);
      }
    } catch (error) {
      ErrorAlert(error);
    }
  },
  // Edit inflow isi rumah
  editInflowIsiRumah: async (
    isiRumahId,
    inflowIsiRumahId,
    inflowIsiRumahInput,
    closeModalEditInflowIsiRumah
  ) => {
    try {
      const response = await axiosCustom.put(
        `/sahabat/inflow-isi-rumah/${isiRumahId}/${inflowIsiRumahId}`,
        inflowIsiRumahInput
      );

      if (response.status === 200) {
        set((state) => ({
          ...state.inflowIsiRumahs,
          [isiRumahId]: state.inflowIsiRumahs[isiRumahId].map(
            (inflowIsiRumah) =>
              inflowIsiRumah.id === inflowIsiRumahId
                ? response.data.inflowIsiRumahSahabatData
                : inflowIsiRumah
          ),
        }));

        closeModalEditInflowIsiRumah();

        SuccessAlert(response.data.success);
      } else {
        ErrorAlert(response);
      }
    } catch (error) {
      ErrorAlert(error);
    }
  },
  // Delete inflow isi rumah
  deleteInflowIsiRumah: async (isiRumahId, inflowIsiRumahId) => {
    try {
      DeletionAlert(async () => {
        const response = await axiosCustom.delete(
          `/sahabat/inflow-isi-rumah/${inflowIsiRumahId}`
        );

        if (response.status === 200) {
          set((state) => ({
            inflowIsiRumahs: {
              ...state.inflowIsiRumahs,
              [isiRumahId]: state.inflowIsiRumahs[isiRumahId].filter(
                (inflowIsiRumah) => inflowIsiRumah.id !== inflowIsiRumahId
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
  },
}));
