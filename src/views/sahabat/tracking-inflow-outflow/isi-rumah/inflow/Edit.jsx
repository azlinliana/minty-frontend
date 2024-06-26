import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import SuccessAlert from "../../../../components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../../../components/sweet-alert/ErrorAlert";
import { Form, Modal, Button } from "react-bootstrap";
import axiosCustom from "../../../../../axios";

function EditTrackingInflowIsiRumah({
  isiRumahId,
  inflowIsiRumahId,
  inflowIsiRumah,
  kodInflowOptions,
}) {
  // ----------FE----------
  // Modal
  const [isModalEditInflowIsiRumah, setIsModalEditInflowIsiRumah] =
    useState(false);

  const openModalEditInflowIsiRumah = () => setIsModalEditInflowIsiRumah(true);

  const closeModalEditInflowIsiRumah = () => {
    setIsModalEditInflowIsiRumah(false);
  };

  // Form validation
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm();

  // ----------BE----------
  // State to store selected kod Inflow
  const [selectedKodInflow, setSelectedKodInflow] = useState("");

  const [showKodInflowTerperinci, setShowKodInflowTerperinci] = useState([]);

  const [previousKodInflow, setPreviousKodInflow] = useState(null);

  // Set default values when the kemas kini inflow isi rumah modal is opened
  const [formData, setFormData] = useState({
    kodInflowId: "",
    amaunInflow: "",
    kodInflowTerperinci: {},
  });

  useEffect(() => {
    if (inflowIsiRumah) {
      setValue("kodInflowId", inflowIsiRumah.id); // Populate form data

      setValue("amaunInflow", inflowIsiRumah.amaunInflow);

      setSelectedKodInflow(inflowIsiRumah.kodInflow); // Set selected kod inflow and terperinci data

      setShowKodInflowTerperinci(inflowIsiRumah.kodInflowTerperincis);

      // Set terperinci values
      inflowIsiRumah.inflowIsiRumahTerperincis.forEach((terperinci) => {
        setValue(
          `keteranganInflowTerperinci_${terperinci.kodInflowTerperinciId}`,
          terperinci.keteranganInflowTerperinci
        );
      });

      // Set default values for formData
      setFormData((prevData) => ({
        ...prevData,
        kodInflowId: inflowIsiRumah.kod_inflow.id,
        amaunInflow: inflowIsiRumah.amaunInflow,
        kodInflowTerperinci: inflowIsiRumah.inflow_isi_rumah_terperincis.reduce(
          (item, terperinci) => {
            item[
              `keteranganInflowTerperinci_${terperinci.kodInflowTerperinciId}`
            ] = terperinci.keteranganInflowTerperinci;

            return item;
          },
          {}
        ),
      }));
    }
  }, [inflowIsiRumah, setValue]);

  const handleKodInflowChange = (selectedValue) => {
    const selectedKodInflowData = kodInflowOptions.find(
      (item) => item.id === parseInt(selectedValue)
    );

    setSelectedKodInflow(selectedKodInflowData.kodInflow);

    if (selectedValue === previousKodInflow) {
      setValue("kodInflowId", previousKodInflow); // User selected the previous Kod Inflow, restore the previous data

      // Restore terperinci values
      inflowIsiRumah.inflow_isi_rumah_terperincis.forEach((terperinci) => {
        setValue(
          `keteranganInflowTerperinci_${terperinci.kodInflowTerperinciId}`,
          terperinci.keteranganInflowTerperinci
        );
      });
    } else {
      setPreviousKodInflow(selectedValue); // User selected a new Kod Inflow, set the associated terperinci fields

      setShowKodInflowTerperinci(selectedKodInflowData.kod_inflow_terperincis);
    }
  };

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      kodInflowTerperinci: {
        ...prevData.kodInflowTerperinci,
        [name]: value,
      },
    }));
  };

  // Update inflow isi rumah
  const updateInflowIsiRumah = async (inflowIsiRumahInput) => {
    try {
      const response = await axiosCustom.put(
        `/sahabat/inflow-isi-rumah/${isiRumahId}/${inflowIsiRumahId}`,
        inflowIsiRumahInput
      );

      if (response.status === 200) {
        SuccessAlert(response.data.message);

        closeModalEditInflowIsiRumah();
      } else {
        ErrorAlert(response); // Error from the backend or unknow error from the server side
      }
    } catch (error) {
      ErrorAlert(error);
    }
  };

  return (
    <>
      <Button className="edit-btn" onClick={openModalEditInflowIsiRumah}>
        Edit
      </Button>{" "}
      <Modal
        show={isModalEditInflowIsiRumah}
        onHide={closeModalEditInflowIsiRumah}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Inflow Isi Rumah</Modal.Title>
        </Modal.Header>

        <Form onSubmit={handleSubmit(updateInflowIsiRumah)} onReset={reset}>
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
              >
                <option value="" disabled>
                  --Pilih Kod Inflow--
                </option>
                {kodInflowOptions.map((kodInflow) => (
                  <option key={kodInflow.id} value={kodInflow.id}>
                    {kodInflow.kodInflow} - {kodInflow.keteranganKodInflow}
                  </option>
                ))}
              </Form.Control>

              {errors.kodInflowId?.type === "required" && (
                <small className="text-danger">Kod inflow diperlukan.</small>
              )}
            </Form.Group>

            {/* Dynamic form input based on current and selected kod inflow */}
            {showKodInflowTerperinci && showKodInflowTerperinci.length > 0 && (
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
                        errors[`keteranganInflowTerperinci_${terperinci.id}`]
                          ? "true"
                          : "false"
                      }
                    />

                    {errors[`keteranganInflowTerperinci_${terperinci.id}`]
                      ?.type === "required" && (
                      <small className="text-danger">
                        Keterangan terperinci {terperinci.kodInflowTerperinci}{" "}
                        diperlukan.
                      </small>
                    )}
                  </Form.Group>
                ))}
              </React.Fragment>
            )}

            <Form.Group controlId="amaunInflow" className="mb-3">
              <Form.Label className="form-label">Amaun Inflow</Form.Label>

              <Form.Control
                type="text"
                {...register("amaunInflow", { required: true })}
                aria-invalid={errors.amaunInflow ? "true" : "false"}
              />

              {errors.amaunInflow?.type === "required" && (
                <small className="text-danger">Amaun inflow diperlukan.</small>
              )}
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button
              className="batal-btn"
              onClick={closeModalEditInflowIsiRumah}
            >
              Batal
            </Button>

            <Button type="submit">Simpan</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default EditTrackingInflowIsiRumah;
