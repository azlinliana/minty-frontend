import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../Sahabat.css";
import IndexTrackingInflowSahabat from "../sahabat/inflow/Index";
import IndexTrackingOutflowSahabat from "../sahabat/outflow/Index";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function IndexTrackingSahabat({ mingguId }) {
  // ----------FE----------
  // Tab tracking sahabat
  const [activeTab, setActiveTab] = useState({
    key: "tracking-inflow-sahabat",
    title: "Inflow",
  });
  const handleTabInflowOutflowSahabatChange = (key, title) => {
    setActiveTab({ key, title });
  };

  return (
    <div className="inputStepsContainer">
      <h2>Maklumat Tracking {activeTab.title} Sahabat</h2>

      <Tabs
        id="tracking-inflow-outflow-sahabat"
        className="mb-3"
        activeKey={activeTab.key}
        onSelect={(key) =>
          handleTabInflowOutflowSahabatChange(
            key,
            key === "tracking-inflow-sahabat" ? "Inflow" : "Outflow"
          )
        }
      >
        <Tab eventKey="tracking-inflow-sahabat" title="Inflow">
          <IndexTrackingInflowSahabat mingguId={mingguId} />
        </Tab>

        <Tab eventKey="tracking-outflow-sahabat" title="Outflow">
          <IndexTrackingOutflowSahabat mingguId={mingguId} />
        </Tab>
      </Tabs>
    </div>
  );
}

export default IndexTrackingSahabat;
