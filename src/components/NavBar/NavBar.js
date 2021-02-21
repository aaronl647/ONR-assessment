import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import {
  faSlidersH,
  faFileDownload,
  faPrint,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="NavBar-container">
      <div className="title">Diagnostic Tool</div>
      <Navbar className="ml-auto">
        <Nav.Link className="top-icon">
          <FontAwesomeIcon icon={faSlidersH} />
        </Nav.Link>
        <Nav.Link className="top-icon">
          <FontAwesomeIcon icon={faFileDownload} />
        </Nav.Link>
        <Nav.Link className="top-icon">
          <FontAwesomeIcon icon={faPrint} />
        </Nav.Link>
        <Nav.Link className="top-icon">
          <FontAwesomeIcon icon={faQuestionCircle} />
        </Nav.Link>
      </Navbar>
    </div>
  );
}

export default NavBar;
