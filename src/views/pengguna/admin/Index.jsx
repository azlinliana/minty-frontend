import CarianKakitangan from "../CarianKakitangan";
import CreateAdmin from "./Create";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

function IndexAdmin() {
  return (
    <>
      <div className="pageTitle">
        <h1>Admin</h1>
      </div>

      <CarianKakitangan />

          {/* <div className="hasilCarianContent">
            <div className="hasilCarianSahabat">
              <div className="hasilCarianSahabatTitle">
                <h2>Maklumat Kakitangan</h2>
              </div>

              <Container>
              <Row>
                <Col xs={12}>
                  <Form.Group>
                    <Form.Label>Nama Kakitangan</Form.Label>
                    <Form.Control
                      type="text"
                      value=""
                      disabled
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="sahabatInfoSpacing">
                <Col xs={6}>
                  <Form.Group>
                    <Form.Label>Id Kakitangan</Form.Label>
                    <Form.Control
                      type="text"
                      value=""
                      disabled
                    />
                  </Form.Group>
                </Col>

                <Col xs={6}>
                  <Form.Group>
                    <Form.Label>Jawatan Kakitangan</Form.Label>
                    <Form.Control
                      type="text"
                      value=""
                      disabled
                    />
                  </Form.Group>
                </Col>
              </Row>
              </Container>
            </div>
          </div> */}

            <div className="pageTitle">
        <h1>Senarai Admin</h1>
      </div>

      <div className="tableSection">
        {/* <div className="tambahBtnPlacement">
          <CreateAdmin />
        </div> */}

        <Table responsive>
          <thead>
            <tr>
              <th>Bil.</th>
              <th>Id Kakitangan</th>
              <th>Nama Kakitangan</th>
              <th>Jawatan Kakitangan</th>
              <th>Tindakan</th>
            </tr>
          </thead>

          <tbody>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default IndexAdmin;
