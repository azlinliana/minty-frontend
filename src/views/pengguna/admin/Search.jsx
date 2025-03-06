import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CreateAdmin from "./Create";
import { Form, Row, Container } from "react-bootstrap";
import { useUserStore } from "../../../store/pengguna/user-store";

function SearchAdmin() {
  // __________________________________ Frontend __________________________________
  // Modal
  const [isModalCreateAdmin, setIsModalCreateAdmin] = useState(false);
  const openModalCreateAdmin = () => setIsModalCreateAdmin(true);
  const closeModalCreateAdmin = () => {
    setIsModalCreateAdmin(false);
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
  // Search user to add as admin
  // const { penggunas, searchUserToAddAsAdmin } = useUserStore((state) => ({
  //   penggunas: state.penggunas,
  //   searchUserToAddAsAdmin: state.searchUserToAddAsAdmin,
  // }));

  // Pass input & close modal
  const handleSearchUser = (searchUserData) => {
    // searchUserToAddAsAdmin(searchUserData, openModalCreateAdmin);
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
              <CreateAdmin
                isModalCreateAdmin={isModalCreateAdmin}
                openModalCreateAdmin={openModalCreateAdmin}
                closeModalCreateAdmin={closeModalCreateAdmin}
                // searchStaffResult={penggunas}
              />
            </Form.Group>
          </Row>
        </Form>
      </Container>
    </>
  );
}

export default SearchAdmin;
