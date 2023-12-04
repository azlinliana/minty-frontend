import React, {useState, useEffect} from 'react';
import {useLocation} from "react-router-dom";
import {useForm, Controller} from 'react-hook-form';
import "../Laporan.css";
import SearchResultPembiayaanSahabat from './SearchResult';
import ErrorAlert from '../../components/sweet-alert/ErrorAlert';
import {Breadcrumb, Container, Row, Col, Form, Button, Alert} from 'react-bootstrap'
import axios from 'axios';

function SearchProfilSahabat() {
  // --------- FE --------------
  // Display sahabat search result
  const location = useLocation();
  const resultSahabat = location.state.resultSahabat || [];

  // Form validation
  const {handleSubmit, control, reset, formState: {errors}} = useForm();

  // Display pembiayaan sahabat based on selected skim pembiayaan
  const [isSearchResultVisible, setIsSearchResultVisible] = useState(false);
  const handleSearchResultPembiayaanVisibility = () => {
    setIsSearchResultVisible(true);
  };

  // ----------BE----------
  // Get pembiayaan sahabat data
  const [pembiayaanSahabats, setPembiayaanSahabats] = useState([]);
  const [selectedSkimPembiayaan, setSelectedSkimPembiayaan] = useState(""); // Select skim pembiayaan from the dropdown
  const getPembiayaanSahabats = async (sahabatId) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/laporan/profil-sahabat/pembiayaan/${sahabatId}`);
      if (response.status === 200) {
        setPembiayaanSahabats(response.data);
      } else {
        ErrorAlert(response); // Error from the backend or unknown error from the server side
      }
    } catch (error) {
      ErrorAlert(error);
    }
  };

  useEffect(() => {
    // Fetch skim pembiayaan sahabat with the correct sahabatId
    if (resultSahabat.length > 0) {
      const sahabatId = resultSahabat[0].id;
      getPembiayaanSahabats(sahabatId);
    }
  }, [resultSahabat, isSearchResultVisible]);

  return (
    <div>
      <div className='pageTitle'>
        <h1>Carian Pembiayaan Sahabat</h1>

        <Breadcrumb>
          <Breadcrumb.Item className='previousLink'>Senarai Laporan</Breadcrumb.Item>
          <Breadcrumb.Item active>Carian Pembiayaan Sahabat</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      {resultSahabat.map((dataSahabat) => (
        <React.Fragment key={dataSahabat.id}>
          <div className='hasilCarianContent'>
            <div className='hasilCarianSahabatTitle'><h2>Maklumat Sahabat</h2></div>

            <Container>
              <Row>
                <Col xs={12}>
                  <Form.Group>
                    <Form.Label>Nama</Form.Label>
                    <Form.Control type="text" value={dataSahabat.namaSahabat} disabled />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="sahabatInfoSpacing">
                <Col xs={6}>
                  <Form.Group>
                    <Form.Label>No. Kad Pengenalan</Form.Label>
                    <Form.Control type="text" value={dataSahabat.noKadPengenalanSahabat} disabled />
                  </Form.Group>
                </Col>
                <Col xs={6}>
                  <Form.Group>
                    <Form.Label>No. Sahabat</Form.Label>
                    <Form.Control type="text" value={dataSahabat.noSahabat} disabled />
                  </Form.Group>
                </Col>
              </Row>
            </Container>
          </div>

          <div className='carianPembiayaanSahabat'>
            <div className='hasilCarianSahabatTitle'><h3>Pilih Skim Pembiayaan</h3></div>

            <Container>
              {pembiayaanSahabats.length === 0 ? (
                <Alert variant="secondary">Tiada maklumat pembiayaan untuk sahabat ini. Sila isi maklumat tracking sahabat dahulu.</Alert>
                ) : (
                <Row>
                  <Col xs={12} xl={10}>
                    <Form.Group>
                      <Controller
                        id="skimPembiayaan"
                        name="skimPembiayaan"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'Sila pilih skim pembiayaan.' }}
                        render={({ field: { onChange } }) => (
                          <Form.Select aria-label="pembiayaanSelect" value={selectedSkimPembiayaan} onChange={(e) => setSelectedSkimPembiayaan(e.target.value)}>
                            <option value="" disabled>--Pilih Skim Pembiayaan--</option>
                            {[...new Set(pembiayaanSahabats.map(pembiayaanSahabatsData => pembiayaanSahabatsData.skimPembiayaan))].map((skimPembiayaan, index) => (
                              <option key={index} value={skimPembiayaan}>{skimPembiayaan}</option>
                            ))}
                          </Form.Select>
                        )}
                      />
                      {errors.skimPembiayaan && (<small className="text-danger">{errors.skimPembiayaan.message}</small>)}
                    </Form.Group>
                  </Col>
                  <Col xs={12} xl={2}><Button onClick={handleSearchResultPembiayaanVisibility} className="cariPembiayaanBtn">Cari</Button></Col>
                </Row>
              )}
            </Container>
          </div>

          {isSearchResultVisible && (
            <div className="hasilCarianPembiayaan"><SearchResultPembiayaanSahabat sahabatId={dataSahabat.id} pembiayaanSahabats={pembiayaanSahabats} selectedSkimPembiayaan={selectedSkimPembiayaan} /></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default SearchProfilSahabat;
