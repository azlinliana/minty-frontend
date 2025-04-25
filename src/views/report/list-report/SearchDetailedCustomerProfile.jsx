import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ErrorAlert from "../../components/sweet-alert/ErrorAlert";
import { Button, Form, Modal } from "react-bootstrap";
import axiosCustom from "../../../axios";

function SearchDetailedCustomerProfile() {
  // ______________________________ Hook Declaration ______________________________
  const navigate = useNavigate();

  // __________________________________ Frontend __________________________________
  // Modal
  // Modal
  const [
    IsModalSearchDetailedCustomerProfile,
    setIsModalSearchDetailedCustomerProfile,
  ] = useState(false);

  const openModalSearchDetailedCustomerProfile = () =>
    setIsModalSearchDetailedCustomerProfile(true);

  const closeModalSearchDetailedCustomerProfile = () => {
    setIsModalSearchDetailedCustomerProfile(false);
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
  // Search profil sahabat terperinci
  const handleSearchDetailedCustomerProfile = async (noKadPengenalanSahabatInput) => {
    navigate("/detailed-customer-profile-list-financial");
    // try {
    //   const response = await axiosCustom.post(
    //     `laporan/search`,
    //     noKadPengenalanSahabatInput
    //   );

    //   if (response.status === 200) {
    //     navigate("/pembiayaan-sahabat-terperinci", {
    //       state: { resultSahabat: response.data },
    //     });
    //   } else {
    //     ErrorAlert(response);
    //   }
    // } catch (error) {
    //   ErrorAlert(error);
    // }
  };

  return (
    <>
      <Button
        className="report-index-pg-btn"
        onClick={openModalSearchDetailedCustomerProfile}
      >
        Search
      </Button>{" "}
      
      <Modal
        show={IsModalSearchDetailedCustomerProfile}
        onHide={closeModalSearchDetailedCustomerProfile}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Search Detailed Customer Profile</Modal.Title>
        </Modal.Header>

        <Form onReset={reset}>
          <Modal.Body>
            <Form.Group controlId="customerIc" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Insert customer's IC"
                {...register("customerIc", {
                  required: "Customer IC is required.",
                  pattern: {
                    value: /^\d{12}$/,
                    message:
                      "Customer IC must contain 12 digits",
                  },
                })}
                aria-invalid={errors.customerIc ? "true" : "false"}
              />

              {/* Validate required field */}
              {errors.customerIc?.type === "required" && (
                <small className="text-danger">
                  Customer ic is required.
                </small>
              )}

              {/* Validate pattern field */}
              {errors.customerIc?.type === "pattern" && (
                <small className="text-danger">
                  {errors.customerIc.message}
                </small>
              )}
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button
              className="cancel-btn"
              onClick={closeModalSearchDetailedCustomerProfile}
            >
              Cancel
            </Button>
            <Button onClick={handleSubmit(handleSearchDetailedCustomerProfile)}>
              Search
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default SearchDetailedCustomerProfile;
