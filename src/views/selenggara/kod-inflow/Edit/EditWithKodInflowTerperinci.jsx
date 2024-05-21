import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, Form } from "react-bootstrap";
import { useKodInflowStore } from "../../../../store/selenggara/kod-inflow-store";

function EditWithKodInflowTerperinci({ kodInflow, kodInflowTerperinci }) {
  // __________________________________ Frontend __________________________________
  // Modal
  const [
    isModalEditKodInflowWithKodInflowTerperinci,
    setIsModalEditKodInflowWithKodInflowTerperinci,
  ] = useState(false);
  const openModalEditKodInflowWithKodInflowTerperinci = () =>
    setIsModalEditKodInflowWithKodInflowTerperinci(true);
  const closeModalEditKodInflowWithKodInflowTerperinci = () => {
    setIsModalEditKodInflowWithKodInflowTerperinci(false);
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
  // Set default values when the kemas kini kod inflow modal is opened
  const [formData, setFormData] = useState({
    kodInflow: "",
    keteranganKodInflow: "",
    statusKodInflow: "",
    kodInflowTerperinci: "",
    keteranganKodInflowTerperinci: "",
    statusKodInflowTerperinci: "",
  });

  useEffect(() => {
    // Populate form data
    setValue("kodInflow", kodInflow.kodInflow);
    setValue("keteranganKodInflow", kodInflow.keteranganKodInflow);
    setValue("statusKodInflow", kodInflow.statusKodInflow);
    setValue("kodInflowTerperinci", kodInflowTerperinci.kodInflowTerperinci);
    setValue(
      "keteranganKodInflowTerperinci",
      kodInflowTerperinci.keteranganKodInflowTerperinci
    );
    setValue(
      "statusKodInflowTerperinci",
      kodInflowTerperinci.statusKodInflowTerperinci
    );

    // Set default values for formData
    setFormData((prevData) => ({
      ...prevData,
      kodInflow: kodInflow.kodInflow,
      keteranganKodInflow: kodInflow.keteranganKodInflow,
      statusKodInflow: kodInflow.statusKodInflow,
      kodInflowTerperinci: kodInflowTerperinci.kodInflowTerperinci,
      keteranganKodInflowTerperinci:
        kodInflowTerperinci.keteranganKodInflowTerperinci,
      statusKodInflowTerperinci: kodInflowTerperinci.statusKodInflowTerperinci,
    }));
  }, [kodInflow, kodInflowTerperinci, setValue]);

  // Edit kod inflow with kod inflow terperinci
  const { editKodInflowWithKodInflowTerperinci } = useKodInflowStore((state) => ({
    editKodInflowWithKodInflowTerperinci: state.editKodInflowWithKodInflowTerperinci,
  }));

  // Pass input & close modal
  const handleEditKodInflowWithKodInflowTerperinci = (editKodInflowData) => {
    editKodInflowWithKodInflowTerperinci(kodInflow.id, editKodInflowData, closeModalEditKodInflowWithKodInflowTerperinci);
  };

  return (
    <>
      <div>
        <Button
          className="edit-btn"
          onClick={openModalEditKodInflowWithKodInflowTerperinci}
        >
          Edit
        </Button>{" "}
        
        <Modal
          show={isModalEditKodInflowWithKodInflowTerperinci}
          onHide={closeModalEditKodInflowWithKodInflowTerperinci}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Kod Inflow</Modal.Title>
          </Modal.Header>

          <Form onReset={reset}>
            <Modal.Body>
              <Form.Group controlId="kodInflow" className="mb-3">
                <Form.Label className="form-label">Kod Inflow</Form.Label>

                <Form.Control
                  type="text"
                  {...register("kodInflow", { required: true })}
                  aria-invalid={errors.kodInflow ? "true" : "false"}
                  placeholder="Masukkan kod inflow"
                />

                {errors.kodInflow?.type === "required" && (
                  <small className="text-danger">Kod inflow diperlukan.</small>
                )}
              </Form.Group>

              <Form.Group controlId="keteranganKodInflow" className="mb-3">
                <Form.Label className="form-label">
                  Keterangan Kod Inflow
                </Form.Label>

                <Form.Control
                  as="textarea"
                  {...register("keteranganKodInflow", { required: true })}
                  aria-invalid={errors.keteranganKodInflow ? "true" : "false"}
                  placeholder="Masukkan keterangan kod inflow"
                />

                {errors.keteranganKodInflow?.type === "required" && (
                  <small className="text-danger">
                    Keterangan kod inflow diperlukan.
                  </small>
                )}
              </Form.Group>

              <Form.Group controlId="statusKodInflow" className="mb-3">
                <Form.Label className="form-label">
                  Status Kod Inflow
                </Form.Label>

                <Form.Control
                  as="select"
                  className="form-select"
                  {...register("statusKodInflow", { required: true })}
                  aria-invalid={errors.statusKodInflow ? "true" : "false"}
                  placeholder="Masukkan status kod inflow"
                >
                  <option value="" disabled>
                    --Pilih Status Kod Inflow--
                  </option>
                  <option value="AKTIF">AKTIF</option>
                  <option value="TIDAK AKTIF">TIDAK AKTIF</option>
                </Form.Control>

                {errors.statusKodInflow?.type === "required" && (
                  <small className="text-danger">
                    Status kod inflow diperlukan.
                  </small>
                )}
              </Form.Group>

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
                  as="textarea"
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

              <Form.Group
                controlId="statusKodInflowTerperinci"
                className="mb-3"
              >
                <Form.Label className="form-label">
                  Status Kod Inflow Terperinci
                </Form.Label>

                <Form.Control
                  as="select"
                  className="form-select"
                  {...register("statusKodInflowTerperinci", { required: true })}
                  aria-invalid={
                    errors.statusKodInflowTerperinci ? "true" : "false"
                  }
                  placeholder="Masukkan status kod inflow terperinci"
                >
                  <option value="" disabled>
                    --Pilih Status Kod Inflow Terperinci--
                  </option>
                  <option value="AKTIF">AKTIF</option>
                  <option value="TIDAK AKTIF">TIDAK AKTIF</option>
                </Form.Control>

                {errors.statusKodInflowTerperinci?.type === "required" && (
                  <small className="text-danger">
                    Status kod inflow terperinci diperlukan.
                  </small>
                )}
              </Form.Group>
            </Modal.Body>

            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={closeModalEditKodInflowWithKodInflowTerperinci}
              >
                Batal
              </Button>

              <Button
                variant="primary"
                onClick={handleFormSubmit(
                  handleEditKodInflowWithKodInflowTerperinci
                )}
              >
                Simpan
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    </>
  );
}

export default EditWithKodInflowTerperinci;
