import React, { useState, useEffect } from "react";
import CreatePembiayaan from "./Create";
import EditPembiayaan from "./Edit";
import IndexMinggu from "../minggu/Index";
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

function IndexPembiayaan() {
  // ----------FE----------
  // Collapsible pembiayaan card
  const [isCardCollapsed, setIsCardCollapsed] = useState(false);
  const toggleCardCollapse = () => {
    setIsCardCollapsed(!isCardCollapsed);
  };

  // ----------BE----------

  return (
    <div>
      {/* {pembiayaanSahabats.length === 0 || */}
      {/* (pembiayaanSahabats.length > 0 && */}
      {/* pembiayaanSahabats[pembiayaanSahabats.length - 1].statusPembiayaan === 'selesai') */}
      {/* ? ( */}
      <div className="tambahBtnPlacement">
        <CreatePembiayaan />
      </div>
      {/* ) : null} */}

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

          {isCardCollapsed ? null : (
            // Senarai minggu pembiayaan
            <Card.Body>
              <Card.Title>Senarai Tracking Inflow/Outflow</Card.Title>

              <IndexMinggu />
            </Card.Body>
          )}
        </Card>
      </div>

      {/* ))} */}
    </div>
  );
}

export default IndexPembiayaan;
