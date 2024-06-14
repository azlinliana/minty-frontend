import { create } from "zustand";
import axiosCustom from "../../axios";
import SuccessAlert from "../../views/components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../views/components/sweet-alert/ErrorAlert";
import DeletionAlert from "../../views/components/sweet-alert/DeletionAlert";

export const useMingguStore = create((set) => ({
  mingguPembiayaanSahabats: [],
  // Fetch minggu pembiayaan sahabat
  fetchMingguPembiayaanSahabats: async (sahabatId, pembiayaanId) => {
    const response = await axiosCustom.get(
      `/sahabat/${sahabatId}/pembiayaan/${pembiayaanId}/minggu`
    );

    set({ mingguPembiayaanSahabats: response.data });
  },
  // Create minggu pembiayaan sahaat
  createMingguPembiayaanSahabat: async (
    sahabatId,
    pembiayaanId,
    mingguPembiayaanSahabatInput,
    closeModalCreateMingguPembiayaanSahabat
  ) => {
    try {
      const response = await axiosCustom.post(
        `/sahabat/${sahabatId}/pembiayaan/${pembiayaanId}/minggu`,
        mingguPembiayaanSahabatInput
      );

      if (response.status === 200) {
        set((state) => ({
          mingguPembiayaanSahabats: [
            ...state.mingguPembiayaanSahabats,
            response.data.mingguPembiayaanSahabatData,
          ],
        }));

        closeModalCreateMingguPembiayaanSahabat();

        SuccessAlert(response.data.success);
      } else {
        ErrorAlert(response);
      }
    } catch (error) {
      ErrorAlert(error);
    }
  },
  // Show minggu pembiayaan sahabat
  showMingguPembiayaanSahabat: async (sahabatId, pembiayaanId, mingguId) => {
    try {
      const response = await axiosCustom.get(
        `/sahabat/${sahabatId}/pembiayaan/${pembiayaanId}/minggu/${mingguId}`
      );

      set({ mingguPembiayaanSahabats: response.data });
    } catch (error) {
      ErrorAlert(error);
    }
  },
  // Edit minggu pembiayaan sahabat
  editMingguPembiayaanSahabat: async (
    sahabatId,
    pembiayaanId,
    mingguId,
    mingguPembiayaanSahabatInput,
    closeModalEditMingguPembiayaanSahabat
  ) => {
    console.log(mingguPembiayaanSahabatInput);
    try {
      const response = await axiosCustom.put(
        `/sahabat/${sahabatId}/pembiayaan/${pembiayaanId}/minggu/${mingguId}`,
        mingguPembiayaanSahabatInput
      );

      if (response.status === 200) {
        set((state) => ({
          mingguPembiayaanSahabats: state.mingguPembiayaanSahabats.map(
            (mingguPembiayaanSahabat) =>
              mingguPembiayaanSahabat.id === mingguId
                ? response.data.mingguPembiayaanSahabatData
                : mingguPembiayaanSahabat
          ),
        }));

        closeModalEditMingguPembiayaanSahabat();

        SuccessAlert(response.data.success);
      } else {
        ErrorAlert(response);
      }
    } catch (error) {
      ErrorAlert(error);
    }
  },
  // Delete pembiayaan sahabat
  deleteMingguPembiayaanSahabat: async (mingguPembiayaanSahabatId) => {
    await axiosCustom.delete(`/sahabat/minggu/${mingguPembiayaanSahabatId}`);

    set((state) => ({
      mingguPembiayaanSahabats: state.minggus.filter(
        (mingguPembiayaanSahabat) =>
          mingguPembiayaanSahabat.id !== mingguPembiayaanSahabatId
      ),
    }));
  },
}));
