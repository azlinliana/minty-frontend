import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, Form } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { useAktivitiStore } from "../../../../store/sahabat/aktiviti-store";

// function CreateAktiviti({
//   sahabatId,
//   pembiayaanId,
//   selectedAktiviti,
//   setSelectedAktiviti,
//   selectedKeteranganAktiviti,
//   setSelectedKeteranganAktiviti,
//   setSelectedProjekAktiviti,
//   aktivitiOptions,
//   keteranganAktivitiOptions,
//   projekAktivitiOptions,
//   dimensiOptions,
// }) {
function CreateAktiviti() {
  // __________________________________ Frontend __________________________________
  // Modal
  const [isModalCreateAktivitiSahabat, setIsModalCreateAktivitiSahabat] =
    useState(false);

  const openModalCreateAktivitiSahabat = () =>
    setIsModalCreateAktivitiSahabat(true);

  const closeModalCreateAktivitiSahabat = () => {
    setIsModalCreateAktivitiSahabat(false);
    reset(); // Reset previous form input
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
  // Create aktiviti sahabat
  // const { createAktivitiSahabat } = useAktivitiStore((state) => ({
  //   createAktivitiSahabat: state.createAktivitiSahabat,
  // }));

  // Pass input & close modal
  const handleCreateAktivitiSahabat = (addAktivitiSahabatData) => {
    // createAktivitiSahabat(
    //   sahabatId,
    //   pembiayaanId,
    //   addAktivitiSahabatData,
    //   closeModalCreateAktivitiSahabat
    // );
  };

  return (
    <>
      <Button variant="primary" onClick={openModalCreateAktivitiSahabat}>
        <FaPlus style={{ fontSize: "10px" }} /> Add
      </Button>{" "}
      
      <Modal
        show={isModalCreateAktivitiSahabat}
        onHide={closeModalCreateAktivitiSahabat}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Customer Activity</Modal.Title>
        </Modal.Header>

        <Form onReset={reset}>
          <Modal.Body>
            {/* Activity */}
            <Form.Group controlId="kegiatanId" className="mb-3">
              <Form.Label className="form-label">Activity</Form.Label>

              <Form.Control
                as="select"
                className="form-select"
                // {...register("kegiatanId", { required: true })}
                // onChange={(e) => {
                //   setSelectedAktiviti(e.target.value);
                // }}
                // aria-invalid={errors.kegiatanId ? "true" : "false"}
                defaultValue=""
              >
                <option value="" disabled>
                  --Select Activity--
                </option>

                {/* {aktivitiOptions.map((aktiviti) => (
                  <option key={aktiviti.id} value={aktiviti.id}>
                    {aktiviti.jenisKegiatan}
                  </option>
                ))} */}
              </Form.Control>

              {/* {errors.aktiviti?.type === "required" && ( */}
                <small className="text-danger">
                  Activity is required.
                </small>
              {/* )} */}
            </Form.Group>

            {/* Keterangan Kegiatan */}
            <Form.Group controlId="keteranganKegiatanId" className="mb-3">
              <Form.Label className="form-label">
                Activity Explanation
              </Form.Label>

              <Form.Control
                as="select"
                className="form-select"
                // {...register("keteranganKegiatanId", { required: true })}
                // onChange={(e) => {
                //   setSelectedKeteranganAktiviti(e.target.value);
                // }}
                // aria-invalid={errors.keteranganKegiatanId ? "true" : "false"}
                defaultValue=""
              >
                <option value="" disabled>
                  --Select Activity Explanation--
                </option>

                {/* {keteranganAktivitiOptions
                  .filter(
                    (item) =>
                      selectedAktiviti && item.kegiatanId === selectedAktiviti
                  )
                  .map((keteranganAktiviti) => (
                    <option
                      key={keteranganAktiviti.id}
                      value={keteranganAktiviti.id}
                    >
                      {keteranganAktiviti.jenisKeteranganKegiatan}
                    </option>
                  ))} */}
              </Form.Control>

              {/* {errors.keteranganKegiatanId?.type === "required" && ( */}
                <small className="text-danger">
                  Activity Explanation is required.
                </small>
              {/* )} */}
            </Form.Group>

            {/* Activity Project */}
            <Form.Group controlId="projekKegiatanId" className="mb-3">
              <Form.Label className="form-label">Activity Project</Form.Label>

              <Form.Control
                as="select"
                className="form-select"
                // {...register("projekKegiatanId", { required: true })}
                // onChange={(e) => {
                //   setSelectedProjekAktiviti(e.target.value);
                // }}
                // aria-invalid={errors.projekKegiatanId ? "true" : "false"}
                defaultValue=""
              >
                <option value="" disabled>
                  --Select Activity Project--
                </option>

                {/* {projekAktivitiOptions
                  .filter(
                    (item) =>
                      selectedKeteranganAktiviti &&
                      item.keteranganKegiatanId === selectedKeteranganAktiviti
                  )
                  .map((projekAktiviti) => (
                    <option key={projekAktiviti.id} value={projekAktiviti.id}>
                      {projekAktiviti.jenisProjekKegiatan}
                    </option>
                  ))} */}
              </Form.Control>

              {/* {errors.projekKegiatanId?.type === "required" && ( */}
                <small className="text-danger">
                  Activity Project is required.
                </small>
              {/* )} */}
            </Form.Group>

            {/* Dimension */}
            <Form.Group controlId="dimensiId" className="mb-3">
              <Form.Label className="form-label">Dimension</Form.Label>

              <Form.Control
                as="select"
                className="form-select"
                // {...register("dimensiId", { required: true })}
                // onChange={(e) => {}}
                // aria-invalid={errors.dimensiId ? "true" : "false"}
                defaultValue=""
              >
                <option value="" disabled>
                  --Select Dimension Code--
                </option>
                {/* {dimensiOptions
                  .sort((a, b) => a.kodDimensi.localeCompare(b.kodDimensi))
                  .map((kodDimensi) => (
                    <option key={kodDimensi.id} value={kodDimensi.id}>
                      {kodDimensi.kodDimensi} - {kodDimensi.keteranganDimensi}
                    </option>
                  ))} */}
              </Form.Control>

              {/* {errors.dimensiId?.type === "required" && ( */}
                <small className="text-danger">Dimension code is required.</small>
              {/* )} */}
            </Form.Group>

            {/* Funding Management */}
            <Form.Group controlId="pengurusDanaAktiviti" className="mb-3">
              <Form.Label className="form-label">Funding Management</Form.Label>

              <Form.Control
                as="select"
                className="form-select"
                // {...register("pengurusDanaAktiviti", { required: true })}
                // onChange={(e) => {}}
                // aria-invalid={errors.pengurusDanaAktiviti ? "true" : "false"}
                defaultValue=""
              >
                <option value="" disabled>
                  --Select Customer Funding Management--
                </option>
                {/* <option value="FM - FUND MANAGER">FM - FUND MANAGER</option>
                <option value="PS - PARTNERSHIP">PS - PARTNERSHIP</option>
                <option value="PL - PERNIAGAAN">PL - PIPELINER</option> */}

                {errors.pengurusDanaAktiviti?.type === "required" && (
                  <small className="text-danger">
                    Funding Management is required.
                  </small>
                )}
              </Form.Control>

              {/* {errors.pengurusDanaAktiviti?.type === "required" && ( */}
                <small className="text-danger">
                Funding Management is required.
                </small>
              {/* )} */}
            </Form.Group>

            {/* Keterangan Lain Aktiviti */}
            <Form.Group controlId="keteranganLainAktiviti" className="mb-3">
              <Form.Label className="form-label">
                Other Explanation
              </Form.Label>

              <Form.Control
                type="text"
                // {...register("keteranganLainAktiviti")}
                // aria-invalid={errors.keteranganLainAktiviti ? "true" : "false"}
                placeholder="Enter Other Explanation"
              />
            </Form.Group>

            {/* Loan */}
            <Form.Group controlId="jumlahPinjamanAktiviti" className="mb-3">
              <Form.Label className="form-label">
                Total Loan (RM)
              </Form.Label>

              <Form.Control
                type="number"
                min="0.00"
                max="10000.00"
                step="0.01"
                // {...register("jumlahPinjamanAktiviti", {
                //   required: "Jumlah pinjaman diperlukan.",
                //   valueAsNumber: true, // Ensure value is treated as a number
                //   validate: {
                //     isGreaterThanZero: (value) => {
                //       return (
                //         parseFloat(value) >= 0.01 ||
                //         "Jumlah pinjaman haruslah sekurang-kurangnya 0.01 atau lebih."
                //       );
                //     },
                //   },
                // })}
                // onBlur={(e) => {
                //   const currentValue = parseFloat(e.target.value);
                //   if (!isNaN(currentValue)) {
                //     setValue("jumlahPinjamanAktiviti", currentValue.toFixed(2)); // Format to two decimal places
                //   }
                // }}
                // aria-invalid={errors.jumlahPinjamanAktiviti ? "true" : "false"}
                placeholder="Enter Total Loan (RM)"
              />

              {/* {errors.jumlahPinjamanAktiviti?.type === "required" && ( */}
                <small className="text-danger">
                  Total Loan is required.
                </small>
              {/* )} */}

              {/* {errors.jumlahPinjamanAktiviti?.type === "isGreaterThanZero" && ( */}
                <small className="text-danger">
                  Total Loan should be at least 0.01 (RM) or more.
                </small>
              {/* )} */}
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button
              className="cancel-btn"
              onClick={closeModalCreateAktivitiSahabat}
            >
              Cancel
            </Button>

            <Button onClick={handleSubmit(handleCreateAktivitiSahabat)}>
              Save
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default CreateAktiviti;
