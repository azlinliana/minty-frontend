import { create } from "zustand";
import axiosCustom from "../../axios";
import SuccessAlert from "../../views/components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../views/components/sweet-alert/ErrorAlert";
import DeletionAlert from "../../views/components/sweet-alert/DeletionAlert";

const URL = "selenggara/kod-outflow";

export const useKodOutflowStore = create((set) => ({
  kodOutflows: [],
  // Fetch kod outflow
  fetchKodOutflows: async () => {
    const response = await axiosCustom.get(URL);

    set({ kodOutflows: response.data });
  },
  // Create kod outflow
  createKodOutflow: async (kodOutflowInput, closeModalCreateKodOutflow) => {
    try {
      const response = await axiosCustom.post(
        URL,
        kodOutflowInput
      );

      if (response.status === 200) {
        set((state) => ({
          kodOutflows: [
            ...state.kodOutflows, 
            response.data.kodOutflowData
          ],
        }));

        closeModalCreateKodOutflow();

        SuccessAlert(response.data.success);
      } else {
        ErrorAlert(response);
      }
    } catch (error) {
      ErrorAlert(error);
    }
  },
  // Edit kod outflow
  editKodOutflow: async (
    kodOutflowId,
    kodOutflowInput,
    closeModalEditKodOutflow
  ) => {
    try {
      const response = await axiosCustom.put(
        `${URL}/${kodOutflowId}`,
        kodOutflowInput
      );

      if (response.status === 200) {
        set((state) => ({
          kodOutflows: state.kodOutflows.map((kodOutflow) =>
            kodOutflow.id === kodOutflowId ? response.data.kodOutflowData : kodOutflow
          ),
        }));

        closeModalEditKodOutflow();

        SuccessAlert(response.data.success);
      }
    } catch (error) {
      ErrorAlert(error);
    }
  },
  // Delete kod outflow
  deleteKodOutflow: async (kodOutflowId) => {
    try {
      DeletionAlert(async () => {
        const response = await axiosCustom.delete(`${URL}/${kodOutflowId}`);

        if (response.status === 200) {
          set((state) => ({
            kodOutflows: state.kodOutflows.filter(
              (kodOutflow) => kodOutflow.id !== kodOutflowId
            ),
          }));

          SuccessAlert(response.data.success);
        } else {
          ErrorAlert(response); // Handle error from the backend or unknown error from the server side
        }
      });
    } catch (error) {
      ErrorAlert(error); // Handle network error or other errors
    }
  },
  // Display kod outflow
}));
