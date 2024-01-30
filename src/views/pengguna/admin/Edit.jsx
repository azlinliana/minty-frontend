import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import SuccessAlert from "../../components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../components/sweet-alert/ErrorAlert";
import { Button, Modal, Form } from "react-bootstrap";
import axiosCustom from "../../../axios";

function EditAdmin({ admin }) {
  // ----------FE----------
  // Modal
  const [isModalEditAdmin, setIsModalEditAdmin] = useState(false);
  const openModalEditAdmin = () => setIsModalEditAdmin(true);
  const closeModalEditAdmin = () => {
    setIsModalEditAdmin(false);
  };

  // Form validation
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  // ----------BE----------
  // Set default values when the kemas kini admin modal is opened
  useEffect(() => {
    setValue("statusAdmin", admin.statusAdmin);
  }, [admin, setValue]);

  // Update admin
  const updateAdmin = async (adminInput) => {
    try {
      const response = await axiosCustom.put(
        `pengguna/admin/${admin.id}`,
        adminInput
      );

      if (response.status === 200) {
        SuccessAlert(response.data.message);
        closeModalEditAdmin();
      } else {
        ErrorAlert(response.data.error); // Error from the backend or unknow error from the server side
      }
    } catch (error) {
      ErrorAlert(error);
    }
  };

  return (
    <>
      <div>
        <Button className="editBtn" onClick={openModalEditAdmin}>
          Kemas Kini
        </Button>{" "}

        <Modal
          show={isModalEditAdmin}
          onHide={closeModalEditAdmin}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Kemas Kini Admin</Modal.Title>
          </Modal.Header>

          <Form onSubmit={handleSubmit(updateAdmin)} onReset={reset}>
            <Modal.Body>
              <Form.Group controlId="statusAdmin" className="mb-3">
                <Form.Label className="form-label">Status Admin</Form.Label>

                <Form.Control
                  as="select"
                  className="form-select"
                  {...register("statusAdmin", { required: true })}
                  aria-invalid={errors.statusAdmin ? "true" : "false"}
                >
                  <option value="" disabled>--Pilih Status Admin--</option>
                  <option value="DIBENARKAN">DIBENARKAN</option>
                  <option value="DISEKAT">DISEKAT</option>
                </Form.Control>

                {errors.statusAdmin?.type === "required" && (
                  <small className="text-danger">
                    Status admin diperlukan.
                  </small>
                )}
              </Form.Group>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={closeModalEditAdmin}>
                Batal
              </Button>

              <Button variant="primary" type="submit">
                Simpan
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    </>
  );
}

export default EditAdmin;
