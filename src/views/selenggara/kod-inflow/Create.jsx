import { useState } from "react";

import axios from "axios";

import SelenggaraModal from "../../components/modal/SelenggaraModal";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaPlus } from "react-icons/fa";

function CreateKodInflow({ fetchKodInflows }) {
  // Create kod inflow
  const [kodInflowInput, setKodInflowInput] = useState({
    kodInflow: "",
    keterangan: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setKodInflowInput({
      ...kodInflowInput,
      [name]: value,
    });
  };

  const createKodInflow = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/selenggara/kod-inflow",
        kodInflowInput
      );

      if (response.status === 200) {
        console.log("Kod inflow created successfully");
      }

      closeModalCreateKodInflow();
    } catch (error) {
      console.error("Error in creating kod inflow", error);
    }
  };

  // Modal
  const [isModalCreateKodInflow, setIsModalCreateKodInflow] = useState(false);

  const openModalCreateKodInflow = () => {
    setIsModalCreateKodInflow(true);
  };

  const closeModalCreateKodInflow = () => {
    setIsModalCreateKodInflow(false);
  };

  return (
    <>
      <Button variant="primary" onClick={openModalCreateKodInflow}>
        <FaPlus style={{ fontSize: "10px" }} /> Tambah
      </Button>{" "}
      <SelenggaraModal
        modalTitle="Tambah Kod Inflow"
        modalContent={
          <Form>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="kod-inflow">Kod Inflow</Form.Label>
              <Form.Control
                type="text"
                id="kod-inflow"
                name="kodInflow"
                value={kodInflowInput.kodInflow}
                onChange={handleInputChange}
                placeholder="Masukkan kod inflow"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="keterangan">Keterangan</Form.Label>
              <Form.Control
                as="textarea"
                id="keterangan"
                name="keterangan"
                value={kodInflowInput.keterangan}
                onChange={handleInputChange}
                rows={3}
                placeholder="Masukkan keterangan kod inflow"
              />
            </Form.Group>
          </Form>
        }
        modalFooter={
          <>
            <Button variant="secondary" onClick={closeModalCreateKodInflow}>
              Batal
            </Button>

            <Button variant="primary" onClick={createKodInflow}>
              Tambah
            </Button>
          </>
        }
        isModalOpen={isModalCreateKodInflow}
        closeModal={closeModalCreateKodInflow}
      />
    </>
  );
}

export default CreateKodInflow;
