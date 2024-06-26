import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SuccessAlert from "../../../../components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../../../components/sweet-alert/ErrorAlert";
import { Modal, Button, Form } from "react-bootstrap";
import axiosCustom from "../../../../../axios";

function EditTrackingOutflowIsiRumah({
  isiRumahId,
  outflowIsiRumahId,
  outflowIsiRumah,
  kodOutflowOptions,
}) {
  // __________________________________ Frontend __________________________________
  // Modal
  const [isModalEditOutflowIsiRumah, setIsModalEditOutflowIsiRumah] =
    useState(false);

  const openModalEditOutflowIsiRumah = () =>
    setIsModalEditOutflowIsiRumah(true);

  const closeModalEditOutflowIsiRumah = () => {
    setIsModalEditOutflowIsiRumah(false);
    reset(); // Reset previous form input
  };

  // Form validation
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm();

  // ----------BE----------
  // Update outflow isi rumah
  const updateOutflowIsiRumah = async (outflowIsiRumahInput) => {
    console.log(outflowIsiRumahInput);
    try {
      const response = await axiosCustom.put(
        `/sahabat/outflow-isi-rumah/${isiRumahId}/${outflowIsiRumahId}`,
        outflowIsiRumahInput
      );
      if (response.status === 200) {
        SuccessAlert(response.data.message);
        closeModalEditOutflowIsiRumah();
      } else {
        ErrorAlert(response); // Error from the backend or unknow error from the server side
      }
    } catch (error) {
      console.log(error);
      ErrorAlert(error);
    }
  };

  return (
    <>
      <div>
        <Button className="edit-btn" onClick={openModalEditOutflowIsiRumah}>
          Edit
        </Button>{" "}
        
        <Modal
          show={isModalEditOutflowIsiRumah}
          onHide={closeModalEditOutflowIsiRumah}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Outflow Isi Rumah</Modal.Title>
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
                onClick={closeModalEditOutflowIsiRumah}
              >
                Batal
              </Button>
              <Button onClick={handleSubmit(updateOutflowIsiRumah)}>
                Simpan
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    </>
  );
}

export default EditTrackingOutflowIsiRumah;
