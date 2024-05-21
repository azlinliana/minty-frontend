import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import SuccessAlert from "../../components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../components/sweet-alert/ErrorAlert";
import { Modal, Button, Form } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import axiosCustom from "../../../axios";
import { useSkimPembiayaanStore } from "../../../store/options-store";

function CreatePembiayaan({ sahabatId }) {
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
  // Display skim pembiayaan options
  const { skimPembiayaanOptions, displaySkimPembiayaans } =
    useSkimPembiayaanStore((state) => ({
      skimPembiayaanOptions: state.skimPembiayaanOptions,
      displaySkimPembiayaans: state.displaySkimPembiayaans,
    }));

  useEffect(() => {
    displaySkimPembiayaans();
  }, [displaySkimPembiayaans]);

  // Create pembiayaan sahabat
  const createPembiayaanSahabat = async (pembiayaanSahabatInput) => {
    try {
      const response = await axiosCustom.post(
        `/sahabat/pembiayaan/${sahabatId}`,
        pembiayaanSahabatInput
      );
      if (response.status === 200) {
        SuccessAlert(response.data.message);
        closeModalCreatePembiayaanSahabat();
      } else {
        ErrorAlert(response); // Error from the backend or unknow error from the server side
      }
    } catch (error) {
      ErrorAlert(error);
    }
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
              <Form.Group controlId="skimPembiayaanId" className="mb-3">
                <Form.Label className="form-label">Skim Pembiayaan</Form.Label>

                <Form.Control
                  as="select"
                  className="form-select"
                  {...register("skimPembiayaanId", { required: true })}
                  onChange={(e) => {}}
                  aria-invalid={errors.skimPembiayaanId ? "true" : "false"}
                  defaultValue=""
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
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button
              className="batal-btn"
              onClick={closeModalCreatePembiayaanSahabat}
            >
              Batal
            </Button>
            <Button onClick={handleSubmit(createPembiayaanSahabat)}>
              Tambah
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default CreatePembiayaan;
