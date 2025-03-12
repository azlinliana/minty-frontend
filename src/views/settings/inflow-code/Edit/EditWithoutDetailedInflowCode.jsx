import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, Form } from "react-bootstrap";
import { useKodInflowStore } from "../../../../store/selenggara/kod-inflow-store";

function EditWithoutDetailedInflowCode(
  // { kodInflow }
) {
  // __________________________________ Frontend __________________________________
  // Modal
  const [
    isModalEditKodInflowWithoutKodInflowTerperinci,
    setIsModalEditKodInflowWithoutKodInflowTerperinci,
  ] = useState(false);
  const openModalEditKodInflowWithoutKodInflowTerperinci = () =>
    setIsModalEditKodInflowWithoutKodInflowTerperinci(true);
  const closeModalEditKodInflowWithoutKodInflowTerperinci = () => {
    setIsModalEditKodInflowWithoutKodInflowTerperinci(false);
  };

  // Form validation
  const {
    register,
    handleSubmit: handleFormSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm();

  // ___________________________________ Backend __________________________________
  // Set default values when the kemas kini kod inflow modal is opened
  // const [formData, setFormData] = useState({
  //   kodInflow: "",
  //   keteranganKodInflow: "",
  //   statusKodInflow: "",
  // });

  // useEffect(() => {
  //   // Populate form data
  //   setValue("kodInflow", kodInflow.kodInflow);
  //   setValue("keteranganKodInflow", kodInflow.keteranganKodInflow);
  //   setValue("statusKodInflow", kodInflow.statusKodInflow);

  //   // Set default values for formData
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     kodInflow: kodInflow.kodInflow,
  //     keteranganKodInflow: kodInflow.keteranganKodInflow,
  //     statusKodInflow: kodInflow.statusKodInflow,
  //   }));
  // }, [kodInflow, setValue]);


  // Edit kod inflow without kod inflow terperinci
  // const { editKodInflowWithoutKodInflowTerperinci } = useKodInflowStore((state) => ({
  //   editKodInflowWithoutKodInflowTerperinci: state.editKodInflowWithoutKodInflowTerperinci,
  // }));

  // Pass input & close modal
  const handleEditKodInflowWithoutKodInflowTerperinci = (editKodInflowData) => {
    // editKodInflowWithoutKodInflowTerperinci(kodInflow.id, editKodInflowData, closeModalEditKodInflowWithoutKodInflowTerperinci);
  };


  return (
    <>
      <div>
        <Button
          className="edit-btn"
          onClick={openModalEditKodInflowWithoutKodInflowTerperinci}
        >
          Edit
        </Button>{" "}
        
        <Modal
          show={isModalEditKodInflowWithoutKodInflowTerperinci}
          onHide={closeModalEditKodInflowWithoutKodInflowTerperinci}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Inflow Code</Modal.Title>
          </Modal.Header>

          <Form onReset={reset}>
            <Modal.Body>
              <Form.Group controlId="kodInflow" className="mb-3">
                <Form.Label className="form-label">Inflow Code</Form.Label>

                <Form.Control
                  type="text"
                  // {...register("kodInflow", { required: true })}
                  // aria-invalid={errors.kodInflow ? "true" : "false"}
                  placeholder="Insert inflow code"
                />

                {/* {errors.kodInflow?.type === "required" && ( */}
                  <small className="text-danger">Inflow code is required.</small>
                {/* )} */}
              </Form.Group>

              <Form.Group controlId="keteranganKodInflow" className="mb-3">
                <Form.Label className="form-label">
                  Inflow Code Description
                </Form.Label>

                <Form.Control
                  as="textarea"
                  // {...register("keteranganKodInflow", { required: true })}
                  // aria-invalid={errors.keteranganKodInflow ? "true" : "false"}
                  placeholder="Insert inflow code description"
                />

                {/* {errors.keteranganKodInflow?.type === "required" && ( */}
                  <small className="text-danger">
                    Inflow code description is required.
                  </small>
                {/* )} */}
              </Form.Group>

              <Form.Group controlId="statusKodInflow" className="mb-3">
                <Form.Label className="form-label">
                  Inflow Code Status
                </Form.Label>

                <Form.Control
                  as="select"
                  className="form-select"
                  // {...register("statusKodInflow", { required: true })}
                  // aria-invalid={errors.statusKodInflow ? "true" : "false"}
                  placeholder="Insert inflow code status"
                >
                  <option value="" disabled>
                    --Choose inflow code status--
                  </option>
                  <option value="ACTIVE">ACTIVE</option>
                  <option value="INACTIVE">INACTIVE</option>
                </Form.Control>

                {/* {errors.statusKodInflow?.type === "required" && ( */}
                  <small className="text-danger">
                    Code inflow status is required.
                  </small>
                {/* )} */}
              </Form.Group>
            </Modal.Body>

            <Modal.Footer>
              <Button
                className="batal-btn"
                onClick={closeModalEditKodInflowWithoutKodInflowTerperinci}
              >
                Cancel
              </Button>

              <Button
                onClick={handleFormSubmit(
                  handleEditKodInflowWithoutKodInflowTerperinci
                )}
              >
                Edit
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    </>
  );
}

export default EditWithoutDetailedInflowCode;
