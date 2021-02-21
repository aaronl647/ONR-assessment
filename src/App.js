import React, { useState, useEffect } from "react";

import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";

import "./App.css";

function App() {
  const [data, setData] = useState(null);

  // Loads JSON data from file
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((jsonData) => {
        setData(jsonData);
      });
  }, []);

  return (
    <div className="App">
      <NavBar />
      <SideBar />
      <div className="main-content">
        <div className="heading">
          <h1>Performance Management</h1>
        </div>
        <div className="banner">
          <header className="banner-content">
            <FontAwesomeIcon icon={faGlobe} />
            <h2>Diagnositic Tool</h2>
          </header>
        </div>
      </div>
    </div>
  );
}

export default App;
