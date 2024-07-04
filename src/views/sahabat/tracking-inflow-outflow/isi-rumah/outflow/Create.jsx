import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, Form } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { useOutflowIsiRumahStore } from "../../../../../store/sahabat/outflow-isi-rumah-store";

function CreateTrackingOutflowIsiRumah({ isiRumahId, kodOutflowOptions }) {
  // __________________________________ Frontend __________________________________
  // Modal
  const [isModalCreateOutflowIsiRumah, setIsModalCreateOutflowIsiRumah] =
    useState(false);

  const openModalCreateOutflowIsiRumah = () =>
    setIsModalCreateOutflowIsiRumah(true);

  const closeModalCreateOutflowIsiRumah = () => {
    setIsModalCreateOutflowIsiRumah(false);
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
  // Create outflow isi rumah
  const { createOutflowIsiRumah } = useOutflowIsiRumahStore((state) => ({
    createOutflowIsiRumah: state.createOutflowIsiRumah,
  }));

  // Pass input & close modal
  const handleCreateOutflowIsiRumah = (addOutflowIsiRumahData) => {
    createOutflowIsiRumah(
      isiRumahId,
      addOutflowIsiRumahData,
      closeModalCreateOutflowIsiRumah
    );
  };

  return (
    <>
      <div>
        <Button onClick={openModalCreateOutflowIsiRumah}>
          <FaPlus style={{ fontSize: "10px" }} /> Tambah
        </Button>{" "}
        
        <Modal
          show={isModalCreateOutflowIsiRumah}
          onHide={closeModalCreateOutflowIsiRumah}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Tambah Outflow Isi Rumah</Modal.Title>
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
                onClick={closeModalCreateOutflowIsiRumah}
              >
                Batal
              </Button>

              <Button onClick={handleSubmit(handleCreateOutflowIsiRumah)}>
                Simpan
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    </>
  );
}

export default CreateTrackingOutflowIsiRumah;
