import { create } from "zustand";
import axiosCustom from "../../axios";

export const useProfilSahabatStore = create((set, get) => ({
  profilSahabats: [],
}));
