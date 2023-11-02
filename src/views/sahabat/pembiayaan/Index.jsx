import React, {useState, useEffect} from 'react';
import CreatePembiayaan from './Create';
import EditPembiayaan from './Edit';
import IndexMinggu from '../minggu/Index';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import axios from 'axios';

function IndexPembiayaan() {
  // ----------FE----------
  // Collapsible pembiayaan card
  const [isCardCollapsed, setIsCardCollapsed] = useState(false);
  const toggleCardCollapse = () => {
    setIsCardCollapsed(!isCardCollapsed);
  }

  // ----------BE----------

  return(
    <div>
      {/* {pembiayaanSahabats.length === 0 || */}
      {/* (pembiayaanSahabats.length > 0 && */}
      {/* pembiayaanSahabats[pembiayaanSahabats.length - 1].statusPembiayaan === 'selesai') */}
      {/* ? ( */}
        <div className="tambahBtnPlacement"><CreatePembiayaan /></div>
      {/* ) : null} */}

      {/* {pembiayaanSahabats.length > 0 && pembiayaanSahabats.map((pembiayaanSahabatsData, key) => ( */}
        <Card>
          <Card.Header as="h5" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ marginRight: '8px' }}>
                {/* {pembiayaanSahabatsData.skimPembiayaan} */}
              </div>
              <Badge pill bg="primary">
                {/* {pembiayaanSahabatsData.statusPembiayaan} */}
              </Badge>
            </div>
            <Button onClick={toggleCardCollapse}>{isCardCollapsed ? 'Tunjukkan' : 'Sembunyikan'}</Button>

            <DropdownButton align="end" title="More" id="dropdown-menu-align-end">
              <Dropdown.Item eventKey="1"><EditPembiayaan /></Dropdown.Item>
              <Dropdown.Item eventKey="2">Padam</Dropdown.Item>
            </DropdownButton>        
          </Card.Header>

          {isCardCollapsed ? null : (
            // Senarai minggu pembiayaan
            <Card.Body>
              <Card.Title>Senarai Tracking Inflow/Outflow</Card.Title>

              <IndexMinggu/>
            </Card.Body>
          )}
        </Card>
      {/* ))} */}
    </div>
  );
}

export default IndexPembiayaan;