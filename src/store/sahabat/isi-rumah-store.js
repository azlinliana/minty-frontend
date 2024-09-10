import { create } from "zustand";
import { devtools } from "zustand/middleware";
import axiosCustom from "../../axios";
import SuccessAlert from "../../views/components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../views/components/sweet-alert/ErrorAlert";
import DeletionAlert from "../../views/components/sweet-alert/DeletionAlert";

export const useIsiRumahStore = create(
  devtools((set) => ({
    isiRumahSahabats: [],
    // Fetch isi rumah sahabat
    fetchIsiRumahSahabats: async (mingguId) => {
      const response = await axiosCustom.get(`/sahabat/isi-rumah/${mingguId}`);

      set({ isiRumahSahabats: response.data });
    },
    // Create isi rumah sahabat
    createIsiRumahSahabat: async (
      mingguId,
      isiRumahInput,
      closeModalCreateIsiRumah
    ) => {
      try {
        const response = await axiosCustom.post(
          `/sahabat/isi-rumah/${mingguId}`,
          isiRumahInput
        );

        if (response.status === 200) {
          set((state) => ({
            isiRumahSahabats: [
              ...state.isiRumahSahabats,
              response.data.isiRumahSahabatData,
            ],
          }));

          closeModalCreateIsiRumah();

          SuccessAlert(response.data.success);
        } else {
          ErrorAlert(response);
        }
      } catch (error) {
        ErrorAlert(error);
      }
    },
    // Edit isi rumah sahabat
    editIsiRumahSahabat: async (
      isiRumahId,
      isiRumahInput,
      closeModalEditIsiRumah
    ) => {
      try {
        const response = await axiosCustom.put(
          `/sahabat/isi-rumah/${isiRumahId}`,
          isiRumahInput
        );

        if (response.status === 200) {
          set((state) => ({
            isiRumahSahabats: state.isiRumahSahabats.map((isiRumahSahabat) =>
              isiRumahSahabat.id === isiRumahId
                ? response.data.isiRumahSahabatData
                : isiRumahSahabat
            ),
          }));

          closeModalEditIsiRumah();

          SuccessAlert(response.data.success);
        } else {
          ErrorAlert(response);
        }
      } catch (error) {
        ErrorAlert(error);
      }
    },
    // Delete isi rumah sahabat
    deleteIsiRumahSahabat: async (isiRumahId) => {
      try {
        DeletionAlert(async () => {
          const response = await axiosCustom.delete(
            `/sahabat/isi-rumah/${isiRumahId}`
          );

          if (response.status === 200) {
            set((state) => ({
              isiRumahSahabats: state.isiRumahSahabats.filter(
                (isiRumahSahabat) => isiRumahSahabat.id !== isiRumahId
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
