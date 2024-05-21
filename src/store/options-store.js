import { create } from "zustand";
import axiosCustom from "../axios";

// _____________________________________________________________________________ Skim Pembiayaan Options_____________________________________________________________
export const useSkimPembiayaanStore = create((set) => ({
  skimPembiayaanOptions: [],
  // Skim Pembiayaan
  displaySkimPembiayaans: async () => {
    const response = await axiosCustom.get(`option/get-skim-pembiayaan`);

    set({ skimPembiayaanOptions: response.data });
  },
}));

// _____________________________________________________________________________ Aktiviti Options____________________________________________________________________
export const useActivitiStore = create((set) => ({
  aktivitiOptions: [],
  keteranganAktivitiOptions: [],
  projekAktivitiOptions: [],
  // Aktiviti
  displayAktivitis: async () => {
    const response = await axiosCustom.get(``);

    set({ aktivitiOptions: response.data });
  },
  // Keterangan aktiviti
  displayKeteranganAktivitis: async () => {
    const response = await axiosCustom.get(``);

    set({ keteranganAktivitiOptions: response.data });
  },
  // Projek aktiviti
  displayProjekAktivitis: async () => {
    const response = await axiosCustom.get(``);

    set({ projekAktivitiOptions: response.data });
  },
}));

// _____________________________________________________________________________ Lokasi Options____________________________________________________________________
export const useLokasiStore = create((set) => ({
  wilayahOptions: [],
  cawanganOptions: [],
  pusatOptions: [],
  // Wilayah
  displayWilayahs: async () => {
    const response = await axiosCustom.get(`/option/get-wilayah`);

    set({ wilayahOptions: response.data });
  },
  // Cawangan
  displayCawangans: async () => {
    const response = await axiosCustom.get(`option/get-cawangan`);

    set({ cawanganOptions: response.data });
  },
  // Pusat
  displayPusats: async () => {
    const response = await axiosCustom.get(`option/get-pusat`);

    set({ pusatOptions: response.data });
  },
}));

// ____________________________________________________________________________ Selenggara Options_________________________________________________________________
// Kod inflow
export const useSelenggaraStore = create((set) => ({
  kodInflowOptions: [],
  kodOutflowOptions: [],
  dimensiOptions: [],
  hubunganOptions: [],
  // Display kod inflow
  displayKodInflows: async () => {
    const response = await axiosCustom.get(
      `option/kod-inflow/display-kod-inflow`
    );

    set({ kodInflowOptions: response.data });
  },
  // Kod outflow
  displayKodOutflows: async () => {
    const response = await axiosCustom.get(
      `option/kod-outflow/display-kod-outflow`
    );

    set({ kodOutflowOptions: response.data });
  },
  // Dimensi
  displayDimensis: async () => {
    const response = await axiosCustom.get(
      `option/dimensi/display-dimensi`
    );

    set({ dimensiOptions: response.data });
  },
  // Hubungan
  displayHubungans: async () => {
    const response = await axiosCustom.get(
      `option/hubungan/display-hubungan`
    );

    set({ hubunganOptions: response.data });
  },
}));
