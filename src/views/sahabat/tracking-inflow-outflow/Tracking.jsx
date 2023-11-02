import React, { useState } from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import Tabbed from '../../components/tab/Tab';
import {TabTrackingInflowOutflowSahabat, defaultActiveTabKeyTrackingInflowOutflowSahabat} from '../../components/tab/TabTrackingInflowOutflowSahabat.jsx';
import EditMinggu from '../minggu/Edit';
import IndexAktiviti from '../aktiviti/Index';
import IndexIsiRumah from '../isi-rumah/Index';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function TrackingInflowOutflow() {
  // ----------FE----------
  // Tab sahabat inflow/outflow
  const [activeTabTitleInflowOutflowSahabat, setActiveTabTitleInflowOutflowSahabat] = useState('Inflow'); // Initialize sahabat tab title
  
  // Function to handle tab change sahabat inflow/outflow
  const handleTabInflowOutflowSahabatChange = (key) => {
    const selectedTabInflowOutflowSahabat = TabTrackingInflowOutflowSahabat.find((tab) => tab.eventKey === key);

    if(selectedTabInflowOutflowSahabat) {
      setActiveTabTitleInflowOutflowSahabat(selectedTabInflowOutflowSahabat.title);
    }
  };

  // Back button
  const navigate = useNavigate();
  const goBack = () => {navigate(-1);};

  // ----------BE----------

  return(
    <div>
      <div>
        <h1>Kemas Kini Tracking Sahabat</h1>
        
        <Breadcrumb>
          <Breadcrumb.Item href="#">Carian Sahabat</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Hasil Carian Sahabat</Breadcrumb.Item>
          <Breadcrumb.Item active>Kemas Kini Tracking Sahabat</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div>
        <h2>Maklumat Sahabat</h2>

        <Card>
          <Card.Body>
            <Container>
              <Row>
                <Col xs={12}>
                  <Form.Group>
                    <Form.Label>Nama</Form.Label>
                    <Form.Control type="text" defaultValue="" disabled />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col xs={12}>
                  <Form.Group>
                    <Form.Label>No. Kad Pengenalan</Form.Label>
                    <Form.Control type="text" defaultValue="" disabled />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col xs={12}>
                  <Form.Group>
                    <Form.Label>No. Sahabat</Form.Label>
                    <Form.Control type="text" defaultValue="" disabled />
                  </Form.Group>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </div>

      <div>
        <Card>
          <Card.Body>
            Tracking untuk minggu: 5
            <EditMinggu />
          </Card.Body></Card>
        <IndexAktiviti />

        <div>
          <h2>Maklumat Tracking {activeTabTitleInflowOutflowSahabat} Sahabat</h2>

          <Tabbed tabs={TabTrackingInflowOutflowSahabat} defaultActiveTabKey={defaultActiveTabKeyTrackingInflowOutflowSahabat} onTabChange={handleTabInflowOutflowSahabatChange}/>
        </div>

        <IndexIsiRumah />

      </div>

      <div className="kembaliBtnPlacement"><Button className="kembaliBtn" onClick={goBack}>Kembali</Button>{" "}</div>
    </div>
  );
}

export default TrackingInflowOutflow;