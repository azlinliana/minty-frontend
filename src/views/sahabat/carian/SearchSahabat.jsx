import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import "../Sahabat.css";
import ErrorAlert from "../../components/sweet-alert/ErrorAlert";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axiosCustom from "../../../axios";

function SearchSahabat() {
  // ----------FE----------
  // Form validation
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  // ----------BE----------
  const navigate = useNavigate();
  const searchNoKadPengenalanSahabat = async (noKadPengenalanSahabatInput) => {
    try {
      const response = await axiosCustom.get(
        `/sahabat/search/${noKadPengenalanSahabatInput.noKadPengenalanSahabat}`
      );
      if (response.status === 200) {
        navigate("/hasil-carian-sahabat", {
          state: { resultSahabat: response.data },
        }); // Set response data as a state
      } else {
        ErrorAlert(response); // Error from the backend or unknow error from the server side
      }
    } catch (error) {
      ErrorAlert(error); // Error related to API response or client side
    }
  };

  return (
    <div>
      <div className="pageTitle">
        <h1>Carian Sahabat</h1>
      </div>

      <div className="container-fluid searchSection">
        <Form
          className="searchBar"
          onSubmit={handleSubmit(searchNoKadPengenalanSahabat)}
          onReset={reset}
        >
          <Row>
            <Form.Group className="col-md-10">
              <Controller
                id="noKadPengenalanSahabat"
                name="noKadPengenalanSahabat"
                control={control}
                defaultValue=""
                rules={{ required: "No. kad pengenalan sahabat diperlukan." }}
                render={({ field: { onChange, value } }) => (
                  <Form.Control
                    type="text"
                    maxLength={12}
                    onChange={onChange}
                    value={value}
                    placeholder="Masukkan no. kad pengenalan sahabat"
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
                  onClick={handleSubmit(searchNoKadPengenalanSahabat)}
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
