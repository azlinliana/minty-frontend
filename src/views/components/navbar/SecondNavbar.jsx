import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";
import SidebarMenu from "../sidebar/SidebarMenu";
import "../../../assets/styles/styles_layout.css";

function SecondNavbar() {
  const location = useLocation();

  // Find the matching path in SidebarMenu
  let currentPath = SidebarMenu.find((item) =>
    location.pathname.includes(item.path)
  );

  // If no match is found, try to find a match for sub-routes
  if (!currentPath) {
    SidebarMenu.forEach((item) => {
      if (item.subRoutes) {
        const subRoute = item.subRoutes.find((sub) =>
          location.pathname.includes(sub.path)
        );
        if (subRoute) {
          currentPath = subRoute;
        }
      }
    });
  }

  // Set the title based on the matching path or use a default title
  const pageTitle = currentPath ? currentPath.title : "";

  return (
    <>
      <div className="page-title-strip-container">
        <Container fluid>
          <div className="page-title-strip">{pageTitle}</div>
        </Container>
      </div>
    </>
  );
}

export default SecondNavbar;
