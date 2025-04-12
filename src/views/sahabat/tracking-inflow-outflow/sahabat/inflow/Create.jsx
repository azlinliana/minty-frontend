import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, Form } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { useInflowSahabatStore } from "../../../../../store/sahabat/inflow-sahabat-store";

// function CreateTrackingInflowSahabat({ mingguId, kodInflowOptions }) {
function CreateTrackingInflowSahabat() {
  // __________________________________ Frontend __________________________________
  // Modal
  const [isModalCreateTrackingInflowSahabat, setIsModalCreateTrackingInflowSahabat] =
    useState(false);

  const openModalCreateTrackingInflowSahabat = () =>
    setIsModalCreateTrackingInflowSahabat(true);

  const closeModalCreateTrackingInflowSahabat = () => {
    setIsModalCreateTrackingInflowSahabat(false);
    reset(); // Reset previous form input
  };

  // Form validation
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  // ___________________________________ Backend __________________________________
  // State to store selected kod Inflow
  const [selectedKodInflow, setSelectedKodInflow] = useState("");
  const [showKodInflowTerperinci, setShowKodInflowTerperinci] = useState([]);

  const handleKodInflowChange = (selectedValue) => {
    // const selectedKodInflowData = kodInflowOptions.find(
    //   (item) => item.id === parseInt(selectedValue)
    // );

    // setSelectedKodInflow(selectedKodInflowData.kodInflow);

    // setShowKodInflowTerperinci(selectedKodInflowData.kod_inflow_terperincis);

    // // Reset other form data and save selected inflow id
    // setFormData((prevData) => ({
    //   ...prevData,
    //   kodInflowId: selectedValue,
    //   amaunInflow: "",
    //   kodInflowTerperinci: [], // Reset the array
    // }));

    // const resetTerperinciValues = {}; // Reset keteranganInflowTerperinci values

    // selectedKodInflowData.kod_inflow_terperincis.forEach((terperinci) => {
    //   const fieldName = `kodInflowTerperinci[${terperinci.id}]`;

    //   resetTerperinciValues[fieldName] = "";
    // });

    // reset(resetTerperinciValues); // Reset the form with the new values

    // setValue("kodInflowId", selectedValue); // Set the value directly in the form data
  };

  const [formData, setFormData] = useState({});

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Create inflow sahabat
  // const { createInflowSahabat } = useInflowSahabatStore((state) => ({
  //   createInflowSahabat: state.createInflowSahabat,
  // }));

  // Pass input & close modal
  const handleCreateInflowSahabat = (addInflowSahabatData) => {
    // createInflowSahabat(
    //   mingguId,
    //   addInflowSahabatData,
    //   closeModalCreateTrackingInflowSahabat
    // );
  };
  
  return (
    <>
      <div>
        <Button onClick={openModalCreateTrackingInflowSahabat}>
          <FaPlus style={{ fontSize: "10px" }} /> Tambah
        </Button>{" "}

        <Modal
          show={isModalCreateTrackingInflowSahabat}
          onHide={closeModalCreateTrackingInflowSahabat}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Tambah Inflow Sahabat</Modal.Title>
          </Modal.Header>

          <Form onReset={reset}>
            <Modal.Body>
              {/* Kod inflow */}
              <Form.Group controlId="kodInflowId" className="mb-3">
                <Form.Label className="form-label">Kod Inflow</Form.Label>

                <Form.Control
                  as="select"
                  className="form-select"
                  // {...register("kodInflowId", { required: true })}
                  // onChange={(e) => {
                  //   handleKodInflowChange(e.target.value);
                  // }}
                  // aria-invalid={errors.kodInflowId ? "true" : "false"}
                  defaultValue=""
                >
                  <option value="" disabled>
                    --Pilih Kod Inflow--
                  </option>
                  {/* {kodInflowOptions.map((kodInflow) => (
                    <option key={kodInflow.id} value={kodInflow.id}>
                      {kodInflow.kodInflow} - {kodInflow.keteranganKodInflow}
                    </option>
                  ))} */}
                </Form.Control>

                {/* {errors.kodInflowId?.type === "required" && ( */}
                  <small className="text-danger">Kod inflow diperlukan.</small>
                {/* )} */}
              </Form.Group>

              {/* Generate dynamic form input based on selected kod inflow */}
              {/* {showKodInflowTerperinci &&
                showKodInflowTerperinci.length > 0 && ( */}
                  <React.Fragment>
                    {/* {showKodInflowTerperinci.map((terperinci) => ( */}
                      <Form.Group
                        // key={terperinci.id}
                        // controlId={`keteranganInflowTerperinci_${terperinci.id}`}
                        className="mb-3"
                      >
                        <Form.Label
                          // className={`kodInflowTerperinci_${terperinci.kodInflowTerperinci}`}
                        >
                          Keterangan Kod Inflow Terperinci
                          {/* {`${terperinci.kodInflowTerperinci} - ${terperinci.keteranganKodInflowTerperinci}`} */}
                        </Form.Label>

                        <Form.Control
                          type="text"
                          // {...register(
                          //   `keteranganInflowTerperinci_${terperinci.id}`,
                          //   { required: true }
                          // )}
                          // onChange={(e) => {
                          //   handleInputChange(
                          //     `keteranganInflowTerperinci_${terperinci.id}`,
                          //     e.target.value
                          //   );
                          // }}
                          // aria-invalid={
                          //   errors[
                          //     `keteranganInflowTerperinci_${terperinci.id}`
                          //   ]
                          //     ? "true"
                          //     : "false"
                          // }
                          placeholder="Keterangan inflow terperinci diperlukan"
                        />

                        {/* {errors[`keteranganInflowTerperinci_${terperinci.id}`]
                          ?.type === "required" && ( */}
                          <small className="text-danger">
                            Keterangan terperinci{" "}
                            {/* {terperinci.kodInflowTerperinci}  */}
                            diperlukan.
                          </small>
                        {/* )} */}
                      </Form.Group>
                    {/* ))} */}
                  </React.Fragment>
                {/* )} */}

              {/* Amaun inflow */}
              <Form.Group controlId="amaunInflow" className="mb-3">
                <Form.Label className="form-label">
                  Amaun Inflow (RM)
                </Form.Label>

                <Form.Control
                  type="number"
                  min="0.01"
                  step="0.01"
                  // {...register("amaunInflow", {
                  //   required: "Amaun inflow diperlukan.",
                  //   valueAsNumber: true, // Ensure value is treated as a number
                  //   validate: {
                  //     isGreaterThanZero: (value) => {
                  //       return (
                  //         parseFloat(value) >= 0.01 ||
                  //         "Amaun inflow haruslah sekurang-kurangnya 0.01 atau lebih."
                  //       );
                  //     },
                  //   },
                  // })}
                  // onBlur={(e) => {
                  //   const currentValue = parseFloat(e.target.value);
                  //   if (!isNaN(currentValue)) {
                  //     setValue("amaunInflow", currentValue.toFixed(2)); // Format to two decimal places
                  //   }
                  // }}                    
                  // aria-invalid={errors.amaunInflow ? "true" : "false"}
                  placeholder="Masukkan amaun inflow"
                />

                {/* {errors.amaunInflow?.type === "required" && ( */}
                  <small className="text-danger">
                    Amaun inflow diperlukan.
                  </small>
                {/* )} */}

              {/* {errors.amaunInflow?.type === "isGreaterThanZero" && ( */}
                <small className="text-danger">
                  Amaun inflow haruslah sekurang-kurangnya 0.01 atau lebih.
                </small>
              {/* )} */}
              </Form.Group>
            </Modal.Body>

            <Modal.Footer>
              <Button
                className="cancel-btn"
                onClick={closeModalCreateTrackingInflowSahabat}
              >
                Batal
              </Button>

              <Button onClick={handleSubmit(handleCreateInflowSahabat)}>
                Simpan
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    </>
  );
}

export default CreateTrackingInflowSahabat;
