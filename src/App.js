import React, { useState, useEffect } from "react";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import GaugeData from "./components/GaugeData/GaugeData";
import AreaData from "./components/AreaData/AreaData";

import "./App.css";

export default function App() {
  const [data, setData] = useState(null);
  const [selectedItem, setSelectedItem] = useState(0);

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
      <div className="main">
        <div className="heading">
          <h1>Performance Management</h1>
        </div>

        <div className="banner">
          <header className="banner-content">
            <FontAwesomeIcon icon={faGlobe} />
            <h2>Diagnositic Tool</h2>
          </header>
        </div>

        {data && (
          <div className="data-content">
            <div className="gauge-data">
              <GaugeData
                data={data.gaugeData}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
              />
            </div>

            <div className="area-data">
              <AreaData
                name={data.gaugeData[selectedItem].name}
                data={data.areaData[data.gaugeData[selectedItem].name]}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
