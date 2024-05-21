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
  const { kodInflows, displayKodInflows, createKodInflow } = useKodInflowStore((state) => ({
    kodInflows: state.kodInflows,
    displayKodInflows: state. displayKodInflows,
    createKodInflow: state.createKodInflow,
  }));

  useEffect(() => {
    displayKodInflows();
  }, [displayKodInflows]);

  // Pass input & close modal
  const handleCreateKodInflow = (addKodInflowData) => {
    createKodInflow(addKodInflowData, closeModalCreateKodInflow);
  };

  return (
    <>
      <div>
        <Button onClick={openModalCreateKodInflow}>
          <FaPlus style={{ fontSize: "10px" }} /> Tambah
        </Button>{" "}
        
        <Modal
          show={isModalCreateKodInflow}
          onHide={closeModalCreateKodInflow}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Tambah Kod Inflow</Modal.Title>
          </Modal.Header>

          <Form onReset={reset}>
            <Modal.Body>
              {/* Existing kod inflow */}
              <Form.Group controlId="kodInflowId" className="mb-3">
                <Form.Label className="form-label">Kod Inflow</Form.Label>

                <Form.Control
                  as="select"
                  className="form-select"
                  {...register("kodInflowId", { required: true })}
                  aria-invalid={errors.kodInflowId ? "true" : "false"}
                  placeholder="Masukkan kod inflow"
                  defaultValue=""
                >
                  <option value="" disabled>
                    --Pilih Kod Inflow--
                  </option>

                  {kodInflows.map((kodInflow) => (
                    <option key={kodInflow.id} value={kodInflow.id}>
                      {kodInflow.kodInflow} - {kodInflow.keteranganKodInflow}
                    </option>
                  ))}
                  <option value="KOD INFLOW BAHARU">KOD INFLOW BAHARU</option>
                </Form.Control>

                {errors.kodInflowId?.type === "required" && (
                  <small className="text-danger">Kod inflow diperlukan.</small>
                )}
              </Form.Group>

              {/* New kod inflow - If choosing KOD INFLOW BAHARU from kod inflow option*/}
              {watch("kodInflowId") === "KOD INFLOW BAHARU" && (
                <>
                  <Form.Group controlId="kodInflowBaharu" className="mb-3">
                    <Form.Label className="form-label">
                      Kod Inflow Baharu
                    </Form.Label>

                    <Form.Control
                      type="text"
                      {...register("kodInflowBaharu", { required: true })}
                      aria-invalid={errors.kodInflowBaharu ? "true" : "false"}
                      placeholder="Masukkan kod inflow baharu"
                    />

                    {errors.kodInflowBaharu?.type === "required" && (
                      <small className="text-danger">
                        Kod inflow baharu diperlukan.
                      </small>
                    )}
                  </Form.Group>

                  <Form.Group
                    controlId="keteranganKodInflowBaharu"
                    className="mb-3"
                  >
                    <Form.Label className="form-label">
                      Keterangan Kod Inflow Baharu
                    </Form.Label>

                    <Form.Control
                      type="text"
                      {...register("keteranganKodInflowBaharu", {
                        required: true,
                      })}
                      aria-invalid={
                        errors.keteranganKodInflowBaharu ? "true" : "false"
                      }
                      placeholder="Masukkan keterangan kod inflow baharu"
                    />

                    {errors.keteranganKodInflowBaharu?.type === "required" && (
                      <small className="text-danger">
                        Keterangan kod inflow baharu diperlukan.
                      </small>
                    )}
                  </Form.Group>
                </>
              )}

              <Form.Group controlId="kodInflowTerperinci" className="mb-3">
                <Form.Label className="form-label">
                  Kod Inflow Terperinci
                </Form.Label>

                <Form.Control
                  type="text"
                  {...register("kodInflowTerperinci", { required: true })}
                  aria-invalid={errors.kodInflowTerperinci ? "true" : "false"}
                  placeholder="Masukkan kod inflow terperinci"
                />

                {errors.kodInflowTerperinci?.type === "required" && (
                  <small className="text-danger">
                    Kod inflow terperinci diperlukan.
                  </small>
                )}
              </Form.Group>

              <Form.Group
                controlId="keteranganKodInflowTerperinci"
                className="mb-3"
              >
                <Form.Label className="form-label">
                  Keterangan Kod Inflow Terperinci
                </Form.Label>

                <Form.Control
                  type="text"
                  {...register("keteranganKodInflowTerperinci", {
                    required: true,
                  })}
                  aria-invalid={
                    errors.keteranganKodInflowTerperinci ? "true" : "false"
                  }
                  placeholder="Masukkan keterangan kod inflow terperinci"
                />

                {errors.keteranganKodInflowTerperinci?.type === "required" && (
                  <small className="text-danger">
                    Keterangan kod inflow terperinci diperlukan.
                  </small>
                )}
              </Form.Group>
            </Modal.Body>

            <Modal.Footer>
              <Button className="batal-btn" onClick={closeModalCreateKodInflow}>
                Batal
              </Button>

              <Button onClick={handleSubmit(handleCreateKodInflow)}>
                Simpan
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    </>
  );
}

export default CreateKodInflow;
