import React, { useState, useEffect } from "react";
import IndexTrackingInflowSahabat from "../sahabat/inflow/Index";
import IndexTrackingOutflowSahabat from "../sahabat/outflow/Index";
import { Tab, Tabs } from "react-bootstrap";
import "../../../../assets/styles/styles_customers.css";

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
  // useEffect(() => {
  //   displayKodInflows();
  //   displayKodOutflows();
  // }, [displayKodInflows, displayKodOutflows]);
  // ==============================================================================

  return (
    <div>
      <h2>{activeTab.title} Customer Tracking Information</h2>

      <Tabs
        id="tracking-inflow-outflow-customer"
        className="mb-3"
        activeKey={activeTab.key}
        onSelect={(key) =>
          handleTabInflowOutflowSahabatChange(
            key,
            key === "tracking-inflow-customer" ? "Inflow" : "Outflow"
          )
        }
      >
        <Tab eventKey="tracking-inflow-customer" title="Inflow">
          <IndexTrackingInflowSahabat
            mingguId={mingguId}
            pembiayaanSahabatsData={pembiayaanSahabatsData}
            kodInflowOptions={kodInflowOptions}
          />
        </Tab>

        <Tab eventKey="tracking-outflow-customer" title="Outflow">
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
