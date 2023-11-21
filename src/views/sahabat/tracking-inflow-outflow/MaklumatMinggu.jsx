import React , {useState, useEffect} from "react";
import "../sahabat.css";
import ErrorAlert from '../../components/sweet-alert/ErrorAlert';
import EditMinggu from "../minggu/Edit";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import axios from "axios";

function MaklumatMinggu({sahabatId, pembiayaanId, mingguId}) {
  // ----------BE----------
  // Show minggu pembiayaan sahabat
  const [showMingguPembiayaanSahabat, setshowMingguPembiayaanSahabat] = useState([]);
  const getMingguPembiayaanSahabat = async () => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/api/sahabat/${sahabatId}/pembiayaan/${pembiayaanId}/minggu/${mingguId}`);
    if (response.status === 200) {
        setshowMingguPembiayaanSahabat(response.data);
      }
      else {
        ErrorAlert(response); // Error from the backend or unknow error from the server side
      }
    }
    catch (error) {
      ErrorAlert(error);
    }
  }

  useEffect(() => {
    getMingguPembiayaanSahabat();
    const interval = setInterval(() => { // Set up recurring fetch every 5 second
      getMingguPembiayaanSahabat();
    }, 5000);
    // Cleanup the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);

  return(
    <div className="sahabatTrackingContent">
      <h2>Maklumat Minggu</h2>

      {showMingguPembiayaanSahabat.id ? (
        <>
          <div className="editMingguBtnPlacement"><EditMinggu sahabatId={sahabatId} pembiayaanId={pembiayaanId} mingguPembiayaanSahabat={showMingguPembiayaanSahabat} mingguId={showMingguPembiayaanSahabat.id} /></div>
          
          <Card>
            <Card.Body>
              <Container>
                <Row>
                  <Col xs={6}>
                    <Form.Group>
                      <Form.Label className="trackWeek">Bilangan Minggu</Form.Label>
                      <Form.Control type="text" defaultValue={showMingguPembiayaanSahabat.bilanganMinggu} disabled />
                    </Form.Group>
                  </Col>
                  <Col xs={6}>
                    <Form.Group>
                      <Form.Label className="trackWeek">Tarikh Borang Minggu</Form.Label>
                      <Form.Control type="text" defaultValue={new Date(showMingguPembiayaanSahabat.tarikhBorangMinggu).toLocaleDateString('en-GB')} disabled />
                    </Form.Group>
                  </Col>
                </Row>
              </Container>
            </Card.Body>
          </Card>
        </>
      ) : (
        <Container><p>Tiada maklumat minggu pembiayaan sahabat ini.</p></Container>
      )}
    </div>
  );
}

export default MaklumatMinggu;
