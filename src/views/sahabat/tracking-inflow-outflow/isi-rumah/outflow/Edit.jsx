import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, Form } from "react-bootstrap";
import { useOutflowIsiRumahStore } from "../../../../../store/sahabat/outflow-isi-rumah-store";

// function EditTrackingOutflowIsiRumah({
//   isiRumahId,
//   outflowIsiRumahId,
//   outflowIsiRumah,
//   kodOutflowOptions,
// }) {
function EditTrackingOutflowIsiRumah() {
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
  // Match data from zustand & backend
  // const findOptionId = (options, key, value) => {
  //   const option = options.find((option) => option[key] === value);

  //   return option ? option.id : "";
  // };

  // Match data
  // const kodOutflowId = findOptionId(
  //   kodOutflowOptions,
  //   "kodOutflow",
  //   outflowIsiRumah.kodOutflow
  // );

  // Modal
  const [isModalEditOutflowIsiRumah, setIsModalEditOutflowIsiRumah] =
    useState(false);

  const openModalEditOutflowIsiRumah = () =>
    setIsModalEditOutflowIsiRumah(true);

  const closeModalEditOutflowIsiRumah = () => {
    setIsModalEditOutflowIsiRumah(false);

    // Reset previous form input
    // const resetFields = {
    //   kodOutflowId: kodOutflowId,
    //   amaunOutflow: outflowIsiRumah.amaunOutflow,
    // };

    // reset(resetFields);
  };

  // Set default values when the edit outflow isi rumah modal is opened
  const [formData, setFormData] = useState({
    kodOutflowId: "",
    amaunOutflow: "",
  });

  // useEffect(() => {
  //   // Populate form data
  //   setValue("kodOutflowId", kodOutflowId);
  //   setValue(
  //     "amaunOutflow",
  //     parseFloat(outflowIsiRumah.amaunOutflow).toFixed(2)
  //   );

  //   // Set default values for formData
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     kodOutflowId,
  //     amaunOutflow: outflowIsiRumah.amaunOutflow,
  //   }));
  // }, [outflowIsiRumah, setValue]);
  
  // ___________________________________ Backend __________________________________
  // Edit outflow isi rumah
  // const { editOutflowIsiRumah } = useOutflowIsiRumahStore((state) => ({
  //   editOutflowIsiRumah: state.editOutflowIsiRumah,
  // }));

  // Pass input & close modal
  const handleEditOutflowIsiRumah = (editOutflowIsiRumahData) => {
    // editOutflowIsiRumah(
    //   isiRumahId,
    //   outflowIsiRumahId,
    //   editOutflowIsiRumahData,
    //   closeModalEditOutflowIsiRumah
    // );
  };

  return (
    <>
      <div>
        <Button className="edit-btn" onClick={openModalEditOutflowIsiRumah}>
          Edit
        </Button>{" "}
        
        <Modal
          show={isModalEditOutflowIsiRumah}
          onHide={closeModalEditOutflowIsiRumah}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Outflow Isi Rumah</Modal.Title>
          </Modal.Header>

          <Form onReset={reset}>
            <Modal.Body>
              {/* Kod outflow */}
              <Form.Group controlId="kodOutflowId" className="mb-3">
                <Form.Label className="form-label">Kod Outflow</Form.Label>

                <Form.Control
                  as="select"
                  className="form-select"
                  // {...register("kodOutflowId", { required: true })}
                  // aria-invalid={errors.kodOutflowId ? "true" : "false"}
                >
                  <option value="" disabled>
                    --Pilih Kod Outflow--
                  </option>
                  {/* {kodOutflowOptions.map((kodOutflow) => (
                    <option key={kodOutflow.id} value={kodOutflow.id}>
                      {kodOutflow.kodOutflow} -{" "}
                      {kodOutflow.keteranganKodOutflow}
                    </option>
                  ))} */}
                </Form.Control>

                {/* {errors.kodOutflowId?.type === "required" && ( */}
                  <small className="text-danger">Kod outflow diperlukan.</small>
                {/* )} */}
              </Form.Group>

              {/* Amaun outflow */}
              <Form.Group controlId="amaunOutflow" className="mb-3">
                <Form.Label className="form-label">
                  Amaun Outflow (RM)
                </Form.Label>

                <Form.Control
                  type="number"
                  min="0.01"
                  step="0.01"
                  // {...register("amaunOutflow", {
                  //   required: "Amaun outflow diperlukan.",
                  //   valueAsNumber: true, // Ensure value is treated as a number
                  //   validate: {
                  //     isGreaterThanZero: (value) => {
                  //       return (
                  //         parseFloat(value) >= 0.01 ||
                  //         "Amaun outflow haruslah sekurang-kurangnya 0.01 atau lebih."
                  //       );
                  //     },
                  //   },
                  // })}
                  // onBlur={(e) => {
                  //   const currentValue = parseFloat(e.target.value);
                  //   if (!isNaN(currentValue)) {
                  //     setValue("amaunOutflow", currentValue.toFixed(2)); // Format to two decimal places
                  //   }
                  // }}
                  // aria-invalid={errors.amaunOutflow ? "true" : "false"}
                  placeholder="Masukkan amaun outflow"
                />

                {/* {errors.amaunOutflow?.type === "required" && ( */}
                  <small className="text-danger">
                    Amaun outflow diperlukan.
                  </small>
                {/* )} */}

                {/* {errors.amaunOutflow?.type === "isGreaterThanZero" && ( */}
                  <small className="text-danger">
                    Amaun outflow haruslah sekurang-kurangnya 0.01 atau lebih.
                  </small>
                {/* )} */}
              </Form.Group>
            </Modal.Body>

            <Modal.Footer>
              <Button
                className="cancel-btn"
                onClick={closeModalEditOutflowIsiRumah}
              >
                Batal
              </Button>

              <Button onClick={handleSubmit(handleEditOutflowIsiRumah)}>
                Simpan
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    </>
  );
}

export default EditTrackingOutflowIsiRumah;
