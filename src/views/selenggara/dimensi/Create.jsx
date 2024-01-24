import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import SuccessAlert from "../../components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../components/sweet-alert/ErrorAlert";
import { Modal, Button, Form } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import axiosCustom from "../../../axios";

function CreateDimensi() {
  // ----------FE----------
  // Modal
  const [isModalCreateDimensi, setIsModalCreateDimensi] = useState(false);
  const openModalCreateDimensi = () => setIsModalCreateDimensi(true);
  const closeModalCreateDimensi = () => {
    setIsModalCreateDimensi(false);
    reset(); // Reset previous form input
  };

  // Form validation
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  // ----------BE----------
  // Create dimensi
  const createDimensi = async (dimensiInput) => {
    try {
      const response = await axiosCustom.post(
        "/selenggara/dimensi",
        dimensiInput
      );

      if (response.status === 200) {
        SuccessAlert(response.data.message);
        closeModalCreateDimensi();
      }
    } catch (error) {
      ErrorAlert(error);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={openModalCreateDimensi}>
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

        <Modal.Body>
          <Form onSubmit={handleSubmit(createDimensi)} onReset={reset}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="kodDimensi">Kod Dimensi</Form.Label>

              <Controller
                name="kodDimensi"
                id="kodDimensi"
                control={control}
                defaultValue=""
                rules={{ required: "Kod dimensi diperlukan." }}
                render={({ field: { onChange, value } }) => (
                  <Form.Control
                    type="text"
                    onChange={onChange}
                    value={value}
                    placeholder="Masukkan kod dimensi"
                    autoFocus
                  />
                )}
              />
              {errors.kodDimensi && (
                <small className="text-danger">
                  {errors.kodDimensi.message}
                </small>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="keteranganDimensi">
                Keterangan Dimensi
              </Form.Label>

              <Controller
                name="keteranganDimensi"
                id="keteranganDimensi"
                control={control}
                defaultValue=""
                rules={{ required: "Keterangan dimensi diperlukan." }}
                render={({ field: { onChange, value } }) => (
                  <Form.Control
                    as="textarea"
                    onChange={onChange}
                    value={value}
                    rows={3}
                    placeholder="Masukkan keterangan dimensi"
                  />
                )}
              />
              {errors.keteranganDimensi && (
                <small className="text-danger">
                  {errors.keteranganDimensi.message}
                </small>
              )}
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalCreateDimensi}>
            Batal
          </Button>
          <Button variant="primary" onClick={handleSubmit(createDimensi)}>
            Simpan
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateDimensi;
