import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import SuccessAlert from "../../components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../components/sweet-alert/ErrorAlert";
import { Modal, Button, Form } from "react-bootstrap";
import axiosCustom from "../../../axios";

function EditKodOutflow({ kodOutflow }) {
  // ----------FE----------
  // Modal
  const [isModalEditKodOutflow, setIsModalEditKodOutflow] = useState(false);
  const openModalEditKodOutflow = () => setIsModalEditKodOutflow(true);
  const closeModalEditKodOutflow = () => {
    setIsModalEditKodOutflow(false);
  };

  // Form validation
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm();

  // ----------BE----------
  // Set default values when the kemas kini kod outflow modal is opened
  const [formData, setFormData] = useState({
    kodOutflow: "",
    keteranganKodOutflow: "",
    statusKodOutflow: "",
  });

  useEffect(() => {
    // Populate form data
    setValue("kodOutflow", kodOutflow.kodOutflow);
    setValue("keteranganKodOutflow", kodOutflow.keteranganKodOutflow);
    setValue("statusKodOutflow", kodOutflow.statusKodOutflow);

    // Set default values for formData
    setFormData((prevData) => ({
      ...prevData,
      kodOutflow: kodOutflow.kodOutflow,
      keteranganKodOutflow: kodOutflow.keteranganKodOutflow,
      statusKodOutflow: kodOutflow.statusKodOutflow,
    }));
  }, [kodOutflow, setValue]);

  const updateKodOutflow = async (kodOutflowInput) => {
    try {
      const response = await axiosCustom.put(
        `/selenggara/kod-outflow/${kodOutflow.id}`,
        kodOutflowInput
      );

      if (response.status === 200) {
        SuccessAlert(response.data.message);
        closeModalEditKodOutflow();
      } else {
        ErrorAlert(response.data.error); // Error from the backend or unknow error from the server side
      }
    } catch (error) {
      ErrorAlert(error);
    }
  };

  return (
    <>
      <Button className="editBtn" onClick={openModalEditKodOutflow}>
        Kemas Kini
      </Button>{" "}

      <Modal
        show={isModalEditKodOutflow}
        onHide={closeModalEditKodOutflow}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Kemas Kini Kod Outflow</Modal.Title>
        </Modal.Header>

        <Form onReset={reset}>
          <Modal.Body>
            <Form.Group controlId="kodOutflow" className="mb-3">
              <Form.Label className="form-label">Kod Outflow</Form.Label>

              <Form.Control
                type="text"
                {...register("kodOutflow", { required: true })}
                aria-invalid={errors.kodOutflow ? "true" : "false"}
                placeholder="Masukkan kod outflow"
              />

              {errors.kodOutflow?.type === "required" && (
                <small className="text-danger">
                  Kod outflow diperlukan.
                </small>
              )}
            </Form.Group>

            <Form.Group controlId="keteranganKodOutflow" className="mb-3">
              <Form.Label className="form-label">Keterangan Kod Outflow</Form.Label>

              <Form.Control
                as="textarea"
                {...register("keteranganKodOutflow", { required: true })}
                aria-invalid={errors.keteranganKodOutflow ? "true" : "false"}
                placeholder="Masukkan keterangan kod outflow"
              />

              {errors.keteranganKodOutflow?.type === "required" && (
                <small className="text-danger">
                  Keterangan kod outflow diperlukan.
                </small>
              )}
            </Form.Group>

            <Form.Group controlId="statusKodOutflow" className="mb-3">
              <Form.Label className="form-label">Status Kod Outflow</Form.Label>

              <Form.Control
                as="select"
                className="form-select"
                {...register("statusKodOutflow", { required: true })}
                aria-invalid={errors.statusKodOutflow ? "true" : "false"}
                placeholder="Masukkan status kod outflow"
              >
                <option value="" disabled>
                  --Pilih Status Kod Outflow--
                </option>
                <option value="AKTIF">AKTIF</option>
                <option value="TIDAK AKTIF">TIDAK AKTIF</option>
              </Form.Control>

              {errors.statusKodOutflow?.type === "required" && (
                <small className="text-danger">
                  Status kod outflow diperlukan.
                </small>
              )}
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={closeModalEditKodOutflow}>
              Batal
            </Button>
            
            <Button variant="primary" onClick={handleSubmit(updateKodOutflow)}>
              Simpan
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default EditKodOutflow;
