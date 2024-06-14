import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, Form } from "react-bootstrap";
import { useMingguStore } from "../../../store/sahabat/minggu-store";

function EditMinggu({
  sahabatId,
  pembiayaanId,
  mingguId,
  mingguPembiayaanSahabat,
}) {
  // __________________________________ Frontend __________________________________
  // Modal
  const [
    isModalEditMingguPembiayaanSahabat,
    setIsModalEditMingguPembiayaanSahabat,
  ] = useState(false);
  const openModalEditMingguPembiayaanSahabat = () =>
    setIsModalEditMingguPembiayaanSahabat(true);
  const closeModalEditMingguPembiayaanSahabat = () => {
    setIsModalEditMingguPembiayaanSahabat(false);
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

  // ___________________________________ Backend __________________________________
  // Set default values when the kemas kini minggu modal is opened
  const [formData, setFormData] = useState({
    bilanganMinggu: "",
    tarikhBorangMinggu: "",
  });

  useEffect(() => {
    // Populate form data
    setValue("bilanganMinggu", mingguPembiayaanSahabat.bilanganMinggu);
    setValue("tarikhBorangMinggu", mingguPembiayaanSahabat.tarikhBorangMinggu);

    // Set default values for formData
    setFormData((prevData) => ({
      ...prevData,
      bilanganMinggu: mingguPembiayaanSahabat.bilanganMinggu,
      tarikhBorangMinggu: mingguPembiayaanSahabat.tarikhBorangMinggu,
    }));
  }, [mingguPembiayaanSahabat, setValue]);

  // Edit minggu pembiayaan sahabat
  const { editMingguPembiayaanSahabat } = useMingguStore((state) => ({
    editMingguPembiayaanSahabat: state.editMingguPembiayaanSahabat,
  }));

  // Pass input & close modal
  const handleEditMingguPembiayaanSahabat = (
    editMingguPembiayaanSahabatData
  ) => {
    editMingguPembiayaanSahabat(
      sahabatId,
      pembiayaanId,
      mingguId,
      editMingguPembiayaanSahabatData,
      closeModalEditMingguPembiayaanSahabat
    );
  };

  return (
    <>
      <div>
        <Button onClick={openModalEditMingguPembiayaanSahabat}>
          Edit Minggu
        </Button>{" "}
        <Modal
          show={isModalEditMingguPembiayaanSahabat}
          onHide={closeModalEditMingguPembiayaanSahabat}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Minggu</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onReset={reset}>
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

              <Form.Group controlId="tarikhBorangMinggu" className="mb-3">
                <Form.Label className="form-label">
                  Tarikh Borang Minggu
                </Form.Label>

                <Form.Control
                  type="date"
                  {...register("tarikhBorangMinggu", { required: true })}
                  aria-invalid={errors.tarikhBorangMinggu ? "true" : "false"}
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
            <Button
              className="batal-btn"
              onClick={closeModalEditMingguPembiayaanSahabat}
            >
              Batal
            </Button>
            <Button onClick={handleSubmit(handleEditMingguPembiayaanSahabat)}>
              Simpan
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default EditMinggu;
