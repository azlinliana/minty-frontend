import { create } from "zustand";
import { devtools } from "zustand/middleware";
import axiosCustom from "../../axios";
import SuccessAlert from "../../views/components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../views/components/sweet-alert/ErrorAlert";
import DeletionAlert from "../../views/components/sweet-alert/DeletionAlert";

export const useInflowSahabatStore = create(
  devtools((set) => ({
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
    editInflowSahabat: async (
      mingguId,
      inflowSahabatId,
      inflowSahabatInput,
      closeModalEditInflowSahabat
    ) => {
      try {
        const response = await axiosCustom.put(
          `/sahabat/inflow-sahabat/${mingguId}/${inflowSahabatId}`,
          inflowSahabatInput
        );

        if (response.status === 200) {
          set((state) => ({
            inflowSahabats: state.inflowSahabats.map((inflowSahabat) =>
              inflowSahabat.id === inflowSahabatId
                ? response.data.inflowSahabatData
                : inflowSahabat
            ),
          }));

          closeModalEditInflowSahabat();

          SuccessAlert(response.data.success);
        } else {
          ErrorAlert(response);
        }
      } catch (error) {
        ErrorAlert(error);
      }
    },
    // Delete inflow sahabat
    deleteInflowSahabat: async (inflowSahabatId) => {
      try {
        DeletionAlert(async () => {
          const response = await axiosCustom.delete(
            `/sahabat/inflow-sahabat/${inflowSahabatId}`
          );

          if (response.status === 200) {
            set((state) => ({
              inflowSahabats: state.inflowSahabats.filter(
                (inflowSahabat) => inflowSahabat.id !== inflowSahabatId
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
  }))
);
