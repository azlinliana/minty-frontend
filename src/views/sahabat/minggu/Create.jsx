import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import SuccessAlert from "../../components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../components/sweet-alert/ErrorAlert";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaPlus } from "react-icons/fa";
import axios from "axios";

function CreateMinggu({sahabatId, pembiayaanId}) {
  // ----------FE----------
  // Modal
  const [isModalCreateMinggu, setIsModalCreateMinggu] = useState(false);
  const openModalCreateMinggu = () => setIsModalCreateMinggu(true);
  const closeModalCreateMinggu = () => {
    setIsModalCreateMinggu(false);
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

  return(
    <div>
      <Button variant="primary" onClick={openModalCreateMinggu}>
        <FaPlus style={{ fontSize: "10px" }} /> Tambah Minggu
      </Button>{" "}
      <Modal
        show={isModalCreateMinggu}
        onHide={closeModalCreateMinggu}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Tambah Minggu</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit(createMingguPembiayaanSahabat)} onReset={reset}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="bilanganMinggu">Bilangan Minggu</Form.Label>
              <Controller
                type="number"
                id="bilanganMinggu"
                name="bilanganMinggu"
                control={control}
                defaultValue=""
                rules={{ required: "Bilangan minggu diperlukan." }}
                render={({ field: { onChange, value } }) => (
                  <Form.Control
                    type="number"
                    onChange={onChange}
                    value={value}
                    placeholder="Masukkan minggu ke berapa"
                    autoFocus
                  />
                )}
              />
              {errors.bilanganMinggu && (
                <small className="text-danger">
                  {errors.bilanganMinggu.message}
                </small>
              )}
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="tarikhBorangMinggu">
                Tarikh Borang Minggu
              </Form.Label>
              <Controller
                type="date"
                id="tarikhBorangMinggu"
                name="tarikhBorangMinggu"
                control={control}
                defaultValue=""
                rules={{ required: "Tarikh borang minggu diperlukan." }}
                render={({ field: { onChange, value } }) => (
                  <Form.Control
                    type="date"
                    onChange={onChange}
                    value={value}
                    autoFocus
                  />
                )}
              />
              {errors.tarikhBorangMinggu && (
                <small className="text-danger">
                  {errors.tarikhBorangMinggu.message}
                </small>
              )}
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalCreateMinggu}>Batal</Button>
          <Button variant="primary" onClick={handleSubmit(createMingguPembiayaanSahabat)}>Tambah</Button>
          <Button variant="secondary" onClick={closeModalCreateMinggu}>
            Batal
          </Button>
          <Button variant="primary" onClick={handleSubmit()}>
            Tambah
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CreateMinggu;
