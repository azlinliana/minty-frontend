import React, { useState, useEffect } from "react";
import CreatePembiayaan from "./Create";
import EditPembiayaan from "./Edit";
import IndexMinggu from "../minggu/Index";
import ErrorAlert from '../../components/sweet-alert/ErrorAlert';
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import {
  TfiArrowCircleDown,
  TfiArrowCircleUp,
  TfiMoreAlt,
} from "react-icons/tfi";
import axios from "axios";

function IndexPembiayaan({resultSahabat, sahabatId}) {
  // ----------FE----------
  // Collapsible pembiayaan card
  const [isCardCollapsed, setIsCardCollapsed] = useState(false);
  const toggleCardCollapse = () => {
    setIsCardCollapsed(!isCardCollapsed);
  };

  // ----------BE----------
  // List pembiayaan sahabat
  const [pembiayaanSahabats, setPembiayaanSahabats] = useState([]);
  const fetchPembiayaanSahabats = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/sahabat/pembiayaan/${sahabatId}`);
      if (response.status === 200) {
        setPembiayaanSahabats(response.data);
      }
       else {
        ErrorAlert(response); // Error from the backend or unknow error from the server side
      }
    }
    catch (error) {
      ErrorAlert(error);
    }
  };

  useEffect(() => {
    fetchPembiayaanSahabats();
    const interval = setInterval(() => { // Set up recurring fetch every 5 second
      fetchPembiayaanSahabats();
    }, 5000);
    // Cleanup the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);
  
  return(
    <div>
      <h2>Maklumat Pembiayaan Sahabat</h2>

      {/* Hide tambah button */}
      {pembiayaanSahabats.length === 0 || 
        (pembiayaanSahabats.length > 0 &&
        pembiayaanSahabats[pembiayaanSahabats.length - 1].statusPembiayaan === 'SELESAI')
        ? (
          <div className="tambahBtnPlacement"><CreatePembiayaan sahabatId={sahabatId} /></div>
        ) : null
      }

      {/* Display pembiayaan sahabat list */}
      {pembiayaanSahabats.length === 0 ? (
        <p>Tiada maklumat pembiayaan untuk sahabat ini.</p>
      ) : (
        pembiayaanSahabats.map((pembiayaanSahabatsData, key) => (
          <Card key={key}>
            <Card.Header as="h5" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ marginRight: '8px' }}>
                  {pembiayaanSahabatsData.skimPembiayaan}
                </div>
                <Badge pill bg="primary">
                  {pembiayaanSahabatsData.statusPembiayaan}
                </Badge>
              </div>

              <Button onClick={toggleCardCollapse}>{isCardCollapsed ? 'Tunjukkan' : 'Sembunyikan'}</Button>

              <DropdownButton align="end" title="More" id="dropdown-menu-align-end">
                <Dropdown.Item eventKey="1"><EditPembiayaan sahabatId={sahabatId} pembiayaanId={pembiayaanSahabatsData.id} pembiayaanSahabat={pembiayaanSahabatsData} /></Dropdown.Item>
                <Dropdown.Item eventKey="2">Padam</Dropdown.Item>
              </DropdownButton>        
            </Card.Header>
      {/* {pembiayaanSahabats.length > 0 && pembiayaanSahabats.map((pembiayaanSahabatsData, key) => ( */}
      <div className="cardSection">
        <Card>
          <Card.Header as="h5" className="cardHeader">
            <div className="cardBody">
              <div className="cardSkim">
                {/* {pembiayaanSahabatsData.skimPembiayaan} */}
              </div>
              <Badge pill bg="primary">
                {/* {pembiayaanSahabatsData.statusPembiayaan} */}
              </Badge>
            </div>

            {/* <Button onClick={toggleCardCollapse}>{isCardCollapsed ? 'Tunjukkan' : 'Sembunyikan'}</Button> */}

            <div className="cardActions">
              <DropdownButton
                align="end"
                title="Status"
                id="dropdown-menu-align-end"
                className="editLoanBtn"
              >
                <Dropdown.Item eventKey="1">
                  <EditPembiayaan />
                </Dropdown.Item>
                <Dropdown.Item eventKey="2">Padam</Dropdown.Item>
              </DropdownButton>

              <div onClick={toggleCardCollapse} className="arrowPositioning">
                {isCardCollapsed ? (
                  <span>
                    <TfiArrowCircleDown size={40} />
                  </span> // Down arrow
                ) : (
                  <span>
                    <TfiArrowCircleUp size={40} />
                  </span> // Up arrow
                )}
              </div>
            </div>
          </Card.Header>

            {/* Display minggu list for pembiayaan sahabat */}
            {isCardCollapsed ? null : (
              <Card.Body>
                <Card.Title>Senarai Tracking Inflow/Outflow</Card.Title>

                <IndexMinggu sahabatId={sahabatId} pembiayaanId={pembiayaanSahabatsData.id}  />
              </Card.Body>
            )}
          </Card>
      </div>

        ))
      )}
    </div>
  );
}

export default IndexPembiayaan;
