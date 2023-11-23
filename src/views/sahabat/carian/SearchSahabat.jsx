import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";
import "../Sahabat.css";

function SearchSahabat() {
  // ----------FE----------
  // Link pages
  const navigate = useNavigate();
  const clickCarian = () => navigate("/search-result-sahabat");

  // Form validation
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  // ----------BE----------

  return (
    <div>
      <div className="pageTitle">
        <h1>Carian Sahabat</h1>
      </div>

      <div className="container-fluid searchSection">
        <Form className="searchBar" onSubmit={handleSubmit} onReset={reset}>
          <Row>
            <Form.Group className="col-md-10">
              <Controller
                id="noKadPengenalanSahabat"
                name="noKadPengenalanSahabat"
                control={control}
                defaultValue=""
                rules={{ required: "No. kad pengenalan sahabat is required." }}
                render={({ field: { onChange, value } }) => (
                  <Form.Control
                    type="text"
                    maxLength={12}
                    onChange={onChange}
                    value={value}
                    placeholder="Masukkan no. kad pengenalan isi rumah sahabat"
                    autoFocus
                  />
                )}
              />
              {errors.noKadPengenalanSahabat && (
                <small className="text-danger">
                  {errors.noKadPengenalanSahabat.message}
                </small>
              )}
            </Form.Group>
            <Form.Group className="col-md-2">
              <div>
                <Button
                  className="CarianSearchBarBtn"
                  onClick={handleSubmit(clickCarian)}
                >
                  Cari
                </Button>
              </div>
            </Form.Group>
          </Row>
        </Form>
      </div>
    </div>
  );
}

export default SearchSahabat;
