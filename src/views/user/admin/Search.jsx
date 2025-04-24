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
      <Container fluid className="user-search-bar-container">
        <Form
          className="user-search-bar"
          onSubmit={handleSubmit(handleSearchUser)}
          onReset={reset}
        >
          <Row>
            <Form.Group controlId="staffId" className="col-md-10">
              <Form.Control
                className="user-search-input-field"
                type="text"
                // {...register("staffId", { required: true })}
                // aria-invalid={errors.staffId ? "true" : "false"}
                placeholder="Insert staff id"
              />

              {/* {errors.staffId?.type === "required" && ( */}
                <small className="text-danger">
                  Staff id is required.
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
