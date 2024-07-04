import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, Form } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { useMingguStore } from "../../../store/sahabat/minggu-store";

function CreateMinggu({ sahabatId, pembiayaanId }) {
  // __________________________________ Frontend __________________________________
  // Modal
  const [isModalCreateMingguPembiayaanSahabat, setIsModalCreateMingguPembiayaanSahabat] = useState(false);
  
  const openModalCreateMingguPembiayaanSahabat = () => setIsModalCreateMingguPembiayaanSahabat(true);
  
  const closeModalCreateMingguPembiayaanSahabat = () => {
    setIsModalCreateMingguPembiayaanSahabat(false);
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
  // Create minggu pembiayaan sahabat
  const { createMingguPembiayaanSahabat } = useMingguStore((state) => ({
    createMingguPembiayaanSahabat: state.createMingguPembiayaanSahabat,
  }));

  // Pass input & close modal
  const handleCreateMingguPembiayaanSahabat = (
    addMingguPembiayaanSahabatData
  ) => {
    createMingguPembiayaanSahabat(
      sahabatId,
      pembiayaanId,
      addMingguPembiayaanSahabatData,
      closeModalCreateMingguPembiayaanSahabat
    );
  };

  return (
    <>
      <div>
        <Button onClick={openModalCreateMingguPembiayaanSahabat}>
          <FaPlus style={{ fontSize: "10px" }} /> Tambah Minggu
        </Button>{" "}

        <Modal
          show={isModalCreateMingguPembiayaanSahabat}
          onHide={closeModalCreateMingguPembiayaanSahabat}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Tambah Minggu</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onReset={reset}>
              {/* Bilangan minggu */}
              <Form.Group controlId="bilanganMinggu" className="mb-3">
                <Form.Label className="form-label">
                  Bilangan Minggu
                </Form.Label>

                <Form.Control
                  type="number"
                  {...register("bilanganMinggu", { required: true })}
                  aria-invalid={errors.bilanganMinggu ? "true" : "false"}
                  placeholder="Masukkan minggu ke berapa"
                />

                {errors.bilanganMinggu?.type === "required" && (
                  <small className="text-danger">
                    Bilangan minggu diperlukan.
                  </small>
                )}
              </Form.Group>

              {/* Tarikh borang minggu */}
              <Form.Group controlId="tarikhBorangMinggu" className="mb-3">
                <Form.Label className="form-label">
                  Tarikh Borang Minggu
                </Form.Label>

                <Form.Control
                  type="date"
                  {...register("tarikhBorangMinggu", { required: true })}
                  aria-invalid={errors.tarikhBorangMinggu ? "true" : "false"}
                  placeholder="Masukkan tarikh borang minggu"
                />

                {errors.tarikhBorangMinggu?.type === "required" && (
                  <small className="text-danger">
                    Tarikh borang minggu diperlukan.
                  </small>
                )}
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button className="batal-btn" onClick={closeModalCreateMingguPembiayaanSahabat}>
              Batal
            </Button>

            <Button onClick={handleSubmit(handleCreateMingguPembiayaanSahabat)}>
              Simpan
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default CreateMinggu;
