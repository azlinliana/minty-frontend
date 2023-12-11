import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const LineChart = ({ selectedItem }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Fetch or generate data based on the selected item
    const chartData = getDataForItem(selectedItem);

    // Destroy existing Chart instance
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Configure Chart.js
    const ctx = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: chartData.labels,
        datasets: chartData.datasets,
      },
      options: {
        responsive: true,
        maintainAspectRatio: true, // Set to true if you want to maintain aspect ratio
      },
    });

    // Cleanup on component unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [selectedItem]);

  const getDataForItem = (item) => {
    // Replace this with your logic to fetch or generate chart data
    // You may fetch data from an API or use local data based on the selected item
    // The data structure should include labels and data for the chart

    let labels = ["Label 1", "Label 2", "Label 3"];
    let datasets = [];

    if (item === "chartInflow") {
      labels = ["Label 1", "Label 2", "Label 3"];
      datasets = [
        {
          label: `Line for Inflow`,
          data: [10, 20, 30],
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 2,
          fill: false,
        },
      ];
    } else if (item === "chartOutflow") {
      labels = ["Label 1", "Label 2", "Label 3"];
      datasets = [
        {
          label: `Line for Outflow`,
          data: [30, 25, 20],
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 2,
          fill: false,
        },
      ];
    } else if (item === "chartInflowOutflow") {
      labels = ["Label 1", "Label 2", "Label 3"];
      datasets = [
        {
          label: `Line 1 for Inflow-Outflow`,
          data: [10, 20, 30],
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 2,
          fill: false,
        },
        {
          label: `Line 2 for Inflow-Outflow`,
          data: [30, 25, 20],
          borderColor: "rgba(192, 75, 192, 1)", // Adjust color as needed
          borderWidth: 2,
          fill: false,
        },
      ];
    }

    return {
      labels,
      datasets,
    };
  };

  return <canvas ref={chartRef} className="chartCanvas" />;
};

export default LineChart;
