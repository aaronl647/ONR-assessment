import React from "react";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DonutChart from "../DonutChart/DonutChart";
import "./GaugeData.css";

export default function GaugeData({ data, selectedItem, setSelectedItem }) {
  return (
    <div className="gauge-data">
      <div className="filter-header">Filters</div>
      <div className="filter-legend">
        <div className="filter">
          <div
            className="tile"
            style={{ background: "var(--color-primary-main)" }}
          />
          All CQA Results
          <FontAwesomeIcon icon={faInfoCircle} />
        </div>
        <div className="filter">
          <div className="tile" style={{ background: "var(--color-gray)" }} />
          CQAs with Closed Loop
          <FontAwesomeIcon icon={faInfoCircle} />
        </div>
      </div>
      <div className="donut-chart">
        {data.map((item, index) => (
          <DonutChart
            id={index}
            data={item}
            selected={selectedItem === index}
            onClick={() => setSelectedItem(index)}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
