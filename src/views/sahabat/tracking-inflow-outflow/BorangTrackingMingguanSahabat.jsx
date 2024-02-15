import React from "react";
import Stepper from "./Stepper.jsx";
import "../../../assets/styles/styles_sahabat.css";

function BorangTrackingMingguanSahabat({ sahabatId, pembiayaanId, mingguId, pembiayaanSahabatsData }) {
  return (
    <div className="sahabatTrackingContent">
      <div className="progressBarContainer">
        <h2>Borang Tracking Mingguan Sahabat</h2>

        <Stepper
          sahabatId={sahabatId}
          pembiayaanId={pembiayaanId}
          mingguId={mingguId}
          pembiayaanSahabatsData={pembiayaanSahabatsData}
        />
      </div>
    </div>
  );
}

export default BorangTrackingMingguanSahabat;
