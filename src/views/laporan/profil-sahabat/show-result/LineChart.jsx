import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const LineChart = ({ selectedChart, data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Destroy existing chart instance
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Configure Chart.js
    const ctx = chartRef.current.getContext("2d");

    let chartData;

    if (selectedChart === "Graf Inflow") {
      chartData = createChartData(data, "Inflow", "rgba(60, 179, 113)");
    } else if (selectedChart === "Graf Outflow") {
      chartData = createChartData(data, "Outflow", "rgba(255, 0, 0)");
    } else if (selectedChart === "Graf Inflow Outflow") {
      chartData = {
        labels: data ? data.map((entry) => entry.minggu) : [],
        datasets: [
          createDataset(data, "Inflow", "rgba(60, 179, 113)"),
          createDataset(data, "Outflow", "rgba(255, 0, 0)"),
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

  const createChartData = (data, label, borderColor) => {
    return {
      labels: data ? data.map((entry) => entry.minggu) : [],
      datasets: [createDataset(data, label, borderColor)],
    };
  };

  const createDataset = (data, label, borderColor) => {
    return {
      label: label,
      data: data ? data.map((entry) => entry[label.toLowerCase()]) : [],
      borderColor: borderColor,
      borderWidth: 2,
      fill: false,
    };
  };

  return (
    <canvas ref={chartRef} className="laporan-profil-sahabat-bhgn-c-styling" />
  );
};

export default LineChart;
