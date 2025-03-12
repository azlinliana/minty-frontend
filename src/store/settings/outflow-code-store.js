import { create } from "zustand";
import axiosCustom from "../../axios";
import SuccessAlert from "../../views/components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../views/components/sweet-alert/ErrorAlert";
import DeletionAlert from "../../views/components/sweet-alert/DeletionAlert";

const URL = "settings/kod-outflow";

export const useOutflowCodeStore = create((set) => ({
  outflowCodes: [],
  // Fetch outflow code
  fetchOutflowCodes: async () => {
    const response = await axiosCustom.get(URL);

    set({ outflowCodes: response.data });
  },
  // Create outflow code
  createOutflowCode: async (outflowcodeInput, closeModalCreateOutflowCode) => {
    try {
      const response = await axiosCustom.post(
        URL,
        outflowcodeInput
      );

      if (response.status === 200) {
        set((state) => ({
          outflowcodes: [
            ...state.outflowcodes, 
            response.data.outflowcodeData
          ],
        }));

        closeModalCreateOutflowCode();

        SuccessAlert(response.data.success);
      } else {
        ErrorAlert(response);
      }
    } catch (error) {
      ErrorAlert(error);
    }
  },
  // Edit outflow code
  editOutflowCode: async (
    outflowcodeId,
    outflowcodeInput,
    closeModalEditOutflowCode
  ) => {
    try {
      const response = await axiosCustom.put(
        `${URL}/${outflowcodeId}`,
        outflowcodeInput
      );

      if (response.status === 200) {
        set((state) => ({
          outflowcodes: state.outflowcodes.map((outflowcode) =>
            outflowcode.id === outflowcodeId ? response.data.outflowcodeData : outflowcode
          ),
        }));

        closeModalEditOutflowCode();

        SuccessAlert(response.data.success);
      }
    } catch (error) {
      ErrorAlert(error);
    }
  },
  // Delete outflow code
  deleteOutflowCode: async (outflowcodeId) => {
    try {
      DeletionAlert(async () => {
        const response = await axiosCustom.delete(`${URL}/${outflowcodeId}`);

        if (response.status === 200) {
          set((state) => ({
            outflowcodes: state.outflowcodes.filter(
              (outflowcode) => outflowcode.id !== outflowcodeId
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
  // Display outflow code
}));
