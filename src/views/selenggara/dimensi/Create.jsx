import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, Form } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { useDimensiStore } from "../../../store/selenggara/dimensi-store";

function CreateDimensi() {
  // __________________________________ Frontend __________________________________
  // Modal
  const [isModalCreateDimensi, setIsModalCreateDimensi] = useState(false);
  const openModalCreateDimensi = () => setIsModalCreateDimensi(true);
  const closeModalCreateDimensi = () => {
    setIsModalCreateDimensi(false);
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
  // Create dimensi
  const { createDimensi } = useDimensiStore((state) => ({
    createDimensi: state.createDimensi,
  }));

  // Pass input & close modal
  const handleCreateDimensi = (addDimensiData) => {
    createDimensi(addDimensiData, closeModalCreateDimensi);
  };

  return (
    <>
      <Button onClick={openModalCreateDimensi}>
        <FaPlus style={{ fontSize: "10px" }} /> Tambah
      </Button>{" "}
      
      <Modal
        show={isModalCreateDimensi}
        onHide={closeModalCreateDimensi}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Tambah Dimensi</Modal.Title>
        </Modal.Header>

        <Form onReset={reset}>
          <Modal.Body>
            <Form.Group controlId="kodDimensi" className="mb-3">
              <Form.Label className="form-label">Kod Dimensi</Form.Label>

              <Form.Control
                type="text"
                {...register("kodDimensi", { required: true })}
                aria-invalid={errors.kodDimensi ? "true" : "false"}
                placeholder="Masukkan kod dimensi"
              />

              {errors.kodDimensi?.type === "required" && (
                <small className="text-danger">Kod dimensi diperlukan.</small>
              )}
            </Form.Group>

            <Form.Group controlId="keteranganDimensi" className="mb-3">
              <Form.Label className="form-label">Keterangan Dimensi</Form.Label>

              <Form.Control
                as="textarea"
                {...register("keteranganDimensi", { required: true })}
                aria-invalid={errors.keteranganDimensi ? "true" : "false"}
                placeholder="Masukkan keterangan dimensi"
              />

              {errors.keteranganDimensi?.type === "required" && (
                <small className="text-danger">
                  Keterangan dimensi diperlukan.
                </small>
              )}
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button className="batal-btn" onClick={closeModalCreateDimensi}>
              Batal
            </Button>

            <Button onClick={handleSubmit(handleCreateDimensi)}>Simpan</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default CreateDimensi;
