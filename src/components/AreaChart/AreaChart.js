import React, { useEffect } from "react";
import * as d3 from "d3";

import "./AreaChart.css";

export default function AreaChart(props) {
  useEffect(() => {
    d3.select(".area-chart svg").remove();

    const data = [...props.data];
    for (var i = 0; i < data.length; i++) {
      data[i].x = i;
    }

    const margin = { top: 40, right: 15, bottom: 40, left: 50 };
    const width = 650 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const x = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([0, width]);

    const y = d3.scaleLinear().domain([0, 100]).range([height, 0]);

    const area = d3
      .area()
      .x((d) => x(d.x))
      .y0(height)
      .y1((d) => y(d.score))
      .curve(d3.curveCardinal);

    const svg = d3
      .select(".area-chart")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Creates Area Graph
    svg
      .append("path")
      .datum(data)
      .attr("class", "area-chart__area")
      .attr("d", area);

    // Creates line for the graph
    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#0071c5")
      .attr("stroke-width", 5)
      .attr(
        "d",
        d3
          .line()
          .x((d) => x(d.x))
          .y((d) => y(d.score))
          .curve(d3.curveCardinal)
      );

    // Creates the x-axis
    svg
      .append("g")
      .attr("class", "area-chart__axis-x")
      .attr("transform", "translate(0," + (height + 15) + ")")
      .call(
        d3
          .axisBottom(x)
          .ticks(4)
          .tickSizeOuter(0)
          .tickFormat((d, i) => data[i].date)
      );

    // Creates points on the line
    svg
      .selectAll(".area-chart__points")
      .data(data)
      .enter()
      .append("circle")
      .attr("fill", "#0071c5")
      .attr("stroke", "#fff")
      .attr("stroke-width", 4)
      .attr("cx", (d) => x(d.x))
      .attr("cy", (d) => y(d.score))
      .attr("r", 10);

    // Creates labels
    svg
      .selectAll(".area-chart__labels")
      .data(data)
      .enter()
      .append("text")
      .style("text-anchor", "middle")
      .attr("fill", "#5e5e5e")
      .attr("font-size", 16)
      .attr("transform", "translate(0, -25)")
      .attr("x", (d) => x(d.x))
      .attr("y", (d) => y(d.score))
      .text((d) => d.score + "%");
  }, [props.data]);

  return (
    <div className="area-chart">
      <svg />
    </div>
  );
}
