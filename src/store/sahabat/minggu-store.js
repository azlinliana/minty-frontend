import { create } from "zustand";
import axiosCustom from "../../axios";
import SuccessAlert from "../../views/components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../views/components/sweet-alert/ErrorAlert";
import DeletionAlert from "../../views/components/sweet-alert/DeletionAlert";

export const useMingguStore = create((set) => ({
  mingguPembiayaanSahabats: [],
  currentMingguPembiayaanSahabat: {},
  // Fetch minggu pembiayaan sahabat
  fetchMingguPembiayaanSahabats: async (sahabatId, pembiayaanId) => {
    const response = await axiosCustom.get(
      `/sahabat/${sahabatId}/pembiayaan/${pembiayaanId}/minggu`
    );

    set((state) => ({
      mingguPembiayaanSahabats: {
        ...state.mingguPembiayaanSahabats,
        [pembiayaanId]: response.data,
      }
    }));
  },
  // Create minggu pembiayaan sahabat
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
          mingguPembiayaanSahabats: {
            ...state.mingguPembiayaanSahabats,
            [pembiayaanId]: [
              ...state.mingguPembiayaanSahabats[pembiayaanId],
              response.data.mingguPembiayaanSahabatData,
            ],
          },
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
      
      set((state) => ({
        currentMingguPembiayaanSahabat: response.data,
        mingguPembiayaanSahabats: state.mingguPembiayaanSahabats.map((minggu) =>
          minggu.id === mingguId ? response.data : minggu
        ),
      }));
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
    try {
      const response = await axiosCustom.put(
        `/sahabat/${sahabatId}/pembiayaan/${pembiayaanId}/minggu/${mingguId}`,
        mingguPembiayaanSahabatInput
      );

      if (response.status === 200) {
        set((state) => ({
          currentMingguPembiayaanSahabat:
            response.data.mingguPembiayaanSahabatData,
          mingguPembiayaanSahabats: state.mingguPembiayaanSahabats.map((item) =>
            item.id === mingguId
              ? response.data.mingguPembiayaanSahabatData
              : item
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
    try {
      DeletionAlert(async () => {
        const response = await axiosCustom.delete(
          `/sahabat/minggu/${mingguPembiayaanSahabatId}`
        );

        if (response.status === 200) {
          set((state) => ({
            mingguPembiayaanSahabats: state.mingguPembiayaanSahabats.filter(
              (mingguPembiayaanSahabat) =>
                mingguPembiayaanSahabat.id !== mingguPembiayaanSahabatId
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
