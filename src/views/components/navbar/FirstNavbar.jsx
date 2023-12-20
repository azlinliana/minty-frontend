import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import aimLogo from "../../../assets/aim-logo.svg";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import ErrorAlert from "../sweet-alert/ErrorAlert";
import axios from "axios";

function FirstNavbar() {
  const navigate = useNavigate();

  // ----------FE----------
  // Link pages
  const clickAIMLogo = () => navigate("/inflow-outflow");

  // ----------BE----------
  // const signOut = async () => {
  //   try {
  //     const response = await axios.post(`http://127.0.0.1:8000/api/auth/logout`, null, {
  //       withCredentials: true,
  //     });

  //     if (response.status === 200) {
  //       navigate('/');
  //     } 
  //     else {
  //       console.log(response.data.error)
  //       ErrorAlert(response.data.error); // Error message from the backend
  //     }
  //   } 
  //   catch (error) {
  //     console.log(error);
  //     ErrorAlert(error); // Error related to API response or client side
  //   }
  // };

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
            <button className="log-keluar-btn">
              <span className="icon-container"><FaArrowRightFromBracket size={16} style={{ marginRight: "5px", marginBottom: "3px"}}/></span>
              <span className="mobile-visibility">Log Keluar</span>
            </button>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default FirstNavbar;
