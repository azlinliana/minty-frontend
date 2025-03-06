import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CreateSuperAdmin from "./Create";
import { Form, Row, Container } from "react-bootstrap";
import { useUserStore } from "../../../store/pengguna/user-store";

function SearchSuperAdmin() {
  // __________________________________ Frontend __________________________________
  // Modal
  const [isModalCreateSuperAdmin, setIsModalCreateSuperAdmin] = useState(false);
  const openModalCreateSuperAdmin = () => setIsModalCreateSuperAdmin(true);
  const closeModalCreateSuperAdmin = () => {
    setIsModalCreateSuperAdmin(false);
    reset(); // Reset previous form input
  };

  // Form validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // ___________________________________ Backend __________________________________
  // Search user to add as super admin
  // const { penggunas, searchUserToAddAsSuperAdmin } = useUserStore((state) => ({
  //   penggunas: state.penggunas,
  //   searchUserToAddAsSuperAdmin: state.searchUserToAddAsSuperAdmin,
  // }));

  // Pass input & close modal
  const handleSearchUser = (searchUserData) => {
    // searchUserToAddAsSuperAdmin(searchUserData, openModalCreateSuperAdmin);
  };

  return (
    <>
      <Container fluid className="pengguna-search-bar-container">
        <Form
          className="pengguna-search-bar"
          onSubmit={handleSubmit(handleSearchUser)}
          onReset={reset}
        >
          <Row>
            <Form.Group controlId="idKakitangan" className="col-md-10">
              <Form.Control
                className="pengguna-carian-input-field"
                type="text"
                // {...register("idKakitangan", { required: true })}
                // aria-invalid={errors.idKakitangan ? "true" : "false"}
                placeholder="Masukkan no. id kakitangan"
              />

              {/* {errors.idKakitangan?.type === "required" && ( */}
                <small className="text-danger">
                  No. id kakitangan diperlukan.
                </small>
              {/* )} */}
            </Form.Group>

            <Form.Group className="col-md-2">
              <CreateSuperAdmin
                isModalCreateSuperAdmin={isModalCreateSuperAdmin}
                openModalCreateSuperAdmin={openModalCreateSuperAdmin}
                closeModalCreateSuperAdmin={closeModalCreateSuperAdmin}
                // searchStaffResult={penggunas}
              />
            </Form.Group>
          </Row>
        </Form>
      </Container>
    </>
  );
}

export default SearchSuperAdmin;
