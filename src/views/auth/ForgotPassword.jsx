import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ForgotPassword() {
  return (
    <div className="signInFormContainer">
      <div className="leftContainer">
        <div className="card">
          <h3>PBMR</h3>
          <h2>Mengeset Semula Kata Laluan</h2>
        </div>

        <Form>
          <Form.Group className="mb-3" controlId="signInStaffId">
            <Form.Label>Emel Kakitangan</Form.Label>
            <Form.Control required type="text" placeholder="123456" />
            <Form.Control.Feedback type="invalid">
              Sila masukkan emel kakitangan anda
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit">
            Tetapkan Kata Laluan Baru
          </Button>
        </Form>

        {/* FORGOT PASSWORD CTA */}
        <div className="logInCta">
          Klik {<Link to="/">di sini</Link>} untuk log masuk semula.
        </div>
      </div>

      <div className="rightContainer">
        {/* SIGN IN FORM HEADER */}
        <img src="" alt="aim-logo" />
        <h1>Program Berikhtiar Mencari Rezeki</h1>
      </div>
    </div>
  );
}

export default ForgotPassword;
