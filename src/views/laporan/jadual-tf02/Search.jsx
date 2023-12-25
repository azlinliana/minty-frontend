import React, { useState, useEffect } from 'react';
import { useForm, Controller } from "react-hook-form";
import "../Laporan.css";
import ErrorAlert from '../../components/sweet-alert/ErrorAlert';
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ResultTf02 from "./SearchResult";
import axios from 'axios';

function SearchTf02() {
  // ------- FE ---------
  // Controls visibility of the reports
  const [ isSearchResultJadualTf02Visible, setIsSearchResultJadualTf02Visible ] = useState(false);
  const handleSearchResultJadualTf02Visibility = () => {
    setIsSearchResultJadualTf02Visible(!isSearchResultJadualTf02Visible);
  }

    // Form validation
    const { handleSubmit, control, reset, formState: { errors } } = useForm();

    // ----------BE----------
    const [cawanganOptions, setCawanganOptions] = useState([]);
  
    // Fetch cawangan
    useEffect(() => {
      const fetchCawangans = async () => {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/api/selenggara/cawangan/display-cawangan`);
  
          if (Array.isArray(response.data) && response.data.length > 0) {
            setCawanganOptions(response.data.map(cawangan => ({
              value: cawangan.id,
              label: cawangan.namaCawangan,
            })));
          } 
          else {
            ErrorAlert(response.data);
          }
        } 
        catch (error) {
          ErrorAlert(error);
        }
      };

      fetchCawangans();
    }, []);

  return (
    <>
      <div className="pageTitle">
        <h1>Jadual TF02</h1>

        <Breadcrumb>
          <Breadcrumb.Item className="previousLink" href="#">Senarai Laporan</Breadcrumb.Item>
          <Breadcrumb.Item active>Jadual TF02</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div className="searchSection">
        <div className="searchHeader"><h2>Analisa Penghantaran Per RM - Bulanan</h2></div>

        <div className="searchBarSection">
          <Container className="container-fluid searchBar">
            <Row>
              {/* Cawangan */}
              <Col xs={12} md={12}>
              <div>
                <Form.Group>
                  <Form.Label>Cawangan</Form.Label>
                  <Controller
                    id="cawanganId"
                    name="cawanganId"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Cawangan diperlukan." }}
                    render={({ field: { onChange } }) => (
                      <Form.Select onChange={(e) => {setSelectedCawangan(e.target.value); onChange(e);}} defaultValue="">
                        <option value="" disabled>--Pilih Cawangan--</option>
                        {cawanganOptions.map((cawangan) => (
                          <option key={cawangan.value} value={cawangan.value}>{cawangan.label}</option>
                        ))}
                      </Form.Select>  
                    )}
                  />
                  {errors.cawanganId && (<small className="text-danger">{errors.cawanganId.message}</small>)}
                </Form.Group>
              </div>
              </Col>
            </Row>

            <div className="cariBtnPlacement"><Button className="cariBtn" onClick={handleSearchResultJadualTf02Visibility}>Cari</Button>{" "}</div>
          </Container>

          <div className="searchResultContainer">{isSearchResultJadualTf02Visible && <ResultTf02/>}</div>

          <div className="kembaliBtnPlacement"><Button className="kembaliBtn">Kembali</Button>{" "}</div>
        </div>
      </div>
    </>
  );
}

export default SearchTf02;
