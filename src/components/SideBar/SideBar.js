import React from "react";
import {
  faThumbtack,
  faChartBar,
  faFileAlt,
  faShapes,
  faFileImport,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Nav } from "react-bootstrap";
import "./SideBar.css";

function SideBar() {
  return (
    <div className="left-navbar-container">
      <Nav.Link className="menu-icon">
        <FontAwesomeIcon icon={faThumbtack} />
      </Nav.Link>
      <Nav.Link className="menu-icon">
        <FontAwesomeIcon icon={faChartBar} />
      </Nav.Link>
      <Nav.Link className="menu-icon">
        <FontAwesomeIcon icon={faFileAlt} />
      </Nav.Link>
      <Nav.Link className="menu-icon">
        <FontAwesomeIcon icon={faShapes} />
      </Nav.Link>
      <Nav.Link className="menu-icon">
        <FontAwesomeIcon icon={faFileImport} />
      </Nav.Link>
    </div>
  );
}

export default SideBar;
