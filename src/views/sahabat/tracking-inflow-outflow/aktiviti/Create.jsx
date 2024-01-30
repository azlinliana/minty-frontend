import React, { useState, useEffect, useCallback } from "react";
import { useForm, Controller } from "react-hook-form";
import SuccessAlert from "../../../components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../../components/sweet-alert/ErrorAlert";
import { Modal, Button, Form } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import axiosCustom from "../../../../axios";

function CreateAktiviti({ sahabatId, pembiayaanId, kegiatanOptions, keteranganKegiatanOptions, projekKegiatanOptions, kodDimensisData}) {
  // ----------FE----------
  // Modal
  const [isModalCreateAktiviti, setIsModalCreateAktiviti] = useState(false);
  const openModalCreateAktiviti = () => setIsModalCreateAktiviti(true);
  const closeModalCreateAktiviti = () => {
    setIsModalCreateAktiviti(false);
    reset(); // Reset previous form input
  };

  // Form validation
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  // ----------BE----------
  const [selectedKegiatan, setSelectedKegiatan] = useState("");
  const [selectedKeteranganKegiatan, setSelectedKeteranganKegiatan] = useState("");
  const [selectedProjekKegiatan, setSelectedProjekKegiatan] = useState("");

  // Create aktiviti
  const createAktiviti = async (aktivitiInput) => {
    console.log(aktivitiInput);
    try {
      const response = await axiosCustom.post(
        `/sahabat/${sahabatId}/pembiayaan/${pembiayaanId}/aktiviti`,
        aktivitiInput
      );

      if (response.status === 200) {
        SuccessAlert(response.data.message);
        closeModalCreateAktiviti();
      } else {
        console.log(response);
        ErrorAlert(response); // Error from the backend or unknow error from the server side
      }
    } catch (error) {
      ErrorAlert(error);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={openModalCreateAktiviti}>
        <FaPlus style={{ fontSize: "10px" }} /> Tambah
      </Button>{" "}
      
      <Modal
        show={isModalCreateAktiviti}
        onHide={closeModalCreateAktiviti}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Tambah Aktiviti Sahabat</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit} onReset={reset}>
            <Form.Group>
              <Form.Label htmlFor="kegiatanId">Aktiviti</Form.Label>
              <Controller
                id="kegiatanId"
                name="kegiatanId"
                control={control}
                defaultValue=""
                rules={{ required: "Aktivti diperlukan." }}
                render={({ field: { onChange } }) => (
                  <Form.Select
                    onChange={(e) => {
                      setSelectedKegiatan(e.target.value);
                      onChange(e);
                    }}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      --Pilih Aktiviti--
                    </option>
                    {kegiatanOptions.map((kegiatan) => (
                      <option key={kegiatan.value} value={kegiatan.value}>
                        {kegiatan.label}
                      </option>
                    ))}
                  </Form.Select>
                )}
              />
              {errors.kegiatanId && (
                <small className="text-danger">
                  {errors.kegiatanId.message}
                </small>
              )}
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="keteranganKegiatanId">
                Keterangan Aktiviti
              </Form.Label>
              <Controller
                id="keteranganKegiatanId"
                name="keteranganKegiatanId"
                control={control}
                defaultValue=""
                rules={{ required: "Keterangan aktiviti diperlukan." }}
                render={({ field: { onChange } }) => (
                  <Form.Select
                    onChange={(e) => {
                      setSelectedKeteranganKegiatan(e.target.value);
                      onChange(e);
                    }}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      --Pilih Keterangan Aktiviti--
                    </option>
                    {keteranganKegiatanOptions
                      .filter(
                        (item) =>
                          selectedKegiatan &&
                          item.kegiatanId === Number(selectedKegiatan)
                      )
                      .map((keteranganKegiatan) => (
                        <option
                          key={keteranganKegiatan.value}
                          value={keteranganKegiatan.value}
                        >
                          {keteranganKegiatan.label}
                        </option>
                      ))}
                  </Form.Select>
                )}
              />
              {errors.keteranganKegiatanId && (
                <small className="text-danger">
                  {errors.keteranganKegiatanId.message}
                </small>
              )}
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="projekKegiatanId">
                Projek Aktiviti
              </Form.Label>
              <Controller
                id="projekKegiatanId"
                name="projekKegiatanId"
                control={control}
                defaultValue=""
                rules={{ required: "Projek aktiviti diperlukan." }}
                render={({ field: { onChange } }) => (
                  <Form.Select
                    onChange={(e) => {
                      setSelectedProjekKegiatan(e.target.value);
                      onChange(e);
                    }}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      --Pilih Projek Aktiviti--
                    </option>
                    {projekKegiatanOptions
                      .filter(
                        (item) =>
                          selectedKeteranganKegiatan &&
                          item.keteranganKegiatanId ===
                            Number(selectedKeteranganKegiatan)
                      )
                      .map((projekKegiatan) => (
                        <option
                          key={projekKegiatan.value}
                          value={projekKegiatan.value}
                        >
                          {projekKegiatan.label}
                        </option>
                      ))}
                  </Form.Select>
                )}
              />
              {errors.projekKegiatanId && (
                <small className="text-danger">
                  {errors.projekKegiatanId.message}
                </small>
              )}
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="dimensiId">Dimensi</Form.Label>
              <Controller
                id="dimensiId"
                name="dimensiId"
                control={control}
                defaultValue=""
                rules={{ required: "Kod dimensi diperlukan." }}
                render={({ field: { onChange } }) => (
                  <Form.Select onChange={onChange} defaultValue="">
                    <option value="" disabled>
                      --Pilih Kod Dimensi--
                    </option>
                    {kodDimensisData.map((kodDimensi) => (
                      <option key={kodDimensi.id} value={kodDimensi.id}>
                        {kodDimensi.kodDimensi} - {kodDimensi.keteranganDimensi}
                      </option>
                    ))}
                  </Form.Select>
                )}
              />
              {errors.dimensiId && (
                <small className="text-danger">
                  {errors.dimensiId.message}
                </small>
              )}
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="pengurusDana">Pengurusan Dana</Form.Label>
              <Controller
                id="pegurusDanaAktiviti"
                name="pengurusDanaAktiviti"
                control={control}
                defaultValue=""
                rules={{ required: "Pengurus dana diperlukan." }}
                render={({ field: { onChange } }) => (
                  <Form.Select onChange={onChange} defaultValue="">
                    <option value="" disabled>
                      --Pilih Pengurus Dana Sahabat--
                    </option>
                    <option value="FM-FUND MANAGER">FM-FUND MANAGER</option>
                    <option value="PS-PARTNERSHIP">PS-PARTNERSHIP</option>
                    <option value="PL-PERNIAGAAN">PL-PIPELINER</option>
                  </Form.Select>
                )}
              />
              {errors.pengurusDanaAktiviti && (
                <small className="text-danger">
                  {errors.pengurusDanaAktiviti.message}
                </small>
              )}
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="keteranganLainAktiviti">
                Keterangan untuk Lain-Lain
              </Form.Label>
              <Controller
                id="keteranganLainAktiviti"
                name="keteranganLainAktiviti"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                  <Form.Control
                    type="text"
                    onChange={onChange}
                    value={value}
                    placeholder="Masukkan keterangan untuk lain-lain"
                    autoFocus
                  />
                )}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="jumlahPinjamanAktiviti">
                Jumlah Pinjaman (RM)
              </Form.Label>
              <Controller
                id="jumlahPinjamanAktiviti"
                name="jumlahPinjamanAktiviti"
                control={control}
                defaultValue=""
                rules={{ required: "Jumlah pinjaman diperlukan." }}
                render={({ field: { onChange, value } }) => (
                  <Form.Control
                    type="number"
                    min="0.00"
                    max="10000.00"
                    step="0.01"
                    onChange={onChange}
                    value={value}
                    placeholder="Masukkan jumlah pinjaman (RM)"
                    autoFocus
                  />
                )}
              />
              {errors.jumlahPinjamanAktiviti && (
                <small className="text-danger">
                  {errors.jumlahPinjamanAktiviti.message}
                </small>
              )}
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalCreateAktiviti}>
            Batal
          </Button>
          <Button variant="primary" onClick={handleSubmit(createAktiviti)}>
            Simpan
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateAktiviti;
