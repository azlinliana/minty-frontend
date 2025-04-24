import React from "react";
import Stepper from "./Stepper.jsx";
import "../../../assets/styles/styles_customers.css";
import { useProjekAktivitiStore } from "../../../store/options-store.js";
import { useSelenggaraStore } from "../../../store/options-store.js";

function BorangTrackingMingguanSahabat({
  sahabatId,
  pembiayaanId,
  mingguId,
  pembiayaanSahabatsData,
}) {
  // _____________________________ Frontend & Backend _____________________________
  // ============================== Dropdown Options ==============================
  // Populate data to the dropdown of borang tracking mingguan
  // Display aktiviti, keterangan aktiviti, and projek aktiviti options
  const {
    aktivitiOptions,
    displayAktivitis,
    keteranganAktivitiOptions,
    displayKeteranganAktivitis,
    projekAktivitiOptions,
    displayProjekAktivitis,
  } = useProjekAktivitiStore((state) => ({
    aktivitiOptions: state.aktivitiOptions,
    displayAktivitis: state.displayAktivitis,
    keteranganAktivitiOptions: state.keteranganAktivitiOptions,
    displayKeteranganAktivitis: state.displayKeteranganAktivitis,
    projekAktivitiOptions: state.projekAktivitiOptions,
    displayProjekAktivitis: state.displayProjekAktivitis,
  }));

  // Display kod inflow, kod outflow, hubungan options
  const {
    dimensiOptions,
    displayDimensis,
    kodInflowOptions,
    displayKodInflows,
    kodOutflowOptions,
    displayKodOutflows,
    hubunganOptions,
    displayHubungans,
  } = useSelenggaraStore((state) => ({
    dimensiOptions: state.dimensiOptions,
    displayDimensis: state.displayDimensis,
    kodInflowOptions: state.kodInflowOptions,
    displayKodInflows: state.displayKodInflows,
    kodOutflowOptions: state.kodOutflowOptions,
    displayKodOutflows: state.displayKodOutflows,
    hubunganOptions: state.hubunganOptions,
    displayHubungans: state.displayHubungans,
  }));
  // ==============================================================================

  return (
    <div className="card-funding-customer-content">
      <div>
        <h2>Customer Week Tracking Form</h2>

        <Stepper
          sahabatId={sahabatId}
          pembiayaanId={pembiayaanId}
          mingguId={mingguId}
          pembiayaanSahabatsData={pembiayaanSahabatsData}
          aktivitiOptions={aktivitiOptions}
          displayAktivitis={displayAktivitis}
          keteranganAktivitiOptions={keteranganAktivitiOptions}
          displayKeteranganAktivitis={displayKeteranganAktivitis}
          projekAktivitiOptions={projekAktivitiOptions}
          displayProjekAktivitis={displayProjekAktivitis}
          dimensiOptions={dimensiOptions}
          displayDimensis={displayDimensis}
          kodInflowOptions={kodInflowOptions}
          displayKodInflows={displayKodInflows}
          kodOutflowOptions={kodOutflowOptions}
          displayKodOutflows={displayKodOutflows}
          hubunganOptions={hubunganOptions}
          displayHubungans={displayHubungans}
        />
      </div>
    </div>
  );
}

export default BorangTrackingMingguanSahabat;
