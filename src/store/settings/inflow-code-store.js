import { create } from "zustand";
import axiosCustom from "../../axios";
import SuccessAlert from "../../views/components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../views/components/sweet-alert/ErrorAlert";
import DeletionAlert from "../../views/components/sweet-alert/DeletionAlert";

const URL = "settings/inflow-code";

export const useInflowCodeStore = create((set, get) => ({
  inflowCodes: [],
  // Fetch inflow code
  fetchInflowCodes: async () => {
    const response = await axiosCustom.get(URL);

    set({ inflowCodess: response.data });
  },
  // Create inflow code
  createInflowCode: async (inflowCodesInput, closeModalCreateInflowCode) => {
    try {
      const response = await axiosCustom.post(URL, inflowCodesInput);

      if (response.status === 200) {
        set((state) => ({
          inflowCodess: [
            ...state.inflowCodess, 
            response.data.inflowCodesData
          ],
        }));

        closeModalCreateInflowCode();

        SuccessAlert(response.data.success);
      } else {
        ErrorAlert(response);
      }
    } catch (error) {
      ErrorAlert(error);
    }
  },
  // Edit without inflow code terperinci
  editInflowCodeWithoutInflowCodesTerperinci: async (
    inflowCodesId,
    inflowCodesWithoutinflowCodesTerperinciInput,
    closeModalEditinflowCodesWithoutinflowCodesTerperinci
  ) => {
    try {
      const response = await axiosCustom.put(
        `${URL}/${inflowCodesId}`,
        inflowCodesWithoutinflowCodesTerperinciInput
      );

      if (response.status === 200) {
        set((state) => ({
          inflowCodess: state.inflowCodess.map((inflowCodes) =>
            inflowCodes.id === inflowCodesId
              ? response.data.inflowCodesData
              : inflowCodes
          ),
        }));

        closeModalEditinflowCodesWithoutinflowCodesTerperinci();

        SuccessAlert(response.data.success);
      }
    } catch (error) {
      ErrorAlert(error);
    }
  },
  // Edit with inflow code terperinci
  editInflowCodeWithInflowCodesTerperinci: async (
    inflowCodesId,
    inflowCodesTerperinciId,
    inflowCodesWithinflowCodesTerperinciInput,
    closeModalEditinflowCodesWithinflowCodesTerperinci
  ) => {
    try {
      const response = await axiosCustom.put(
        `${URL}/${inflowCodesId}/kod-inflow-terperinci/${inflowCodesTerperinciId}`,
        inflowCodesWithinflowCodesTerperinciInput
      );

      if (response.status === 200) {
        set((state) => ({
          inflowCodess: state.inflowCodess.map((inflowCodes) =>
            inflowCodes.id === inflowCodesId
              ? response.data.inflowCodesData
              : inflowCodes
          ),
        }));

        closeModalEditinflowCodesWithinflowCodesTerperinci();

        SuccessAlert(response.data.success);
      }
    } catch (error) {
      ErrorAlert(error);
    }
  },
  // Delete inflow code without inflow code terperinci
  deleteInflowCodeWithoutInflowCodesTerperinci: async (inflowCodesId) => {
    try {
      DeletionAlert(async () => {
        const response = await axiosCustom.delete(`${URL}/${inflowCodesId}`);

        if (response.status === 200) {
          set((state) => ({
            inflowCodess: state.inflowCodess.filter(
              (inflowCodes) => inflowCodes.id !== inflowCodesId
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
  // Delete inflow code with inflow code terperinci
  deleteInflowCodeWithInflowCodesTerperinci: async (inflowCodesTerperinciId) => {
    try {
      DeletionAlert(async () => {
        const response = await axiosCustom.delete(
          `/selenggara/kod-inflow-terperinci/${inflowCodesTerperinciId}`
        );

        if (response.status === 200) {
          set((state) => ({
            inflowCodess: state.inflowCodess.filter(
              (inflowCodesTerperinci) =>
                inflowCodesTerperinci.id !== inflowCodesTerperinciId
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
  // Display inflow code
  displayInflowCodes: async () => {
    const response = await axiosCustom.get(
      `option/kod-inflow/display-kod-inflow`
    );

    set({ inflowCodess: response.data });
    
    return get().inflowCodess;
  },
}));
