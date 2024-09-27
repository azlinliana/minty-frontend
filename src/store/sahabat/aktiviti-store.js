import { create } from "zustand";
import { devtools } from "zustand/middleware";
import axiosCustom from "../../axios";
import SuccessAlert from "../../views/components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../views/components/sweet-alert/ErrorAlert";
import DeletionAlert from "../../views/components/sweet-alert/DeletionAlert";

export const useAktivitiStore = create(
  devtools((set) => ({
    aktivitiSahabats: [],
    // Fetch aktiviti sahabat
    fetchAktivitiSahabats: async (sahabatId, pembiayaanId) => {
      const response = await axiosCustom.get(
        `/sahabat/${sahabatId}/pembiayaan/${pembiayaanId}/aktiviti`
      );

      set({ aktivitiSahabats: response.data });
    },
    // Create aktiviti sahabat
    createAktivitiSahabat: async (
      sahabatId,
      pembiayaanId,
      aktivitiInput,
      closeModalCreateAktivitiSahabat
    ) => {
      try {
        const response = await axiosCustom.post(
          `/sahabat/${sahabatId}/pembiayaan/${pembiayaanId}/aktiviti`,
          aktivitiInput
        );

        if (response.status === 200) {
          set((state) => ({
            aktivitiSahabats: [
              ...state.aktivitiSahabats,
              response.data.aktivitiSahabatData,
            ],
          }));

          closeModalCreateAktivitiSahabat();

          SuccessAlert(response.data.success);
        } else {
          ErrorAlert(response);
        }
      } catch (error) {
        ErrorAlert(error);
      }
    },
    // Edit aktiviti sahabat
    editAktivitiSahabat: async (
      sahabatId,
      pembiayaanId,
      aktivitiId,
      aktivitiInput,
      closeModalEditAktiviti
    ) => {
      try {
        const response = await axiosCustom.put(
          `/sahabat/${sahabatId}/pembiayaan/${pembiayaanId}/aktiviti/${aktivitiId}`,
          aktivitiInput
        );

        if (response.status === 200) {
          set((state) => ({
            aktivitiSahabats: state.aktivitiSahabats.map((aktiviti) =>
              aktiviti.id === aktivitiId
                ? response.data.aktivitiSahabatData
                : aktiviti
            ),
          }));

          closeModalEditAktiviti();

          SuccessAlert(response.data.success);
        } else {
          ErrorAlert(response);
        }
      } catch (error) {
        ErrorAlert(error);
      }
    },
    // Delete aktiviti sahabat
    deleteAktivitiSahabat: async (aktivitiId) => {
      try {
        DeletionAlert(async () => {
          const response = await axiosCustom.delete(
            `/sahabat/aktiviti/${aktivitiId}`
          );

          if (response.status === 200) {
            set((state) => ({
              aktivitiSahabats: state.aktivitiSahabats.filter(
                (aktiviti) => aktiviti.id !== aktivitiId
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
