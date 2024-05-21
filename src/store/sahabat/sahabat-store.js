import { create } from "zustand";
import axiosCustom from "../../axios";
import ErrorAlert from "../../views/components/sweet-alert/ErrorAlert";

export const useSahabatStore = create((set, get) => ({
  sahabats: [],
  // Search sahabat
  searchSahabat: async (noKadPengenalanSahabatInput) => {
    try {
      const response = await axiosCustom.post(
        `sahabat/search`,
        noKadPengenalanSahabatInput
      );

      if (response.status === 200) {
        set({ sahabats: response.data });

        return get().sahabats;
      } 
      else {
        ErrorAlert(response);
      }
    } catch (error) {
      ErrorAlert(error);
    }
  },
}));
