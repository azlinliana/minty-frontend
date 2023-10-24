import { useState } from "react";

import axios from "axios";

import SelenggaraModal from "../../components/modal/SelenggaraModal";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaPlus } from "react-icons/fa";

function CreateKodOutflow({ fetchKodOutflows }) {
  // Create kod outflow
  const [kodOutflowInput, setKodOutflowInput] = useState({
    kodOutflow: "",
    keterangan: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setKodOutflowInput({
      ...kodOutflowInput,
      [name]: value,
    });
  };

  const createKodOutflow = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/selenggara/kod-outflow",
        kodOutflowInput
      );

      if (response.status === 200) {
        console.log("Kod outflow created successfully");
      }

      closeModalCreateKodOutflow();
    } catch (error) {
      console.error("Error in creating kod outflow", error);
    }
  };

  // Modal
  const [isModalCreateKodOutflow, setIsModalCreateKodOutflow] = useState(false);

  const openModalCreateKodOutflow = () => {
    setIsModalCreateKodOutflow(true);
  };

  const closeModalCreateKodOutflow = () => {
    setIsModalCreateKodOutflow(false);
  };

  return (
    <>
      <Button variant="primary" onClick={openModalCreateKodOutflow}>
        <FaPlus style={{ fontSize: "10px" }} /> Tambah
      </Button>{" "}
      <SelenggaraModal
        modalTitle="Tambah Kod Outflow"
        modalContent={
          <Form>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="kod-outflow">Kod Outflow</Form.Label>
              <Form.Control
                type="text"
                id="kod-outflow"
                name="kodOutflow"
                value={kodOutflowInput.kodOutflow}
                onChange={handleInputChange}
                placeholder="Masukkan kod outflow"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="keterangan">Keterangan</Form.Label>
              <Form.Control
                as="textarea"
                id="keterangan"
                name="keterangan"
                value={kodOutflowInput.keterangan}
                onChange={handleInputChange}
                rows={3}
                placeholder="Masukkan keterangan kod outflow"
              />
            </Form.Group>
          </Form>
        }
        modalFooter={
          <>
            <Button variant="secondary" onClick={closeModalCreateKodOutflow}>
              Batal
            </Button>

            <Button variant="primary" onClick={createKodOutflow}>
              Tambah
            </Button>
          </>
        }
        isModalOpen={isModalCreateKodOutflow}
        closeModal={closeModalCreateKodOutflow}
      />
    </>
  );
}

export default CreateKodOutflow;
