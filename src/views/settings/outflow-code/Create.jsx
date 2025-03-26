import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, Form } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { useOutflowCodeStore } from "../../../store/settings/outflow-code-store";

function CreateOutflowCode() {
  // __________________________________ Frontend __________________________________
  // Modal
  const [isModalCreateOutflowCode, setIsModalCreateOutflowCode] = useState(false);
  const openModalCreateOutflowCode = () => setIsModalCreateOutflowCode(true);
  const closeModalCreateOutflowCode = () => {
    setIsModalCreateOutflowCode(false);
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
  // Create outflow code
  // const { CreateOutflowCode } = useOutflowCodeStore((state) => ({
  //   CreateOutflowCode: state.CreateOutflowCode,
  // }));

  // Pass input & close modal
  const handleCreateOutflowCode = (addOutflowCodeData) => {
    // CreateOutflowCode(addOutflowCodeData, closeModalCreateOutflowCode);
  };

  return (
    <>
      <Button onClick={openModalCreateOutflowCode}>
        <FaPlus style={{ fontSize: "10px" }} /> Add
      </Button>{" "}
      
      <Modal
        show={isModalCreateOutflowCode}
        onHide={closeModalCreateOutflowCode}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Outflow Code</Modal.Title>
        </Modal.Header>

        <Form onReset={reset}>
          <Modal.Body>
            <Form.Group controlId="OutflowCode" className="mb-3">
              <Form.Label className="form-label">Outflow Code</Form.Label>

              <Form.Control
                type="text"
                // {...register("OutflowCode", { required: true })}
                // aria-invalid={errors.OutflowCode ? "true" : "false"}
                placeholder="Insert outflow code"
              />

              {/* {errors.OutflowCode?.type === "required" && ( */}
                <small className="text-danger">Outflow code is required.</small>
              {/* )} */}
            </Form.Group>

            <Form.Group controlId="keteranganOutflowCode" className="mb-3">
              <Form.Label className="form-label">
                Outflow Code Description
              </Form.Label>

              <Form.Control
                type="text"
                // {...register("keteranganOutflowCode", { required: true })}
                // aria-invalid={errors.keteranganOutflowCode ? "true" : "false"}
                placeholder="Insert outflow code description"
              />

              {/* {errors.keteranganOutflowCode?.type === "required" && ( */}
                <small className="text-danger">
                  Outflow code description is required.
                </small>
              {/* )} */}
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button className="batal-btn" onClick={closeModalCreateOutflowCode}>
              Cancel
            </Button>

            <Button onClick={handleSubmit(handleCreateOutflowCode)}>Add</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default CreateOutflowCode;
