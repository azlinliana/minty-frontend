import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, Form } from "react-bootstrap";
import { useLoanStore } from "../../../store/settings/loan-store";

function EditLoan({ loan }) {
  // __________________________________ Frontend __________________________________
  // Modal
  const [isModalEditLoan, setIsModalEditLoan] = useState(false);
  const openModalEditLoan = () => setIsModalEditLoan(true);
  const closeModalEditLoan = () => {
    setIsModalEditLoan(false);
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
  // Set default values when the kemas kini loan modal is opened
  // const [formData, setFormData] = useState({
  //   kodloan: "",
  //   keteranganloan: "",
  //   statusloan: "",
  // });

  // useEffect(() => {
  //   // Populate form data
  //   setValue("kodloan", loan.kodloan);
  //   setValue("keteranganloan", loan.keteranganloan);
  //   setValue("statusloan", loan.statusloan);

  //   // Set default values for formData
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     kodloan: loan.kodloan,
  //     keteranganloan: loan.keteranganloan,
  //     statusloan: loan.statusloan,
  //   }));
  // }, [loan, setValue]);

  // Edit loan
  // const { EditLoan } = useloanStore((state) => ({
  //   EditLoan: state.EditLoan,
  // }));

  // Pass input & close modal
  const handleEditLoan = (EditLoanData) => {
    // EditLoan(loan.id, EditLoanData, closeModalEditLoan);
  };

  return (
    <div>
      <Button className="edit-btn" onClick={openModalEditLoan}>
        Edit
      </Button>{" "}
      
      <Modal
        show={isModalEditLoan}
        onHide={closeModalEditLoan}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Loan</Modal.Title>
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

            <Form.Group controlId="statusloan" className="mb-3">
              <Form.Label className="form-label">Loan Status</Form.Label>

              <Form.Control
                as="select"
                className="form-select"
                // {...register("statusloan", { required: true })}
                // aria-invalid={errors.statusloan ? "true" : "false"}
                placeholder="Insert status loan"
              >
                <option value="" disabled>
                  --Choose Loan Status--
                </option>
                <option value="ACTIVE">ACTIVE</option>
                <option value="INACTIVE">INACTIVE</option>
              </Form.Control>

              {/* {errors.statusloan?.type === "required" && ( */}
                <small className="text-danger">
                  Loan status is required.
                </small>
              {/* )} */}
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button className="cancel-btn" onClick={closeModalEditLoan}>
              Cancel
            </Button>

            <Button onClick={handleSubmit(handleEditLoan)}>Edit</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default EditLoan;
