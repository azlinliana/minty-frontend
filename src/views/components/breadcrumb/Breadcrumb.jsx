// DynamicBreadcrumb.js
import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { useLocation, Link } from "react-router-dom";
import BreadcrumbData from "./BreadcrumbData";

function DynamicBreadcrumb() {
  const location = useLocation();

  const generateBreadcrumbTrail = () => {
    const pathSegments = location.pathname
      .split("/")
      .filter((segment) => segment !== "");
    let trail = [];

    let currentPath = "";
    for (let i = 0; i < pathSegments.length; i++) {
      currentPath += `/${pathSegments[i]}`;
      console.log(`Checking ${currentPath}...`);

      const breadcrumbInfo = BreadcrumbData.find(
        (item) =>
          currentPath.startsWith(item.path) ||
          currentPath.startsWith(`/${item.path}`)
      );

      if (breadcrumbInfo) {
        console.log(`Match found for ${currentPath}. Adding breadcrumb.`);
        trail.push({
          path: breadcrumbInfo.path,
          element: breadcrumbInfo.element,
        });
      } else {
        console.log(
          `No match found for ${currentPath}. Adding generic breadcrumb.`
        );
        // Push a generic breadcrumb using the current path segment
        trail.push({
          path: currentPath,
          element: pathSegments[i],
        });
      }
    }

    console.log("Breadcrumb Trail:", trail);

    return trail;
  };

  const breadcrumbTrail = generateBreadcrumbTrail();

  return (
    <>
      <Breadcrumb>
        {breadcrumbTrail.map((breadcrumb, index) => (
          <Breadcrumb.Item key={index}>
            {breadcrumb.path === location.pathname ? (
              <strong>{breadcrumb.element}</strong>
            ) : (
              <Link to={breadcrumb.path}>{breadcrumb.element}</Link>
            )}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </>
  );
}

export default DynamicBreadcrumb;
