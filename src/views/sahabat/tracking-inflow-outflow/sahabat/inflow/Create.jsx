import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import SuccessAlert from "../../../../components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../../../components/sweet-alert/ErrorAlert";
import { Modal, Button, Form } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import axiosCustom from "../../../../../axios";

function CreateTrackingInflowSahabat({ mingguId, kodInflowsData }) {
  // ----------FE----------
  // Modal
  const [isModalCreateInflowSahabat, setIsModalCreateInflowSahabat] =
    useState(false);
  const openModalCreateInflowSahabat = () =>
    setIsModalCreateInflowSahabat(true);
  const closeModalCreateTrackingInflowSahabat = () => {
    setIsModalCreateInflowSahabat(false);
    reset(); // Reset previous form input
  };

  // Form validation
  const {
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  // ----------BE----------
  // State to store selected kod Inflow
  const [selectedKodInflow, setSelectedKodInflow] = useState("");
  const [showKodInflowTerperinci, setshowKodInflowTerperinci] = useState("");

  const [selectedInflowId, setSelectedInflowId] = useState("");

  const handleKodInflowChange = (selectedValue) => {
    const selectedKodInflowData = kodInflowsData.find(
      (item) => item.id === parseInt(selectedValue)
    );

    setSelectedKodInflow(selectedKodInflowData.kodInflow);

    setshowKodInflowTerperinci(selectedKodInflowData.kod_inflow_terperincis);

    // Reset other form data and save selected inflow id
    setFormData((prevData) => ({
      ...prevData,
      kodInflowId: selectedValue,
      amaunInflow: "",
    }));

    setSelectedInflowId(selectedValue);

    // Reset keteranganInflowTerperinci values
    const resetTerperinciValues = {};
    selectedKodInflowData.kod_inflow_terperincis.forEach((terperinci) => {
      const fieldName = `keteranganInflowTerperinci_${terperinci.id}`;
      resetTerperinciValues[fieldName] = "";
    });

    // Reset the form with the new values
    reset(resetTerperinciValues);

    // Set the value directly in the form data
    setValue("kodInflowId", selectedValue);
  };

  const [formData, setFormData] = useState({});

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Create inflow sahabat
  const createInflowSahabat = async (inflowSahabatInput) => {
    console.log(inflowSahabatInput);
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
                  render={({ field: { onChange, value } }) => (
                    <Form.Select
                      onChange={(e) => {
                        onChange(e);
                        handleKodInflowChange(e.target.value);
                      }}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        --Pilih Kod Inflow--
                      </option>
                      {kodInflowsData.map((kodInflow) => (
                        <option key={kodInflow.id} value={kodInflow.id}>
                          {kodInflow.kodInflow} -{" "}
                          {kodInflow.keteranganKodInflow}
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

              {/* Generate form input based on selected kod inflow */}
              {showKodInflowTerperinci &&
                showKodInflowTerperinci.length > 0 && (
                  <React.Fragment>
                    {showKodInflowTerperinci.map((terperinci) => (
                      <Form.Group key={terperinci.id}>
                        <Form.Label
                          htmlFor={`kodInflowTerperinci_${terperinci.kodInflowTerperinci}`}
                        >
                          {terperinci.keteranganKodInflowTerperinci}
                        </Form.Label>
                        <Controller
                          id={`keteranganInflowTerperinci_${terperinci.id}`}
                          name={`keteranganInflowTerperinci_${terperinci.id}`}
                          type="text"
                          control={control}
                          defaultValue=""
                          render={({ field: { onChange, value } }) => (
                            <Form.Control
                              type="text"
                              onChange={(e) => {
                                onChange(e);
                                handleInputChange(
                                  `keteranganInflowTerperinci_${terperinci.id}`,
                                  e.target.value
                                );
                              }}
                              value={value}
                              placeholder="Masukkan maklumat terperinci"
                              autoFocus
                            />
                          )}
                        />
                      </Form.Group>
                    ))}
                  </React.Fragment>
                )
              }
              
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
            <Button
              variant="primary"
              onClick={handleSubmit(createInflowSahabat)}
            >
              Simpan
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default CreateTrackingInflowSahabat;
