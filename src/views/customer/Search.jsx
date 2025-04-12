import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import "../../assets/styles/styles_customer.css";

export default function SearchCustomer() {
  return (
    <>
      <Container className="searchbar-container">
        <Form className="searchbar">
          <Row className="align-items-center">
            {/* Search for customer */}
            <Col xs={12} lg={10}>
              <Form.Group controlId="customerName">
                <Form.Control
                  type="text"
                  placeholder="Search for customer here..."
                />
                {/* <Form.Control
                  type="text"
                  placeholder="Masukkan no. kad pengenalan sahabat"
                  {...register("noKadPengenalanSahabat", {
                    required: "No. kad pengenalan sahabat diperlukan.",
                    pattern: {
                      value: /^\d{12}$/,
                      message:
                        "No. kad pengenalan sahabat perlu mengandungi 12 digit.",
                    },
                  })}
                  aria-invalid={
                    errors.noKadPengenalanSahabat ? "true" : "false"
                  }
                /> */}

                {/* Validate required field */}
                {/* {errors.noKadPengenalanSahabat?.type === "required" && (
                  <small className="text-danger">
                    {errors.noKadPengenalanSahabat.message}
                  </small>
                )} */}

                {/* Validate pattern field */}
                {/* {errors.noKadPengenalanSahabat?.type === "pattern" && (
                  <small className="text-danger">
                    {errors.noKadPengenalanSahabat.message}
                  </small>
                )} */}
              </Form.Group>
            </Col>

            <Col xs={12} lg={2} className="searchbar-btn-container">
              <Button className="searchbar-btn"><span><FaSearch /></span> Search</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
}
