import React, {useState, useEffect} from 'react';
import Tabbed from '../../components/tab/Tab';
import {TabTrackingInflowOutflowIsiRumah, defaultActiveTabKeyTrackingInflowOutflowIsiRumah} from '../../components/tab/TabTrackingInflowOutflowIsiRumah.jsx';
import CreateIsiRumah from './Create';
import EditIsiRumah from './Edit';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import {FaPlus} from "react-icons/fa";
import axios from 'axios';

function IndexIsiRumah() {
  // ----------FE----------
  // Tab sahabat isi rumah
  const [activeTabTitleInflowOutflowIsiRumah, setActiveTabTitleInflowOutflowIsiRumah] = useState('Inflow'); // Initialize isi rumah tab title

  // Function to handle tab change sahabat inflow/outflow
  const handleTabInflowOutflowIsiRumahChange = (key) => {
    const selectedTabInflowOutflowIsiRumah = TabTrackingInflowOutflowIsiRumah.find((tab) => tab.eventKey === key);

    if(selectedTabInflowOutflowIsiRumah) {
      setActiveTabTitleInflowOutflowIsiRumah(selectedTabInflowOutflowIsiRumah.title);
    }
  };

  // ----------BE----------
  
  return(
    <div>
      <h2>Maklumat {activeTabTitleInflowOutflowIsiRumah} Tracking Isi Rumah</h2>
      
      <CreateIsiRumah />

      <Tabs defaultActiveKey="tab1" id="tab-example">
        <Tab eventKey="tab1" title="Isi Rumah 1">
          <div>
            <EditIsiRumah />

            <Button variant="danger">Padam Isi Rumah</Button>{' '}

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
                        <Form.Label>Hubungan</Form.Label>
                        <Form.Control type="text" defaultValue="" disabled />
                      </Form.Group>
                    </Col>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
            
            <Tabbed tabs={TabTrackingInflowOutflowIsiRumah} defaultActiveTabKey={defaultActiveTabKeyTrackingInflowOutflowIsiRumah} onTabChange={handleTabInflowOutflowIsiRumahChange}/>
          </div>
        </Tab>
        <Tab eventKey="tab2" title="Isi Rumah 2">
          <div>
            <h3>Isi Rumah 2</h3>
            <p>This is the content for Tab 2.</p>
          </div>
        </Tab>
        <Tab eventKey="tab3" title="Isi Rumah 3">
          <div>
            <h3>Isi Rumah 3</h3>
            <p>This is the content for Tab 3.</p>
          </div>
        </Tab>
        <Tab eventKey="tab4" title="Isi Rumah 4">
          <div>
            <h3>Isi Rumah 4</h3>
            <p>This is the content for Tab 3.</p>
          </div>
        </Tab>
        <Tab eventKey="tab5" title="Isi Rumah 5">
          <div>
            <h3>Isi Rumah 5</h3>
            <p>This is the content for Tab 3.</p>
          </div>
        </Tab>
      </Tabs>

      
      {/* <Tabs defaultActiveKey={0} id="isiRumahTabs">
        {isiRumahPembiayaanSahabats.map((isiRumah, index) => (
          <Tab eventKey={index} title={`Isi Rumah ${index + 1}`}>
          
            <Tabbed tabs={TabTrackingInflowOutflowIsiRumah} defaultActiveTabKey={defaultActiveTabKeyTrackingInflowOutflowIsiRumah} onTabChange={handleTabInflowOutflowIsiRumahChange}/>
          </Tab>
        ))}
      </Tabs> */}
    </div>
  );
}

export default IndexIsiRumah;