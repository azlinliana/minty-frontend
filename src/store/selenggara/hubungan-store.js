import { create } from "zustand";
import axiosCustom from "../../axios";
import SuccessAlert from "../../views/components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../views/components/sweet-alert/ErrorAlert";
import DeletionAlert from "../../views/components/sweet-alert/DeletionAlert";

const URL = "selenggara/hubungan";

export const useHubunganStore = create((set) => ({
  hubungans: [],
  // Fetch hubungan
  fetchHubungans: async () => {
    const response = await axiosCustom.get(URL);

    set({ hubungans: response.data }); 
  },
  // Create hubungan
  createHubungan: async (hubunganInput, closeModalCreateHubungan) => {
    try {
      const response = await axiosCustom.post(
        URL,
        hubunganInput
      );

      if (response.status === 200) {
        set((state) => ({
          hubungans: [
            ...state.hubungans,
            response.data.hubunganData
          ],
        }));

        closeModalCreateHubungan();

        SuccessAlert(response.data.success);
      } else {
        ErrorAlert(response);
      }
    } catch (error) {
      ErrorAlert(error);
    }
  },
  // Edit hubungan
  editHubungan: async (hubunganId, hubunganInput, closeModalEditHubungan) => {
    try {
      const response = await axiosCustom.put(
        `${URL}/${hubunganId}`,
        hubunganInput
      );

      if (response.status === 200) {
        set((state) => ({
          hubungans: state.hubungans.map((hubungan) =>
            hubungan.id === hubunganId ? response.data.hubunganData : hubungan
          ),
        }));

        closeModalEditHubungan();

        SuccessAlert(response.data.success);
      } else {
        ErrorAlert(response);
      }
    } catch (error) {
      ErrorAlert(error);
    }
  },
  // Delete hubungan
  deleteHubungan: async (hubunganId) => {
    try {
      DeletionAlert(async () => {
        const response = await axiosCustom.delete(
          `${URL}/${hubunganId}`
        );

        if (response.status === 200) {
          set((state) => ({
            hubungans: state.hubungans.filter(
              (hubungan) => hubungan.id !== hubunganId
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
