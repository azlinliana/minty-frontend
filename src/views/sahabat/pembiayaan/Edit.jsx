import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import SuccessAlert from "../../components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../components/sweet-alert/ErrorAlert";
import { Button, Modal, Form } from "react-bootstrap";
import axiosCustom from "../../../axios";

function EditPembiayaan({ sahabatId, pembiayaanId, pembiayaanSahabat, checkIndexMingguCondition, handleCheckIndexMingguCondition, toggleCardCollapse }) {
  console.log(checkIndexMingguCondition);
  // ----------FE----------
  // Modal
  const [isModalEditPembiayaanSahabat, setIsModalEditPembiayaanSahabat] = useState(false);
  const openModalEditPembiayaanSahabat = () => setIsModalEditPembiayaanSahabat(true);
  const closeModalEditPembiayaanSahabat = () => {
    setIsModalEditPembiayaanSahabat(false);
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
  // Set default values when the kemas kini pembiayaan modal is opened
  const [formData, setFormData] = useState({
    skimPembiayaan: "",
    statusPembiayaan: "",
  });

  useEffect(() => {
    // Populate form data
    setValue("skimPembiayaan", pembiayaanSahabat.skimPembiayaan);
    setValue("statusPembiayaan", pembiayaanSahabat.statusPembiayaan);

    // Set default values for formData
    setFormData((prevData) => ({
      ...prevData,
      skimPembiayaan: pembiayaanSahabat.skimPembiayaan,
      statusPembiayaan: pembiayaanSahabat.statusPembiayaan,
    }));
  }, [pembiayaanSahabat, setValue]);

  // Update pembiayaan sahabat
  const updatePembiayaanSahabat = async (pembiayaanSahabatInput) => {
    try {
      const response = await axiosCustom.put(
        `/sahabat/${sahabatId}/pembiayaan/${pembiayaanId}`,
        pembiayaanSahabatInput
      );

      if (response.status === 200) {
        SuccessAlert(response.data.message);
        closeModalEditPembiayaanSahabat();
      } else {
        ErrorAlert(response); // Error from the backend or unknow error from the server side
      }
    } catch (error) {
      ErrorAlert(error);
    }
  };

  const hideStatusPembiayaan = checkIndexMingguCondition;

  return (
    <>
      <div>
        <span
          href="#"
          className="statusLink"
          onClick={openModalEditPembiayaanSahabat}
        >
          Kemas Kini
        </span>{" "}

        <Modal
          show={isModalEditPembiayaanSahabat}
          onHide={closeModalEditPembiayaanSahabat}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Kemas Kini Pembiayaan Sahabat</Modal.Title>
          </Modal.Header>

          <Form onReset={reset}>
            <Modal.Body>
              <Form.Group controlId="skimPembiayaan" className="mb-3">
                <Form.Label className="form-label">Skim Pembiayaan</Form.Label>

                <Form.Control
                  as="select"
                  className="form-select"
                  {...register("skimPembiayaan", { required: true })}
                  aria-invalid={errors.skimPembiayaan ? "true" : "false"}
                >
                  <option value="" disabled>--Pilih Skim Pembiayaan--</option>
                  <option value="TIADA PEMBIAYAAN">TIADA PEMBIAYAAN</option>
                  <option value="I-MUDA">I-MUDA</option>
                  <option value="I-MESRA">I-MESRA</option>
                </Form.Control>

                {errors.skimPembiayaan?.type === "required" && (
                  <small className="text-danger">
                    Skim pembiayaan diperlukan.
                  </small>
                )}
              </Form.Group>

              {hideStatusPembiayaan ? null : (
                <Form.Group controlId="statusPembiayaan" className="mb-3">
                  <Form.Label className="form-label">
                    Status Pembiayaan
                  </Form.Label>

                  <Form.Control
                    as="select"
                    className="form-select"
                    {...register("statusPembiayaan", { required: true })}
                    aria-invalid={errors.statusPembiayaan ? "true" : "false"}
                  >
                    <option value="" disabled>--Pilih Status Pembiayaan--</option>
                    <option value="AKTIF">AKTIF</option>
                    <option value="SELESAI">SELESAI</option>
                  </Form.Control>

                  {errors.statusPembiayaan?.type === "required" && (
                    <small className="text-danger">
                      Status pembiayaan diperlukan.
                    </small>
                  )}
                </Form.Group>
              )}
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={closeModalEditPembiayaanSahabat}>
                Batal
              </Button>

              <Button variant="primary" onClick={handleSubmit(updatePembiayaanSahabat)}>
                Simpan
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    </>
  );
}

export default EditPembiayaan;
