import { useState } from "react";

import axios from "axios";

import SelenggaraModal from "../../components/modal/SelenggaraModal";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaPlus } from "react-icons/fa";

function CreateHubungan({ fetchHubungans }) {
  // Create hubungan
  const [hubunganInput, setHubunganInput] = useState({
    hubungan: "",
    keterangan: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHubunganInput({
      ...hubunganInput,
      [name]: value,
    });
  };

  const createHubungan = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/selenggara/hubungan",
        hubunganInput
      );

      if (response.status === 200) {
        console.log("Hubungan created successfully");
      }

      closeModalCreateHubungan();

      fetchHubungans();
    } catch (error) {
      console.error("Error in creating hubungan", error);
    }
  };

  // Modal
  const [isModalCreateHubunganOpen, setIsModalCreateHubunganOpen] =
    useState(false);

  const openModalCreateHubungan = () => {
    setIsModalCreateHubunganOpen(true);
  };

  const closeModalCreateHubungan = () => {
    setIsModalCreateHubunganOpen(false);
  };

  return (
    <>
      <Button variant="primary" onClick={openModalCreateHubungan}>
        <FaPlus style={{ fontSize: "10px" }} /> Tambah
      </Button>{" "}
      <SelenggaraModal
        modalTitle="Tambah Hubungan"
        modalContent={
          <Form>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="hubungan">Hubungan</Form.Label>
              <Form.Control
                type="text"
                id="hubungan"
                name="hubungan"
                value={hubunganInput.hubungan}
                onChange={handleInputChange}
                placeholder="Masukkan jenis hubungan"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="keterangan">Keterangan</Form.Label>
              <Form.Control
                as="textarea"
                id="keterangan"
                name="keterangan"
                value={hubunganInput.keterangan}
                onChange={handleInputChange}
                rows={3}
                placeholder="Masukkan keterangan hubungan"
              />
            </Form.Group>
          </Form>
        }
        modalFooter={
          <>
            <Button variant="secondary" onClick={closeModalCreateHubungan}>
              Batal
            </Button>

            <Button variant="primary" onClick={createHubungan}>
              Tambah
            </Button>
          </>
        }
        isModalOpen={isModalCreateHubunganOpen}
        closeModal={closeModalCreateHubungan}
      />
    </>
  );
}

export default CreateHubungan;
