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
          <Modal.Title>Edit Loan</Modal.Title>
        </Modal.Header>

        <Form onReset={reset}>
          <Modal.Body>
            <Form.Group controlId="kodDimensi" className="mb-3">
              <Form.Label className="form-label">Loan Code</Form.Label>

              <Form.Control
                type="text"
                // {...register("kodDimensi", { required: true })}
                // aria-invalid={errors.kodDimensi ? "true" : "false"}
                placeholder="Insert loan code"
              />

              {/* {errors.kodDimensi?.type === "required" && ( */}
                <small className="text-danger">Loan code is required.</small>
              {/* )} */}
            </Form.Group>

            <Form.Group controlId="keteranganDimensi" className="mb-3">
              <Form.Label className="form-label">Loan Description</Form.Label>

              <Form.Control
                as="textarea"
                // {...register("keteranganDimensi", { required: true })}
                // aria-invalid={errors.keteranganDimensi ? "true" : "false"}
                placeholder="Insert loan description"
              />

              {/* {errors.keteranganDimensi?.type === "required" && ( */}
                <small className="text-danger">
                  Loan description is required.
                </small>
              {/* )} */}
            </Form.Group>

            <Form.Group controlId="statusDimensi" className="mb-3">
              <Form.Label className="form-label">Loan Status</Form.Label>

              <Form.Control
                as="select"
                className="form-select"
                // {...register("statusDimensi", { required: true })}
                // aria-invalid={errors.statusDimensi ? "true" : "false"}
                placeholder="Insert status dimensi"
              >
                <option value="" disabled>
                  --Choose Loan Status--
                </option>
                <option value="ACTIVE">ACTIVE</option>
                <option value="INACTIVE">INACTIVE</option>
              </Form.Control>

              {/* {errors.statusDimensi?.type === "required" && ( */}
                <small className="text-danger">
                  Loan status is required.
                </small>
              {/* )} */}
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button className="batal-btn" onClick={closeModalEditDimensi}>
              Cancel
            </Button>

            <Button onClick={handleSubmit(handleEditDimensi)}>Edit</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default EditDimensi;
