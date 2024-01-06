import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import SuccessAlert from "../../components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../components/sweet-alert/ErrorAlert";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axiosCustom from "../../../axios";

function EditPembiayaan({ sahabatId, pembiayaanId, pembiayaanSahabat }) {
  // ----------FE----------
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
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  // ----------BE----------
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

  return (
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

        <Modal.Body>
          <Form
            onSubmit={handleSubmit(updatePembiayaanSahabat)}
            onReset={reset}
          >
            <Form.Group>
              <Form.Label>Skim Pembiayaan</Form.Label>
              <Controller
                id="skimPembiayaan"
                name="skimPembiayaan"
                control={control}
                defaultValue={pembiayaanSahabat.skimPembiayaan}
                rules={{ required: "Skim pembiayaan sahabat diperlukan." }}
                render={({ field: { onChange } }) => (
                  <Form.Select
                    onChange={onChange}
                    defaultValue={pembiayaanSahabat.skimPembiayaan}
                  >
                    <option value="" disabled>
                      --Pilih Skim Pembiayaan--
                    </option>
                    <option value="TIADA PEMBIAYAAN">TIADA PEMBIAYAAN</option>
                    <option value="I-MUDA">I-MUDA</option>
                    <option value="I-MESRA">I-MESRA</option>
                  </Form.Select>
                )}
              />
              {errors.skimPembiayaan && (
                <small className="text-danger">
                  {errors.skimPembiayaan.message}
                </small>
              )}
            </Form.Group>

            <Form.Group>
              <Form.Label>Status Pembiayaan</Form.Label>
              <Controller
                id="statusPembiayaan"
                name="statusPembiayaan"
                control={control}
                defaultValue={pembiayaanSahabat.statusPembiayaan}
                rules={{ required: "Status pembiayaan sahabat diperlukan." }}
                render={({ field: { onChange } }) => (
                  <Form.Select
                    onChange={onChange}
                    defaultValue={pembiayaanSahabat.statusPembiayaan}
                  >
                    <option value="" disabled>
                      --Pilih Status Pembiayaan--
                    </option>
                    <option value="AKTIF">AKTIF</option>
                    <option value="SELESAI">SELESAI</option>
                  </Form.Select>
                )}
              />
              {errors.statusPembiayaan && (
                <small className="text-danger">
                  {errors.statusPembiayaan.message}
                </small>
              )}
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalEditPembiayaanSahabat}>
            Batal
          </Button>
          <Button
            variant="primary"
            onClick={handleSubmit(updatePembiayaanSahabat)}
          >
            Simpan
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditPembiayaan;
