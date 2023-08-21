import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SignIn() {
  return (
    <div className="signInFormContainer">
      <div className="leftContainer">
        {/* SIGN IN FORM HEADER */}
        <img src="" alt="aim-logo" />
        <h1>Program Berikhtiar Mencari Rezeki</h1>
      </div>

      <div className="rightContainer">
        <div className="card">
          <h3>PBMR</h3>
          <h2>Selamat Datang</h2>
        </div>

        <Form>
          <Form.Group className="mb-3" controlId="signInStaffId">
            <Form.Label>Id Kakitangan</Form.Label>
            <Form.Control required type="text" placeholder="123456" />
            <Form.Control.Feedback type="invalid">
              Sila masukkan Id kakitangan anda
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="signInStaffPassword">
            <Form.Label>Kata Laluan</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
            />
            <Form.Control.Feedback type="invalid">
              Sila masukkan kata laluan anda
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit">
            Log Masuk
          </Button>
        </Form>

        {/* FORGOT PASSWORD CTA */}
        <div className="forgotPasswordCta">
          Terlupa kata laluan? Klik {<Link to="">di sini.</Link>}
        </div>
      </div>
    </div>
  );
}

export default SignIn;
