import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import LineChart from "./LineChart";

function RajahInflowOutflow() {
  const [selectedChart, setSelectedChart] = useState(null);

  const chartDataInflow = {
    // Define your Chart.js data for the first chart
    // Example data: labels, datasets, etc.
  };

  const chartDataOutflow = {
    // Define your Chart.js data for the second chart
  };

  const chartDataInflowOutflow = {
    // Define your Chart.js data for the second chart
  };

  const handleChartChange = (chart) => {
    setSelectedChart(chart);
  };

  return (
    <>
      <div className="tableSection">
        <div className="sectionHeader">
          <h1>Bahagian D: Maklumat Inflow/Outflow Sahabat</h1>
        </div>

        <div>
          <Dropdown onSelect={handleChartChange}>
            <Dropdown.Toggle
              className="chartDropdown"
              id="dropdown-basic-button"
            >
              Pilih Jenis Data Inflow/Outflow Sahabat
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey={chartDataInflow}>Inflow</Dropdown.Item>
              <Dropdown.Item eventKey={chartDataOutflow}>Outflow</Dropdown.Item>
              <Dropdown.Item eventKey={chartDataInflowOutflow}>
                Inflow-Outflow
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {selectedChart && <LineChart data={selectedChart} />}
        </div>
      </div>
    </>
  );
}

export default RajahInflowOutflow;
