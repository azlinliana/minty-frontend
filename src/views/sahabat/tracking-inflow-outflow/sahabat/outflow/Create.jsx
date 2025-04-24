import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, Form } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { useOutflowSahabatStore } from "../../../../../store/sahabat/outflow-sahabat-store";

// function CreateTrackingOutflowSahabat({ mingguId, kodOutflowOptions }) {
function CreateTrackingOutflowSahabat() {
  // __________________________________ Frontend __________________________________
  // Modal
  const [isModalCreateTrackingOutflowSahabat, setIsModalCreateTrackingOutflowSahabat] =
    useState(false);

  const openModalCreateTrackingOutflowSahabat = () =>
    setIsModalCreateTrackingOutflowSahabat(true);

  const closeModalCreateTrackingOutflowSahabat = () => {
    setIsModalCreateTrackingOutflowSahabat(false);
    reset(); // Reset previous form input
  };

  // Form validation
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  // ___________________________________ Backend __________________________________
  // Create outflow sahabat
  // const { createOutflowSahabat } = useOutflowSahabatStore((state) => ({
  //   createOutflowSahabat: state.createOutflowSahabat,
  // }));
  
  // Pass input & close modal
  const handleCreateOutflowSahabat = (addOutflowSahabatData) => {
    // createOutflowSahabat(
    //   mingguId,
    //   addOutflowSahabatData,
    //   closeModalCreateTrackingOutflowSahabat
    // );
  };

  return (
    <>
      <div>
        <Button onClick={openModalCreateTrackingOutflowSahabat}>
          <FaPlus style={{ fontSize: "10px" }} /> Add
        </Button>{" "}

        <Modal
          show={isModalCreateTrackingOutflowSahabat}
          onHide={closeModalCreateTrackingOutflowSahabat}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Customer Outflow</Modal.Title>
          </Modal.Header>

          <Form onReset={reset}>
            <Modal.Body>
              {/* Kod outflow */}
              <Form.Group controlId="kodOutflowId" className="mb-3">
                <Form.Label className="form-label">Outflow Code</Form.Label>

                <Form.Control
                  as="select"
                  className="form-select"
                  // {...register("kodOutflowId", { required: true })}
                  // aria-invalid={errors.kodOutflowId ? "true" : "false"}
                  defaultValue=""
                >
                  <option value="" disabled>
                    --Select Outflow Code--
                  </option>
                  {/* {kodOutflowOptions.map((kodOutflow) => (
                    <option key={kodOutflow.id} value={kodOutflow.id}>
                      {kodOutflow.kodOutflow} - {kodOutflow.keteranganKodOutflow}
                    </option>
                  ))} */}
                </Form.Control>

                {/* {errors.kodOutflowId?.type === "required" && ( */}
                  <small className="text-danger">Outflow Code is required.</small>
                {/* )} */}
              </Form.Group>
              
              {/* Amaun outflow */}
              <Form.Group controlId="amaunOutflow" className="mb-3">
                <Form.Label className="form-label">
                  Total Outflow (RM)
                </Form.Label>

                <Form.Control
                  type="number"
                  min="0.01"
                  step="0.01"
                  // {...register("amaunOutflow", {
                  //   required: "Amaun outflow diperlukan.",
                  //   valueAsNumber: true, // Ensure value is treated as a number
                  //   validate: {
                  //     isGreaterThanZero: (value) => {
                  //       return (
                  //         parseFloat(value) >= 0.01 ||
                  //         "Amaun outflow haruslah sekurang-kurangnya 0.01 atau lebih."
                  //       );
                  //     },
                  //   },
                  // })}
                  // onBlur={(e) => {
                  //   const currentValue = parseFloat(e.target.value);
                  //   if (!isNaN(currentValue)) {
                  //     setValue("amaunOutflow", currentValue.toFixed(2)); // Format to two decimal places
                  //   }
                  // }}                  
                  // aria-invalid={errors.amaunOutflow ? "true" : "false"}
                  placeholder="Enter Total Outflow"
                />

                {/* {errors.amaunOutflow?.type === "required" && ( */}
                  <small className="text-danger">
                    Total Outflow is required.
                  </small>
                {/* )} */}

                {/* {errors.amaunOutflow?.type === "isGreaterThanZero" && ( */}
                  <small className="text-danger">
                    Total Outflow should be 0.01 or more.
                  </small>
                {/* )} */}
              </Form.Group>
            </Modal.Body>

            <Modal.Footer>
              <Button className="cancel-btn" onClick={closeModalCreateTrackingOutflowSahabat}>
                Cancel
              </Button>

              <Button onClick={handleSubmit(handleCreateOutflowSahabat)}>
                Save
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    </>
  );
}

export default CreateTrackingOutflowSahabat;
