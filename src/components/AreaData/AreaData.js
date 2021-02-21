import React from "react";

import AreaChart from "../AreaChart/AreaChart";
import "./AreaData.css";

export default function AreaData({ name, data }) {
  return (
    <div className="area-data">
      <div className="top">
        <h1>{name} Trend</h1>
        <div className="buttonGroup">
          <button>Day</button>
          <button>Week</button>
          <button>Month</button>
          <button>Quarter</button>
          <button>Half</button>
          <button>Year</button>
        </div>
      </div>
      <AreaChart data={data} />
    </div>
  );
}
