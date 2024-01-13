import React from "react";
import { useLocation } from "react-router-dom";
import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import SidebarMenu from "../sidebar/SidebarMenu";

function SecondNavbar() {
  const location = useLocation();

  // Find the matching path in SidebarMenu
  let currentPath = SidebarMenu.find(item => location.pathname.includes(item.path));

  // If no match is found, try to find a match for sub-routes
  if (!currentPath) {
    SidebarMenu.forEach(item => {
      if (item.subRoutes) {
        const subRoute = item.subRoutes.find(sub => location.pathname.includes(sub.path));
        if (subRoute) {
          currentPath = subRoute;
        }
      }
    });
  }

  // Set the title based on the matching path or use a default title
  const pageTitle = currentPath ? currentPath.title : '';

  return (
    <>
      <Navbar className="navbar-secondary">
        <Container>
          <Navbar.Brand className="text-white"> {pageTitle}</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default SecondNavbar;
