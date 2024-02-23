import React, { useState } from "react";
import { useForm } from "react-hook-form";
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
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  // ----------BE----------
  // State to store selected kod Inflow
  const [selectedKodInflow, setSelectedKodInflow] = useState("");
  const [showKodInflowTerperinci, setShowKodInflowTerperinci] = useState([]);

  const handleKodInflowChange = (selectedValue) => {
    const selectedKodInflowData = kodInflowsData.find(
      (item) => item.id === parseInt(selectedValue)
    );

    setSelectedKodInflow(selectedKodInflowData.kodInflow);

    setShowKodInflowTerperinci(selectedKodInflowData.kod_inflow_terperincis);

    // Reset other form data and save selected inflow id
    setFormData((prevData) => ({
      ...prevData,
      kodInflowId: selectedValue,
      amaunInflow: "",
      kodInflowTerperinci: [], // Reset the array
    }));

    // Reset keteranganInflowTerperinci values
    const resetTerperinciValues = {};

    selectedKodInflowData.kod_inflow_terperincis.forEach((terperinci) => {
      const fieldName = `kodInflowTerperinci[${terperinci.id}]`;
      
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
        <Button onClick={openModalCreateInflowSahabat}>
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

          <Form onSubmit={handleSubmit(createInflowSahabat)} onReset={reset}>
            <Modal.Body>
              <Form.Group controlId="kodInflowId" className="mb-3">
                <Form.Label className="form-label">Kod Inflow</Form.Label>

                <Form.Control
                  as="select"
                  className="form-select"
                  {...register("kodInflowId", { required: true })}
                  onChange={(e) => {
                    handleKodInflowChange(e.target.value);
                  }}
                  aria-invalid={errors.kodInflowId ? "true" : "false"}
                  defaultValue=""
                >
                  <option value="" disabled>
                    --Pilih Kod Inflow--
                  </option>
                  {kodInflowsData.map((kodInflow) => (
                    <option key={kodInflow.id} value={kodInflow.id}>
                      {kodInflow.kodInflow} - {kodInflow.keteranganKodInflow}
                    </option>
                  ))}
                </Form.Control>

                {errors.kodInflowId?.type === "required" && (
                  <small className="text-danger">Kod inflow diperlukan.</small>
                )}
              </Form.Group>

              {/* Generate dynamic form input based on selected kod inflow */}
              {showKodInflowTerperinci &&
                showKodInflowTerperinci.length > 0 && (
                  <React.Fragment>
                    {showKodInflowTerperinci.map((terperinci) => (
                      <Form.Group
                        key={terperinci.id}
                        controlId={`keteranganInflowTerperinci_${terperinci.id}`}
                        className="mb-3"
                      >
                        <Form.Label
                          className={`kodInflowTerperinci_${terperinci.kodInflowTerperinci}`}
                        >
                          {`${terperinci.kodInflowTerperinci} - ${terperinci.keteranganKodInflowTerperinci}`}
                        </Form.Label>

                        <Form.Control
                          type="text"
                          {...register(
                            `keteranganInflowTerperinci_${terperinci.id}`,
                            { required: true }
                          )}
                          onChange={(e) => {
                            handleInputChange(
                              `keteranganInflowTerperinci_${terperinci.id}`,
                              e.target.value
                            );
                          }}
                          aria-invalid={
                            errors[
                              `keteranganInflowTerperinci_${terperinci.id}`
                            ]
                              ? "true"
                              : "false"
                          }
                        />

                        {errors[`keteranganInflowTerperinci_${terperinci.id}`]
                          ?.type === "required" && (
                          <small className="text-danger">
                            Keterangan terperinci{" "}
                            {terperinci.kodInflowTerperinci} diperlukan.
                          </small>
                        )}
                      </Form.Group>
                    ))}
                  </React.Fragment>
                )}

              <Form.Group controlId="amaunInflow" className="mb-3">
                <Form.Label className="form-label">
                  Amaun Inflow (RM)
                </Form.Label>

                <Form.Control
                  type="text"
                  {...register("amaunInflow", { required: true })}
                  aria-invalid={errors.amaunInflow ? "true" : "false"}
                />

                {errors.amaunInflow?.type === "required" && (
                  <small className="text-danger">
                    Amaun inflow diperlukan.
                  </small>
                )}
              </Form.Group>
            </Modal.Body>

            <Modal.Footer>
              <Button
                className="batal-btn"
                onClick={closeModalCreateTrackingInflowSahabat}
              >
                Batal
              </Button>

              <Button type="submit">Simpan</Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    </>
  );
}

export default CreateTrackingInflowSahabat;
