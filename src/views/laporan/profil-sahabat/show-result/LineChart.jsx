import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const LineChart = ({ selectedChart, data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Destroy existing Chart instance
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Configure Chart.js
    const ctx = chartRef.current.getContext("2d");

    let chartData;
    if (selectedChart === "Graf Inflow") {
      chartData = {
        labels: data ? data.map((entry) => entry.minggu) : [],
        datasets: [
          {
            label: "Inflow",
            data: data ? data.map((entry) => entry.inflow) : [],
            borderColor: "rgba(60, 179, 113)",
            borderWidth: 2,
            fill: false,
          },
        ],
      };
    } 
    else if (selectedChart === "Graf Outflow") {
      chartData = {
        labels: data ? data.map((entry) => entry.minggu) : [],
        datasets: [
          {
            label: "Outflow",
            data: data ? data.map((entry) => entry.outflow) : [],
            borderColor: "rgba(255, 0, 0)",
            borderWidth: 2,
            fill: false,
          },
        ],
      };
    } 
    else if (selectedChart === "Graf Inflow Outflow") {
      chartData = {
        labels: data ? data.map((entry) => entry.minggu) : [],
        datasets: [
          {
            label: "Inflow",
            data: data ? data.map((entry) => entry.inflow) : [],
            borderColor: "rgba(60, 179, 113)",
            borderWidth: 2,
            fill: false,
          },
          {
            label: "Outflow",
            data: data ? data.map((entry) => entry.outflow) : [],
            borderColor: "rgba(255, 0, 0)",
            borderWidth: 2,
            fill: false,
          },
        ],
      };
    }

    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: chartData,
      options: {
        responsive: true,
        maintainAspectRatio: true,
      },
    });

    // Cleanup on component unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [selectedChart, data]);

  return <canvas ref={chartRef} className="chartCanvas" />;
};

export default LineChart;
