import React, { useState, useEffect } from 'react';
import { Dropdown } from "react-bootstrap";
import LineChart from "./LineChart";
import ErrorAlert from '../../../components/sweet-alert/ErrorAlert';

function RajahInflowOutflow({ grafInflowOutflowSahabatData }) {
  // ------------ FE --------------
  const [selectedChart, setSelectedChart] = useState('Graf Inflow Outflow');
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleSelectChart = (eventKey) => {
    setSelectedChart(eventKey);
  };

  const dropdownItems = [
    { value: "Graf Inflow", label: "Inflow" },
    { value: "Graf Outflow", label: "Outflow" },
    { value: "Graf Inflow Outflow", label: "Inflow/Outflow" },
  ];

  // ------------ BE --------------
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Check if grafInflowOutflowSahabatData is a function
        if (typeof grafInflowOutflowSahabatData === 'function') {
          const data = await grafInflowOutflowSahabatData();
          setChartData(data);
        } else {
          // If not a function, assume it's the data directly
          setChartData(grafInflowOutflowSahabatData);
        }
      } catch (error) {
        ErrorAlert('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [grafInflowOutflowSahabatData]);

  return (
    <>
      <div className="tableSection">
        <div className="sectionHeader">
          <h1>Bahagian D: Graf Maklumat Inflow/Outflow Sahabat</h1>
        </div>

        <Dropdown onSelect={handleSelectChart}>
          <Dropdown.Toggle className="chartDropdown" id="dropdown-basic-button">
            {selectedChart
              ? `Selected: ${selectedChart}`
              : "Pilih Inflow/Outflow Sahabat"
            }
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {dropdownItems.map((item) => (
              <Dropdown.Item key={item.value} eventKey={item.value}>{item.label}</Dropdown.Item>
            ))}
          </Dropdown.Menu>

          {loading && <p>Loading...</p>}

          {selectedChart && chartData && <LineChart selectedChart={selectedChart} data={chartData} />}
        </Dropdown>
      </div>
    </>
  );
}

export default RajahInflowOutflow;
