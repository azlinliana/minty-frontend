import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Modal, Form } from "react-bootstrap";
import { useSuperAdminStore } from "../../../store/pengguna/super-admin-store";

function EditSuperAdmin({ superAdmin }) {
  // __________________________________ Frontend __________________________________
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

  // ___________________________________ Backend __________________________________
  // Set default values when the kemas kini super admin modal is opened
  // useEffect(() => {
  //   setValue("idKakitangan", superAdmin.user.idKakitangan);
  //   setValue("namaKakitangan", superAdmin.user.namaKakitangan);
  //   setValue("lokasiKakitangan", superAdmin.user.lokasiKakitangan);
  //   setValue("jawatanKakitangan", superAdmin.user.jawatanKakitangan);
  //   setValue("statusSuperAdmin", superAdmin.statusSuperAdmin);
  // }, [superAdmin, setValue]);

  // Edit super admin
  // const { editSuperAdmin } = useSuperAdminStore((state) => ({
  //   editSuperAdmin: state.editSuperAdmin,
  // }));

  // Pass input & close modal
  const handleEditSuperAdmin = (editSuperAdminData) => {
    // editSuperAdmin(superAdmin.id, editSuperAdminData, closeModalEditSuperAdmin);
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

          <Form onReset={reset}>
            <Modal.Body>
              <Form.Group controlId="idKakitangan" className="mb-3">
                <Form.Label className="form-label">Staff Id</Form.Label>

                <Form.Control
                  type="text"
                  // {...register("idKakitangan", { required: true })}
                  readOnly
                />
              </Form.Group>

              <Form.Group controlId="namaKakitangan" className="mb-3">
                <Form.Label className="form-label">Staff Name</Form.Label>

                <Form.Control
                  type="text"
                  // {...register("namaKakitangan", { required: true })}
                  readOnly
                />
              </Form.Group>

              <Form.Group controlId="lokasiKakitangan" className="mb-3">
                <Form.Label className="form-label">
                  Staff Location
                </Form.Label>

                <Form.Control
                  type="text"
                  // {...register("lokasiKakitangan", { required: true })}
                  readOnly
                />
              </Form.Group>

              <Form.Group controlId="jawatanKakitangan" className="mb-3">
                <Form.Label className="form-label">
                  Staff Position
                </Form.Label>

                <Form.Control
                  type="text"
                  // {...register("jawatanKakitangan", { required: true })}
                  readOnly
                />
              </Form.Group>

              <Form.Group controlId="statusSuperAdmin" className="mb-3">
                <Form.Label className="form-label">
                  Super Admin Status
                </Form.Label>

                <Form.Control
                  as="select"
                  className="form-select"
                  // {...register("statusSuperAdmin", { required: true })}
                  // aria-invalid={errors.statusSuperAdmin ? "true" : "false"}
                >
                  <option value="" disabled>
                    --Choose Super Admin Status--
                  </option>
                  <option value="ALLOW">ALLOW</option>
                  <option value="BLOCK">BLOCK</option>
                </Form.Control>

                {/* {errors.statusSuperAdmin?.type === "required" && ( */}
                  <small className="text-danger">
                    Super admin status is required.
                  </small>
                {/* )} */}
              </Form.Group>
            </Modal.Body>

            <Modal.Footer>
              <Button className="cancel-btn" onClick={closeModalEditSuperAdmin}>
                Cancel
              </Button>

              <Button onClick={handleSubmit(handleEditSuperAdmin)}>
                Edit
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    </>
  );
}

export default EditSuperAdmin;
