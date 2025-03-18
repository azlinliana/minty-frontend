import { useNavigate } from "react-router-dom";
import {
  Navbar,
  Container,
  Image,
  Dropdown,
  Badge,
  Row,
  Col,
} from "react-bootstrap";
import ErrorAlert from "../sweet-alert/ErrorAlert";
import mintyLogo from "../../../assets/minty-logo.svg";
import profileImg from "../../../assets/profile.png";
import {
  BsGear,
  BsMoon,
  BsQuestionCircle,
  BsArrowLeftCircle,
} from "react-icons/bs";
import "../../../assets/styles/styles_layout.css";
import axiosCustom from "../../../axios";

function FirstNavbar() {
  // __________________________________ Frontend __________________________________
  // Link pages
  const clickMintyLogo = () => navigate("/carian-sahabat");

  // ___________________________________ Backend __________________________________
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      const response = await axiosCustom.post(`/auth/logout`);

      if (response.status === 200) {
        localStorage.removeItem("token");
        navigate("/");
      } else {
        console.log(response.data.error);
        ErrorAlert(response.data.error); // Error message from the backend
      }
    } catch (error) {
      console.log(error);
      ErrorAlert(error); // Error related to API response or client side
    }
  };

  return (
    <>
      <Navbar className="navbar-primary">
        <Container fluid>
          <Navbar.Brand onClick={clickMintyLogo}>
            <Image
              src={mintyLogo}
              height="60"
              className="d-inline-block align-top org-logo"
            />
          </Navbar.Brand>
          <div className="ml-auto">
            <Dropdown className="navbar-primary-dropdown" align="end" id="dropdown-menu-align-end">
              <Dropdown.Toggle className="name-showcase">
                azlinliana_{" "}
                <Badge className="navbar-badge py-2 mx-2">user role</Badge>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Header className="dropdown-header">
                  <Row className="gx-5">
                    <Col xs={3}>
                      <Image src={profileImg} height="50" />
                    </Col>
                    <Col xs={7}>
                      <Row className="flex username">azlinliana_</Row>
                      <Row className="flex email">azlinliana@gmail.com</Row>
                    </Col>
                  </Row>
                </Dropdown.Header>
                <Dropdown.Item>
                  <Row>
                    <Col xs={2}>
                      <BsGear />
                    </Col>
                    <Col>Profile Settings</Col>
                  </Row>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Row>
                    <Col xs={2}>
                      <BsMoon />
                    </Col>
                    <Col>Dark Mode</Col>
                  </Row>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Row>
                    <Col xs={2}>
                      <BsQuestionCircle />
                    </Col>
                    <Col>Help Center</Col>
                  </Row>
                </Dropdown.Item>
                <Dropdown.Item onClick={handleSignOut}>
                  <Row>
                    <Col xs={2}>
                      <BsArrowLeftCircle />
                    </Col>
                    <Col>Sign Out</Col>
                  </Row>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default FirstNavbar;
