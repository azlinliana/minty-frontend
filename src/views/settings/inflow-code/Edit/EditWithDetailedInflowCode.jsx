import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, Form } from "react-bootstrap";
import { useInflowCodeStore } from "../../../../store/settings/inflow-code-store";

function EditWithDetailedInflowCode({ inflowCode, inflowCodeTerperinci }) {
  // __________________________________ Frontend __________________________________
  // Modal
  const [
    isModalEditinflowCodeWithinflowCodeTerperinci,
    setIsModalEditinflowCodeWithinflowCodeTerperinci,
  ] = useState(false);
  const openModalEditinflowCodeWithinflowCodeTerperinci = () =>
    setIsModalEditinflowCodeWithinflowCodeTerperinci(true);
  const closeModalEditinflowCodeWithinflowCodeTerperinci = () => {
    setIsModalEditinflowCodeWithinflowCodeTerperinci(false);
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
  //   inflowCodeTerperinci: "",
  //   keteranganinflowCodeTerperinci: "",
  //   statusinflowCodeTerperinci: "",
  // });

  // useEffect(() => {
  //   // Populate form data
  //   setValue("inflowCode", inflowCode.inflowCode);
  //   setValue("keteranganinflowCode", inflowCode.keteranganinflowCode);
  //   setValue("statusinflowCode", inflowCode.statusinflowCode);
  //   setValue("inflowCodeTerperinci", inflowCodeTerperinci.inflowCodeTerperinci);
  //   setValue(
  //     "keteranganinflowCodeTerperinci",
  //     inflowCodeTerperinci.keteranganinflowCodeTerperinci
  //   );
  //   setValue(
  //     "statusinflowCodeTerperinci",
  //     inflowCodeTerperinci.statusinflowCodeTerperinci
  //   );

    // Set default values for formData
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     inflowCode: inflowCode.inflowCode,
  //     keteranganinflowCode: inflowCode.keteranganinflowCode,
  //     statusinflowCode: inflowCode.statusinflowCode,
  //     inflowCodeTerperinci: inflowCodeTerperinci.inflowCodeTerperinci,
  //     keteranganinflowCodeTerperinci:
  //       inflowCodeTerperinci.keteranganinflowCodeTerperinci,
  //     statusinflowCodeTerperinci: inflowCodeTerperinci.statusinflowCodeTerperinci,
  //   }));
  // }, [inflowCode, inflowCodeTerperinci, setValue]);

  // Edit inflow code with inflow code terperinci
  // const { editinflowCodeWithinflowCodeTerperinci } = useinflowCodeStore((state) => ({
  //   editinflowCodeWithinflowCodeTerperinci: state.editinflowCodeWithinflowCodeTerperinci,
  // }));

  // Pass input & close modal
  const handleEditinflowCodeWithinflowCodeTerperinci = (editinflowCodeData) => {
    // editinflowCodeWithinflowCodeTerperinci(inflowCode.id, editinflowCodeData, closeModalEditinflowCodeWithinflowCodeTerperinci);
  };

  return (
    <>
      <div>
        <Button
          className="edit-btn"
          onClick={openModalEditinflowCodeWithinflowCodeTerperinci}
        >
          Edit
        </Button>{" "}
        
        <Modal
          show={isModalEditinflowCodeWithinflowCodeTerperinci}
          onHide={closeModalEditinflowCodeWithinflowCodeTerperinci}
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
                    --Choose Inflow Code Status--
                  </option>
                  <option value="ACTIVE">ACTIVE</option>
                  <option value="INACTIVE">INACTIVE</option>
                </Form.Control>

                {/* {errors.statusinflowCode?.type === "required" && ( */}
                  <small className="text-danger">
                    Inflow code status is required.
                  </small>
                {/* )} */}
              </Form.Group>

              <Form.Group controlId="inflowCodeTerperinci" className="mb-3">
                <Form.Label className="form-label">
                  Detailed Inflow Code
                </Form.Label>

                <Form.Control
                  type="text"
                  // {...register("inflowCodeTerperinci", { required: true })}
                  // aria-invalid={errors.inflowCodeTerperinci ? "true" : "false"}
                  placeholder="Insert detailed inflow code"
                />

                {/* {errors.inflowCodeTerperinci?.type === "required" && ( */}
                  <small className="text-danger">
                    Detailed inflow code is required.
                  </small>
                {/* )} */}
              </Form.Group>

              <Form.Group
                controlId="keteranganinflowCodeTerperinci"
                className="mb-3"
              >
                <Form.Label className="form-label">
                  Detailed Inflow Code Description
                </Form.Label>

                <Form.Control
                  as="textarea"
                  // {...register("keteranganinflowCodeTerperinci", {
                  //   required: true,
                  // })}
                  // aria-invalid={
                  //   errors.keteranganinflowCodeTerperinci ? "true" : "false"
                  // }
                  placeholder="Insert detailed inflow code description"
                />

                {/* {errors.keteranganinflowCodeTerperinci?.type === "required" && ( */}
                  <small className="text-danger">
                    Detailed inflow code description is required.
                  </small>
                {/* )} */}
              </Form.Group>

              <Form.Group
                controlId="statusinflowCodeTerperinci"
                className="mb-3"
              >
                <Form.Label className="form-label">
                  Detailed Inflow Code Status
                </Form.Label>

                <Form.Control
                  as="select"
                  className="form-select"
                  // {...register("statusinflowCodeTerperinci", { required: true })}
                  // aria-invalid={
                  //   errors.statusinflowCodeTerperinci ? "true" : "false"
                  // }
                  placeholder="Insert status inflow code terperinci"
                >
                  <option value="" disabled>
                    --Choose Detailed Inflow Code Status--
                  </option>
                  <option value="ACTIVE">ACTIVE</option>
                  <option value="INACTIVE">INACTIVE</option>
                </Form.Control>

                {/* {errors.statusinflowCodeTerperinci?.type === "required" && ( */}
                  <small className="text-danger">
                    Detailed inflow code status is required.
                  </small>
                {/* )} */}
              </Form.Group>
            </Modal.Body>

            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={closeModalEditinflowCodeWithinflowCodeTerperinci}
              >
                Cancel
              </Button>

              <Button
                variant="primary"
                onClick={handleFormSubmit(
                  handleEditinflowCodeWithinflowCodeTerperinci
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

export default EditWithDetailedInflowCode;
