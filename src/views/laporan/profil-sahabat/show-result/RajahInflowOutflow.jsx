import React, {useState, useEffect} from 'react';
import {Dropdown} from "react-bootstrap";
import ErrorAlert from '../../../components/sweet-alert/ErrorAlert';
import LineChart from "./LineChart";
import axios from 'axios';

function RajahInflowOutflow({sahabatId, pembiayaanSahabatId}) {
  // ------------ FE --------------
  const [selectedChart, setSelectedChart] = useState('Graf Inflow Outflow');

  const handleSelectChart = (eventKey) => {
    setSelectedChart(eventKey);
  };

  const dropdownItems = [
    {value: "Graf Inflow", label: "Inflow"},
    {value: "Graf Outflow", label: "Outflow"},
    {value: "Graf Inflow Outflow", label: "Inflow/Outflow"},
  ];

  // ------------ BE --------------
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch inflow/outflow graph data
  useEffect(() => {
    const fetchInflowOutflowGraphData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/laporan/profil-sahabat/graf-inflow-outflow/${sahabatId}/${pembiayaanSahabatId}`);
        setChartData(response.data);
      } 
      catch (error) {
        console.error('Error fetching data:', error);
        ErrorAlert('Error fetching data. Please try again later.');
      } 
      finally {
        setLoading(false);
      }
    };

    fetchInflowOutflowGraphData();
  }, [sahabatId, pembiayaanSahabatId]);

  return(
    <div className="tableSection">
      <div className="sectionHeader"><h1>Bahagian D: Graf Maklumat Inflow/Outflow Sahabat</h1></div>

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
  );
}

export default RajahInflowOutflow;
