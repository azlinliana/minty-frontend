import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, Form } from "react-bootstrap";
import { useInflowCodeStore } from "../../../../store/settings/inflow-code-store";

function EditWithoutDetailedInflowCode(
  // { inflowCode }
) {
  // __________________________________ Frontend __________________________________
  // Modal
  const [
    isModalEditinflowCodeWithoutinflowCodeTerperinci,
    setIsModalEditinflowCodeWithoutinflowCodeTerperinci,
  ] = useState(false);
  const openModalEditinflowCodeWithoutinflowCodeTerperinci = () =>
    setIsModalEditinflowCodeWithoutinflowCodeTerperinci(true);
  const closeModalEditinflowCodeWithoutinflowCodeTerperinci = () => {
    setIsModalEditinflowCodeWithoutinflowCodeTerperinci(false);
  };

  // Form validation
  const {
    register,
    handleSubmit: handleFormSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm();

  // ___________________________________ Backend __________________________________
  // Set default values when the kemas kini inflow code modal is opened
  // const [formData, setFormData] = useState({
  //   inflowCode: "",
  //   keteranganinflowCode: "",
  //   statusinflowCode: "",
  // });

  // useEffect(() => {
  //   // Populate form data
  //   setValue("inflowCode", inflowCode.inflowCode);
  //   setValue("keteranganinflowCode", inflowCode.keteranganinflowCode);
  //   setValue("statusinflowCode", inflowCode.statusinflowCode);

  //   // Set default values for formData
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     inflowCode: inflowCode.inflowCode,
  //     keteranganinflowCode: inflowCode.keteranganinflowCode,
  //     statusinflowCode: inflowCode.statusinflowCode,
  //   }));
  // }, [inflowCode, setValue]);


  // Edit inflow code without inflow code terperinci
  // const { editinflowCodeWithoutinflowCodeTerperinci } = useinflowCodeStore((state) => ({
  //   editinflowCodeWithoutinflowCodeTerperinci: state.editinflowCodeWithoutinflowCodeTerperinci,
  // }));

  // Pass input & close modal
  const handleEditinflowCodeWithoutinflowCodeTerperinci = (editinflowCodeData) => {
    // editinflowCodeWithoutinflowCodeTerperinci(inflowCode.id, editinflowCodeData, closeModalEditinflowCodeWithoutinflowCodeTerperinci);
  };


  return (
    <>
      <div>
        <Button
          className="edit-btn"
          onClick={openModalEditinflowCodeWithoutinflowCodeTerperinci}
        >
          Edit
        </Button>{" "}
        
        <Modal
          show={isModalEditinflowCodeWithoutinflowCodeTerperinci}
          onHide={closeModalEditinflowCodeWithoutinflowCodeTerperinci}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Inflow Code</Modal.Title>
          </Modal.Header>

          <Form onReset={reset}>
            <Modal.Body>
              <Form.Group controlId="inflowCode" className="mb-3">
                <Form.Label className="form-label">Inflow Code</Form.Label>

                <Form.Control
                  type="text"
                  // {...register("inflowCode", { required: true })}
                  // aria-invalid={errors.inflowCode ? "true" : "false"}
                  placeholder="Insert inflow code"
                />

                {/* {errors.inflowCode?.type === "required" && ( */}
                  <small className="text-danger">Inflow code is required.</small>
                {/* )} */}
              </Form.Group>

              <Form.Group controlId="keteranganinflowCode" className="mb-3">
                <Form.Label className="form-label">
                  Inflow Code Description
                </Form.Label>

                <Form.Control
                  as="textarea"
                  // {...register("keteranganinflowCode", { required: true })}
                  // aria-invalid={errors.keteranganinflowCode ? "true" : "false"}
                  placeholder="Insert inflow code description"
                />

                {/* {errors.keteranganinflowCode?.type === "required" && ( */}
                  <small className="text-danger">
                    Inflow code description is required.
                  </small>
                {/* )} */}
              </Form.Group>

              <Form.Group controlId="statusinflowCode" className="mb-3">
                <Form.Label className="form-label">
                  Inflow Code Status
                </Form.Label>

                <Form.Control
                  as="select"
                  className="form-select"
                  // {...register("statusinflowCode", { required: true })}
                  // aria-invalid={errors.statusinflowCode ? "true" : "false"}
                  placeholder="Insert inflow code status"
                >
                  <option value="" disabled>
                    --Choose inflow code status--
                  </option>
                  <option value="ACTIVE">ACTIVE</option>
                  <option value="INACTIVE">INACTIVE</option>
                </Form.Control>

                {/* {errors.statusinflowCode?.type === "required" && ( */}
                  <small className="text-danger">
                    Code inflow status is required.
                  </small>
                {/* )} */}
              </Form.Group>
            </Modal.Body>

            <Modal.Footer>
              <Button
                className="batal-btn"
                onClick={closeModalEditinflowCodeWithoutinflowCodeTerperinci}
              >
                Cancel
              </Button>

              <Button
                onClick={handleFormSubmit(
                  handleEditinflowCodeWithoutinflowCodeTerperinci
                )}
              >
                Edit
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    </>
  );
}

export default EditWithoutDetailedInflowCode;
