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

    const chartEntries = data.data; // Access the data array from the data object

    if (selectedChart === "Graf Inflow") {
      chartData = createChartData(chartEntries, "Inflow", "rgba(60, 179, 113)");
    } else if (selectedChart === "Graf Outflow") {
      chartData = createChartData(chartEntries, "Outflow", "rgba(255, 0, 0)");
    } else if (selectedChart === "Graf Inflow Outflow") {
      chartData = {
        labels: chartEntries ? chartEntries.map((entry) => entry.minggu) : [],
        datasets: [
          createDataset(chartEntries, "Inflow", "rgba(60, 179, 113)"),
          createDataset(chartEntries, "Outflow", "rgba(255, 0, 0)"),
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

  const createChartData = (chartEntries, label, borderColor) => {
    return {
      labels: chartEntries ? chartEntries.map((entry) => entry.minggu) : [],
      datasets: [createDataset(chartEntries, label, borderColor)],
    };
  };

  const createDataset = (chartEntries, label, borderColor) => {
    return {
      label: label,
      data: chartEntries ? chartEntries.map((entry) => entry[label.toLowerCase()]) : [],
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
