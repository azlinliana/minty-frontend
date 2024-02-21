import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ErrorAlert from "../../components/sweet-alert/ErrorAlert";
import CreateSuperAdmin from "./Create";
import { Form, Row, Container } from "react-bootstrap";
import axiosCustom from "../../../axios";

function SearchSuperAdmin() {
  // ----------FE----------
  // Modal
  const [isModalCreateSuperAdmin, setIsModalCreateSuperAdmin] = useState(false);
  const openModalCreateSuperAdmin = () => setIsModalCreateSuperAdmin(true);
  const closeModalCreateSuperAdmin = () => {
    setIsModalCreateSuperAdmin(false);
    reset(); // Reset previous form input
  };

  // Form validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // ----------BE----------
  // Store search staff result
  const [searchStaffResult, setSearchStaffResult] = useState(null);

  const searchSuperAdmin = async (searchKakitanganInput) => {
    try {
      const response = await axiosCustom.post(
        "pengguna/carian-pengguna",
        { idKakitangan: searchKakitanganInput.idKakitangan } // Destructuring the object to send only relevant properties to the backend
      );

      if (response.status === 200) {
        setSearchStaffResult(response.data);
        openModalCreateSuperAdmin();
      } else {
        ErrorAlert(response);
      }
    } catch (error) {
      ErrorAlert(error);
    }
  };

  return (
    <>
      <Container fluid className="pengguna-search-bar-container">
        <Form
          className="pengguna-search-bar"
          onSubmit={handleSubmit(searchSuperAdmin)}
          onReset={reset}
        >
          <Row>
            <Form.Group controlId="idKakitangan" className="col-md-10">
              <Form.Control
                className="pengguna-carian-input-field"
                type="text"
                {...register("idKakitangan", { required: true })}
                aria-invalid={errors.idKakitangan ? "true" : "false"}
                placeholder="Masukkan no. id kakitangan"
              />

              {errors.idKakitangan?.type === "required" && (
                <small className="text-danger">
                  No. id kakitangan diperlukan.
                </small>
              )}
            </Form.Group>

            <Form.Group className="col-md-2">
              <CreateSuperAdmin
                isModalCreateSuperAdmin={isModalCreateSuperAdmin}
                closeModalCreateSuperAdmin={closeModalCreateSuperAdmin}
                searchStaffResult={searchStaffResult}
              />
            </Form.Group>
          </Row>
        </Form>
      </Container>
    </>
  );
}

export default SearchSuperAdmin;
