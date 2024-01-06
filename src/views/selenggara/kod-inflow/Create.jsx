import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import SuccessAlert from "../../components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../components/sweet-alert/ErrorAlert";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaPlus } from "react-icons/fa";
import axios from "axios";

function CreateKodInflow() {
  // ----------FE----------
  // Modal
  const [isModalCreateKodInflow, setIsModalCreateKodInflow] = useState(false);
  const openModalCreateKodInflow = () => setIsModalCreateKodInflow(true);
  const closeModalCreateKodInflow = () => {
    setIsModalCreateKodInflow(false);
    reset(); // Reset previous form input
  };

  // Form validation
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
    watch,
  } = useForm();

  // ----------BE----------
  // Create kod inflow
  const createKodInflow = async (kodInflowInput) => {
    try {
      const response = await axiosCustom.post(
        `/selenggara/kod-inflow`,
        kodInflowInput
      );
      if (response.status === 200) {
        SuccessAlert(response.data.message);
        closeModalCreateKodInflow();
      } else {
        ErrorAlert(response); // Error from the backend or unknow error from the server side
      }
    } catch (error) {
      ErrorAlert(error);
    }
  };

  // Fetch kod inflow data
  const [kodInflowsData, setKodInflowsData] = useState([]);
  useEffect(() => {
    const fetchKodInflow = async () => {
      try {
        const response = await axiosCustom.get(
          `/selenggara/kod-inflow/display-kod-inflow`
        );
        if (Array.isArray(response.data) && response.data.length > 0) {
          setKodInflowsData(response.data); // Display all kod inflow data
        } else {
          ErrorAlert(response.data);
        }
      } catch (error) {
        ErrorAlert(error);
      }
    };

    fetchKodInflow();
  }, []);

  return (
    <div>
      <Button variant="primary" onClick={openModalCreateKodInflow}>
        <FaPlus style={{ fontSize: "10px" }} /> Tambah
      </Button>{" "}
      <Modal
        show={isModalCreateKodInflow}
        onHide={closeModalCreateKodInflow}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Tambah Kod Inflow</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit(createKodInflow)} onReset={reset}>
            {/* Existing kod inflow */}
            <Form.Group>
              <Form.Label htmlFor="kodInflowId">Kod Inflow</Form.Label>
              <Controller
                id="kodInflowId"
                name="kodInflowId"
                control={control}
                defaultValue=""
                rules={{ required: "Kod inflow diperlukan." }}
                render={({ field: { onChange } }) => (
                  <Form.Select onChange={onChange} defaultValue="">
                    <option value="" disabled>
                      --Pilih Kod Inflow--
                    </option>
                    {kodInflowsData.map((kodInflow) => (
                      <option key={kodInflow.id} value={kodInflow.id}>
                        {kodInflow.kodInflow} - {kodInflow.keteranganKodInflow}
                      </option>
                    ))}
                    <option value="KOD INFLOW BAHARU">KOD INFLOW BAHARU</option>
                  </Form.Select>
                )}
              />
              {errors.kodInflow && (
                <small className="text-danger">
                  {errors.kodInflow.message}
                </small>
              )}
            </Form.Group>

            {/* New kod inflow - If choosing KOD INFLOW BAHARU from kod inflow option*/}
            {watch("kodInflowId") === "KOD INFLOW BAHARU" && (
              <>
                <Form.Group>
                  <Form.Label htmlFor="kodInflowBaharu">
                    Kod Inflow Baharu
                  </Form.Label>
                  <Controller
                    type="text"
                    id="kodInflowBaharu"
                    name="kodInflowBaharu"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Kod inflow baharu diperlukan." }}
                    render={({ field: { onChange, value } }) => (
                      <Form.Control
                        type="text"
                        onChange={onChange}
                        value={value}
                        placeholder="Masukkan kod inflow baharu"
                        autoFocus
                      />
                    )}
                  />
                  {errors.kodInflowBaharu && (
                    <small className="text-danger">
                      {errors.kodInflowBaharu.message}
                    </small>
                  )}
                </Form.Group>

                <Form.Group>
                  <Form.Label htmlFor="keteranganKodInflowBaharu">
                    Keterangan Kod Inflow Baharu
                  </Form.Label>
                  <Controller
                    type="text"
                    id="keteranganKodInflowBaharu"
                    name="keteranganKodInflowBaharu"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "Keterangan kod inflow baharu diperlukan.",
                    }}
                    render={({ field: { onChange, value } }) => (
                      <Form.Control
                        type="text"
                        onChange={onChange}
                        value={value}
                        placeholder="Masukkan keterangan kod inflow baharu"
                        autoFocus
                      />
                    )}
                  />
                  {errors.keteranganKodInflowBaharu && (
                    <small className="text-danger">
                      {errors.keteranganKodInflowBaharu.message}
                    </small>
                  )}
                </Form.Group>
              </>
            )}

            <Form.Group>
              <Form.Label htmlFor="kodInflow">Kod Inflow Terperinci</Form.Label>
              <Controller
                type="text"
                id="kodInflowTerperinci"
                name="kodInflowTerperinci"
                control={control}
                defaultValue=""
                rules={{ required: "Kod inflow terperinci diperlukan." }}
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

            <Form.Group>
              <Form.Label htmlFor="kodInflow">
                Keterangan Kod Inflow Terperinci
              </Form.Label>
              <Controller
                type="text"
                id="keteranganKodInflowTerperinci"
                name="keteranganKodInflowTerperinci"
                control={control}
                defaultValue=""
                rules={{
                  required: "Keterangan kod inflow terperinci diperlukan.",
                }}
                render={({ field: { onChange, value } }) => (
                  <Form.Control
                    type="text"
                    onChange={onChange}
                    value={value}
                    placeholder="Masukkan keterangan kod inflow terperinci"
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
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalCreateKodInflow}>
            Batal
          </Button>
          <Button variant="primary" onClick={handleSubmit(createKodInflow)}>
            Simpan
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CreateKodInflow;
