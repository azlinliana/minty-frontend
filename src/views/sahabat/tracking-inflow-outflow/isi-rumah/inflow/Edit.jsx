import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Form, Modal, Button } from "react-bootstrap";
import { useInflowIsiRumahStore } from "../../../../../store/sahabat/inflow-isi-rumah-store";

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

  // Match data from zustand & backend
  const findOptionId = (options, key, value) => {
    const option = options.find((option) => option[key] === value);

    return option ? option.id : "";
  };

  // Match data
  const kodInflowId = findOptionId(
    kodInflowOptions,
    "kodInflow",
    inflowIsiRumah.kodInflow
  );

  useEffect(() => {
    if (inflowIsiRumah) {
      setValue("kodInflowId", kodInflowId); // Populate form data
      setValue(
        "amaunInflow",
        parseFloat(inflowIsiRumah.amaunInflow).toFixed(2)
      );

      // Set selected kod inflow and terperinci data
      setSelectedKodInflow(inflowIsiRumah.kodInflow);
      setShowKodInflowTerperinci(inflowIsiRumah.kodInflowTerperincis);

      // Set terperinci values
      inflowIsiRumah.inflowIsiRumahTerperinci.forEach((terperinci) => {
        setValue(
          `keteranganInflowTerperinci_${terperinci.kodInflowTerperinciId}`,
          terperinci.keteranganInflowTerperinci
        );
      });

      // Set default values for formData
      setFormData((prevData) => ({
        ...prevData,
        kodInflowId,
        amaunInflow: inflowIsiRumah.amaunInflow,
        kodInflowTerperinci: inflowIsiRumah.inflowIsiRumahTerperinci.reduce(
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
      // User selected the previous Kod Inflow, restore the previous data
      setValue("kodInflowId", previousKodInflow);

      // Restore terperinci values
      inflowIsiRumah.inflowIsiRumahTerperinci.forEach((terperinci) => {
        setValue(
          `keteranganInflowTerperinci_${terperinci.kodInflowTerperinciId}`,
          terperinci.keteranganInflowTerperinci
        );
      });
    } else {
      // User selected a new Kod Inflow, set the associated terperinci fields
      setPreviousKodInflow(selectedValue);

      setShowKodInflowTerperinci(selectedKodInflowData.kodInflowTerperinci);
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

  // ___________________________________ Backend __________________________________
  // Edit inflow isi rumah
  const { editInflowIsiRumah } = useInflowIsiRumahStore((state) => ({
    editInflowIsiRumah: state.editInflowIsiRumah,
  }));

  // Pass input & close modal
  const handleEditInflowIsiRumah = (editInflowIsiRumahData) => {
    editInflowIsiRumah(
      isiRumahId,
      inflowIsiRumahId,
      editInflowIsiRumahData,
      closeModalEditInflowIsiRumah
    );
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

        <Form onReset={reset}>
          <Modal.Body>
            {/* Kod inflow */}
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

            {/* Amaun inflow */}
            <Form.Group controlId="amaunInflow" className="mb-3">
              <Form.Label className="form-label">Amaun Inflow</Form.Label>

              <Form.Control
                type="text"
                {...register("amaunInflow", {
                  required: "Amaun inflow diperlukan.",
                  valueAsNumber: true, // Ensure value is treated as a number
                  validate: {
                    isGreaterThanZero: (value) => {
                      return (
                        parseFloat(value) >= 0.01 ||
                        "Amaun inflow haruslah sekurang-kurangnya 0.01 atau lebih."
                      );
                    },
                  },
                })}
                onBlur={(e) => {
                  const currentValue = parseFloat(e.target.value);
                  if (!isNaN(currentValue)) {
                    setValue("amaunInflow", currentValue.toFixed(2)); // Format to two decimal places
                  }
                }}
                aria-invalid={errors.amaunInflow ? "true" : "false"}
                placeholder="Masukkan amaun inflow"
              />

              {errors.amaunInflow?.type === "required" && (
                <small className="text-danger">Amaun inflow diperlukan.</small>
              )}

              {errors.amaunInflow?.type === "isGreaterThanZero" && (
                <small className="text-danger">
                  Amaun inflow haruslah sekurang-kurangnya 0.01 atau lebih.
                </small>
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
            
            <Button onClick={handleSubmit(handleEditInflowIsiRumah)}>Simpan</Button>{" "}
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default EditTrackingInflowIsiRumah;
