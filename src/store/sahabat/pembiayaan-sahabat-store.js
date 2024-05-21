import { create } from "zustand";
import axiosCustom from "../../axios";

const URL = "sahabat/pembiayaan";

export const usePembiayaanSahabatStore = create((set) => ({
  pembiayaanSahabats: [],
  // Fetch pembiayaan sahabat
  fetchPembiayaanSahabats: async (sahabatId) => {
    const response = await axiosCustom.get(`${URL}/${sahabatId}`);

    set({ pembiayaans: response.data });
  },
  // Create pembiayaan sahaat
  createPembiayaanSahabat: async (pembiayaanSahabatInput) => {
    const response = await axiosCustom.post(
      `URL/${sahabatId}`,
      pembiayaanSahabatInput
    );

    set({ pembiayaans: response.data });
    
    return get().pembiayaanSahabats;

  },
  // Edit pembiayaan sahabat
  editPembiayaanSahabat: async (pembiayaanSahabatInput) => {
    const response = await axiosCustom.put(
      `sahabat/${sahabatId}/pembiayaan/${pembiayaanId}`,
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
  deletePembiayaanSahabat: async (pembiayaanId) => {
    await axiosCustom.delete(`URL/${sahabatId}/pembiayaan/${pembiayaanId}`);

    set((state) => ({
      pembiayaans: state.pembiayaans.filter(
        (pembiayaan) => pembiayaan.id !== pembiayaanId
      )
    }));
  },
}));
