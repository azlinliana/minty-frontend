import { create } from "zustand";
import axiosCustom from "../../axios";
import SuccessAlert from "../../views/components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../views/components/sweet-alert/ErrorAlert";
import DeletionAlert from "../../views/components/sweet-alert/DeletionAlert";

const URL = "selenggara/kod-inflow";

export const useKodInflowStore = create((set, get) => ({
  kodInflows: [],
  // Fetch kod inflow
  fetchKodInflows: async () => {
    const response = await axiosCustom.get(URL);

    set({ kodInflows: response.data });
  },
  // Create kod inflow
  createKodInflow: async (kodInflowInput, closeModalCreateKodInflow) => {
    try {
      const response = await axiosCustom.post(URL, kodInflowInput);

      if (response.status === 200) {
        set((state) => ({
          kodInflows: [
            ...state.kodInflows, 
            response.data.kodInflowData
          ],
        }));

        closeModalCreateKodInflow();

        SuccessAlert(response.data.success);
      } else {
        ErrorAlert(response);
      }
    } catch (error) {
      ErrorAlert(error);
    }
  },
  // Edit without kod inflow terperinci
  editKodInflowWithoutKodInflowTerperinci: async (
    kodInflowId,
    kodInflowWithoutKodInflowTerperinciInput,
    closeModalEditKodInflowWithoutKodInflowTerperinci
  ) => {
    try {
      const response = await axiosCustom.put(
        `${URL}/${kodInflowId}`,
        kodInflowWithoutKodInflowTerperinciInput
      );

      if (response.status === 200) {
        set((state) => ({
          kodInflows: state.kodInflows.map((kodInflow) =>
            kodInflow.id === kodInflowId
              ? response.data.kodInflowData
              : kodInflow
          ),
        }));

        closeModalEditKodInflowWithoutKodInflowTerperinci();

        SuccessAlert(response.data.success);
      }
    } catch (error) {
      ErrorAlert(error);
    }
  },
  // Edit with kod inflow terperinci
  editKodInflowWithKodInflowTerperinci: async (
    kodInflowId,
    kodInflowTerperinciId,
    kodInflowWithKodInflowTerperinciInput,
    closeModalEditKodInflowWithKodInflowTerperinci
  ) => {
    try {
      const response = await axiosCustom.put(
        `${URL}/${kodInflowId}/kod-inflow-terperinci/${kodInflowTerperinciId}`,
        kodInflowWithKodInflowTerperinciInput
      );

      if (response.status === 200) {
        set((state) => ({
          kodInflows: state.kodInflows.map((kodInflow) =>
            kodInflow.id === kodInflowId
              ? response.data.kodInflowData
              : kodInflow
          ),
        }));

        closeModalEditKodInflowWithKodInflowTerperinci();

        SuccessAlert(response.data.success);
      }
    } catch (error) {
      ErrorAlert(error);
    }
  },
  // Delete kod inflow without kod inflow terperinci
  deleteKodInflowWithoutKodInflowTerperinci: async (kodInflowId) => {
    try {
      DeletionAlert(async () => {
        const response = await axiosCustom.delete(`${URL}/${kodInflowId}`);

        if (response.status === 200) {
          set((state) => ({
            kodInflows: state.kodInflows.filter(
              (kodInflow) => kodInflow.id !== kodInflowId
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
  // Delete kod inflow with kod inflow terperinci
  deleteKodInflowWithKodInflowTerperinci: async (kodInflowTerperinciId) => {
    try {
      DeletionAlert(async () => {
        const response = await axiosCustom.delete(
          `/selenggara/kod-inflow-terperinci/${kodInflowTerperinciId}`
        );

        if (response.status === 200) {
          set((state) => ({
            kodInflows: state.kodInflows.filter(
              (kodInflowTerperinci) =>
                kodInflowTerperinci.id !== kodInflowTerperinciId
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
  // Display kod inflow
  displayKodInflows: async () => {
    const response = await axiosCustom.get(
      `option/kod-inflow/display-kod-inflow`
    );

    set({ kodInflows: response.data });
    
    return get().kodInflows;
  },
}));
