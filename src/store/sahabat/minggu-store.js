import { create } from "zustand";
import axiosCustom from "../../axios";

export const useMingguStore = create((set) => ({
  minggus: [],
  // Fetch minggu pembiayaan sahabat
  fetchMingguPembiayaanSahabat: async () => {
    const response = await axiosCustom.get(`/sahabat/${sahabatId}/pembiayaan/${pembiayaanId}/minggu`);

    set({ minggus: response.data });
  },
  // Create pembiayaan sahaat
  createMingguPembiayaanSahabat: async (mingguPembiayaanSahabatInput) => {
    const response = await axiosCustom.post(
      `/sahabat/${sahabatId}/pembiayaan/${pembiayaanId}/minggu`,
      mingguPembiayaanSahabatInput
    );

    set({ minggus: response.data });
  },
  // Edit pembiayaan sahabat
  editPembiayaanSahabat: async (pembiayaanSahabatInput) => {
    const response = await axiosCustom.put(
      `${sahabatId}/pembiayaan/${pembiayaanId}/minggu/${mingguId}`,
      pembiayaanSahabatInput
    );

    set({ 
      pembiayaans: [
        ...state.pembiayaans, 
        response.data.pembiayaanData
      ],
    });
  },
  // Delete pembiayaan sahabat
  deletePembiayaanSahabat: async (mingguPembiayaanSahabatId) => {
    await axiosCustom.delete(`/sahabat/minggu/${mingguPembiayaanSahabatId}`);

    set((state) => ({
      minggus: state.minggus.filter(
        (mingguPembiayaanSahabat) => mingguPembiayaanSahabat.id !== mingguPembiayaanSahabatId
      )
    }));
  },
}));