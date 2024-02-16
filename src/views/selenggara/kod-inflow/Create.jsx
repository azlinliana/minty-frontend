import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import SuccessAlert from "../../components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../components/sweet-alert/ErrorAlert";
import { Modal, Button, Form } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import axiosCustom from "../../../axios";

function CreateKodInflow() {
  // ----------FE----------
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

  // ----------BE----------
  // Create kod inflow
  const createKodInflow = async (kodInflowInput) => {
    try {
      const response = await axiosCustom.post(
        `/selenggara/kod-inflow`,
        kodInflowInput
      );
      if (response.status === 200) {
        SuccessAlert(response.data.message);
        closeModalCreateKodInflow();
      } else {
        ErrorAlert(response); // Error from the backend or unknow error from the server side
      }
    } catch (error) {
      ErrorAlert(error);
    }
  };

  // Fetch kod inflow data
  const [kodInflowsData, setKodInflowsData] = useState([]);

  useEffect(() => {
    const fetchKodInflow = async () => {
      try {
        const response = await axiosCustom.get(
          `/selenggara/kod-inflow/display-kod-inflow`
        );
        if (Array.isArray(response.data) && response.data.length > 0) {
          setKodInflowsData(response.data); // Display all kod inflow data
        } else {
          ErrorAlert(response.data);
        }
      } catch (error) {
        ErrorAlert(error);
      }
    };

    fetchKodInflow();
  }, []);

  return (
    <>
      <div>
        <Button variant="primary" onClick={openModalCreateKodInflow}>
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

                  {kodInflowsData.map((kodInflow) => (
                    <option key={kodInflow.id} value={kodInflow.id}>
                      {kodInflow.kodInflow} - {kodInflow.keteranganKodInflow}
                    </option>
                  ))}
                  <option value="KOD INFLOW BAHARU">KOD INFLOW BAHARU</option>
                </Form.Control>

                {errors.kodInflowId?.type === "required" && (
                  <small className="text-danger">
                    Kod inflow diperlukan.
                  </small>
                )}
              </Form.Group>
              
              {/* New kod inflow - If choosing KOD INFLOW BAHARU from kod inflow option*/}
              {watch("kodInflowId") === "KOD INFLOW BAHARU" && (
                <>
                  <Form.Group controlId="kodInflowBaharu" className="mb-3">
                    <Form.Label className="form-label">Kod Inflow Baharu</Form.Label>

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

                  <Form.Group controlId="keteranganKodInflowBaharu" className="mb-3">
                    <Form.Label className="form-label">Keterangan Kod Inflow Baharu</Form.Label>

                    <Form.Control
                      type="text"
                      {...register("keteranganKodInflowBaharu", { required: true })}
                      aria-invalid={errors.keteranganKodInflowBaharu ? "true" : "false"}
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
                <Form.Label className="form-label">Kod Inflow Terperinci</Form.Label>

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

              <Form.Group controlId="keteranganKodInflowTerperinci" className="mb-3">
                <Form.Label className="form-label">Keterangan Kod Inflow Terperinci</Form.Label>

                <Form.Control
                  type="text"
                  {...register("keteranganKodInflowTerperinci", { required: true })}
                  aria-invalid={errors.keteranganKodInflowTerperinci ? "true" : "false"}
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
              <Button variant="secondary" onClick={closeModalCreateKodInflow}>
                Batal
              </Button>

              <Button variant="primary" onClick={handleSubmit(createKodInflow)}>
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
