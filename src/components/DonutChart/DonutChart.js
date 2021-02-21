import React, { useEffect } from "react";
import * as d3 from "d3";

import "./DonutChart.css";

export default function DonutChart({ id, data, selected, onClick }) {
  useEffect(() => {
    d3.select(`#donut-chart-${id} svg`).remove();

    const svg = d3
      .select(`#donut-chart-${id}`)
      .append("svg")
      .attr("width", 100)
      .attr("height", 100)
      .style("position", "relative");

    const width = svg.attr("width");
    const height = svg.attr("height");

    const g = svg
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    const colors = d3.scaleOrdinal([
      "var(--color-gray)",
      selected ? "var(--color-highlight)" : "var(--color-primary-main)",
    ]);

    const values = [100 - data.score, data.score];

    const pie = d3.pie().value((d) => d);

    const arc = d3.arc().innerRadius(42).outerRadius(50);

    const arcs = g
      .selectAll(".arc")
      .data(pie(values))
      .enter()
      .append("g")
      .attr("class", "arc");

    arcs
      .append("path")
      .attr("d", arc)
      .attr("fill", (d) => colors(d.data));
  }, [selected, id, data]);

  return (
    <div
      id={`donut-chart-${id}`}
      className="donut-chart"
      onClick={onClick}
      style={
        selected
          ? {
              borderColor: "var(--color-highlight)",
              backgroundColor: "var(--color-highlight-bg",
            }
          : null
      }
    >
      <div className="gaugeData-content">
        <div
          className="name"
          style={selected ? { color: "var(--color-highlight)" } : null}
        >
          {data.name}
        </div>
        <svg />
        <div
          className="score"
          style={selected ? { color: "var(--color-highlight)" } : null}
        >
          {data.score}%
        </div>
        <div className="vsly">{data.vsly}</div>
        <div className="sample">Sample: {data.sample}</div>
      </div>
    </div>
  );
}
