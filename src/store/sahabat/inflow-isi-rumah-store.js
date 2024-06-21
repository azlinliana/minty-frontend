import { create } from "zustand";
import axiosCustom from "../../axios";
import SuccessAlert from "../../views/components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../views/components/sweet-alert/ErrorAlert";
import DeletionAlert from "../../views/components/sweet-alert/DeletionAlert";

export const useInflowIsiRumahStore = create((set) => ({
  inflowIsiRumahs: [],
  // Fetch inflow isi rumah
  fetchInflowIsiRumahs: async () => {},
  // Create inflow isi rumah
  createInflowIsiRumah: async () => {},
  // Edit inflow isi rumah
  editInflowIsiRumah: async () => {},
  // Delete inflow isi rumah
  deleteInflowIsiRumah: async () => {}
}))