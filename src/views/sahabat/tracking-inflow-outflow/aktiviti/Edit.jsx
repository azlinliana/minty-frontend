import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import SuccessAlert from "../../../components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../../components/sweet-alert/ErrorAlert";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import "../../sahabat.css";

function EditAktiviti({ aktiviti }) {
  // ----------FE----------
  // Modal
  const [isModalEditAktiviti, setIsModalEditAktiviti] = useState(false);
  const openModalEditAktiviti = () => setIsModalEditAktiviti(true);
  const closeModalEditAktiviti = () => {
    setIsModalEditAktiviti(false);
  };

  // Form validation
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  // ----------BE----------

  return (
    <div>
      <Button className="editBtn" onClick={openModalEditAktiviti}>
        Kemas Kini
      </Button>{" "}
      <Modal
        show={isModalEditAktiviti}
        onHide={closeModalEditAktiviti}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Kemas Kini Aktiviti Sahabat</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit} onReset={reset}>
            <Form.Group>
              <Form.Label htmlFor="kegiatanAktiviti">Kegiatan</Form.Label>
              <Controller
                id="kegiatanAktiviti"
                name="kegiatanAktiviti"
                control={control}
                defaultValue=""
                rules={{ required: "Kegiatan sahabat diperlukan." }}
                render={({ field: { onChange } }) => (
                  <Form.Select onChange={onChange} defaultValue="">
                    <option value="" disabled>
                      --Pilih Kegiatan Sahabat--
                    </option>
                    <option value="PERTANIAN">PERTANIAN</option>
                    <option value="PEMBUATAN">PEMBUATAN</option>
                    <option value="PERNIAGAAN">PERNIAGAAN</option>
                    <option value="PERIKANAN">PERIKANAN</option>
                    <option value="PERKHIDMATAN">PERKHIDMATAN</option>
                    <option value="TERNAKAN">TERNAKAN</option>
                    <option value="PELBAGAI">PELBAGAI</option>
                    <option value="PELBAGAI">PROJEK MIX</option>
                  </Form.Select>
                )}
              />
              {errors.kegiatanAktiviti && (
                <small className="text-danger">
                  {errors.kegiatanAktiviti.message}
                </small>
              )}
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="kegiatanTerperinciAktiviti">
                Kegiatan Terperinci
              </Form.Label>
              <Controller
                id="kegiatanTerperinciAktiviti"
                name="kegiatanTerperinciAktiviti"
                control={control}
                defaultValue=""
                rules={{ required: "Kegiatan Terperinci Sahabat diperlukan." }}
                render={({ field: { onChange } }) => (
                  <Form.Select onChange={onChange} defaultValue="">
                    <option value="" disabled>
                      --Pilih Kegiatan Terperinci Sahabat--
                    </option>
                    <option value="TANAMAN KONTAN">TANAMAN KONTAN</option>
                    <option value="LAIN-LAIN">LAIN-LAIN</option>
                  </Form.Select>
                )}
              />
              {errors.kegiatanTerperinciAktiviti && (
                <small className="text-danger">
                  {errors.kegiatanTerperinciAktiviti.message}
                </small>
              )}
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="projekAktiviti">Projek</Form.Label>
              <Controller
                id="projekAktiviti"
                name="projekAktiviti"
                control={control}
                defaultValue=""
                rules={{ required: "Projek Sahabat diperlukan." }}
                render={({ field: { onChange } }) => (
                  <Form.Select onChange={onChange} defaultValue="">
                    <option value="" disabled>
                      --Pilih Projek Sahabat--
                    </option>
                    <option value="PEMPROSESAN TANAH ORGANIK">
                      PEMPROSESAN TANAH ORGANIK
                    </option>
                    <option value="LAIN-LAIN">LAIN-LAIN</option>
                  </Form.Select>
                )}
              />
              {errors.projekAktiviti && (
                <small className="text-danger">
                  {errors.projekAktiviti.message}
                </small>
              )}
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="pengurusanDanaAktiviti">
                Pegurusan Dana
              </Form.Label>
              <Controller
                id="pegurusanDanaAktiviti"
                name="pengurusanDanaAktiviti"
                control={control}
                defaultValue=""
                rules={{ required: "Pengurusan dana aktiviti diperlukan." }}
                render={({ field: { onChange } }) => (
                  <Form.Select onChange={onChange} defaultValue="">
                    <option value="" disabled>
                      --Pilih Pengurusan Dana Sahabat--
                    </option>
                    <option value="FM-FUND MANAGER">FM-FUND MANAGER</option>
                    <option value="PS-PARTNERSHIP">PS-PARTNERSHIP</option>
                    <option value="PERNIAGAAN">PL-PIPELINER</option>
                  </Form.Select>
                )}
              />
              {errors.pengurusanDanaAktiviti && (
                <small className="text-danger">
                  {errors.pengurusanDanaAktiviti.message}
                </small>
              )}
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="keteranganLainAktiviti">
                Keterangan Lain
              </Form.Label>
              <Controller
                type="text"
                id="keteranganLainAktiviti"
                name="keteranganLainAktiviti"
                control={control}
                defaultValue=""
                rules={{ required: "Keterangan lain aktiviti diperlukan." }}
                render={({ field: { onChange, value } }) => (
                  <Form.Control
                    type="text"
                    onChange={onChange}
                    value={value}
                    autoFocus
                  />
                )}
              />
              {errors.keteranganLainAktiviti && (
                <small className="text-danger">
                  {errors.keteranganLainAktiviti.message}
                </small>
              )}
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalEditAktiviti}>
            Batal
          </Button>
          <Button variant="primary" onClick={handleSubmit()}>
            Kemas Kini
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditAktiviti;
