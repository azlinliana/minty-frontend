import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, Form } from "react-bootstrap";
import { useDimensiStore } from "../../../store/selenggara/dimensi-store";

function EditDimensi({ dimensi }) {
  // __________________________________ Frontend __________________________________
  // Modal
  const [isModalEditDimensi, setIsModalEditDimensi] = useState(false);
  const openModalEditDimensi = () => setIsModalEditDimensi(true);
  const closeModalEditDimensi = () => {
    setIsModalEditDimensi(false);
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
  // Set default values when the kemas kini dimensi modal is opened
  // const [formData, setFormData] = useState({
  //   kodDimensi: "",
  //   keteranganDimensi: "",
  //   statusDimensi: "",
  // });

  // useEffect(() => {
  //   // Populate form data
  //   setValue("kodDimensi", dimensi.kodDimensi);
  //   setValue("keteranganDimensi", dimensi.keteranganDimensi);
  //   setValue("statusDimensi", dimensi.statusDimensi);

  //   // Set default values for formData
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     kodDimensi: dimensi.kodDimensi,
  //     keteranganDimensi: dimensi.keteranganDimensi,
  //     statusDimensi: dimensi.statusDimensi,
  //   }));
  // }, [dimensi, setValue]);

  // Edit dimensi
  // const { editDimensi } = useDimensiStore((state) => ({
  //   editDimensi: state.editDimensi,
  // }));

  // Pass input & close modal
  const handleEditDimensi = (editDimensiData) => {
    // editDimensi(dimensi.id, editDimensiData, closeModalEditDimensi);
  };

  return (
    <div>
      <Button className="edit-btn" onClick={openModalEditDimensi}>
        Edit
      </Button>{" "}
      
      <Modal
        show={isModalEditDimensi}
        onHide={closeModalEditDimensi}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Dimensi</Modal.Title>
        </Modal.Header>

        <Form onReset={reset}>
          <Modal.Body>
            <Form.Group controlId="kodDimensi" className="mb-3">
              <Form.Label className="form-label">Kod Dimensi</Form.Label>

              <Form.Control
                type="text"
                // {...register("kodDimensi", { required: true })}
                // aria-invalid={errors.kodDimensi ? "true" : "false"}
                placeholder="Masukkan kod dimensi"
              />

              {/* {errors.kodDimensi?.type === "required" && ( */}
                <small className="text-danger">Kod dimensi diperlukan.</small>
              {/* )} */}
            </Form.Group>

            <Form.Group controlId="keteranganDimensi" className="mb-3">
              <Form.Label className="form-label">Keterangan Dimensi</Form.Label>

              <Form.Control
                as="textarea"
                // {...register("keteranganDimensi", { required: true })}
                // aria-invalid={errors.keteranganDimensi ? "true" : "false"}
                placeholder="Masukkan keterangan dimensi"
              />

              {/* {errors.keteranganDimensi?.type === "required" && ( */}
                <small className="text-danger">
                  Keterangan dimensi diperlukan.
                </small>
              {/* )} */}
            </Form.Group>

            <Form.Group controlId="statusDimensi" className="mb-3">
              <Form.Label className="form-label">Status Dimensi</Form.Label>

              <Form.Control
                as="select"
                className="form-select"
                // {...register("statusDimensi", { required: true })}
                // aria-invalid={errors.statusDimensi ? "true" : "false"}
                placeholder="Masukkan status dimensi"
              >
                <option value="" disabled>
                  --Pilih Status Dimensi--
                </option>
                <option value="AKTIF">AKTIF</option>
                <option value="TIDAK AKTIF">TIDAK AKTIF</option>
              </Form.Control>

              {/* {errors.statusDimensi?.type === "required" && ( */}
                <small className="text-danger">
                  Status dimensi diperlukan.
                </small>
              {/* )} */}
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button className="batal-btn" onClick={closeModalEditDimensi}>
              Batal
            </Button>

            <Button onClick={handleSubmit(handleEditDimensi)}>Simpan</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default EditDimensi;
