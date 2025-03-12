import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, Form } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { useKodInflowStore } from "../../../store/selenggara/kod-inflow-store";
import { useSelenggaraStore } from "../../../store/options-store";

function CreateKodInflow() {
  // __________________________________ Frontend __________________________________
  // Modal
  const [isModalCreateKodInflow, setIsModalCreateKodInflow] = useState(false);
  const openModalCreateKodInflow = () => setIsModalCreateKodInflow(true);
  const closeModalCreateKodInflow = () => {
    setIsModalCreateKodInflow(false);
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
  // // Fetch kod inflow data
  // const { kodInflowOptions, displayKodInflows } = useKodInflowStore((state) => ({
  //   kodInflowOptions: state.kodInflowOptions,
  //   displayKodInflows: state.displayKodInflows
  // }));

  // useEffect(() => {
  //   displayKodInflows();
  // }, [displayKodInflows]);

  // Create kod inflow
  // const { kodInflows, displayKodInflows, createKodInflow } = useKodInflowStore((state) => ({
  //   kodInflows: state.kodInflows,
  //   displayKodInflows: state. displayKodInflows,
  //   createKodInflow: state.createKodInflow,
  // }));

  // useEffect(() => {
  //   displayKodInflows();
  // }, [displayKodInflows]);

  // Pass input & close modal
  const handleCreateKodInflow = (addKodInflowData) => {
    // createKodInflow(addKodInflowData, closeModalCreateKodInflow);
  };

  return (
    <>
      <div>
        <Button onClick={openModalCreateKodInflow}>
          <FaPlus style={{ fontSize: "10px" }} /> Add
        </Button>{" "}
        
        <Modal
          show={isModalCreateKodInflow}
          onHide={closeModalCreateKodInflow}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Inflow Code</Modal.Title>
          </Modal.Header>

          <Form onReset={reset}>
            <Modal.Body>
              {/* Existing kod inflow */}
              <Form.Group controlId="kodInflowId" className="mb-3">
                <Form.Label className="form-label">Inflow Code</Form.Label>

                <Form.Control
                  as="select"
                  className="form-select"
                  // {...register("kodInflowId", { required: true })}
                  // aria-invalid={errors.kodInflowId ? "true" : "false"}
                  placeholder="Insert inflow code"
                  defaultValue=""
                >
                  <option value="" disabled>
                    --Choose Inflow Code--
                  </option>

                  {/* {kodInflows.map((kodInflow) => (
                    <option key={kodInflow.id} value={kodInflow.id}>
                      {kodInflow.kodInflow} - {kodInflow.keteranganKodInflow}
                    </option>
                  ))} */}
                  <option value="KOD INFLOW BAHARU">New Inflow Code</option>
                </Form.Control>

                {/* {errors.kodInflowId?.type === "required" && ( */}
                  <small className="text-danger">Inflow code is required.</small>
                {/* )} */}
              </Form.Group>

              {/* New kod inflow - If choosing KOD INFLOW BAHARU from kod inflow option*/}
              {watch("kodInflowId") === "KOD INFLOW BAHARU" && (
                <>
                  <Form.Group controlId="kodInflowBaharu" className="mb-3">
                    <Form.Label className="form-label">
                      New Inflow Code
                    </Form.Label>

                    <Form.Control
                      type="text"
                      // {...register("kodInflowBaharu", { required: true })}
                      // aria-invalid={errors.kodInflowBaharu ? "true" : "false"}
                      placeholder="Insert new inflow code"
                    />

                    {/* {errors.kodInflowBaharu?.type === "required" && ( */}
                      <small className="text-danger">
                      New inflow code is required.
                      </small>
                    {/* )} */}
                  </Form.Group>

                  <Form.Group
                    controlId="keteranganKodInflowBaharu"
                    className="mb-3"
                  >
                    <Form.Label className="form-label">
                      New inflow code Description
                    </Form.Label>

                    <Form.Control
                      type="text"
                      // {...register("keteranganKodInflowBaharu", {
                      //   required: true,
                      // })}
                      // aria-invalid={
                      //   errors.keteranganKodInflowBaharu ? "true" : "false"
                      // }
                      placeholder="Insert new inflow code description"
                    />

                    {/* {errors.keteranganKodInflowBaharu?.type === "required" && ( */}
                      <small className="text-danger">
                        New inflow code description is needed.
                      </small>
                    {/* )} */}
                  </Form.Group>
                </>
              )}

              <Form.Group controlId="kodInflowTerperinci" className="mb-3">
                <Form.Label className="form-label">
                  Detailed Inflow Code
                </Form.Label>

                <Form.Control
                  type="text"
                  // {...register("kodInflowTerperinci", { required: true })}
                  // aria-invalid={errors.kodInflowTerperinci ? "true" : "false"}
                  placeholder="Insert detailed inflow code"
                />

                {/* {errors.kodInflowTerperinci?.type === "required" && ( */}
                  <small className="text-danger">
                    Detailed inflow code is required.
                  </small>
                {/* )} */}
              </Form.Group>

              <Form.Group
                controlId="keteranganKodInflowTerperinci"
                className="mb-3"
              >
                <Form.Label className="form-label">
                  Detailed Inflow Code Description
                </Form.Label>

                <Form.Control
                  type="text"
                  // {...register("keteranganKodInflowTerperinci", {
                  //   required: true,
                  // })}
                  // aria-invalid={
                  //   errors.keteranganKodInflowTerperinci ? "true" : "false"
                  // }
                  placeholder="Insert detailed inflow code description."
                />

                {/* {errors.keteranganKodInflowTerperinci?.type === "required" && ( */}
                  <small className="text-danger">
                    Detailed inflow code description is required.
                  </small>
                {/* )} */}
              </Form.Group>
            </Modal.Body>

            <Modal.Footer>
              <Button className="batal-btn" onClick={closeModalCreateKodInflow}>
                Cancel
              </Button>

              <Button onClick={handleSubmit(handleCreateKodInflow)}>
                Add
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    </>
  );
}

export default CreateKodInflow;
