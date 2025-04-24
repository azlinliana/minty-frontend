import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, Form } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { useMingguStore } from "../../../store/sahabat/minggu-store";
import SuccessAlert from "../../components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../components/sweet-alert/ErrorAlert";

// function CreateMinggu({ sahabatId, pembiayaanId }) {
function CreateMinggu() {
  // __________________________________ Frontend __________________________________
  // Modal
  const [isModalCreateMingguPembiayaanSahabat, setIsModalCreateMingguPembiayaanSahabat] = useState(false);
  
  const openModalCreateMingguPembiayaanSahabat = () => setIsModalCreateMingguPembiayaanSahabat(true);
  
  const closeModalCreateMingguPembiayaanSahabat = () => {
    setIsModalCreateMingguPembiayaanSahabat(false);
    reset(); // Reset previous form input
  };

  // Form validation
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // ___________________________________ Backend __________________________________
  // Create minggu pembiayaan sahabat
  // const { createMingguPembiayaanSahabat } = useMingguStore();
  
  const handleCreateMingguPembiayaanSahabat = async (mingguPembiayaanSahabatInput) => {
    // try {
    //   const response = await createMingguPembiayaanSahabat(sahabatId, pembiayaanId, mingguPembiayaanSahabatInput);

    //   if (response.status === 200) {
    //     closeModalCreateMingguPembiayaanSahabat();

    //     SuccessAlert(response.data.success);
    //   } else {
    //     ErrorAlert(response);
    //   }
    // } catch (error) {
    //   console.log(error);
    //   ErrorAlert(error);
    // }
  };

  return (
    <>
      <div>
        <Button onClick={openModalCreateMingguPembiayaanSahabat}>
          <FaPlus style={{ fontSize: "10px" }} /> Add Week
        </Button>{" "}

        <Modal
          show={isModalCreateMingguPembiayaanSahabat}
          onHide={closeModalCreateMingguPembiayaanSahabat}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Week</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onReset={reset}>
              {/* Bilangan minggu */}
              <Form.Group controlId="bilanganMinggu" className="mb-3">
                <Form.Label className="form-label">
                  Num. of Week
                </Form.Label>

                <Form.Control
                  type="number"
                  // {...register("bilanganMinggu", { required: true })}
                  // aria-invalid={errors.bilanganMinggu ? "true" : "false"}
                  placeholder="Enter num. of week"
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
                  placeholder="Enter Date on Week Form"
                />

                {/* {errors.tarikhBorangMinggu?.type === "required" && ( */}
                  <small className="text-danger">
                    Date on Week Form is required.
                  </small>
                {/* )} */}
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button className="cancel-btn" onClick={closeModalCreateMingguPembiayaanSahabat}>
              Cancel
            </Button>

            <Button onClick={handleSubmit(handleCreateMingguPembiayaanSahabat)}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default CreateMinggu;
