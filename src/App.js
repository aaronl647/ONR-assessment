import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";

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
    </div>
  );
}

export default App;
