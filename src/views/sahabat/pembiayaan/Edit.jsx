import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Modal, Form } from "react-bootstrap";
import { usePembiayaanStore } from "../../../store/sahabat/pembiayaan-store";

function EditPembiayaan({
  sahabatId,
  pembiayaanId,
  pembiayaanSahabat,
  skimPembiayaanOptions,
  checkIndexMingguConditionEachPembiayaan,
}) {
  // __________________________________ Frontend __________________________________
  // Modal
  const [isModalEditPembiayaanSahabat, setIsModalEditPembiayaanSahabat] =
    useState(false);
  const openModalEditPembiayaanSahabat = () =>
    setIsModalEditPembiayaanSahabat(true);
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

  // ___________________________________ Backend __________________________________
  // Set default values when the edit pembiayaan modal is opened
  const [formData, setFormData] = useState({
    skimPembiayaanId: "",
    statusPembiayaan: "",
  });

  useEffect(() => {
    // Populate form data
    setValue("skimPembiayaanId", pembiayaanSahabat.skimPembiayaanId);
    setValue("statusPembiayaan", pembiayaanSahabat.statusPembiayaan);

    // Set default values for formData
    setFormData((prevData) => ({
      ...prevData,
      skimPembiayaanId: pembiayaanSahabat.skimPembiayaanId,
      statusPembiayaan: pembiayaanSahabat.statusPembiayaan,
    }));
  }, [pembiayaanSahabat, setValue]);

  // Edit pembiayaan sahabat
  const { editPembiayaanSahabat } = usePembiayaanStore((state) => ({
    editPembiayaanSahabat: state.editPembiayaanSahabat,
  }));

  // Pass input & close modal
  const handleEditPembiayaanSahabat = (editPembiayaanSahabatData) => {
    editPembiayaanSahabat(
      sahabatId,
      pembiayaanId,
      editPembiayaanSahabatData,
      closeModalEditPembiayaanSahabat
    );
  };

  // ----------BE & FE-------------------------------
  // | IndexPembiayaan, EditPembiayaan, IndexMinggu |
  // | Hidden status pembiayaan case                |
  // ------------------------------------------------
  const conditionResult = checkIndexMingguConditionEachPembiayaan.find(
    (condition) => condition.pembiayaanId === pembiayaanId
  )?.conditionsResults;

  // Get the result from props
  const hideStatusPembiayaan = conditionResult;

  return (
    <>
      <div>
        <span href="#" onClick={openModalEditPembiayaanSahabat}>
          Edit
        </span>{" "}

        <Modal
          show={isModalEditPembiayaanSahabat}
          onHide={closeModalEditPembiayaanSahabat}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Pembiayaan Sahabat</Modal.Title>
          </Modal.Header>

          <Form onReset={reset}>
            <Modal.Body>
              <Form.Group controlId="skimPembiayaanId" className="mb-3">
                <Form.Label className="form-label">Skim Pembiayaan</Form.Label>

                <Form.Control
                  as="select"
                  className="form-select"
                  {...register("skimPembiayaanId", { required: true })}
                  aria-invalid={errors.skimPembiayaanId ? "true" : "false"}
                >
                  <option value="" disabled>
                    --Pilih Skim Pembiayaan--
                  </option>
                  
                  {skimPembiayaanOptions.map((skimPembiayaan) => (
                    <option key={skimPembiayaan.id} value={skimPembiayaan.id}>
                      {skimPembiayaan.namaSkimPembiayaan}
                    </option>
                  ))}
                </Form.Control>

                {errors.skimPembiayaanId?.type === "required" && (
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
                    <option value="" disabled>
                      --Pilih Status Pembiayaan--
                    </option>
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
              <Button
                className="batal-btn"
                onClick={closeModalEditPembiayaanSahabat}
              >
                Batal
              </Button>

              <Button onClick={handleSubmit(handleEditPembiayaanSahabat)}>
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
