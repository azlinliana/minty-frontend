import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, Form } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { useKodOutflowStore } from "../../../store/selenggara/kod-outflow-store";

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
  // Create kod outflow
  // const { CreateOutflowCode } = useKodOutflowStore((state) => ({
  //   CreateOutflowCode: state.CreateOutflowCode,
  // }));

  // Pass input & close modal
  const handleCreateOutflowCode = (addKodOutflowData) => {
    // CreateOutflowCode(addKodOutflowData, closeModalCreateOutflowCode);
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
            <Form.Group controlId="kodOutflow" className="mb-3">
              <Form.Label className="form-label">Outflow Code</Form.Label>

              <Form.Control
                type="text"
                // {...register("kodOutflow", { required: true })}
                // aria-invalid={errors.kodOutflow ? "true" : "false"}
                placeholder="Insert outflow code"
              />

              {/* {errors.kodOutflow?.type === "required" && ( */}
                <small className="text-danger">Outflow code is required.</small>
              {/* )} */}
            </Form.Group>

            <Form.Group controlId="keteranganKodOutflow" className="mb-3">
              <Form.Label className="form-label">
                Outflow Code Description
              </Form.Label>

              <Form.Control
                type="text"
                // {...register("keteranganKodOutflow", { required: true })}
                // aria-invalid={errors.keteranganKodOutflow ? "true" : "false"}
                placeholder="Insert outflow code description"
              />

              {/* {errors.keteranganKodOutflow?.type === "required" && ( */}
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
