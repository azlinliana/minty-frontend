import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import SuccessAlert from "../../components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../components/sweet-alert/ErrorAlert";
import { Button, Modal, Form } from "react-bootstrap";
import axiosCustom from "../../../axios";

function EditSuperAdmin({ superAdmin }) {
  // ----------FE----------
  // Modal
  const [isModalEditSuperAdmin, setIsModalEditSuperAdmin] = useState(false);
  const openModalEditSuperAdmin = () => setIsModalEditSuperAdmin(true);
  const closeModalEditSuperAdmin = () => {
    setIsModalEditSuperAdmin(false);
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
  // Set default values when the kemas kini super admin modal is opened
  useEffect(() => {
    setValue("statusSuperAdmin", superAdmin.statusSuperAdmin);
  }, [superAdmin, setValue]);

  // Update super admin
  const updateSuperAdmin = async (superAdminInput) => {
    try {
      const response = await axiosCustom.put(
        `pengguna/super-admin/${superAdmin.id}`,
        superAdminInput
      );

      if (response.status === 200) {
        SuccessAlert(response.data.message);
        closeModalEditSuperAdmin();
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
        <Button className="edit-btn" onClick={openModalEditSuperAdmin}>
          Edit
        </Button>{" "}
        <Modal
          show={isModalEditSuperAdmin}
          onHide={closeModalEditSuperAdmin}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Super Admin</Modal.Title>
          </Modal.Header>

          <Form onSubmit={handleSubmit(updateSuperAdmin)} onReset={reset}>
            <Modal.Body>
              <Form.Group controlId="statusSuperAdmin" className="mb-3">
                <Form.Label className="form-label">
                  Status Super Admin
                </Form.Label>

                <Form.Control
                  as="select"
                  className="form-select"
                  {...register("statusSuperAdmin", { required: true })}
                  aria-invalid={errors.statusSuperAdmin ? "true" : "false"}
                >
                  <option value="" disabled>
                    --Pilih Status Super Admin--
                  </option>
                  <option value="DIBENARKAN">DIBENARKAN</option>
                  <option value="DISEKAT">DISEKAT</option>
                </Form.Control>

                {errors.statusSuperAdmin?.type === "required" && (
                  <small className="text-danger">
                    Status super admin diperlukan.
                  </small>
                )}
              </Form.Group>
            </Modal.Body>

            <Modal.Footer>
              <Button className="batal-btn" onClick={closeModalEditSuperAdmin}>
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

export default EditSuperAdmin;
