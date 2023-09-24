import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Tabbed from '../components/tab/Tab';
import { TabTrackingInflowOutflowData, defaultActiveTabKey } from '../components/tab/TabTrackingInflowOutflowData';

import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function Tracking() {
  // Receive the search result as a prop from the location
  const location = useLocation();
  const searchResults = location.state.results || [];

  // Tab
  const [activeTabTitle, setActiveTabTitle] = useState('Inflow'); // Initialize page title

  // Function to handle tab change
  const handleTabChange = (key) => {
    const selectedTab = TabTrackingInflowOutflowData.find((tab) => tab.eventKey === key);

    if (selectedTab) {
      // Dynamic title display
      setActiveTabTitle(selectedTab.title);
    }
  };

  return(
    <>
      <div>
        <h1>Kemas Kini Maklumat Tracking Sahabat</h1>
        
        <Breadcrumb>
          <Breadcrumb.Item href="#">Inflow/Outflow</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Maklumat Inflow/Outflow Sahabat</Breadcrumb.Item>
          <Breadcrumb.Item active>Kemas Kini Maklumat Tracking Sahabat</Breadcrumb.Item>
        </Breadcrumb>

        <p>Tracking untuk minggu: 5</p>

      </div>

      <div>
        {searchResults.map((data) => (
          <div key={data.id}>
            <>
              <h2>Maklumat Sahabat</h2>
            
              <Container>
                <Row>
                  <Col xs={12}>
                    <Form.Group>
                      <Form.Label>Nama</Form.Label>
                      <Form.Control type="text" defaultValue={data.nama} />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12}>
                    <Form.Group>
                      <Form.Label>No. Kad Pengenalan</Form.Label>
                      <Form.Control type="text" defaultValue={data.noKadPengenalan} />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12}>
                    <Form.Group>
                      <Form.Label>No. Sahabat</Form.Label>
                      <Form.Control type="text" defaultValue={data.noSahabat} />
                    </Form.Group>
                  </Col>
                </Row>
              </Container>
            </>
          </div>
        ))}
      </div>

      <div>
        <h2>Maklumat Tracking {activeTabTitle}</h2>

        <Tabbed tabs={TabTrackingInflowOutflowData} defaultActiveTabKey={defaultActiveTabKey} onTabChange={handleTabChange} />
      </div>
    </>
  )
}

export default Tracking;