import React from "react";
import "../sahabat.css";
import Stepper from "./Stepper.jsx";

function BorangTrackingMingguanSahabat() {
  return(
    <div className="sahabatTrackingContent">

    <div className="progressBarContainer">
      <h2>Borang Tracking Mingguan Sahabat</h2>

      <Stepper />
    </div>
  </div>
  );
}

export default BorangTrackingMingguanSahabat;