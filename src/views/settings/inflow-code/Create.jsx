import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, Form } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { useInflowCodeStore } from "../../../store/settings/inflow-code-store";

function CreateInflowCode() {
  // __________________________________ Frontend __________________________________
  // Modal
  const [isModalCreateInflowCode, setIsModalCreateInflowCode] = useState(false);
  const openModalCreateInflowCode = () => setIsModalCreateInflowCode(true);
  const closeModalCreateInflowCode = () => {
    setIsModalCreateInflowCode(false);
    reset(); // Reset previous form input
  };

  // Form validation
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();

  // ___________________________________ Backend __________________________________
  // // Fetch inflow code data
  // const { inflowCodeOptions, displayinflowCodes } = useinflowCodeStore((state) => ({
  //   inflowCodeOptions: state.inflowCodeOptions,
  //   displayinflowCodes: state.displayinflowCodes
  // }));

  // useEffect(() => {
  //   displayinflowCodes();
  // }, [displayinflowCodes]);

  // Create inflow code
  // const { inflowCodes, displayinflowCodes, CreateInflowCode } = useinflowCodeStore((state) => ({
  //   inflowCodes: state.inflowCodes,
  //   displayinflowCodes: state. displayinflowCodes,
  //   CreateInflowCode: state.CreateInflowCode,
  // }));

  // useEffect(() => {
  //   displayinflowCodes();
  // }, [displayinflowCodes]);

  // Pass input & close modal
  const handleCreateInflowCode = (addinflowCodeData) => {
    // CreateInflowCode(addinflowCodeData, closeModalCreateInflowCode);
  };

  return (
    <>
      <div>
        <Button onClick={openModalCreateInflowCode}>
          <FaPlus style={{ fontSize: "10px" }} /> Add
        </Button>{" "}
        
        <Modal
          show={isModalCreateInflowCode}
          onHide={closeModalCreateInflowCode}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Inflow Code</Modal.Title>
          </Modal.Header>

          <Form onReset={reset}>
            <Modal.Body>
              {/* Existing inflow code */}
              <Form.Group controlId="inflowCodeId" className="mb-3">
                <Form.Label className="form-label">Inflow Code</Form.Label>

                <Form.Control
                  as="select"
                  className="form-select"
                  // {...register("inflowCodeId", { required: true })}
                  // aria-invalid={errors.inflowCodeId ? "true" : "false"}
                  placeholder="Insert inflow code"
                  defaultValue=""
                >
                  <option value="" disabled>
                    --Choose Inflow Code--
                  </option>

                  {/* {inflowCodes.map((inflowCode) => (
                    <option key={inflowCode.id} value={inflowCode.id}>
                      {inflowCode.inflowCode} - {inflowCode.keteranganinflowCode}
                    </option>
                  ))} */}
                  <option value="inflow code BAHARU">New Inflow Code</option>
                </Form.Control>

                {/* {errors.inflowCodeId?.type === "required" && ( */}
                  <small className="text-danger">Inflow code is required.</small>
                {/* )} */}
              </Form.Group>

              {/* New inflow code - If choosing inflow code BAHARU from inflow code option*/}
              {watch("inflowCodeId") === "inflow code BAHARU" && (
                <>
                  <Form.Group controlId="inflowCodeBaharu" className="mb-3">
                    <Form.Label className="form-label">
                      New Inflow Code
                    </Form.Label>

                    <Form.Control
                      type="text"
                      // {...register("inflowCodeBaharu", { required: true })}
                      // aria-invalid={errors.inflowCodeBaharu ? "true" : "false"}
                      placeholder="Insert new inflow code"
                    />

                    {/* {errors.inflowCodeBaharu?.type === "required" && ( */}
                      <small className="text-danger">
                      New inflow code is required.
                      </small>
                    {/* )} */}
                  </Form.Group>

                  <Form.Group
                    controlId="keteranganinflowCodeBaharu"
                    className="mb-3"
                  >
                    <Form.Label className="form-label">
                      New inflow code Description
                    </Form.Label>

                    <Form.Control
                      type="text"
                      // {...register("keteranganinflowCodeBaharu", {
                      //   required: true,
                      // })}
                      // aria-invalid={
                      //   errors.keteranganinflowCodeBaharu ? "true" : "false"
                      // }
                      placeholder="Insert new inflow code description"
                    />

                    {/* {errors.keteranganinflowCodeBaharu?.type === "required" && ( */}
                      <small className="text-danger">
                        New inflow code description is needed.
                      </small>
                    {/* )} */}
                  </Form.Group>
                </>
              )}

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
                  type="text"
                  // {...register("keteranganinflowCodeTerperinci", {
                  //   required: true,
                  // })}
                  // aria-invalid={
                  //   errors.keteranganinflowCodeTerperinci ? "true" : "false"
                  // }
                  placeholder="Insert detailed inflow code description."
                />

                {/* {errors.keteranganinflowCodeTerperinci?.type === "required" && ( */}
                  <small className="text-danger">
                    Detailed inflow code description is required.
                  </small>
                {/* )} */}
              </Form.Group>
            </Modal.Body>

            <Modal.Footer>
              <Button className="batal-btn" onClick={closeModalCreateInflowCode}>
                Cancel
              </Button>

              <Button onClick={handleSubmit(handleCreateInflowCode)}>
                Add
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    </>
  );
}

export default CreateInflowCode;
