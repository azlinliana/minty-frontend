import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, Form } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { useOutflowSahabatStore } from "../../../../../store/sahabat/outflow-sahabat-store";

function CreateTrackingOutflowSahabat({ mingguId, kodOutflowOptions }) {
  // __________________________________ Frontend __________________________________
  // Modal
  const [isModalCreateTrackingOutflowSahabat, setIsModalCreateTrackingOutflowSahabat] =
    useState(false);

  const openModalCreateTrackingOutflowSahabat = () =>
    setIsModalCreateTrackingOutflowSahabat(true);

  const closeModalCreateTrackingOutflowSahabat = () => {
    setIsModalCreateTrackingOutflowSahabat(false);
    reset(); // Reset previous form input
  };

  // Form validation
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // ___________________________________ Backend __________________________________
  // Create outflow sahabat
  const { createOutflowSahabat } = useOutflowSahabatStore((state) => ({
    createOutflowSahabat: state.createOutflowSahabat,
  }));

  // Pass input & close modal
  const handleCreateOutflowSahabat = (addOutflowSahabatData) => {
    createOutflowSahabat(
      mingguId,
      addOutflowSahabatData,
      closeModalCreateTrackingOutflowSahabat
    );
  };

  return (
    <>
      <div>
        <Button onClick={openModalCreateTrackingOutflowSahabat}>
          <FaPlus style={{ fontSize: "10px" }} /> Tambah
        </Button>{" "}

        <Modal
          show={isModalCreateTrackingOutflowSahabat}
          onHide={closeModalCreateTrackingOutflowSahabat}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Tambah Outflow Sahabat</Modal.Title>
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
                      {kodOutflow.kodOutflow} - {kodOutflow.keteranganKodOutflow}
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
                  placeholder="Masukkan amaun outflow"
                />

                {errors.amaunOutflow?.type === "required" && (
                  <small className="text-danger">
                    Amaun outflow diperlukan.
                  </small>
                )}
              </Form.Group>
            </Modal.Body>

            <Modal.Footer>
              <Button className="batal-btn" onClick={closeModalCreateTrackingOutflowSahabat}>
                Batal
              </Button>

              <Button onClick={handleSubmit(handleCreateOutflowSahabat)}>
                Simpan
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    </>
  );
}

export default CreateTrackingOutflowSahabat;
