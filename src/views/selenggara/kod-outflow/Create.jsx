import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SuccessAlert from "../../components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../components/sweet-alert/ErrorAlert";
import { Modal, Button, Form } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import axiosCustom from "../../../axios";

function CreateKodOutflow() {
  // ----------FE----------
  // Modal
  const [isModalCreateKodOutflow, setIsModalCreateKodOutflow] = useState(false);
  const openModalCreateKodOutflow = () => setIsModalCreateKodOutflow(true);
  const closeModalCreateKodOutflow = () => {
    setIsModalCreateKodOutflow(false);
    reset(); // Reset previous form input
  };

  // Form validation
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // ----------BE----------
  // Create kod outflow
  const createKodOutflow = async (kodOutflowInput) => {
    try {
      const response = await axiosCustom.post(
        "/selenggara/kod-outflow",
        kodOutflowInput
      );

      if (response.status === 200) {
        SuccessAlert(response.data.message);
        closeModalCreateKodOutflow();
      } else {
        ErrorAlert(response); // Error from the backend or unknow error from the server side
      }
    } catch (error) {
      ErrorAlert(error);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={openModalCreateKodOutflow}>
        <FaPlus style={{ fontSize: "10px" }} /> Tambah
      </Button>{" "}

      <Modal
        show={isModalCreateKodOutflow}
        onHide={closeModalCreateKodOutflow}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Tambah Kod Outflow</Modal.Title>
        </Modal.Header>

        <Form onReset={reset}>
          <Modal.Body>
            <Form.Group controlId="kodOutflow" className="mb-3">
              <Form.Label className="form-label">Kod Outflow</Form.Label>

              <Form.Control
                type="text"
                {...register("kodOutflow", { required: true })}
                aria-invalid={errors.kodOutflow ? "true" : "false"}
                placeholder="Masukkan kod outflow"
              />

              {errors.kodOutflow?.type === "required" && (
                <small className="text-danger">
                  Kod outflow diperlukan.
                </small>
              )}
            </Form.Group>

            <Form.Group controlId="keteranganKodOutflow" className="mb-3">
              <Form.Label className="form-label">Keterangan Kod Outflow</Form.Label>
              
              <Form.Control
                type="text"
                {...register("keteranganKodOutflow", { required: true })}
                aria-invalid={errors.keteranganKodOutflow ? "true" : "false"}
                placeholder="Masukkan keterangan kod outflow"
              />

              {errors.keteranganKodOutflow?.type === "required" && (
                <small className="text-danger">
                  Keterangan kod outflow diperlukan.
                </small>
              )}
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={closeModalCreateKodOutflow}>
              Batal
            </Button>
            
            <Button variant="primary" onClick={handleSubmit(createKodOutflow)}>
              Simpan
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default CreateKodOutflow;
