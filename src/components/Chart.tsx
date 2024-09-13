import { ChartOptions } from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";
import { useCovidData } from "../hooks/useCovidData";

// Component for Chart
const CovidChart: React.FC = () => {
  const { historicalData, isLoadingHistorical, isErrorHistorical } =
    useCovidData();

  // To check if data is loading or an error occurred
  if (isLoadingHistorical) {
    return <div>Loading historical data...</div>;
  }

  if (isErrorHistorical || !historicalData) {
    return <div>Error loading historical data</div>;
  }

  if (
    !historicalData.cases ||
    !historicalData.deaths ||
    !historicalData.recovered
  ) {
    return <div>Incomplete data</div>;
  }

  // Chart data JSON
  const chartData = {
    labels: Object.keys(historicalData.cases).map((date) => new Date(date)),
    datasets: [
      {
        label: "Cases",
        data: Object.values(historicalData.cases),
        borderColor: "rgba(234, 239, 44, 1)",
        backgroundColor: "rgba(234, 239, 44, 0.2)",
        fill: true,
      },
      {
        label: "Deaths",
        data: Object.values(historicalData.deaths),
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
      },
      {
        label: "Recovered",
        data: Object.values(historicalData.recovered),
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        fill: true,
      },
    ],
  };

  // Implemented scales for chart
  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: "time",
        time: {
          unit: "month",
          tooltipFormat: "MMM dd, yyyy",
        },
        title: {
          display: true,
          text: "Date",
          padding: { top: 5 },
        },
      },
      y: {
        beginAtZero: false,
        min: 0,
        ticks: {
          // To Format Y-axis
          callback: function (value: number | string) {
            if (typeof value === "number") {
              if (value >= 1000000000) {
                return (value / 1000000000).toFixed(1) + "B"; // Converting to billions
              } else if (value >= 1000000) {
                return (value / 1000000).toFixed(1) + "M"; // Converting to millions
              } else if (value >= 1000) {
                return (value / 1000).toFixed(1) + "k"; // Converting to thousands
              }
              return value.toString(); // Less than 1k, showing normal number
            }
            return value;
          },
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Covid-19 Data",
      },
    },
    layout: {
      padding: {
        top: 5,
        bottom: 5,
        left: 5,
        right: 5,
      },
    },
  };

  return (
    <div className=" mt-10 md:mt-0 " style={{ width: "100%", height: "500px" }}>
      {" "}
      {/* Dynamic width/height */}
      <h2 className="text-center">Covid-19 Cases Data (Worldwide)</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default CovidChart;
