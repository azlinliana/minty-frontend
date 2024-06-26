import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SuccessAlert from "../../../../components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../../../components/sweet-alert/ErrorAlert";
import { Modal, Button, Form } from "react-bootstrap";
import axiosCustom from "../../../../../axios";

function EditTrackingOutflowSahabat({
  mingguId,
  outflowSahabatId,
  outflowSahabat,
  kodOutflowOptions,
}) {
  // __________________________________ Frontend __________________________________
  // Modal
  const [isModalEditOutflowSahabat, setIsModalEditOutflowSahabat] =
    useState(false);

  const openModalEditOutflowSahabat = () => setIsModalEditOutflowSahabat(true);

  const closeModalEditOutflowSahabat = () => {
    setIsModalEditOutflowSahabat(false);
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
  // Update outflow sahabat
  const updateOutflowSahabat = async (outflowSahabatInput) => {
    try {
      const response = await axiosCustom.put(
        `/sahabat/outflow-sahabat/${mingguId}/${outflowSahabatId}`,
        outflowSahabatInput
      );
      if (response.status === 200) {
        SuccessAlert(response.data.message);
        closeModalEditOutflowSahabat();
      } else {
        ErrorAlert(response); // Error from the backend or unknow error from the server side
      }
    } catch (error) {
      ErrorAlert(error);
    }
  };

  return (
    <>
      <div>
        <Button className="edit-btn" onClick={openModalEditOutflowSahabat}>
          Edit
        </Button>{" "}

        <Modal
          show={isModalEditOutflowSahabat}
          onHide={closeModalEditOutflowSahabat}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Outflow Sahabat</Modal.Title>
          </Modal.Header>

          <Form onReset={reset}>
            <Modal.Body>
              <Form.Group controlId="kodOutflowId" className="mb-3">
                <Form.Label className="form-label">Kod Outflow</Form.Label>

                <Form.Control
                  as="select"
                  className="form-select"
                  {...register("kodOutflowId", { required: true })}
                  aria-invalid={errors.kodOutflowId ? "true" : "false"}
                  defaultValue=""
                >
                  <option value="" disabled>
                    --Pilih Kod Outflow--
                  </option>
                  {kodOutflowOptions.map((kodOutflow) => (
                    <option key={kodOutflow.id} value={kodOutflow.id}>
                      {kodOutflow.kodOutflow} -{" "}
                      {kodOutflow.keteranganKodOutflow}
                    </option>
                  ))}
                </Form.Control>

                {errors.kodOutflowId?.type === "required" && (
                  <small className="text-danger">Kod outflow diperlukan.</small>
                )}
              </Form.Group>

              <Form.Group controlId="amaunOutflow" className="mb-3">
                <Form.Label className="form-label">
                  Amaun Outflow (RM)
                </Form.Label>

                <Form.Control
                  type="number"
                  min="0.01"
                  step="0.01"
                  {...register("amaunOutflow", { required: true })}
                  aria-invalid={errors.amaunOutflow ? "true" : "false"}
                />

                {errors.amaunOutflow?.type === "required" && (
                  <small className="text-danger">
                    Amaun outflow diperlukan.
                  </small>
                )}
              </Form.Group>
            </Modal.Body>

            <Modal.Footer>
              <Button
                className="batal-btn"
                onClick={closeModalEditOutflowSahabat}
              >
                Batal
              </Button>

              <Button onClick={handleSubmit(updateOutflowSahabat)}>
                Simpan
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    </>
  );
}

export default EditTrackingOutflowSahabat;
