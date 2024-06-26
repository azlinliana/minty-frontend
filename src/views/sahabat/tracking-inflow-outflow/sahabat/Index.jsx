import React, { useState, useEffect, useCallback } from "react";
import IndexTrackingInflowSahabat from "../sahabat/inflow/Index";
import IndexTrackingOutflowSahabat from "../sahabat/outflow/Index";
import { Tab, Tabs } from "react-bootstrap";
import "../../../../assets/styles/styles_sahabat.css";

function IndexTrackingSahabat({ 
  mingguId, 
  pembiayaanSahabatsData,
  kodInflowOptions,
  displayKodInflows,
  kodOutflowOptions,
  displayKodOutflows,
}) {
  // __________________________________ Frontend __________________________________
  // Tab tracking sahabat
  const [activeTab, setActiveTab] = useState({
    key: "tracking-inflow-sahabat",
    title: "Inflow",
  });

  const handleTabInflowOutflowSahabatChange = (key, title) => {
    setActiveTab({ key, title });
  };

  // ___________________________________ Backend __________________________________
  // ============================== Dropdown Options ==============================
  useEffect(() => {
    displayKodInflows();
    displayKodOutflows();
  }, [displayKodInflows, displayKodOutflows]);
  // ==============================================================================
  
  return (
    <div>
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
          <IndexTrackingInflowSahabat
            mingguId={mingguId}
            pembiayaanSahabatsData={pembiayaanSahabatsData}
            kodInflowOptions={kodInflowOptions}
          />
        </Tab>

        <Tab eventKey="tracking-outflow-sahabat" title="Outflow">
          <IndexTrackingOutflowSahabat
            mingguId={mingguId}
            pembiayaanSahabatsData={pembiayaanSahabatsData}
            kodOutflowOptions={kodOutflowOptions}
          />
        </Tab>
      </Tabs>
    </div>
  );
}

export default IndexTrackingSahabat;
