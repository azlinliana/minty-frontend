import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, Form } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { usePembiayaanStore } from "../../../store/sahabat/pembiayaan-store";

// function CreatePembiayaan({ sahabatId, skimPembiayaanOptions }) {
function CreatePembiayaan() {
  // __________________________________ Frontend __________________________________
  // Modal
  const [isModalCreatePembiayaanSahabat, setIsModalCreatePembiayaanSahabat] =
    useState(false);

  const openModalCreatePembiayaanSahabat = () =>
    setIsModalCreatePembiayaanSahabat(true);

  const closeModalCreatePembiayaanSahabat = () => {
    setIsModalCreatePembiayaanSahabat(false);
    reset(); // Reset previous form input
  };

  // Form validation
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // ___________________________________ Backend __________________________________
  // Create pembiayaan sahabat
  // const { createPembiayaanSahabat } = usePembiayaanStore((state) => ({
  //   createPembiayaanSahabat: state.createPembiayaanSahabat,
  // }));

  // Pass input & close modal
  const handleCreatePembiayaanSahabat = (addPembiayaanSahabatData) => {
    // createPembiayaanSahabat(
    //   sahabatId,
    //   addPembiayaanSahabatData,
    //   closeModalCreatePembiayaanSahabat
    // );
  };
  
  return (
    <>
      <div>
        <Button onClick={openModalCreatePembiayaanSahabat}>
          <FaPlus style={{ fontSize: "10px" }} /> Tambah Pembiayaan
        </Button>{" "}
        
        <Modal
          show={isModalCreatePembiayaanSahabat}
          onHide={closeModalCreatePembiayaanSahabat}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Tambah Pembiayaan Sahabat</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onReset={reset}>
              {/* Skim pembiayaan */}
              <Form.Group controlId="skimPembiayaanId" className="mb-3">
                <Form.Label className="form-label">Skim Pembiayaan</Form.Label>

                <Form.Control
                  as="select"
                  className="form-select"
                  // {...register("skimPembiayaanId", { required: true })}
                  onChange={(e) => {}}
                  // aria-invalid={errors.skimPembiayaanId ? "true" : "false"}
                  defaultValue=""
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

                {/* {errors.skimPembiayaanId?.type === "required" && ( */}
                  <small className="text-danger">
                    Skim pembiayaan diperlukan.
                  </small>
                {/* )} */}
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button
              className="batal-btn"
              onClick={closeModalCreatePembiayaanSahabat}
            >
              Batal
            </Button>

            <Button onClick={handleSubmit(handleCreatePembiayaanSahabat)}>
              Simpan
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default CreatePembiayaan;
