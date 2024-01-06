import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import "../Laporan.css";
import ResultTf01ByCawangan from "./SearchResult";
import ErrorAlert from "../../components/sweet-alert/ErrorAlert";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

function SearchTf01ByCawangan() {
  // -------- FE ---------
  // Controls the visibility of reports
  const [
    isSearchResultTf01CawanganVisible,
    setIsSearchResultTf01CawanganVisible,
  ] = useState(false);

  // Form validation
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  // ----------BE----------
  const [selectedWilayah, setSelectedWilayah] = useState("");
  const [selectedCawangan, setSelectedCawangan] = useState("");
  const [wilayahOptions, setWilayahOptions] = useState([]);
  const [cawanganOptions, setCawanganOptions] = useState([]);

  // Fetch wilayah and cawangan
  useEffect(() => {
    const fetchWilayahs = async () => {
      try {
        const response = await axiosCustom.get(
          `/selenggara/wilayah/display-wilayah`
        );

        if (Array.isArray(response.data) && response.data.length > 0) {
          setWilayahOptions(
            response.data.map((wilayah) => ({
              value: wilayah.id,
              label: wilayah.namaWilayah,
            }))
          );

          fetchCawangans();
        } else {
          ErrorAlert(response.data);
        }
      } catch (error) {
        ErrorAlert(error);
      }
    };

    const fetchCawangans = async () => {
      try {
        const response = await axiosCustom.get(
          `/selenggara/cawangan/display-cawangan`
        );

        if (Array.isArray(response.data) && response.data.length > 0) {
          setCawanganOptions(
            response.data.map((cawangan) => ({
              value: cawangan.id,
              label: cawangan.namaCawangan,
              wilayahId: cawangan.wilayahId,
            }))
          );
        } else {
          ErrorAlert(response.data);
        }
      } catch (error) {
        ErrorAlert(error);
      }
    };

    fetchWilayahs();
    fetchCawangans();
  }, []);

  // Search jadual TF01 by cawangan
  const [resultTf01ByCawangan, setResultTF01ByCawangan] = useState([]);
  const searchJadualTF01ByCawangan = async (jadualTF01ByCawanganInput) => {
    try {
      const response = await axiosCustom.post(
        `/laporan/carian-jadual-tf01-mengikut-cawangan`,
        jadualTF01ByCawanganInput
      );
      if (response.status === 200) {
        setResultTF01ByCawangan(response.data);
        setIsSearchResultTf01CawanganVisible(true);
      } else {
        ErrorAlert(response); // Error from the backend or unknow error from the server side
      }
    } catch (error) {
      ErrorAlert(error); // Error related to API response or client side
    }
  };

  return (
    <>
      <div className="pageTitle">
        <h1>Jadual TF01 Mengikut Cawangan</h1>

        <Breadcrumb>
          <Breadcrumb.Item className="previousLink">
            Senarai Laporan
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            Jadual TF01 Mengikut Cawangan
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div className="searchSection">
        <div className="searchHeader">
          <h2>Senarai Sahabat Mengikut Cawangan, Blok, Pusat dan Pulangan</h2>
        </div>

        <div className="searchBarSection">
          <Container className="container-fluid searchBar">
            <Form onSubmit={handleSubmit} onReset={reset}>
              <Row>
                <Col xs={12} md={6}>
                  <div>
                    <Form.Group>
                      <Form.Label>Wilayah</Form.Label>
                      <Controller
                        id="wilayahId"
                        name="wilayahId"
                        control={control}
                        defaultValue=""
                        rules={{ required: "Wilayah diperlukan." }}
                        render={({ field: { onChange } }) => (
                          <Form.Select
                            onChange={(e) => {
                              setSelectedWilayah(e.target.value);
                              onChange(e);
                            }}
                            defaultValue=""
                          >
                            <option value="" disabled>
                              --Pilih Wilayah--
                            </option>
                            {wilayahOptions.map((wilayah) => (
                              <option key={wilayah.value} value={wilayah.value}>
                                {wilayah.label}
                              </option>
                            ))}
                          </Form.Select>
                        )}
                      />
                      {errors.wilayahId && (
                        <small className="text-danger">
                          {errors.wilayahId.message}
                        </small>
                      )}
                    </Form.Group>
                  </div>
                </Col>

                <Col xs={12} md={6}>
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
                          <Form.Select
                            onChange={(e) => {
                              setSelectedCawangan(e.target.value);
                              onChange(e);
                            }}
                            defaultValue=""
                          >
                            <option value="" disabled>
                              --Pilih Cawangan--
                            </option>
                            {cawanganOptions
                              .filter(
                                (item) =>
                                  selectedWilayah &&
                                  item.wilayahId === Number(selectedWilayah)
                              )
                              .map((cawangan) => (
                                <option
                                  key={cawangan.value}
                                  value={cawangan.value}
                                >
                                  {cawangan.label}
                                </option>
                              ))}
                          </Form.Select>
                        )}
                      />
                      {errors.cawanganId && (
                        <small className="text-danger">
                          {errors.cawanganId.message}
                        </small>
                      )}
                    </Form.Group>
                  </div>
                </Col>
              </Row>
            </Form>

            <div className="cariBtnPlacement">
              <Button
                className="cariBtn"
                onClick={handleSubmit(searchJadualTF01ByCawangan)}
              >
                Cari
              </Button>{" "}
            </div>
          </Container>

          {isSearchResultTf01CawanganVisible && (
            <div className="searchResultContainer">
              <ResultTf01ByCawangan
                resultTf01ByCawangan={resultTf01ByCawangan}
              />
            </div>
          )}

          <div className="kembaliBtnPlacement">
            <Button className="kembaliBtn">Kembali</Button>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchTf01ByCawangan;
