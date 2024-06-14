import { create } from "zustand";
import axiosCustom from "../../axios";
import SuccessAlert from "../../views/components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../views/components/sweet-alert/ErrorAlert";
import DeletionAlert from "../../views/components/sweet-alert/DeletionAlert";

const URL = "sahabat/pembiayaan";

export const usePembiayaanStore = create((set) => ({
  pembiayaanSahabats: [],
  // Fetch pembiayaan sahabat
  fetchPembiayaanSahabats: async (sahabatId) => {
    const response = await axiosCustom.get(`${URL}/${sahabatId}`);

    set({ pembiayaanSahabats: response.data });
  },
  // Create pembiayaan sahabat
  createPembiayaanSahabat: async (
    sahabatId,
    pembiayaanSahabatInput,
    closeModalCreatePembiayaanSahabat
  ) => {
    try {
      const response = await axiosCustom.post(
        `${URL}/${sahabatId}`,
        pembiayaanSahabatInput
      );

      if (response.status === 200) {
        set((state) => ({
          pembiayaanSahabats: [
            ...state.pembiayaanSahabats,
            response.data.pembiayaanSahabatData,
          ],
        }));

        closeModalCreatePembiayaanSahabat();

        SuccessAlert(response.data.success);
      } else {
        ErrorAlert(response);
      }
    } catch (error) {
      ErrorAlert(error);
    }
  },
  // Edit pembiayaan sahabat
  editPembiayaanSahabat: async (
    sahabatId,
    pembiayaanId,
    pembiayaanSahabatInput,
    closeModalEditPembiayaanSahabat
  ) => {
    try {
      const response = await axiosCustom.put(
        `sahabat/${sahabatId}/pembiayaan/${pembiayaanId}`,
        pembiayaanSahabatInput
      );

      if (response.status === 200) {
        set((state) => ({
          pembiayaanSahabats: state.pembiayaanSahabats.map(
            (pembiayaanSahabat) =>
              pembiayaanSahabat.id === pembiayaanId
                ? response.data.pembiayaanSahabatData
                : pembiayaanSahabat
          ),
        }));

        closeModalEditPembiayaanSahabat();

        SuccessAlert(response.data.success);
      } else {
        ErrorAlert(response);
      }
    } catch (error) {
      ErrorAlert(error);
    }
  },
  // Delete pembiayaan sahabat
  deletePembiayaanSahabat: async (sahabatId, pembiayaanId) => {
    try {
      DeletionAlert(async () => {
        const response = await axiosCustom.delete(
          `${URL}/${sahabatId}/pembiayaan/${pembiayaanId}`
        );

        if (response.status === 200) {
          set((state) => ({
            pembiayaanSahabats: state.pembiayaanSahabats.filter(
              (pembiayaanSahabat) => pembiayaanSahabat.id !== pembiayaanId
            ),
          }));

          SuccessAlert(response.data.success);
        } else {
          ErrorAlert(response);
        }
      });

      set((state) => ({
        pembiayaans: state.pembiayaans.filter(
          (pembiayaan) => pembiayaan.id !== pembiayaanId
        ),
      }));
    } catch (error) {
      ErrorAlert(error);
    }
  }
}));
