import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import "../../sahabat.css";
import CreateTrackingIsiRumah from './Create';
import EditTrackingIsiRumah from './Edit';
import IndexTrackingInflowIsiRumah from './inflow/Index';
import IndexTrackingOutflowIsiRumah from './outflow/Index';
import ErrorAlert from '../../../components/sweet-alert/ErrorAlert';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import axios from 'axios';

function IndexTrackingIsiRumah({mingguId}) {
  // ----------FE----------
  // Dynamic tab title
  const navigate = useNavigate();
  
  // Tab tracking isi rumah
  const [activeTab, setActiveTab] = useState({key: 'tracking-inflow-isi-rumah', title: 'Inflow'});
  const handleTabInflowOutflowIsiRumahChange = (key, title) => {
    setActiveTab({ key, title });
  };

  // ----------BE----------
  // List isi rumah sahabat
  const [isiRumahSahabats, setIsiRumahSahabats] = useState([]);
  const fetchIsiRumahSahabats = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/sahabat/isi-rumah/${mingguId}`);
      if (response.status === 200) {
        setIsiRumahSahabats(response.data);
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
    fetchIsiRumahSahabats();
    // const interval = setInterval(() => { // Set up recurring fetch every 5 second
    //   fetchIsiRumahSahabats();
    // }, 5000);
    // // Cleanup the interval when the component unmounts
    // return () => {
    //   clearInterval(interval);
    // };
  }, []);

  return(
    <div className="inputStepsContainer">
      <h2>Maklumat Tracking Isi Rumah</h2>

      <div className="tambahBtnPlacement"><CreateTrackingIsiRumah mingguId={mingguId} /></div>

        {isiRumahSahabats.length === 0 ? (
          <Alert variant="secondary">Sahabat masih tiada maklumat isi rumah untuk minggu ini. Sila tambah isi rumah.</Alert>
        ) : (
          <Tabs id="tab-isi-rumah-sahabat" className="mb-3">
            {isiRumahSahabats.map((isiRumahSahabatsData, key) => (
              <Tab key={key} eventKey={key} title={`Isi Rumah ${key + 1}`}>
                <div>
                  <div className="isiRumahActionsPlacement">
                    <DropdownButton align="end" title="Status Isi Rumah" id="dropdown-menu-align-end">
                      <Dropdown.Item eventKey="1"><EditTrackingIsiRumah mingguId={mingguId} isiRumahSahabat={isiRumahSahabatsData} /></Dropdown.Item>
                      <Dropdown.Item eventKey="2">Padam</Dropdown.Item>
                    </DropdownButton>
                  </div>

                  <Card>
                    <Card.Body>
                      <Container>
                        <Row>
                          <Col xs={12}>
                            <Form.Group>
                              <Form.Label>Nama</Form.Label>
                              <Form.Control type="text" defaultValue={isiRumahSahabatsData.namaIsiRumah} disabled />
                            </Form.Group>
                          </Col>
                        </Row>

                        <Row>
                          <Col xs={12}>
                            <Form.Group>
                              <Form.Label>No. Kad Pengenalan</Form.Label>
                              <Form.Control type="text" defaultValue={isiRumahSahabatsData.noKadPengenalanIsiRumah} disabled />
                            </Form.Group>
                          </Col>
                        </Row>

                        <Row>
                          <Col xs={12}>
                            <Form.Group>
                              <Form.Label>Hubungan</Form.Label>
                              <Form.Control type="text" defaultValue={isiRumahSahabatsData.hubungan.kodHubungan} disabled />
                            </Form.Group>
                          </Col>
                        </Row>
                      </Container>
                    </Card.Body>
                  </Card>
                </div>

                <div>
                  <div className="tableInflowOutflowMargin">
                    <Tabs id="tracking-inflow-outflow-isi-rumah" className="mb-3" activeKey={activeTab.key} onSelect={(key) => handleTabInflowOutflowIsiRumahChange(key, key === 'tracking-inflow-isi-rumah' ? 'Inflow' : 'Outflow')}>
                      <Tab eventKey="tracking-inflow-isi-rumah" title="Inflow">
                        <IndexTrackingInflowIsiRumah isiRumahId={isiRumahSahabatsData.id} />
                      </Tab>

                      <Tab eventKey="tracking-outflow-isi-rumah" title="Outflow">
                        <IndexTrackingOutflowIsiRumah isiRumahId={isiRumahSahabatsData.id} />
                      </Tab>
                    </Tabs>
                  </div>
                </div>
              </Tab>
            ))}
          </Tabs>
        )}
    </div>
  );
}

export default IndexTrackingIsiRumah;
