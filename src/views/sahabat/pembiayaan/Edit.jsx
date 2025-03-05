import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Modal, Form } from "react-bootstrap";
import { usePembiayaanStore } from "../../../store/sahabat/pembiayaan-store";

// function EditPembiayaan({
//   sahabatId,
//   pembiayaanId,
//   pembiayaanSahabat,
//   skimPembiayaanOptions,
//   checkIndexMingguConditionEachPembiayaan,
// }) {
function EditPembiayaan({}) {
  // __________________________________ Frontend __________________________________
  // Form validation
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm();

  // _____________________________ Frontend & Backend _____________________________
  // Match data from zustand & backend
  // const findOptionId = (options, key, value) => {
  //   const option = options.find((option) => option[key] === value);

  //   return option ? option.id : "";
  // };

  // Match data
  // const skimPembiayaanId = findOptionId(
  //   skimPembiayaanOptions,
  //   "namaSkimPembiayaan",
  //   pembiayaanSahabat.namaSkimPembiayaan
  // );

  // Modal
  const [isModalEditPembiayaanSahabat, setIsModalEditPembiayaanSahabat] =
    useState(false);

  const openModalEditPembiayaanSahabat = () =>
    setIsModalEditPembiayaanSahabat(true);

  const closeModalEditPembiayaanSahabat = () => {
    setIsModalEditPembiayaanSahabat(false);

    // Reset previous form input
    // const resetFields = {
    //   skimPembiayaanId: skimPembiayaanId,
    //   statusPembiayaan: pembiayaanSahabat.statusPembiayaan,
    // };

    reset(resetFields);
  };

  // Set default values when the edit pembiayaan modal is opened
  const [formData, setFormData] = useState({
    skimPembiayaanId: "",
    statusPembiayaan: "",
  });

  // useEffect(() => {
    // Populate form data
    // setValue("skimPembiayaanId", skimPembiayaanId);
    // setValue("statusPembiayaan", pembiayaanSahabat.statusPembiayaan);

    // Set default values for formData
    // setFormData((prevData) => ({
    //   ...prevData,
    //   skimPembiayaanId,
    //   statusPembiayaan: pembiayaanSahabat.statusPembiayaan,
    // }));
  // }, [pembiayaanSahabat, setValue]);

  // ___________________________________ Backend __________________________________
  // Edit pembiayaan sahabat
  // const { editPembiayaanSahabat } = usePembiayaanStore((state) => ({
  //   editPembiayaanSahabat: state.editPembiayaanSahabat,
  // }));

  // Pass input & close modal
  const handleEditPembiayaanSahabat = (editPembiayaanSahabatData) => {
    // editPembiayaanSahabat(
    //   sahabatId,
    //   pembiayaanId,
    //   editPembiayaanSahabatData,
    //   closeModalEditPembiayaanSahabat
    // );
  };

  // ======================== Frontend & Backend ====================================
  // |    IndexPembiayaan, EditPembiayaan, IndexMinggu                              |
  // |    Hidden status pembiayaan case                                             |
  // ================================================================================
  // const conditionResult = checkIndexMingguConditionEachPembiayaan.find(
  //   (condition) => condition.pembiayaanId === pembiayaanId
  // )?.conditionsResults;

  // Get the result from props
  // Need to be checked as this part of hidden status pembiayaan field is not working anymore
  // const hideStatusPembiayaan = conditionResult;

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
              {/* Skim pembiayaan */}
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

                  {/* {skimPembiayaanOptions.map((skimPembiayaan) => (
                    <option key={skimPembiayaan.id} value={skimPembiayaan.id}>
                      {skimPembiayaan.namaSkimPembiayaan}
                    </option>
                  ))} */}
                </Form.Control>

                {errors.skimPembiayaanId?.type === "required" && (
                  <small className="text-danger">
                    Skim pembiayaan diperlukan.
                  </small>
                )}
              </Form.Group>

              {/* Status pembiayaan */}
              {/* {hideStatusPembiayaan ? null : ( */}
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
              {/* )} */}
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
