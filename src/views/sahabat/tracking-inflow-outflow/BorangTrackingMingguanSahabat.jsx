import React from "react";
import "../Sahabat.css";
import Stepper from "./Stepper.jsx";

function BorangTrackingMingguanSahabat({sahabatId, pembiayaanId, mingguId}) {
  return(
    <div className="sahabatTrackingContent">
      <div className="progressBarContainer">
        <h2>Borang Tracking Mingguan Sahabat</h2>

        <Stepper sahabatId={sahabatId} pembiayaanId={pembiayaanId} mingguId={mingguId} />
      </div>
    </div>
  );
}

export default BorangTrackingMingguanSahabat;
