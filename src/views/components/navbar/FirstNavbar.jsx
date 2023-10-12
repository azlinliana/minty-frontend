import { useNavigate } from "react-router-dom";

import "./Navbar.css";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";

import aimLogo from "../../../assets/aim-logo.svg";

import { FaArrowRightFromBracket } from "react-icons/fa6";

function FirstNavbar() {
  // Link pages
  const navigate = useNavigate();
  const clickAIMLogo = () => navigate("/inflow-outflow");
  const handleLogout = () => navigate("/");

  return (
    <>
      <Navbar className="navbar-primary shadow">
        <Container>
          <Navbar.Brand onClick={clickAIMLogo}>
            {/* This is the left column of the navbar */}
            <Image
              src={aimLogo}
              height="40"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>

          <Navbar.Collapse className="justify-content-center">
            {/* This is the middle column of the navbar */}
            <div className="d-flex justify-content-center align-items-center">
              <h5 className="titleAim">PBMR</h5>
            </div>
          </Navbar.Collapse>

          {/* Logout button */}
          <div className="ml-auto">
            {/* This is the right column of the navbar */}
            <button className="log-keluar-btn" onClick={handleLogout}>
              <span className="icon-container">
                <FaArrowRightFromBracket
                  size={16}
                  style={{
                    marginRight: "5px",
                    marginBottom: "3px",
                  }}
                />
              </span>
              Log Keluar
            </button>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default FirstNavbar;
