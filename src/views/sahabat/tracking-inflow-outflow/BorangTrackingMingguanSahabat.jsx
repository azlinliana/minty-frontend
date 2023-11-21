import React from "react";
import "../sahabat.css";

import Stepper from "./Stepper.jsx";

function BorangTrackingMingguanSahabat({mingguId}) {
  return(
    <div className="sahabatTrackingContent">
      <div className="progressBarContainer">
        <h2>Borang Tracking Mingguan Sahabat</h2>

        <Stepper mingguId={mingguId} />
      </div>
    </div>
  );
}

export default BorangTrackingMingguanSahabat;