import React, { useState, useEffect, useCallback } from "react";
import { useForm, Controller } from "react-hook-form";
import SuccessAlert from "../../../../components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../../../components/sweet-alert/ErrorAlert";
import { Modal, Button, Form } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import axiosCustom from "../../../../../axios";

function CreateTrackingOutflowSahabat({ mingguId, kodOutflowsData }) {
  // ----------FE----------
  // Modal
  const [isModalCreateOutflowSahabat, setIsModalCreateOutflowSahabat] =
    useState(false);
  const openModalCreateOutflowSahabat = () =>
    setIsModalCreateOutflowSahabat(true);
  const closeModalCreateOutflow = () => {
    setIsModalCreateOutflowSahabat(false);
    reset(); // Reset previous form input
  };

  // Form validation
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  // ----------BE----------
  // Create inflow sahabat
  const createOutflowSahabat = async (outflowSahabatInput) => {
    try {
      const response = await axiosCustom.post(
        `/sahabat/outflow-sahabat/${mingguId}`,
        outflowSahabatInput
      );
      if (response.status === 200) {
        SuccessAlert(response.data.message);
        closeModalCreateOutflow();
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
        <Button variant="primary" onClick={openModalCreateOutflowSahabat}>
          <FaPlus style={{ fontSize: "10px" }} /> Tambah
        </Button>{" "}
        <Modal
          show={isModalCreateOutflowSahabat}
          onHide={closeModalCreateOutflow}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Tambah Outflow Sahabat</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onSubmit={handleSubmit} onReset={reset}>
              <Form.Group>
                <Form.Label htmlFor="kodOutflowId">Kod Outflow</Form.Label>
                <Controller
                  id="kodOutflowId"
                  name="kodOutflowId"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Kod outflow diperlukan." }}
                  render={({ field: { onChange } }) => (
                    <Form.Select onChange={onChange} defaultValue="">
                      <option value="" disabled>
                        --Pilih Kod Outflow--
                      </option>
                      {kodOutflowsData.map((kodOutflow) => (
                        <option key={kodOutflow.id} value={kodOutflow.id}>
                          {kodOutflow.kodOutflow} -{" "}
                          {kodOutflow.keteranganKodOutflow}
                        </option>
                      ))}
                    </Form.Select>
                  )}
                />
                {errors.kodOutflowId && (
                  <small className="text-danger">
                    {errors.kodOutflowId.message}
                  </small>
                )}
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="amaunOutflow">
                  Amaun Outflow (RM)
                </Form.Label>
                <Controller
                  id="amaunOutflow"
                  name="amaunOutflow"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Amaun outflow diperlukan." }}
                  render={({ field: { onChange, value } }) => (
                    <Form.Control
                      type="number"
                      min="0.00"
                      max="10000.00"
                      step="0.01"
                      onChange={onChange}
                      value={value}
                      placeholder="Masukkan amaun outflow (RM)"
                      autoFocus
                    />
                  )}
                />
                {errors.amaunOutflow && (
                  <small className="text-danger">
                    {errors.amaunOutflow.message}
                  </small>
                )}
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={closeModalCreateOutflow}>
              Batal
            </Button>
            <Button
              variant="primary"
              onClick={handleSubmit(createOutflowSahabat)}
            >
              Simpan
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default CreateTrackingOutflowSahabat;
