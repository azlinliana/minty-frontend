import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import SuccessAlert from "../../../components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../../components/sweet-alert/ErrorAlert";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axiosCustom from "../../../../axios";

function EditWithKodInflowTerperinci({ kodInflow, kodInflowTerperinci }) {
  // ----------FE----------
  // Modal
  const [isModalEditKodInflowWithKodInflowTerperinci, setIsModalEditKodInflowWithKodInflowTerperinci] = useState(false);

  const openModalEditKodInflowWithKodInflowTerperinci = () => setIsModalEditKodInflowWithKodInflowTerperinci(true);
  const closeModalEditKodInflowWithKodInflowTerperinci = () => {
    setIsModalEditKodInflowWithKodInflowTerperinci(false);
  };

  // Form validation
  const {
    handleSubmit: handleFormSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  // ----------BE----------
  const updateKodInflowWithKodInflowTerperinci = async (kodInflowWithKodInflowTerperinciInput) => {
    console.log(kodInflowWithKodInflowTerperinciInput);
    // Add your form submission logic here
  };

  return (
    <>
      <div>
        <Button className="editBtn" onClick={openModalEditKodInflowWithKodInflowTerperinci}>
          Kemas Kini
        </Button>{" "}

        <Modal
          show={isModalEditKodInflowWithKodInflowTerperinci}
          onHide={closeModalEditKodInflowWithKodInflowTerperinci}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Kemas Kini Kod Inflow</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onSubmit={handleFormSubmit(updateKodInflowWithKodInflowTerperinci)} onReset={reset}>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="kodInflow">Kod Inflow</Form.Label>
                
                <Controller
                  name="kodInflow"
                  id="kodInflow"
                  control={control}
                  defaultValue={kodInflow.kodInflow}
                  rules={{ required: "Kod inflow diperlukan." }}
                  render={({ field: { onChange, value } }) => (
                    <Form.Control
                      type="text"
                      onChange={onChange}
                      value={value}
                      placeholder="Masukkan kod inflow"
                      autoFocus
                    />
                  )}
                />
                {errors.kodInflow && (
                  <small className="text-danger">
                    {errors.kodInflow.message}
                  </small>
                )}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label htmlFor="kodInflow">
                  Keterangan Kod Inflow
                </Form.Label>

                <Controller
                  name="keteranganKodInflow"
                  id="keteranganKodInflow"
                  control={control}
                  defaultValue={kodInflow.keteranganKodInflow}
                  rules={{ required: "Keterangan kod inflow diperlukan." }}
                  render={({ field: { onChange, value } }) => (
                    <Form.Control
                      as="textarea"
                      onChange={onChange}
                      value={value}
                      rows={3}
                      placeholder="Masukkan keterangan kod inflow"
                      autoFocus
                    />
                  )}
                />
                {errors.keteranganKodInflow && (
                  <small className="text-danger">
                    {errors.keteranganKodInflow.message}
                  </small>
                )}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Status Kod Inflow</Form.Label>
                
                <Controller
                  name="statusKodInflow"
                  control={control}
                  defaultValue={kodInflow.statusKodInflow}
                  render={({ field: { onChange } }) => (
                    <Form.Select
                      onChange={onChange}
                      defaultValue={kodInflow.statusKodInflow}
                    >
                      <option value="" disabled>
                        --Pilih Status Kod Inflow--
                      </option>
                      <option value="AKTIF">AKTIF</option>
                      <option value="TIDAK AKTIF">TIDAK AKTIF</option>
                    </Form.Select>
                  )}
                />
              </Form.Group>
              
              <Form.Group className="mb-3">
                <Form.Label htmlFor="kodInflow">Kod Inflow Terperinci</Form.Label>
                <Controller
                  name="kodInflowTerperinci"
                  id="kodInflowTerperinci"
                  control={control}
                  defaultValue={kodInflowTerperinci.kodInflowTerperinci}
                  rules={{ required: "Kod inflow diperlukan." }}
                  render={({ field: { onChange, value } }) => (
                    <Form.Control
                      type="text"
                      onChange={onChange}
                      value={value}
                      placeholder="Masukkan kod inflow terperinci"
                      autoFocus
                    />
                  )}
                />
                {errors.kodInflowTerperinci && (
                  <small className="text-danger">
                    {errors.kodInflowTerperinci.message}
                  </small>
                )}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label htmlFor="keteranganKodInflowTerperinci">
                  Keterangan Kod Inflow Terperinci
                </Form.Label>
                <Controller
                  name="keteranganKodInflowTerperinci"
                  id="keteranganKodInflowTerperinci"
                  control={control}
                  defaultValue={kodInflowTerperinci.keteranganKodInflowTerperinci}
                  rules={{ required: "Keterangan kod inflow diperlukan." }}
                  render={({ field: { onChange, value } }) => (
                    <Form.Control
                      as="textarea"
                      onChange={onChange}
                      value={value}
                      rows={3}
                      placeholder="Masukkan keterangan kod inflow"
                      autoFocus
                    />
                  )}
                />
                {errors.keteranganKodInflowTerperinci && (
                  <small className="text-danger">
                    {errors.keteranganKodInflowTerperinci.message}
                  </small>
                )}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Status Kod Inflow Terperinci</Form.Label>
                
                <Controller
                  name="statusKodInflowTerperinci"
                  control={control}
                  defaultValue={kodInflowTerperinci.statusKodInflowTerperinci}
                  render={({ field: { onChange } }) => (
                    <Form.Select
                      onChange={onChange}
                      defaultValue={kodInflowTerperinci.statusKodInflowTerperinci}
                    >
                      <option value="" disabled>
                        --Pilih Status Kod Inflow Terperinci--
                      </option>
                      <option value="AKTIF">AKTIF</option>
                      <option value="TIDAK AKTIF">TIDAK AKTIF</option>
                    </Form.Select>
                  )}
                />
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={closeModalEditKodInflowWithKodInflowTerperinci}>
              Batal
            </Button>
            <Button variant="primary" onClick={handleFormSubmit(updateKodInflowWithKodInflowTerperinci)}>
              Simpan
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default EditWithKodInflowTerperinci;
