import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../Sahabat.css";

function SearchSahabat() {
  const [noKadPengenalan, setNoKadPengenalan] = useState("");
  const navigate = useNavigate();
  const [resultSahabat, setResultSahabat] = useState([]);

  useEffect(() => {
    if (resultSahabat.length > 0) {
      navigate("/search-result-sahabat", { state: { resultSahabat } });
    }
  }, [resultSahabat, navigate]);

  const handleSearch = () => {
    axios
      .get(`http://127.0.0.1:8000/api/sahabat/search/${noKadPengenalan}`)
      .then((response) => {
        const data = response.data;
        setResultSahabat(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <div className="pageTitle"><h1>Carian Sahabat</h1></div>

      <div className="container-fluid searchSection">
        <Form className="searchBar">
          <Row>
            <Form.Group className="col-md-10">
              <Form.Control
                type="text"
                placeholder="Carian No. Kad Pengenalan Sahabat"
                value={noKadPengenalan}
                onChange={(e) => setNoKadPengenalan(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="col-md-2">
              <div className="buttonContainer">
                <Button className="searchBarBtn" onClick={handleSearch}>Cari</Button>
              </div>
            </Form.Group>
          </Row>
        </Form>
      </div>
    </div>
  );
}

export default SearchSahabat;