import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ErrorAlert from "../../components/sweet-alert/ErrorAlert";
import { Button, Form, Modal } from "react-bootstrap";
import axiosCustom from "../../../axios";

function SearchCustomerProfile() {
  // ______________________________ Hook Declaration ______________________________
  const navigate = useNavigate();

  // __________________________________ Frontend __________________________________
  // Modal
  const [
    isModalSearchDetailedCustomerProfile,
    setIsModalSearchDetailedCustomerProfile,
  ] = useState(false);

  const openModalCarianLaporanProfilSahabat = () =>
    setIsModalSearchDetailedCustomerProfile(true);

  const closeModalCarianLaporanProfilSahabat = () => {
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
  // Search profil sahabat
  const handleSearchCustomerProfile = async (customerIcInput) => {
    navigate("/customer-profile-list-financial");
    // try {
    //   const response = await axiosCustom.post(
    //     `laporan/search`,
    //     customerIcInput
    //   );

    //   if (response.status === 200) {
    //     navigate("/pembiayaan-sahabat", {
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
        onClick={openModalCarianLaporanProfilSahabat}
      >
        Search
      </Button>{" "}
      <Modal
        show={isModalSearchDetailedCustomerProfile}
        onHide={closeModalCarianLaporanProfilSahabat}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Search Customer Profile Report</Modal.Title>
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
                  Customer IC is required.
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
              onClick={closeModalCarianLaporanProfilSahabat}
            >
              Cancel
            </Button>
            <Button onClick={handleSubmit(handleSearchCustomerProfile)}>
              Search
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default SearchCustomerProfile;
