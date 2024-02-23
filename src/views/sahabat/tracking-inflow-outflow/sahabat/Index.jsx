import React, { useState, useEffect, useCallback } from "react";
import IndexTrackingInflowSahabat from "../sahabat/inflow/Index";
import IndexTrackingOutflowSahabat from "../sahabat/outflow/Index";
import { Tab, Tabs } from "react-bootstrap";
import "../../../../assets/styles/styles_sahabat.css";
import ErrorAlert from "../../../components/sweet-alert/ErrorAlert";
import axiosCustom from "../../../../axios";

function IndexTrackingSahabat({ mingguId, pembiayaanSahabatsData }) {
  // ----------FE----------
  // Tab tracking sahabat
  const [activeTab, setActiveTab] = useState({
    key: "tracking-inflow-sahabat",
    title: "Inflow",
  });

  const handleTabInflowOutflowSahabatChange = (key, title) => {
    setActiveTab({ key, title });
  };

  // ----------BE----------
  // Fetch kod inflow data
  const [kodInflowsData, setKodInflowsData] = useState([]);

  const fetchKodInflows = useCallback(async () => {
    try {
      const response = await axiosCustom.get(
        `/selenggara/kod-inflow/display-kod-inflow`
      );

      if (Array.isArray(response.data)) {
        setKodInflowsData(response.data); // Display all kod inflow data
      } else {
        ErrorAlert(response.data);
      }
    } catch (error) {
      ErrorAlert(error);
    }
  }, [setKodInflowsData]);

  useEffect(() => {
    fetchKodInflows();
  }, [fetchKodInflows]);

  // Fetch kod outflow data
  const [kodOutflowsData, setKodOutflowsData] = useState([]);

  const fetchKodOutflows = useCallback(async () => {
    try {
      const response = await axiosCustom.get(
        `/selenggara/kod-outflow/display-kod-outflow`
      );
      if (Array.isArray(response.data) && response.data.length > 0) {
        setKodOutflowsData(response.data); // Display all kod inflow data
      } else {
        ErrorAlert(response.data);
      }
    } catch (error) {
      if (
        error.response &&
        (error.response.status === 503 || error.response.status === 429)
      ) {
        // The server is not ready, ignore the error
        console.log("Server not ready, retry later.");
      } else {
        // Handle other errors
        ErrorAlert(error);
      }
    }
  }, []);

  useEffect(() => {
    fetchKodOutflows();
  }, [fetchKodOutflows]);
  
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
            kodInflowsData={kodInflowsData}
          />
        </Tab>

        <Tab eventKey="tracking-outflow-sahabat" title="Outflow">
          <IndexTrackingOutflowSahabat
            mingguId={mingguId}
            pembiayaanSahabatsData={pembiayaanSahabatsData}
            kodOutflowsData={kodOutflowsData}
          />
        </Tab>
      </Tabs>
    </div>
  );
}

export default IndexTrackingSahabat;
