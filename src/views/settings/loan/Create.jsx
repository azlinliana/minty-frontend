import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, Form } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { useLoanStore } from "../../../store/settings/loan-store";

function CreateLoan() {
  // __________________________________ Frontend __________________________________
  // Modal
  const [isModalCreateLoan, setIsModalCreateLoan] = useState(false);
  const openModalCreateLoan = () => setIsModalCreateLoan(true);
  const closeModalCreateLoan = () => {
    setIsModalCreateLoan(false);
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
  // Create loan
  // const { CreateLoan } = useloanStore((state) => ({
  //   CreateLoan: state.CreateLoan,
  // }));

  // Pass input & close modal
  const handleCreateLoan = (addloanData) => {
    // CreateLoan(addloanData, closeModalCreateLoan);
  };

  return (
    <>
      <Button onClick={openModalCreateLoan}>
        <FaPlus style={{ fontSize: "10px" }} /> Add
      </Button>{" "}
      
      <Modal
        show={isModalCreateLoan}
        onHide={closeModalCreateLoan}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Loan</Modal.Title>
        </Modal.Header>

        <Form onReset={reset}>
          <Modal.Body>
            <Form.Group controlId="kodloan" className="mb-3">
              <Form.Label className="form-label">Loan Code</Form.Label>

              <Form.Control
                type="text"
                // {...register("kodloan", { required: true })}
                // aria-invalid={errors.kodloan ? "true" : "false"}
                placeholder="Insert loan code"
              />

              {/* {errors.kodloan?.type === "required" && ( */}
                <small className="text-danger">Loan code is required.</small>
              {/* )} */}
            </Form.Group>

            <Form.Group controlId="keteranganloan" className="mb-3">
              <Form.Label className="form-label">Loan Description</Form.Label>

              <Form.Control
                as="textarea"
                // {...register("keteranganloan", { required: true })}
                // aria-invalid={errors.keteranganloan ? "true" : "false"}
                placeholder="Insert loan description"
              />

              {/* {errors.keteranganloan?.type === "required" && ( */}
                <small className="text-danger">
                  Loan description is required.
                </small>
              {/* )} */}
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button className="cancel-btn" onClick={closeModalCreateLoan}>
              Cancel
            </Button>

            <Button onClick={handleSubmit(handleCreateLoan)}>Add</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default CreateLoan;
