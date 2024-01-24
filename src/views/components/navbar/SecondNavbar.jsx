import { Navbar, Container } from "react-bootstrap";
import "../../../assets/styles/styles_layout.css";

function SecondNavbar() {
  return (
    <>
      <Navbar className="navbar-secondary">
        <Container>
          <Navbar.Brand className="text-white">Page Title</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default SecondNavbar;
