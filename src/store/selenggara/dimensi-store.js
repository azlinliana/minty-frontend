import { create } from "zustand";
import axiosCustom from "../../axios";
import SuccessAlert from "../../views/components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../views/components/sweet-alert/ErrorAlert";
import DeletionAlert from "../../views/components/sweet-alert/DeletionAlert";

const URL = "selenggara/dimensi";

export const useDimensiStore = create((set) => ({
  dimensis: [],
  // Fetch dimensi
  fetchDimensis: async () => {
    const response = await axiosCustom.get(URL);
    
    set({ dimensis: response.data });
  },
  // Create dimensi
  createDimensi: async (dimensiInput, closeModalCreateDimensi) => {
    try {
      const response = await axiosCustom.post(
        URL,
        dimensiInput
      );

      if (response.status === 200) {
        set((state) => ({
          dimensis: [
            ...state.dimensis, 
            response.data.dimensiData
          ],
        }));

        closeModalCreateDimensi();

        SuccessAlert(response.data.success);
      } else {
        ErrorAlert(response);
      }
    } catch (error) {
      ErrorAlert(error);
    }
  },
  // Edit dimensi
  editDimensi: async (dimensiId, dimensiInput, closeModalEditDimensi) => {
    try {
      const response = await axiosCustom.put(
        `${URL}/${dimensiId}`,
        dimensiInput
      );

      if (response.status === 200) {
        set((state) => ({
          dimensis: state.dimensis.map((dimensi) =>
            dimensi.id === dimensiId ? response.data.dimensiData : dimensi
          ),
        }));

        closeModalEditDimensi();

        SuccessAlert(response.data.success);
      } else {
        ErrorAlert(response);
      }
    } catch (error) {
      ErrorAlert(error);
    }
  },
  // Delete dimensi
  deleteDimensi: async (dimensiId) => {
    try {
      DeletionAlert(async () => {
        const response = await axiosCustom.delete(
          `${URL}/${dimensiId}`
        );

        if (response.status === 200) {
          set((state) => ({
            dimensis: state.dimensis.filter(
              (dimensi) => dimensi.id !== dimensiId
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
