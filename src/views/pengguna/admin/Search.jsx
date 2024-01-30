import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ErrorAlert from "../../components/sweet-alert/ErrorAlert";
import CreateAdmin from "./Create";
import { Form, Row } from "react-bootstrap";
import axiosCustom from "../../../axios";

function SearchAdmin() {
  // ----------FE----------
  // Modal
  const [isModalCreateAdmin, setIsModalCreateAdmin] = useState(false);
  const openModalCreateAdmin = () => setIsModalCreateAdmin(true);
  const closeModalCreateAdmin = () => {
    setIsModalCreateAdmin(false);
    reset(); // Reset previous form input
  };

  // Form validation
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm();

  // ----------BE----------
  // Store search staff result
  const [searchStaffResult, setSearchStaffResult] = useState(null);

  const searchAdmin = async (searchKakitanganInput) => {
    try {
      const response = await axiosCustom.post(
        "pengguna/carian-pengguna",
        {idKakitangan: searchKakitanganInput.idKakitangan} // Destructuring the object to send only relevant properties to the backend
      );

      if (response.status === 200) {
        setSearchStaffResult(response.data);
        openModalCreateAdmin();
      } else {
        ErrorAlert(response);
      }
    } catch (error) {
      ErrorAlert(error);
    }
  };

  return (
    <>
      <div className="container-fluid searchSection">
        <Form className="searchBar" onSubmit={handleSubmit(searchAdmin)} onReset={reset}>
          <Row>
            <Form.Group controlId="idKakitangan" className="col-md-10">
              <Form.Control
                type="text"
                {...register("idKakitangan", { required: true })}
                aria-invalid={ errors.idKakitangan ? "true" : "false" }
                placeholder="Masukkan no. id kakitangan"
              />

              {errors.idKakitangan?.type === "required" && (
                <small className="text-danger">
                  No. id kakitangan diperlukan.
                </small>
              )}
            </Form.Group>

            <Form.Group className="col-md-2">
              <CreateAdmin
                isModalCreateAdmin = {isModalCreateAdmin}
                closeModalCreateAdmin = {closeModalCreateAdmin}
                searchStaffResult = {searchStaffResult}
              />
            </Form.Group>
          </Row>
        </Form>
      </div>
    </>
  );
}

export default SearchAdmin;
