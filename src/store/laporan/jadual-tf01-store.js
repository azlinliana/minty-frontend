import { create } from "zustand";
import axiosCustom from "../../axios";

const URL = "";

export const useJadualTF01Store = create((set) => ({
  jadualTF01s: [],
  // Fetch jadual tf01
  fetchJadualTF01s: async () => {
    const response = await axiosCustom.get();

    set({ jadualTF01s: response.data });
  },
  // Display jadual tf01
}));