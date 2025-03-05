import { useNavigate } from "react-router-dom";
import { Navbar, Container, Image } from "react-bootstrap";
import ErrorAlert from "../sweet-alert/ErrorAlert";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import mintyLogo from "../../../assets/minty-logo.svg";
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
              height="55"
            />
          </Navbar.Brand>

          <div className="ml-auto">
            <button className="logout-btn" onClick={handleSignOut}>
              <span className="logout-icon-container">
                <FaArrowRightFromBracket className="logout-icon" size={18} />
              </span>
              <span className="logout-text-visibility" style={{ fontWeight: "bold" }}>Log out</span>
            </button>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default FirstNavbar;
