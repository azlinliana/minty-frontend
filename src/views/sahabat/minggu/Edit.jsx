import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, Form } from "react-bootstrap";
import { useMingguStore } from "../../../store/sahabat/minggu-store";

// function EditMinggu({
//   sahabatId,
//   pembiayaanId,
//   mingguId,
//   currentMingguPembiayaanSahabat,
// }) { 
function EditMinggu({
  // sahabatId,
  // pembiayaanId,
  // mingguId,
  // currentMingguPembiayaanSahabat,
}) { 
  // __________________________________ Frontend __________________________________
  // Modal
  const [
    isModalEditMingguPembiayaanSahabat,
    setIsModalEditMingguPembiayaanSahabat,
  ] = useState(false);

  const openModalEditMingguPembiayaanSahabat = () =>
    setIsModalEditMingguPembiayaanSahabat(true);

  const closeModalEditMingguPembiayaanSahabat = () => {
    setIsModalEditMingguPembiayaanSahabat(false);
  };

  // Form validation
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm();

  // ___________________________________ Backend __________________________________
  // Set default values when the edit minggu modal is opened
  // const [formData, setFormData] = useState({
  //   bilanganMinggu: "",
  //   tarikhBorangMinggu: "",
  // });

  // useEffect(() => {
  //   // Populate form data
  //   setValue("bilanganMinggu", currentMingguPembiayaanSahabat.bilanganMinggu);
  //   setValue(
  //     "tarikhBorangMinggu",
  //     currentMingguPembiayaanSahabat.tarikhBorangMinggu
  //   );

  //   // Set default values for formData
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     bilanganMinggu: currentMingguPembiayaanSahabat.bilanganMinggu,
  //     tarikhBorangMinggu: currentMingguPembiayaanSahabat.tarikhBorangMinggu,
  //   }));
  // }, [currentMingguPembiayaanSahabat, setValue]);

  // Edit minggu pembiayaan sahabat
  // const { editMingguPembiayaanSahabat } = useMingguStore((state) => ({
  //   editMingguPembiayaanSahabat: state.editMingguPembiayaanSahabat,
  // }));

  // Pass input & close modal
  const handleEditMingguPembiayaanSahabat = (
    editMingguPembiayaanSahabatData
  ) => {
    // editMingguPembiayaanSahabat(
    //   sahabatId,
    //   pembiayaanId,
    //   mingguId,
    //   editMingguPembiayaanSahabatData,
    //   closeModalEditMingguPembiayaanSahabat
    // );
  };

  return (
    <>
      <div>
        <Button onClick={openModalEditMingguPembiayaanSahabat}>
          Edit Week
        </Button>{" "}
        
        <Modal
          show={isModalEditMingguPembiayaanSahabat}
          onHide={closeModalEditMingguPembiayaanSahabat}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Week</Modal.Title>
          </Modal.Header>

          <Form onReset={reset}>
            <Modal.Body>
              {/* Bilangan minggu */}
              <Form.Group controlId="bilanganMinggu" className="mb-3">
                <Form.Label className="form-label">Num. of Week</Form.Label>

                <Form.Control
                  type="number"
                  // {...register("bilanganMinggu", { required: true })}
                  // aria-invalid={errors.bilanganMinggu ? "true" : "false"}
                  placeholder="Enter the num. of week"
                />

                {/* {errors.bilanganMinggu?.type === "required" && ( */}
                  <small className="text-danger">
                    Num. of week is required.
                  </small>
                {/* )} */}
              </Form.Group>

              {/* Tarikh borang minggu */}
              <Form.Group controlId="tarikhBorangMinggu" className="mb-3">
                <Form.Label className="form-label">
                  Date on Week Form
                </Form.Label>

                <Form.Control
                  type="date"
                  // {...register("tarikhBorangMinggu", { required: true })}
                  // aria-invalid={errors.tarikhBorangMinggu ? "true" : "false"}
                  placeholder="Enter date on week form"
                />

                {/* {errors.tarikhBorangMinggu?.type === "required" && ( */}
                  <small className="text-danger">
                    Date on week form is required.
                  </small>
                {/* )} */}
              </Form.Group>
            </Modal.Body>

            <Modal.Footer>
              <Button
                className="cancel-btn"
                onClick={closeModalEditMingguPembiayaanSahabat}
              >
                Cancel
              </Button>

              <Button onClick={handleSubmit(handleEditMingguPembiayaanSahabat)}>
                Save
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    </>
  );
}

export default EditMinggu;
