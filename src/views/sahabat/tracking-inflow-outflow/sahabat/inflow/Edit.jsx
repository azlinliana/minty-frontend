import React, { useState, useEffect, useCallback } from "react";
import { useForm, Controller } from "react-hook-form";
import SuccessAlert from "../../../../components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../../../components/sweet-alert/ErrorAlert";
import { Modal, Button, Form } from "react-bootstrap";
import axiosCustom from "../../../../../axios";

function EditTrackingInflowSahabat({
  mingguId,
  inflowSahabatId,
  inflowSahabat,
  kodInflowsData,
}) {
  // ----------FE----------
  // Modal
  const [isModalEditInflowSahabat, setIsModalEditInflowSahabat] =
    useState(false);
  const openModalEditInflowSahabat = () => setIsModalEditInflowSahabat(true);
  const closeModalEditInflowSahabat = () => {
    setIsModalEditInflowSahabat(false);
  };

  // Form validation
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  // ----------BE----------
  // Update inflow sahabat
  const updateInflowSahabat = async (inflowSahabatInput) => {
    try {
      const response = await axiosCustom.put(
        `/sahabat/inflow-sahabat/${mingguId}/${inflowSahabatId}`,
        inflowSahabatInput
      );
      if (response.status === 200) {
        SuccessAlert(response.data.message);
        closeModalEditInflowSahabat();
      } else {
        ErrorAlert(response); // Error from the backend or unknow error from the server side
      }
    } catch (error) {
      ErrorAlert(error);
    }
  };

  return (
    <div>
      <Button className="editBtn" onClick={openModalEditInflowSahabat}>
        Kemas Kini
      </Button>{" "}
      <Modal
        show={isModalEditInflowSahabat}
        onHide={closeModalEditInflowSahabat}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Kemas Kini Inflow Sahabat</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit} onReset={reset}>
            <Form.Group>
              <Form.Label htmlFor="kodInflowId">Kod Inflow</Form.Label>
              <Controller
                id="kodInflowId"
                name="kodInflowId"
                control={control}
                defaultValue={inflowSahabat.kodInflowId}
                rules={{ required: "Kod inflow diperlukan." }}
                render={({ field: { onChange } }) => (
                  <Form.Select
                    onChange={onChange}
                    defaultValue={inflowSahabat.kodInflowId}
                  >
                    <option value="" disabled>
                      --Pilih Kod Inflow--
                    </option>
                    {kodInflowsData.map((kodInflow) => (
                      <option key={kodInflow.id} value={kodInflow.id}>
                        {kodInflow.kodInflow} - {kodInflow.keteranganKodInflow}
                      </option>
                    ))}
                  </Form.Select>
                )}
              />
              {errors.kodInflowId && (
                <small className="text-danger">
                  {errors.kodInflowId.message}
                </small>
              )}
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="amaunInflow">Amaun Inflow (RM)</Form.Label>
              <Controller
                id="amaunInflow"
                name="amaunInflow"
                control={control}
                defaultValue={inflowSahabat.amaunInflow}
                rules={{ required: "Amaun inflow diperlukan." }}
                render={({ field: { onChange, value } }) => (
                  <Form.Control
                    type="number"
                    min="0.00"
                    max="10000.00"
                    step="0.01"
                    onChange={onChange}
                    value={value}
                    placeholder="Masukkan amaun inflow (RM)"
                    autoFocus
                  />
                )}
              />
              {errors.amaunInflow && (
                <small className="text-danger">
                  {errors.amaunInflow.message}
                </small>
              )}
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalEditInflowSahabat}>
            Batal
          </Button>
          <Button variant="primary" onClick={handleSubmit(updateInflowSahabat)}>
            Simpan
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditTrackingInflowSahabat;
