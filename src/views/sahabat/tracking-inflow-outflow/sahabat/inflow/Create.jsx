import React, { useState, useEffect, useCallback } from "react";
import { useForm, Controller } from "react-hook-form";
import SuccessAlert from "../../../../components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../../../components/sweet-alert/ErrorAlert";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaPlus } from "react-icons/fa";
import axiosCustom from "../../../../../axios";

function CreateTrackingInflowSahabat({ mingguId, kodInflowsData }) {
  // ----------FE----------
  // Modal
  const [isModalCreateInflowSahabat, setIsModalCreateInflowSahabat] = useState(false);
  const openModalCreateInflowSahabat = () => setIsModalCreateInflowSahabat(true);
  const closeModalCreateTrackingInflowSahabat = () => {
    setIsModalCreateInflowSahabat(false);
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
  const createInflowSahabat = async (inflowSahabatInput) => {
    try {
      const response = await axiosCustom.post(
        `/sahabat/inflow-sahabat/${mingguId}`,
        inflowSahabatInput
      );
      if (response.status === 200) {
        SuccessAlert(response.data.message);
        closeModalCreateTrackingInflowSahabat();
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
        <Button variant="primary" onClick={openModalCreateInflowSahabat}>
          <FaPlus style={{ fontSize: "10px" }} /> Tambah
        </Button>{" "}
        <Modal
          show={isModalCreateInflowSahabat}
          onHide={closeModalCreateTrackingInflowSahabat}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Tambah Inflow Sahabat</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onSubmit={handleSubmit} onReset={reset}>
              <Form.Group>
                <Form.Label htmlFor="kodInflowId">Kod Inflow</Form.Label>
                <Controller
                  id="kodInflowId"
                  name="kodInflowId"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Kod inflow diperlukan." }}
                  render={({ field: { onChange } }) => (
                    <Form.Select onChange={onChange} defaultValue="">
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
                  defaultValue=""
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
            <Button
              variant="secondary"
              onClick={closeModalCreateTrackingInflowSahabat}
            >
              Batal
            </Button>
            <Button variant="primary" onClick={handleSubmit(createInflowSahabat)}>
              Simpan
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default CreateTrackingInflowSahabat;
