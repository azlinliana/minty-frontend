import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, Form } from "react-bootstrap";
import { useInflowSahabatStore } from "../../../../../store/sahabat/inflow-sahabat-store";

// function EditTrackingInflowSahabat({
//   mingguId,
//   inflowSahabatId,
//   inflowSahabat,
//   kodInflowOptions,
// }) {
function EditTrackingInflowSahabat() {
  // __________________________________ Frontend __________________________________
  // Form validation
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm();

  // _____________________________ Frontend & Backend _____________________________
  // State to store selected kod Inflow
  const [selectedKodInflow, setSelectedKodInflow] = useState("");

  const [showKodInflowTerperinci, setShowKodInflowTerperinci] = useState([]);

  const [previousKodInflow, setPreviousKodInflow] = useState(null);

  // Match data from zustand & backend
  // const findOptionId = (options, key, value) => {
  //   const option = options.find((option) => option[key] === value);

  //   return option ? option.id : "";
  // };

  // Match data
  // const kodInflowId = findOptionId(
  //   kodInflowOptions,
  //   "kodInflow",
  //   inflowSahabat.kodInflow
  // );

  // Modal
  const [isModalEditInflowSahabat, setIsModalEditInflowSahabat] =
    useState(false);

  const openModalEditInflowSahabat = () => setIsModalEditInflowSahabat(true);

  const closeModalEditInflowSahabat = () => {
    setIsModalEditInflowSahabat(false);

    // Reset previous form input
    // const resetFields = {
    //   kodInflowId: kodInflowId,
    //   amaunInflow: inflowSahabat.amaunInflow,
    // };

    // inflowSahabat.inflowSahabatTerperinci.forEach((terperinci) => {
    //   resetFields[
    //     `keteranganInflowTerperinci_${terperinci.kodInflowTerperinciId}`
    //   ] = terperinci.keteranganInflowTerperinci;
    // });

    // reset(resetFields);
  };

  // Set default values when the edit inflow sahabat modal is opened
  const [formData, setFormData] = useState({
    kodInflowId: "",
    amaunInflow: "",
    kodInflowTerperinci: {},
  });

  // useEffect(() => {
  //   if (inflowSahabat) {
  //     // Populate form data
  //     setValue("kodInflowId", kodInflowId);
  //     setValue(
  //       "amaunInflow",
  //       parseFloat(inflowSahabat.amaunInflow).toFixed(2)
  //     );

  //     // Set selected kod inflow and terperinci data
  //     setSelectedKodInflow(inflowSahabat.kodInflow);
  //     setShowKodInflowTerperinci(inflowSahabat.kodInflowTerperinci);

  //     // Set terperinci values
  //     inflowSahabat.inflowSahabatTerperinci.forEach((terperinci) => {
  //       setValue(
  //         `keteranganInflowTerperinci_${terperinci.kodInflowTerperinciId}`,
  //         terperinci.keteranganInflowTerperinci
  //       );
  //     });

  //     // Set default values for formData
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       kodInflowId,
  //       amaunInflow: inflowSahabat.amaunInflow,
  //       kodInflowTerperinci: inflowSahabat.inflowSahabatTerperinci.reduce(
  //         (item, terperinci) => {
  //           item[
  //             `keteranganInflowTerperinci_${terperinci.kodInflowTerperinciId}`
  //           ] = terperinci.keteranganInflowTerperinci;

  //           return item;
  //         },
  //         {}
  //       ),
  //     }));
  //   }
  // }, [inflowSahabat, setValue]);

  const handleKodInflowChange = (selectedValue) => {
    // const selectedKodInflowData = kodInflowOptions.find(
    //   (item) => item.id === parseInt(selectedValue)
    // );

    // setSelectedKodInflow(selectedKodInflowData.kodInflow);

    // if (selectedValue === previousKodInflow) {
    //   // User selected the previous Kod Inflow, restore the previous data
    //   setValue("kodInflowId", previousKodInflow);

    //   // Restore terperinci values
    //   inflowSahabat.inflowSahabatTerperinci.forEach((terperinci) => {
    //     setValue(
    //       `keteranganInflowTerperinci_${terperinci.kodInflowTerperinciId}`,
    //       terperinci.keteranganInflowTerperinci
    //     );
    //   });
    // } else {
    //   // User selected a new Kod Inflow, set the associated terperinci fields
    //   setPreviousKodInflow(selectedValue);

    //   setShowKodInflowTerperinci(selectedKodInflowData.kodInflowTerperinci);
    // }
  };

  const handleInputChange = (name, value) => {
    // setFormData((prevData) => ({
    //   ...prevData,
    //   kodInflowTerperinci: {
    //     ...prevData.kodInflowTerperinci,
    //     [name]: value,
    //   },
    // }));
  };

  // ___________________________________ Backend __________________________________
  // Edit inflow sahabat
  // const { editInflowSahabat } = useInflowSahabatStore((state) => ({
  //   editInflowSahabat: state.editInflowSahabat,
  // }));

  // Pass input & close modal
  const handleCreateInflowSahabat = (addInflowSahabatData) => {
    // Filter out unnecessary fields - Only submit current data with their respective kod inflow id
    // const filteredData = {
    //   kodInflowId: addInflowSahabatData.kodInflowId,
    //   amaunInflow: addInflowSahabatData.amaunInflow,
    // };

    // // Add terperinci fields to filteredData
    // showKodInflowTerperinci.forEach((terperinci) => {
    //   const terperinciField = `keteranganInflowTerperinci_${terperinci.id}`;
    //   filteredData[terperinciField] = addInflowSahabatData[terperinciField];
    // });

    // editInflowSahabat(
    //   mingguId,
    //   inflowSahabatId,
    //   addInflowSahabatData,
    //   closeModalEditInflowSahabat
    // );
  };

  return (
    <div>
      <Button className="edit-btn" onClick={openModalEditInflowSahabat}>
        Edit
      </Button>{" "}
      
      <Modal
        show={isModalEditInflowSahabat}
        onHide={closeModalEditInflowSahabat}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Inflow Sahabat</Modal.Title>
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

            {/* Dynamic form input based on current and selected kod inflow */}
            {/* {showKodInflowTerperinci && showKodInflowTerperinci.length > 0 && ( */}
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
                      //   errors[`keteranganInflowTerperinci_${terperinci.id}`]
                      //     ? "true"
                      //     : "false"
                      // }
                      placeholder="Keterangan inflow terperinci diperlukan"
                    />

                    {/* {errors[`keteranganInflowTerperinci_${terperinci.id}`]
                      ?.type === "required" && ( */}
                      <small className="text-danger">
                        Keterangan terperinci 
                        {/* {terperinci.kodInflowTerperinci}{" "} */}
                        diperlukan.
                      </small>
                    {/* )} */}
                  </Form.Group>
                {/* ))} */}
              </React.Fragment>
            {/* )} */}

            {/* Amaun inflow */}
            <Form.Group controlId="amaunInflow" className="mb-3">
              <Form.Label className="form-label">Amaun Inflow</Form.Label>

              <Form.Control
                type="text"
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
                <small className="text-danger">Amaun inflow diperlukan.</small>
              {/* )} */}

              {/* {errors.amaunInflow?.type === "isGreaterThanZero" && ( */}
                <small className="text-danger">
                  Amaun inflow haruslah sekurang-kurangnya 0.01 atau lebih.
                </small>
              {/* )} */}
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button className="batal-btn" onClick={closeModalEditInflowSahabat}>
              Batal
            </Button>

            <Button onClick={handleSubmit(handleCreateInflowSahabat)}>
              Simpan
            </Button>{" "}
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default EditTrackingInflowSahabat;
