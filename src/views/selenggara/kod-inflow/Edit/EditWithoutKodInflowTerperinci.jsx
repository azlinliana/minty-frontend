import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import SuccessAlert from "../../../components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../../components/sweet-alert/ErrorAlert";
import { Modal, Button, Form } from "react-bootstrap";
import axiosCustom from "../../../../axios";

function EditWithoutKodInflowTerperinci({ kodInflow }) {
  // ----------FE----------
  // Modal
  const [
    isModalEditKodInflowWithoutKodInflowTerperinci,
    setIsModalEditKodInflowWithoutKodInflowTerperinci,
  ] = useState(false);
  const openModalEditKodInflowWithoutKodInflowTerperinci = () =>
    setIsModalEditKodInflowWithoutKodInflowTerperinci(true);
  const closeModalEditKodInflowWithoutKodInflowTerperinci = () => {
    setIsModalEditKodInflowWithoutKodInflowTerperinci(false);
  };

  // Form validation
  const {
    register,
    handleSubmit: handleFormSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm();

  // ----------BE----------
  // Set default values when the kemas kini kod inflow modal is opened
  const [formData, setFormData] = useState({
    kodInflow: "",
    keteranganKodInflow: "",
    statusKodInflow: "",
  });

  useEffect(() => {
    // Populate form data
    setValue("kodInflow", kodInflow.kodInflow);
    setValue("keteranganKodInflow", kodInflow.keteranganKodInflow);
    setValue("statusKodInflow", kodInflow.statusKodInflow);

    // Set default values for formData
    setFormData((prevData) => ({
      ...prevData,
      kodInflow: kodInflow.kodInflow,
      keteranganKodInflow: kodInflow.keteranganKodInflow,
      statusKodInflow: kodInflow.statusKodInflow,
    }));
  }, [kodInflow, setValue]);

  const updateKodInflowWithoutKodInflowTerperinci = async (
    kodInflowWithoutKodInflowTerperinciInput
  ) => {
    try {
      const response = await axiosCustom.put(
        `/selenggara/kod-inflow/${kodInflow.id}`,
        kodInflowWithoutKodInflowTerperinciInput
      );

      if (response.status === 200) {
        SuccessAlert(response.data.message);
        closeModalEditKodInflowWithoutKodInflowTerperinci();
      } else {
        ErrorAlert(response.data.error); // Error from the backend or unknow error from the server side
      }
    } catch (error) {
      ErrorAlert(error);
    }
  };

  return (
    <>
      <div>
        <Button
          className="edit-btn"
          onClick={openModalEditKodInflowWithoutKodInflowTerperinci}
        >
          Edit
        </Button>{" "}
        <Modal
          show={isModalEditKodInflowWithoutKodInflowTerperinci}
          onHide={closeModalEditKodInflowWithoutKodInflowTerperinci}
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
            </Modal.Body>

            <Modal.Footer>
              <Button
                className="batal-btn"
                onClick={closeModalEditKodInflowWithoutKodInflowTerperinci}
              >
                Batal
              </Button>

              <Button
                onClick={handleFormSubmit(
                  updateKodInflowWithoutKodInflowTerperinci
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

export default EditWithoutKodInflowTerperinci;
