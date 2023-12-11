import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import LineChart from "./LineChart";

function RajahInflowOutflow() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = (eventKey) => {
    setSelectedItem(eventKey);
  };

  const dropdownItems = [
    { value: "chartInflow", label: "Inflow" },
    { value: "chartOutflow", label: "Outflow" },
    { value: "chartInflowOutflow", label: "Inflow-Outflow" },
  ];

  return (
    <div className="tableSection">
      <div className="sectionHeader">
        <h1>Bahagian D: Maklumat Inflow/Outflow Sahabat</h1>
      </div>

      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle className="chartDropdown" id="dropdown-basic-button">
          {selectedItem
            ? `Selected: ${selectedItem}`
            : "Pilih Inflow/Outflow Sahabat"}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {dropdownItems.map((item) => (
            <Dropdown.Item key={item.value} eventKey={item.value}>
              {item.label}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>

        {selectedItem && <LineChart selectedItem={selectedItem} />}
      </Dropdown>
    </div>
  );
}

export default RajahInflowOutflow;
